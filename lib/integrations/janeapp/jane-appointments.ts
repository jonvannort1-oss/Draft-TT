/**
 * Jane App Appointments API Service
 */

import { JaneClient } from './jane-client';

export interface JaneAppointment {
    id?: string;
    patientId: string;
    practitionerId?: string;
    treatmentId?: string;
    startTime: string; // ISO 8601
    endTime: string;
    status?: 'scheduled' | 'confirmed' | 'cancelled' | 'completed' | 'no-show';
    notes?: string;
    location?: string;
    createdAt?: string;
    updatedAt?: string;
}

export class JaneAppointmentsService {
    constructor(private client: JaneClient) { }

    async getAppointments(params?: {
        startDate?: string;
        endDate?: string;
        patientId?: string;
        status?: string;
    }) {
        const queryParams = new URLSearchParams({
            ...(params?.startDate && { startDate: params.startDate }),
            ...(params?.endDate && { endDate: params.endDate }),
            ...(params?.patientId && { patientId: params.patientId }),
            ...(params?.status && { status: params.status }),
        });

        return this.client.get<{ appointments: JaneAppointment[]; total: number }>(
            `/appointments?${queryParams}`
        );
    }

    async getAppointment(appointmentId: string) {
        return this.client.get<{ appointment: JaneAppointment }>(
            `/appointments/${appointmentId}`
        );
    }

    async createAppointment(appointment: JaneAppointment) {
        return this.client.post<{ appointment: JaneAppointment }>(
            '/appointments',
            appointment
        );
    }

    async updateAppointment(appointmentId: string, updates: Partial<JaneAppointment>) {
        return this.client.put<{ appointment: JaneAppointment }>(
            `/appointments/${appointmentId}`,
            updates
        );
    }

    async cancelAppointment(appointmentId: string, reason?: string) {
        return this.client.put<{ appointment: JaneAppointment }>(
            `/appointments/${appointmentId}`,
            { status: 'cancelled', notes: reason }
        );
    }

    async getAppointmentsForPatient(patientId: string) {
        return this.client.get<{ appointments: JaneAppointment[] }>(
            `/patients/${patientId}/appointments`
        );
    }
}
