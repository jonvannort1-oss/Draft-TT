/**
 * GoHighLevel Calendars & Appointments API Service
 */

import { GHLClient } from './ghl-client';

export interface GHLCalendar {
    id: string;
    locationId: string;
    name: string;
    description?: string;
    slug?: string;
    widgetSlug?: string;
    widgetType?: string;
    eventColor?: string;
    availabilities?: unknown[];
}

export interface GHLAppointment {
    id?: string;
    calendarId: string;
    locationId: string;
    contactId: string;
    title: string;
    startTime: string; // ISO 8601 format
    endTime: string;
    appointmentStatus?: 'confirmed' | 'cancelled' | 'showed' | 'noshow' | 'invalid';
    assignedUserId?: string;
    notes?: string;
    address?: string;
}

export interface GetFreeSlotsParams {
    calendarId: string;
    startDate: string; // YYYY-MM-DD
    endDate: string;
    timezone?: string;
    userId?: string;
}

export class GHLCalendarsService {
    constructor(private client: GHLClient) { }

    async getCalendars(locationId: string) {
        return this.client.get<{ calendars: GHLCalendar[] }>(
            `/calendars/?locationId=${locationId}`
        );
    }

    async getCalendar(calendarId: string) {
        return this.client.get<{ calendar: GHLCalendar }>(
            `/calendars/${calendarId}`
        );
    }

    async getFreeSlots(params: GetFreeSlotsParams) {
        const queryParams = new URLSearchParams({
            startDate: params.startDate,
            endDate: params.endDate,
            ...(params.timezone && { timezone: params.timezone }),
            ...(params.userId && { userId: params.userId }),
        });

        return this.client.get<{ slots: Array<{ startTime: string; endTime: string }> }>(
            `/calendars/${params.calendarId}/free-slots?${queryParams}`
        );
    }

    async createAppointment(appointment: GHLAppointment) {
        return this.client.post<{ appointment: GHLAppointment }>(
            '/calendars/events/appointments',
            appointment
        );
    }

    async updateAppointment(appointmentId: string, updates: Partial<GHLAppointment>) {
        return this.client.put<{ appointment: GHLAppointment }>(
            `/calendars/events/appointments/${appointmentId}`,
            updates
        );
    }

    async getAppointment(appointmentId: string) {
        return this.client.get<{ appointment: GHLAppointment }>(
            `/calendars/events/appointments/${appointmentId}`
        );
    }

    async getAppointmentsForContact(contactId: string) {
        return this.client.get<{ events: GHLAppointment[] }>(
            `/contacts/${contactId}/appointments`
        );
    }

    async deleteAppointment(appointmentId: string) {
        return this.client.delete(`/calendars/events/${appointmentId}`);
    }
}
