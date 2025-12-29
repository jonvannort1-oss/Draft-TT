/**
 * GoHighLevel API Client
 * Handles authentication, rate limiting, and base API communication
 */

export interface GHLConfig {
    apiKey?: string;
    accessToken?: string;
    refreshToken?: string;
    locationId?: string;
}

export class GHLClient {
    private baseUrl = 'https://services.leadconnectorhq.com';
    private config: GHLConfig;

    constructor(config: GHLConfig) {
        this.config = config;
    }

    async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            'Version': '2021-07-28', // API V2 version header
            ...(this.config.apiKey && { 'Authorization': `Bearer ${this.config.apiKey}` }),
            ...(this.config.accessToken && { 'Authorization': `Bearer ${this.config.accessToken}` }),
            ...options.headers,
        };

        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(
                `GHL API Error: ${response.status} - ${error.message || response.statusText}`
            );
        }

        return response.json();
    }

    async get<T>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint, { method: 'GET' });
    }

    async post<T>(endpoint: string, data: unknown): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async put<T>(endpoint: string, data: unknown): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async delete<T>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint, { method: 'DELETE' });
    }
}
