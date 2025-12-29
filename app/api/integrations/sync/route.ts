/**
 * Integration Sync API
 * Manual sync triggers and status endpoints
 */

import { NextRequest, NextResponse } from 'next/server';
import { SyncEngine } from '@/lib/integrations/sync/sync-engine';

// In-memory storage for demo (use database in production)
let syncEngine: SyncEngine | null = null;

export async function POST(request: NextRequest) {
    try {
        const { action } = await request.json();

        if (!syncEngine) {
            // Initialize with environment variables
            syncEngine = new SyncEngine({
                ghlApiKey: process.env.GHL_API_KEY || '',
                ghlLocationId: process.env.GHL_LOCATION_ID || '',
                janeAccessToken: process.env.JANE_ACCESS_TOKEN,
                janeClinicId: process.env.JANE_CLINIC_ID,
                syncDirection: 'bidirectional',
                autoSync: false,
            });
        }

        switch (action) {
            case 'sync-now':
                const results = await syncEngine.performFullSync();
                return NextResponse.json({
                    success: true,
                    results,
                    message: 'Sync completed',
                });

            case 'get-logs':
                const logs = syncEngine.getSyncLogs();
                return NextResponse.json({ success: true, logs });

            case 'clear-logs':
                syncEngine.clearLogs();
                return NextResponse.json({ success: true, message: 'Logs cleared' });

            default:
                return NextResponse.json(
                    { error: 'Invalid action' },
                    { status: 400 }
                );
        }
    } catch (error) {
        console.error('Sync API error:', error);
        return NextResponse.json(
            { error: 'Sync operation failed', details: String(error) },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        if (!syncEngine) {
            return NextResponse.json({
                success: true,
                status: 'not-initialized',
                logs: [],
            });
        }

        const logs = syncEngine.getSyncLogs(20);
        return NextResponse.json({
            success: true,
            status: 'active',
            logs,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get sync status' },
            { status: 500 }
        );
    }
}
