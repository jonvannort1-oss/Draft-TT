/**
 * Integrations Dashboard Page
 * Main admin interface for managing GoHighLevel and Jane App integration
 */

'use client';

import { useState, useEffect } from 'react';
import { IntegrationCard } from '@/components/integrations/IntegrationCard';
import { SyncActivityLog } from '@/components/integrations/SyncActivityLog';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ConnectionStatus {
    gohighlevel: {
        connected: boolean;
        locationId: string | null;
        hasCredentials: boolean;
    };
    janeapp: {
        connected: boolean;
        clinicId: string | null;
        hasCredentials: boolean;
        mockMode: boolean;
    };
    syncEnabled: boolean;
}

export default function IntegrationsPage() {
    const [status, setStatus] = useState<ConnectionStatus | null>(null);
    const [syncing, setSyncing] = useState(false);
    const [syncMessage, setSyncMessage] = useState('');

    useEffect(() => {
        fetchStatus();
    }, []);

    const fetchStatus = async () => {
        try {
            const response = await fetch('/api/integrations/status');
            const data = await response.json();
            if (data.success) {
                setStatus(data.status);
            }
        } catch (error) {
            console.error('Failed to fetch status:', error);
        }
    };

    const handleSync = async () => {
        setSyncing(true);
        setSyncMessage('');

        try {
            const response = await fetch('/api/integrations/sync', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'sync-now' }),
            });

            const data = await response.json();

            if (data.success) {
                setSyncMessage('✓ Sync completed successfully!');
            } else {
                setSyncMessage('✗ Sync failed: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            setSyncMessage('✗ Sync failed: ' + String(error));
        } finally {
            setSyncing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Integration Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Manage your GoHighLevel and Jane App integration
                    </p>
                </div>

                {/* Connection Status Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <IntegrationCard
                        name="GoHighLevel"
                        description="CRM and marketing automation platform. Sync contacts, appointments, and trigger workflows."
                        connected={status?.gohighlevel.connected || false}
                        icon={
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                        onConnect={() => alert('Add your GHL API credentials to .env.local')}
                    />

                    <IntegrationCard
                        name="Jane App"
                        description="Practice management software for health clinics. Sync patient records and appointments."
                        connected={status?.janeapp.connected || false}
                        mockMode={status?.janeapp.mockMode}
                        icon={
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        }
                        onConnect={() => alert('Jane App requires developer partnership. Currently in mock mode.')}
                    />
                </div>

                {/* Sync Controls */}
                <Card className="p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-1">Sync Controls</h3>
                            <p className="text-sm text-gray-600">
                                Manually trigger synchronization between platforms
                            </p>
                        </div>

                        <Button
                            onClick={handleSync}
                            disabled={syncing || !status?.syncEnabled}
                            className="min-w-32"
                        >
                            {syncing ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Syncing...
                                </span>
                            ) : (
                                'Sync Now'
                            )}
                        </Button>
                    </div>

                    {syncMessage && (
                        <div className={`p-3 rounded-lg text-sm ${syncMessage.startsWith('✓')
                                ? 'bg-green-50 text-green-700'
                                : 'bg-red-50 text-red-700'
                            }`}>
                            {syncMessage}
                        </div>
                    )}

                    {!status?.syncEnabled && (
                        <div className="mt-4 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                            <p className="text-sm text-yellow-800">
                                <strong>⚠️ Setup Required:</strong> Add your GoHighLevel API credentials to <code className="px-1 py-0.5 bg-yellow-100 rounded">.env.local</code> to enable syncing.
                            </p>
                        </div>
                    )}
                </Card>

                {/* Sync Activity Log */}
                <SyncActivityLog />

                {/* Setup Instructions */}
                <Card className="p-6 mt-8 bg-gradient-to-br from-blue-50 to-purple-50">
                    <h3 className="text-lg font-semibold mb-3">🚀 Quick Setup Guide</h3>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h4 className="font-medium mb-1">1. GoHighLevel Setup</h4>
                            <p className="text-gray-600 mb-2">
                                Get your API credentials from GoHighLevel Settings → Integrations → API Keys
                            </p>
                            <code className="block p-3 bg-white rounded border text-xs">
                                GHL_API_KEY=your_api_key_here<br />
                                GHL_LOCATION_ID=your_location_id
                            </code>
                        </div>

                        <div>
                            <h4 className="font-medium mb-1">2. Jane App Setup</h4>
                            <p className="text-gray-600">
                                Jane App requires developer partnership registration. Currently running in <strong>mock mode</strong> for testing. Contact Jane App to become a Technology Partner for production access.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-1">3. Configure Webhooks (Optional)</h4>
                            <p className="text-gray-600">
                                Set up webhooks in GoHighLevel to enable real-time sync:
                            </p>
                            <code className="block p-3 bg-white rounded border text-xs mt-2">
                                Webhook URL: https://yourdomain.com/api/webhooks/gohighlevel
                            </code>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
