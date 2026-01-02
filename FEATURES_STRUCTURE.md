# 🎯 Features Structure - Public vs Private

Cấu trúc features được tổ chức dựa trên **authentication state**.

---

## 📂 Folder Structure

```
src/features/
├── public/              # Features for ALL users (không cần login)
│   ├── auth/           # Login, Register
│   ├── home/           # Homepage
│   ├── storage/        # Storage listing
│   ├── storage-detail/ # Storage detail pages
│   ├── store-search/   # Store search
│   ├── area-search/    # Area search
│   ├── current-location/ # Location search
│   ├── use-cases/      # Use cases listing
│   ├── use-case-detail/ # Use case detail
│   ├── service-detail/ # Service detail
│   ├── news/           # News articles
│   ├── README.md       # Public features doc
│   └── index.ts        # Export all public features
│
└── private/            # Features for AUTHENTICATED users only
    ├── dashboard/      # User dashboard (TODO)
    ├── profile/        # User profile management (TODO)
    ├── bookings/       # Booking management (TODO)
    ├── favorites/      # Saved favorites (TODO)
    ├── README.md       # Private features doc
    └── index.ts        # Export all private features
```

---

## 🌍 Public Features

### Characteristics

- ✅ **No authentication required**
- ✅ **SEO optimized**
- ✅ **Server-side rendering**
- ✅ **Accessible to everyone**
- ✅ **Public routes**

### Features List

| Feature              | Description                     | Route Example         |
| -------------------- | ------------------------------- | --------------------- |
| **auth**             | Login, Register, Password reset | `/login`, `/register` |
| **home**             | Homepage, Hero, Search          | `/`                   |
| **storage**          | Storage listing with filters    | `/storage`            |
| **storage-detail**   | Individual storage pages        | `/storage/[id]`       |
| **store-search**     | Advanced search                 | `/store-search`       |
| **area-search**      | Search by area                  | `/area-search`        |
| **current-location** | GPS-based search                | `/current-location`   |
| **use-cases**        | Use cases listing               | `/use-cases`          |
| **use-case-detail**  | Individual use case             | `/use-cases/[slug]`   |
| **service-detail**   | Service information             | `/services/[id]`      |
| **news**             | News articles                   | `/news/[slug]`        |

### Usage

```tsx
// Import from public features
import { Login } from '@/features/public/auth';
import { Hero } from '@/features/public/home';
import { StorageGrid } from '@/features/public/storage';
```

---

## 🔒 Private Features

### Characteristics

- ⚠️ **Authentication REQUIRED**
- 🔐 **Protected routes**
- 👤 **User-specific data**
- 🚫 **Redirects to login if not authenticated**
- 🔑 **Token-based authorization**

### Features To Implement

| Feature       | Description          | Route        | Status  |
| ------------- | -------------------- | ------------ | ------- |
| **dashboard** | User overview, stats | `/dashboard` | 🔄 TODO |
| **profile**   | Profile settings     | `/profile`   | 🔄 TODO |
| **bookings**  | Booking management   | `/bookings`  | 🔄 TODO |
| **favorites** | Saved items          | `/favorites` | 🔄 TODO |
| **payments**  | Payment history      | `/payments`  | 🔄 TODO |

### Usage (When Implemented)

```tsx
// Import from private features
import { Dashboard } from '@/features/private/dashboard';
import { ProfileSettings } from '@/features/private/profile';
import { BookingList } from '@/features/private/bookings';
```

### Protection Pattern

```tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants';

export function ProtectedFeature() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) redirect(ROUTES.LOGIN);

  return <div>Protected Content</div>;
}
```

---

## 🏗️ Feature Module Structure

Every feature (public or private) follows the same structure:

```
feature-name/
├── components/          # UI components
│   ├── Component1.tsx
│   ├── Component2.tsx
│   └── index.ts
│
├── hooks/              # React Query hooks
│   ├── useFeatureData.ts
│   └── index.ts
│
├── services/           # API services
│   └── feature.service.ts
│
├── types/              # TypeScript types
│   └── feature.types.ts
│
├── data/               # Mock/dummy data
│   └── dummy.ts
│
├── README.md           # Feature documentation
└── index.ts            # Main export
```

---

## 📝 Creating a New Feature

### For Public Feature

```bash
# 1. Create folder structure
mkdir -p src/features/public/my-feature/{components,hooks,services,types,data}

# 2. Create components
touch src/features/public/my-feature/components/MyComponent.tsx

# 3. Create index files
touch src/features/public/my-feature/components/index.ts
touch src/features/public/my-feature/index.ts
```

```tsx
// src/features/public/my-feature/index.ts
export * from './components';
export * from './hooks';
export * from './services/feature.service';
export * from './types/feature.types';
```

```tsx
// src/features/public/index.ts
export * from './my-feature'; // Add this line
```

### For Private Feature

```bash
# 1. Create folder structure
mkdir -p src/features/private/my-feature/{components,hooks,services,types,data}

# 2. Create components with auth protection
```

```tsx
// src/features/private/my-feature/components/MyComponent.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants';

export function MyComponent() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) redirect(ROUTES.LOGIN);

  return <div>Private Content</div>;
}
```

---

## 🎯 Benefits of This Structure

### 1. Clear Separation of Concerns

- Public vs Private features are immediately obvious
- Easy to understand authentication requirements
- Reduces confusion about access control

### 2. Better Organization

- Related features grouped together
- Easier to find code
- Scalable for large applications

### 3. Security

- Clear boundary between public and private
- Easier to apply middleware/guards
- Less chance of exposing private data

### 4. Developer Experience

- Import paths are descriptive: `@/features/public/...` vs `@/features/private/...`
- Clear intent in code
- Better IDE autocomplete

### 5. Maintainability

- Easy to add new features in right category
- Clear guidelines for where code belongs
- Easier onboarding for new developers

---

## 🔐 Route Protection Strategy

### App Router Structure

```
src/app/
├── (auth)/              # Public auth routes
│   ├── login/
│   └── register/
│
├── (main)/              # Public main routes
│   ├── storage/
│   └── store-search/
│
└── (private)/           # Protected routes (TODO)
    ├── middleware.ts    # Auth check
    ├── dashboard/
    ├── profile/
    └── bookings/
```

### Middleware (To Implement)

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token');

  // Protect private routes
  if (
    request.nextUrl.pathname.startsWith('/dashboard') ||
    request.nextUrl.pathname.startsWith('/profile') ||
    request.nextUrl.pathname.startsWith('/bookings')
  ) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/bookings/:path*'],
};
```

---

## 📖 Examples

### Public Feature Usage

```tsx
// src/app/(main)/storage/page.tsx
import { StorageGrid, SearchFilters } from '@/features/public/storage';

export default function StoragePage() {
  return (
    <div>
      <SearchFilters />
      <StorageGrid />
    </div>
  );
}
```

### Private Feature Usage (Future)

```tsx
// src/app/(private)/dashboard/page.tsx
import { Dashboard } from '@/features/private/dashboard';

export default function DashboardPage() {
  return <Dashboard />;
}
```

---

## 🚀 Migration from Old Structure

### Before

```tsx
import { Login } from '@/features/auth';
import { Hero } from '@/features/home';
```

### After

```tsx
import { Login } from '@/features/public/auth';
import { Hero } from '@/features/public/home';
```

All imports have been automatically updated! ✅

---

## 📚 Documentation

- **[src/features/public/README.md](./src/features/public/README.md)** - Public features guide
- **[src/features/private/README.md](./src/features/private/README.md)** - Private features guide
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick reference
- **[PROJECT_GUIDE.md](./PROJECT_GUIDE.md)** - Complete project guide

---

## ✅ Checklist

### Current Status

- [x] ✅ Public features folder created
- [x] ✅ Private features folder created
- [x] ✅ All existing features moved to `public/`
- [x] ✅ Imports updated throughout the app
- [x] ✅ Server running without errors
- [x] ✅ Documentation created

### Next Steps

- [ ] Create `(private)` route group
- [ ] Implement middleware for route protection
- [ ] Create dashboard feature
- [ ] Create profile feature
- [ ] Create bookings feature
- [ ] Add auth guards to components

---

**Server Status:** ✅ Running on http://localhost:3001

**All routes working!** Public features are ready to use. Private features structure is in place for future implementation.
