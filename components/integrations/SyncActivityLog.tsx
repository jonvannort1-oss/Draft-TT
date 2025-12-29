/**
 * Sync Activity Log Component
 * Displays real-time sync activity and history
 */

'use client';

import { Card } from '@/components/ui/Card';
import { useEffect, useState } from 'react';

interface SyncLog {
    id: string;
    timestamp: string;
    type: 'contact' | 'appointment';
    direction: 'ghl-to-jane' | 'jane-to-ghl';
    status: 'success' | 'error' | 'skipped';
    message: string;
}

export function SyncActivityLog() {
    const [logs, setLogs] = useState<SyncLog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLogs();
        const interval = setInterval(fetchLogs, 5000); // Refresh every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const fetchLogs = async () => {
        try {
            const response = await fetch('/api/integrations/sync');
            const data = await response.json();
            if (data.success) {
                setLogs(data.logs || []);
            }
        } catch (error) {
            console.error('Failed to fetch logs:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success':
                return 'text-green-600 bg-green-50';
            case 'error':
                return 'text-red-600 bg-red-50';
            case 'skipped':
                return 'text-yellow-600 bg-yellow-50';
            default:
                return 'text-gray-600 bg-gray-50';
        }
    };

    const getDirectionLabel = (direction: string) => {
        switch (direction) {
            case 'ghl-to-jane':
                return 'GHL → Jane';
            case 'jane-to-ghl':
                return 'Jane → GHL';
            default:
                return direction;
        }
    };

    return (
        <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Sync Activity</h3>
                {loading && (
                    <div className="text-sm text-gray-500">Loading...</div>
                )}
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
                {logs.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No sync activity yet. Click "Sync Now" to start.
                    </div>
                ) : (
                    logs.map((log) => (
                        <div
                            key={log.id}
                            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                            <div
                                className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(
                                    log.status
                                )}`}
                            >
                                {log.status}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-medium text-gray-500">
                                        {getDirectionLabel(log.direction)}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {new Date(log.timestamp).toLocaleTimeString()}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 truncate">{log.message}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
}
