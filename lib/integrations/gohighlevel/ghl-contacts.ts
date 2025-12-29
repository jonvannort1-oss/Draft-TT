/**
 * GoHighLevel Contacts API Service
 */

import { GHLClient } from './ghl-client';

export interface GHLContact {
    id?: string;
    locationId: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    tags?: string[];
    customFields?: Record<string, string>;
    source?: string;
    dateAdded?: string;
    dateUpdated?: string;
}

export interface SearchContactsParams {
    locationId: string;
    query?: string;
    limit?: number;
    skip?: number;
}

export class GHLContactsService {
    constructor(private client: GHLClient) { }

    async searchContacts(params: SearchContactsParams) {
        const queryParams = new URLSearchParams({
            locationId: params.locationId,
            ...(params.query && { query: params.query }),
            ...(params.limit && { limit: params.limit.toString() }),
            ...(params.skip && { skip: params.skip.toString() }),
        });

        return this.client.get<{ contacts: GHLContact[]; total: number }>(
            `/contacts/?${queryParams}`
        );
    }

    async getContact(contactId: string) {
        return this.client.get<{ contact: GHLContact }>(
            `/contacts/${contactId}`
        );
    }

    async createContact(contact: GHLContact) {
        return this.client.post<{ contact: GHLContact }>(
            '/contacts/',
            contact
        );
    }

    async updateContact(contactId: string, updates: Partial<GHLContact>) {
        return this.client.put<{ contact: GHLContact }>(
            `/contacts/${contactId}`,
            updates
        );
    }

    async deleteContact(contactId: string) {
        return this.client.delete(`/contacts/${contactId}`);
    }

    async addTag(contactId: string, tags: string[]) {
        return this.client.post(`/contacts/${contactId}/tags`, { tags });
    }

    async removeTag(contactId: string, tags: string[]) {
        return this.client.delete(`/contacts/${contactId}/tags`);
    }
}
