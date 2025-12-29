/**
 * GoHighLevel Webhook Handler
 * Receives real-time updates from GoHighLevel
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const signature = request.headers.get('x-ghl-signature');

        // TODO: Verify webhook signature for security
        // const isValid = verifyWebhookSignature(body, signature, process.env.WEBHOOK_SECRET);
        // if (!isValid) {
        //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
        // }

        const { type, data } = body;

        console.log('[GHL Webhook]', type, data);

        // Handle different webhook events
        switch (type) {
            case 'ContactCreate':
            case 'ContactUpdate':
                await handleContactEvent(data);
                break;

            case 'AppointmentCreate':
            case 'AppointmentUpdate':
            case 'AppointmentDelete':
                await handleAppointmentEvent(data);
                break;

            default:
                console.log('Unhandled webhook type:', type);
        }

        return NextResponse.json({ success: true, received: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        );
    }
}

async function handleContactEvent(data: unknown) {
    // TODO: Trigger sync to Jane App
    console.log('Contact event:', data);
    // const syncEngine = new SyncEngine(config);
    // await syncEngine.syncContactsToJane();
}

async function handleAppointmentEvent(data: unknown) {
    // TODO: Trigger appointment sync to Jane App
    console.log('Appointment event:', data);
}
