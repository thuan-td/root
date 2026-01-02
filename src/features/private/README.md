# Private Features

Features available **only to authenticated users**.

## Features To Implement

### 1. **dashboard** - User Dashboard

- Overview of user activity
- Quick stats
- Recent bookings
- Saved favorites

**Status:** 🔄 TODO

### 2. **profile** - User Profile

- Profile information
- Edit profile
- Change password
- Account settings
- Notification preferences

**Status:** 🔄 TODO

### 3. **bookings** - Booking Management

- Active bookings
- Booking history
- Booking details
- Cancel/modify bookings
- Payment history

**Status:** 🔄 TODO

### 4. **favorites** - Saved Favorites

- Saved storage units
- Wishlist
- Quick access to favorites

**Status:** 🔄 TODO

### 5. **payments** - Payment Management (Future)

- Payment methods
- Transaction history
- Invoices/receipts

**Status:** 🔄 TODO

## Usage

```tsx
// Import from private features (when implemented)
import { Dashboard } from '@/features/private/dashboard';
import { ProfileSettings } from '@/features/private/profile';
import { BookingList } from '@/features/private/bookings';
```

## Characteristics

- ⚠️ Authentication **required**
- 🔒 Protected routes
- 👤 User-specific data
- 🚫 Not accessible without login
- 🔐 Token-based authorization

## Routes

All private features map to protected routes:

- `/dashboard` - User dashboard
- `/profile` - User profile
- `/bookings` - Booking management
- `/favorites` - Saved favorites
- `/payments` - Payment history

## Protection

These routes should be protected by:

1. **Middleware** - Check auth before rendering
2. **Auth Guards** - Client-side protection
3. **API Authorization** - Server-side verification

## Implementation Template

```tsx
// features/private/dashboard/components/Dashboard.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants';

export function Dashboard() {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) redirect(ROUTES.LOGIN);

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      {/* Dashboard content */}
    </div>
  );
}
```

## Folder Structure

```
features/private/dashboard/
├── components/
│   ├── Dashboard.tsx
│   ├── StatsCard.tsx
│   └── index.ts
├── hooks/
│   ├── useDashboardData.ts
│   └── index.ts
├── services/
│   └── dashboard.service.ts
├── types/
│   └── dashboard.types.ts
├── data/
│   └── mock-data.ts (for development)
└── index.ts
```

## Next Steps

To implement a private feature:

1. Create folder structure
2. Add components
3. Add hooks (React Query)
4. Add services (API calls)
5. Add types
6. Export from index.ts
7. Create route in `/app/(private)/`
8. Add middleware protection
9. Test authentication flow
