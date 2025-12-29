/**
 * Jane App Patients API Service
 */

import { JaneClient } from './jane-client';

export interface JanePatient {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    address?: {
        street?: string;
        city?: string;
        province?: string;
        postalCode?: string;
        country?: string;
    };
    emergencyContact?: {
        name?: string;
        phone?: string;
        relationship?: string;
    };
    notes?: string;
    createdAt?: string;
    updatedAt?: string;
}

export class JanePatientsService {
    constructor(private client: JaneClient) { }

    async getPatients(params?: { limit?: number; offset?: number }) {
        const queryParams = new URLSearchParams({
            ...(params?.limit && { limit: params.limit.toString() }),
            ...(params?.offset && { offset: params.offset.toString() }),
        });

        return this.client.get<{ patients: JanePatient[]; total: number }>(
            `/patients?${queryParams}`
        );
    }

    async getPatient(patientId: string) {
        return this.client.get<{ patient: JanePatient }>(
            `/patients/${patientId}`
        );
    }

    async createPatient(patient: JanePatient) {
        return this.client.post<{ patient: JanePatient }>(
            '/patients',
            patient
        );
    }

    async updatePatient(patientId: string, updates: Partial<JanePatient>) {
        return this.client.put<{ patient: JanePatient }>(
            `/patients/${patientId}`,
            updates
        );
    }

    async searchPatients(query: string) {
        return this.client.get<{ patients: JanePatient[] }>(
            `/patients/search?q=${encodeURIComponent(query)}`
        );
    }
}
