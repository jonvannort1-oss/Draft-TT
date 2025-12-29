/**
 * Integration Connection Status API
 * Check connection status for GoHighLevel and Jane App
 */

import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const status = {
            gohighlevel: {
                connected: !!process.env.GHL_API_KEY,
                locationId: process.env.GHL_LOCATION_ID || null,
                hasCredentials: !!(
                    process.env.GHL_API_KEY && process.env.GHL_LOCATION_ID
                ),
            },
            janeapp: {
                connected: !!process.env.JANE_ACCESS_TOKEN,
                clinicId: process.env.JANE_CLINIC_ID || null,
                hasCredentials: !!process.env.JANE_ACCESS_TOKEN,
                mockMode: true, // Jane is in mock mode until real API access
            },
            syncEnabled: !!(
                process.env.GHL_API_KEY &&
                process.env.GHL_LOCATION_ID
            ),
        };

        return NextResponse.json({ success: true, status });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get connection status' },
            { status: 500 }
        );
    }
}
