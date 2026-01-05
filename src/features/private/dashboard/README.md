# Dashboard Feature

User dashboard feature for authenticated users.

## Structure

```
dashboard/
├── components/
│   ├── Dashboard.tsx           # Main dashboard component
│   ├── DashboardSidebar.tsx    # Sidebar navigation
│   └── index.ts
├── hooks/
│   ├── useDashboardData.ts     # React Query hooks
│   └── index.ts
├── services/
│   └── dashboard.service.ts    # API calls
├── types/
│   └── dashboard.types.ts      # TypeScript types
├── data/
│   └── mock-data.ts           # Mock data for development
├── index.ts                    # Main export
└── README.md
```

## Usage

```tsx
import { Dashboard } from '@/features/private/dashboard';

export default function DashboardPage() {
  return <Dashboard />;
}
```

## Features

### 1. Dashboard Overview

- User information display
- Quick access cards (Favorites, Contracts, Payments)
- Real-time statistics
- News and notifications

### 2. Sidebar Navigation

- マイページTOP
- 物件情報 (Property Information)
  - ご契約中 (Active Contracts)
  - 受付注文中 (Pending Orders)
  - お気に入り (Favorites)
  - お支払い状況 (Payment Status)
- お客様情報 (Customer Information)
  - 会員情報変更 (Profile Settings)
  - パスワード変更 (Change Password)
  - クレジットカード情報 (Credit Card)
  - 引き落とし口座情報 (Bank Account)
  - お支払い専用口座 (Payment Account)
  - 通知設定 (Notification Settings)
- その他 (Other)
  - よくある質問・お問い合わせ (FAQ/Contact)
  - 解約手続き (Cancellation)
- Logout button

### 3. Data Fetching

- Uses React Query for efficient data fetching and caching
- Automatic refetching on window focus
- 5-minute stale time for most data
- 10-minute cache time

### 4. Mock Data

- Complete mock dataset for development
- Simulated API delay (800ms)
- Realistic Japanese data

## Hooks

### `useDashboardData()`

Fetches complete dashboard data including user, stats, contracts, favorites, payments, and news.

```tsx
const { data, isLoading, isError, error } = useDashboardData();
```

### `useDashboardStats()`

Fetches only statistics.

### `useContracts()`

Fetches user contracts.

### `useFavorites()`

Fetches user favorites.

### `usePayments()`

Fetches payment history.

### `useNews(limit?)`

Fetches news items with optional limit.

## Types

All TypeScript types are defined in `types/dashboard.types.ts`:

- `User` - User information
- `Contract` - Contract details
- `Favorite` - Favorite property
- `Payment` - Payment record
- `NewsItem` - News/notification item
- `DashboardStats` - Statistics summary
- `DashboardData` - Complete dashboard data

## Services

`DashboardService` provides methods for API calls:

- `getDashboardData()` - Get all dashboard data
- `getStats()` - Get statistics
- `getContracts()` - Get contracts
- `getFavorites()` - Get favorites
- `getPayments()` - Get payments
- `getNews(limit?)` - Get news items

## Environment

The service automatically uses mock data in development mode and real API calls in production.

Set `NEXT_PUBLIC_API_URL` environment variable for production API endpoint.

## Styling

- Uses Tailwind CSS
- Dark mode support
- Material Icons Outlined for icons
- Responsive design (mobile-first)
- Custom colors from tailwind.config.ts

## Route

Dashboard is accessible at `/dashboard` (protected route).
