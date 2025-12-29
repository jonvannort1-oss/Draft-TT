/**
 * Field Mapping Configuration
 * Maps data between GoHighLevel and Jane App
 */

import { GHLContact } from '../gohighlevel/ghl-contacts';
import { JanePatient } from '../janeapp/jane-patients';
import { GHLAppointment } from '../gohighlevel/ghl-calendars';
import { JaneAppointment } from '../janeapp/jane-appointments';

export class SyncMappings {
    /**
     * Map GoHighLevel Contact to Jane Patient
     */
    static ghlContactToJanePatient(contact: GHLContact): JanePatient {
        return {
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email,
            phone: contact.phone,
            address: {
                street: contact.address1,
                city: contact.city,
                province: contact.state,
                postalCode: contact.postalCode,
                country: contact.country || 'US',
            },
            notes: `Synced from GoHighLevel - Contact ID: ${contact.id}`,
        };
    }

    /**
     * Map Jane Patient to GoHighLevel Contact
     */
    static janePatientToGhlContact(patient: JanePatient, locationId: string): GHLContact {
        return {
            locationId,
            firstName: patient.firstName,
            lastName: patient.lastName,
            email: patient.email,
            phone: patient.phone,
            address1: patient.address?.street,
            city: patient.address?.city,
            state: patient.address?.province,
            postalCode: patient.address?.postalCode,
            country: patient.address?.country,
            source: 'Jane App Sync',
            tags: ['jane-patient'],
            customFields: {
                jane_patient_id: patient.id || '',
                jane_synced_at: new Date().toISOString(),
            },
        };
    }

    /**
     * Map GoHighLevel Appointment to Jane Appointment
     */
    static ghlAppointmentToJaneAppointment(
        appointment: GHLAppointment,
        janePatientId: string
    ): JaneAppointment {
        return {
            patientId: janePatientId,
            startTime: appointment.startTime,
            endTime: appointment.endTime,
            status: this.mapGhlStatusToJane(appointment.appointmentStatus),
            notes: `${appointment.title}\n${appointment.notes || ''}\nSynced from GoHighLevel - Appointment ID: ${appointment.id}`,
            location: appointment.address,
        };
    }

    /**
     * Map Jane Appointment to GoHighLevel Appointment
     */
    static janeAppointmentToGhlAppointment(
        appointment: JaneAppointment,
        ghlContactId: string,
        calendarId: string,
        locationId: string
    ): GHLAppointment {
        return {
            calendarId,
            locationId,
            contactId: ghlContactId,
            title: 'Jane App Appointment',
            startTime: appointment.startTime,
            endTime: appointment.endTime,
            appointmentStatus: this.mapJaneStatusToGhl(appointment.status),
            notes: `${appointment.notes || ''}\nSynced from Jane App - Appointment ID: ${appointment.id}`,
            address: appointment.location,
        };
    }

    private static mapGhlStatusToJane(
        status?: string
    ): JaneAppointment['status'] {
        switch (status) {
            case 'confirmed':
                return 'confirmed';
            case 'cancelled':
                return 'cancelled';
            case 'showed':
                return 'completed';
            case 'noshow':
                return 'no-show';
            default:
                return 'scheduled';
        }
    }

    private static mapJaneStatusToGhl(
        status?: string
    ): GHLAppointment['appointmentStatus'] {
        switch (status) {
            case 'confirmed':
                return 'confirmed';
            case 'cancelled':
                return 'cancelled';
            case 'completed':
                return 'showed';
            case 'no-show':
                return 'noshow';
            default:
                return 'confirmed';
        }
    }
}
