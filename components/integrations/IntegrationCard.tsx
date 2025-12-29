/**
 * Integration Card Component
 * Displays connection status for each integration
 */

'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface IntegrationCardProps {
    name: string;
    description: string;
    connected: boolean;
    mockMode?: boolean;
    icon: React.ReactNode;
    onConnect?: () => void;
    onDisconnect?: () => void;
}

export function IntegrationCard({
    name,
    description,
    connected,
    mockMode,
    icon,
    onConnect,
    onDisconnect,
}: IntegrationCardProps) {
    return (
        <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600">
                    {icon}
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full ${connected
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                        >
                            {connected ? 'Connected' : 'Not Connected'}
                        </span>
                        {mockMode && (
                            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                                Mock Mode
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{description}</p>

                    <div className="flex gap-2">
                        {connected ? (
                            <Button
                                onClick={onDisconnect}
                                variant="outline"
                                size="sm"
                            >
                                Disconnect
                            </Button>
                        ) : (
                            <Button
                                onClick={onConnect}
                                size="sm"
                            >
                                Connect
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
