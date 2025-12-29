/**
 * Sync Engine
 * Orchestrates bidirectional synchronization between GoHighLevel and Jane App
 */

import { GHLClient } from '../gohighlevel/ghl-client';
import { GHLContactsService } from '../gohighlevel/ghl-contacts';
import { GHLCalendarsService } from '../gohighlevel/ghl-calendars';
import { JaneClient } from '../janeapp/jane-client';
import { JanePatientsService } from '../janeapp/jane-patients';
import { JaneAppointmentsService } from '../janeapp/jane-appointments';
import { SyncMappings } from './sync-mappings';

export interface SyncConfig {
    ghlApiKey: string;
    ghlLocationId: string;
    janeAccessToken?: string;
    janeClinicId?: string;
    syncDirection: 'ghl-to-jane' | 'jane-to-ghl' | 'bidirectional';
    autoSync: boolean;
    syncIntervalMinutes?: number;
}

export interface SyncLog {
    id: string;
    timestamp: string;
    type: 'contact' | 'appointment';
    direction: 'ghl-to-jane' | 'jane-to-ghl';
    status: 'success' | 'error' | 'skipped';
    message: string;
    details?: unknown;
}

export class SyncEngine {
    private ghlClient: GHLClient;
    private ghlContacts: GHLContactsService;
    private ghlCalendars: GHLCalendarsService;
    private janeClient: JaneClient;
    private janePatients: JanePatientsService;
    private janeAppointments: JaneAppointmentsService;
    private config: SyncConfig;
    private syncLogs: SyncLog[] = [];

    constructor(config: SyncConfig) {
        this.config = config;

        // Initialize GoHighLevel clients
        this.ghlClient = new GHLClient({
            apiKey: config.ghlApiKey,
            locationId: config.ghlLocationId,
        });
        this.ghlContacts = new GHLContactsService(this.ghlClient);
        this.ghlCalendars = new GHLCalendarsService(this.ghlClient);

        // Initialize Jane clients
        this.janeClient = new JaneClient({
            accessToken: config.janeAccessToken,
            clinicId: config.janeClinicId,
        });
        this.janePatients = new JanePatientsService(this.janeClient);
        this.janeAppointments = new JaneAppointmentsService(this.janeClient);
    }

    /**
     * Sync contacts from GoHighLevel to Jane App
     */
    async syncContactsToJane(): Promise<{ success: boolean; synced?: number; error?: unknown }> {
        try {
            const { contacts } = await this.ghlContacts.searchContacts({
                locationId: this.config.ghlLocationId,
                limit: 100,
            });

            for (const contact of contacts) {
                try {
                    const janePatient = SyncMappings.ghlContactToJanePatient(contact);
                    await this.janePatients.createPatient(janePatient);

                    this.addLog({
                        type: 'contact',
                        direction: 'ghl-to-jane',
                        status: 'success',
                        message: `Synced contact: ${contact.firstName} ${contact.lastName}`,
                        details: { contactId: contact.id },
                    });
                } catch (error) {
                    this.addLog({
                        type: 'contact',
                        direction: 'ghl-to-jane',
                        status: 'error',
                        message: `Failed to sync contact: ${error}`,
                        details: { contactId: contact.id, error },
                    });
                }
            }

            return { success: true, synced: contacts.length };
        } catch (error) {
            console.error('Sync error:', error);
            return { success: false, error };
        }
    }

    /**
     * Sync patients from Jane App to GoHighLevel
     */
    async syncPatientsToGHL(): Promise<{ success: boolean; synced?: number; error?: unknown }> {
        try {
            const { patients } = await this.janePatients.getPatients({ limit: 100 });

            for (const patient of patients) {
                try {
                    const ghlContact = SyncMappings.janePatientToGhlContact(
                        patient,
                        this.config.ghlLocationId
                    );
                    await this.ghlContacts.createContact(ghlContact);

                    this.addLog({
                        type: 'contact',
                        direction: 'jane-to-ghl',
                        status: 'success',
                        message: `Synced patient: ${patient.firstName} ${patient.lastName}`,
                        details: { patientId: patient.id },
                    });
                } catch (error) {
                    this.addLog({
                        type: 'contact',
                        direction: 'jane-to-ghl',
                        status: 'error',
                        message: `Failed to sync patient: ${error}`,
                        details: { patientId: patient.id, error },
                    });
                }
            }

            return { success: true, synced: patients.length };
        } catch (error) {
            console.error('Sync error:', error);
            return { success: false, error };
        }
    }

    /**
     * Full sync based on configuration
     */
    async performFullSync() {
        const results: {
            contactsToJane: { success: boolean; synced?: number; error?: unknown };
            patientsToGHL: { success: boolean; synced?: number; error?: unknown };
        } = {
            contactsToJane: { success: false },
            patientsToGHL: { success: false },
        };

        if (
            this.config.syncDirection === 'ghl-to-jane' ||
            this.config.syncDirection === 'bidirectional'
        ) {
            results.contactsToJane = await this.syncContactsToJane();
        }

        if (
            this.config.syncDirection === 'jane-to-ghl' ||
            this.config.syncDirection === 'bidirectional'
        ) {
            results.patientsToGHL = await this.syncPatientsToGHL();
        }

        return results;
    }

    /**
     * Get sync logs
     */
    getSyncLogs(limit = 50): SyncLog[] {
        return this.syncLogs.slice(-limit).reverse();
    }

    /**
     * Clear sync logs
     */
    clearLogs() {
        this.syncLogs = [];
    }

    private addLog(log: Omit<SyncLog, 'id' | 'timestamp'>) {
        this.syncLogs.push({
            ...log,
            id: Math.random().toString(36).substring(7),
            timestamp: new Date().toISOString(),
        });

        // Keep only last 1000 logs
        if (this.syncLogs.length > 1000) {
            this.syncLogs = this.syncLogs.slice(-1000);
        }
    }
}
