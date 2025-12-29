# GoHighLevel ↔ Jane App Integration

This integration tool automatically synchronizes contacts, patients, and appointments between GoHighLevel (CRM/marketing automation) and Jane App (practice management).

## Features

- ✅ **Bidirectional Sync**: Sync data from GHL to Jane or vice versa
- ✅ **Real-time Webhooks**: Automatic updates via GoHighLevel webhooks
- ✅ **Manual Sync**: Trigger sync operations on-demand
- ✅ **Activity Logging**: Track all sync operations and errors
- ✅ **Admin Dashboard**: Beautiful UI to manage integrations at `/integrations`

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file with your API credentials:

```env
# GoHighLevel
GHL_API_KEY=your_ghl_api_key
GHL_LOCATION_ID=your_location_id

# Jane App (optional - currently in mock mode)
JANE_ACCESS_TOKEN=your_jane_token
JANE_CLINIC_ID=your_clinic_id

# Webhook Security
WEBHOOK_SECRET=your_random_secret
```

**Getting GoHighLevel Credentials:**
1. Log into your GoHighLevel account
2. Go to Settings → Integrations → API Keys
3. Create a new API key with appropriate scopes
4. Copy your Location ID from Settings → Company

**Jane App Access:**
Jane App requires developer partnership registration. The integration currently runs in **mock mode** for testing. Contact Jane App to become a Technology Partner for production API access.

### 3. Run the Application

```bash
npm run dev
```

Navigate to `http://localhost:3000/integrations` to access the admin dashboard.

## Architecture

```
lib/integrations/
├── gohighlevel/
│   ├── ghl-client.ts          # Base API client
│   ├── ghl-contacts.ts        # Contacts service
│   └── ghl-calendars.ts       # Calendars & appointments
├── janeapp/
│   ├── jane-client.ts         # Base API client (mock mode)
│   ├── jane-patients.ts       # Patients service
│   └── jane-appointments.ts   # Appointments service
└── sync/
    ├── sync-engine.ts         # Sync orchestrator
    └── sync-mappings.ts       # Field mappings

app/api/
├── webhooks/gohighlevel/      # Webhook receiver
└── integrations/
    ├── sync/                  # Manual sync API
    └── status/                # Connection status API
```

## API Endpoints

### Sync Operations
- `POST /api/integrations/sync` - Trigger manual sync
- `GET /api/integrations/sync` - Get sync logs

### Connection Status
- `GET /api/integrations/status` - Check integration status

### Webhooks
- `POST /api/webhooks/gohighlevel` - Receive GHL webhooks

## Data Mapping

### Contact ↔ Patient
| GoHighLevel | Jane App |
|------------|----------|
| firstName | firstName |
| lastName | lastName |
| email | email |
| phone | phone |
| address1 | address.street |
| city | address.city |
| state | address.province |
| postalCode | address.postalCode |

### Appointment ↔ Appointment
| GoHighLevel | Jane App |
|------------|----------|
| startTime | startTime |
| endTime | endTime |
| appointmentStatus | status |
| title | notes |
| address | location |

## Webhook Setup

To enable real-time sync, configure webhooks in GoHighLevel:

1. Go to Settings → Integrations → Webhooks
2. Add a new webhook with URL: `https://yourdomain.com/api/webhooks/gohighlevel`
3. Select events: Contact Create/Update, Appointment Create/Update/Delete
4. Save the webhook

## Usage

### Manual Sync
Visit `/integrations` and click "Sync Now" to manually trigger synchronization.

### Programmatic Usage

```typescript
import { SyncEngine } from '@/lib/integrations/sync/sync-engine';

const syncEngine = new SyncEngine({
  ghlApiKey: process.env.GHL_API_KEY!,
  ghlLocationId: process.env.GHL_LOCATION_ID!,
  janeAccessToken: process.env.JANE_ACCESS_TOKEN,
  syncDirection: 'bidirectional',
  autoSync: true,
});

// Perform full sync
const results = await syncEngine.performFullSync();

// Get sync logs
const logs = syncEngine.getSyncLogs();
```

## Development

The Jane App integration is currently in **mock mode** since it requires developer partnership. To enable real API calls:

1. Register as a Jane Technology Partner
2. Obtain OAuth credentials
3. Update `jane-client.ts` to set `mockMode = false`
4. Implement OAuth flow in `/api/integrations/connect`

## Security

- Store API keys securely in environment variables
- Never commit `.env.local` to version control
- Verify webhook signatures in production
- Use HTTPS for webhook endpoints

## Support

For issues or questions:
- GoHighLevel API: https://highlevel.stoplight.io
- Jane App Developer Platform: Contact Jane support for partnership

## License

MIT
