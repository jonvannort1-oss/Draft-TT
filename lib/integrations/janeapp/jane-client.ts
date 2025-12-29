/**
 * Jane App API Client (Mock Implementation)
 * 
 * This is a mock implementation since Jane App requires developer partnership.
 * Replace with actual Jane Developer Platform (JDP) API when credentials are available.
 */

export interface JaneConfig {
    accessToken?: string;
    refreshToken?: string;
    clinicId?: string;
}

export class JaneClient {
    private baseUrl = 'https://api.jane.app/v1'; // Mock URL
    private config: JaneConfig;
    private mockMode = true; // Set to false when using real API

    constructor(config: JaneConfig) {
        this.config = config;
    }

    async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        // Mock mode - return simulated data
        if (this.mockMode) {
            return this.mockRequest<T>(endpoint, options);
        }

        // Real API implementation
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...(this.config.accessToken && {
                'Authorization': `Bearer ${this.config.accessToken}`
            }),
            ...options.headers,
        };

        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(
                `Jane API Error: ${response.status} - ${error.message || response.statusText}`
            );
        }

        return response.json();
    }

    private async mockRequest<T>(endpoint: string, options: RequestInit): Promise<T> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));

        // Return mock data based on endpoint
        console.log(`[MOCK] Jane API: ${options.method || 'GET'} ${endpoint}`);

        return {
            success: true,
            message: 'Mock response - Jane API integration pending',
        } as T;
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

    setMockMode(enabled: boolean) {
        this.mockMode = enabled;
    }
}
