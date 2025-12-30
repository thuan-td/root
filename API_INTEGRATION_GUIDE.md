# API Integration Guide

## ✅ Giải pháp: Server Components + API Fetching

Bạn **KHÔNG CẦN** bỏ Server Components khi có API thật!

Next.js 14 hỗ trợ **async Server Components** - components có thể fetch data trực tiếp từ API mà vẫn được pre-render cho SEO.

## Cấu trúc hiện tại

```
src/features/home/
├── services/
│   └── homeService.ts       ← Server-side data fetching
├── types/
│   └── index.ts             ← TypeScript types
├── data/
│   └── dummy.ts             ← Dummy data (fallback)
└── components/
    ├── *-wrapper.tsx        ← Async Server Components (SEO-optimized)
    └── *-section.tsx        ← Client Components (với React Query)
```

## Cách hoạt động

### 1. Service Layer (`homeService.ts`)

```typescript
const USE_REAL_API = false; // Toggle này để bật/tắt API

export async function getFeaturedStores(): Promise<FeaturedStore[]> {
  if (USE_REAL_API) {
    // Fetch từ API thật
    const res = await fetch(`${API_URL}/api/featured-stores`, {
      next: { revalidate: 300 }, // Cache 5 phút
    });
    return res.json();
  }

  // Fallback về dummy data
  return featuredStoresData;
}
```

### 2. Server Components (Wrappers)

```typescript
// featured-stores-wrapper.tsx
export async function FeaturedStoresWrapper() {
  // ✅ Async fetch trong Server Component
  const stores = await getFeaturedStores();

  return (
    <section>
      {stores.map(store => <StoreCard {...store} />)}
    </section>
  );
}
```

## Khi có API thật

### Bước 1: Update `homeService.ts`

```typescript
// src/features/home/services/homeService.ts

// Thay đổi flag này
const USE_REAL_API = true; // ✅ Bật API

// Hoặc dùng environment variable
const USE_REAL_API = process.env.NEXT_PUBLIC_USE_API === 'true';
```

### Bước 2: Thêm Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_USE_API=true
```

### Bước 3: Deploy

```bash
npm run build
npm run start
```

**VẪN GIỮ NGUYÊN Server Components** - Không cần thay đổi gì!

## Lợi ích của approach này

| Feature       | Server Components + API | Client Components + React Query |
| ------------- | ----------------------- | ------------------------------- |
| SEO           | ✅ Perfect              | ❌ Poor                         |
| Performance   | ✅ Fast (pre-rendered)  | ⚠️ Slow (client-side)           |
| Caching       | ✅ Next.js cache        | ✅ React Query cache            |
| Loading State | ❌ Not needed           | ✅ Full control                 |
| Revalidation  | ✅ ISR (every 5 min)    | ✅ On demand                    |

## Revalidation Strategies

### 1. Time-based Revalidation (ISR)

```typescript
export async function getFeaturedStores() {
  const res = await fetch(`${API_URL}/api/featured-stores`, {
    next: {
      revalidate: 300, // Revalidate every 5 minutes
    },
  });
  return res.json();
}
```

**Use cases:**

- News: 5 phút (`revalidate: 300`)
- Services: 1 giờ (`revalidate: 3600`)
- Static content: 1 ngày (`revalidate: 86400`)

### 2. On-demand Revalidation

```typescript
// app/api/revalidate/route.ts
export async function POST(request: Request) {
  const { path } = await request.json();

  try {
    await revalidatePath(path);
    return Response.json({ revalidated: true });
  } catch (err) {
    return Response.json({ error: 'Error revalidating' }, { status: 500 });
  }
}
```

**Trigger revalidation:**

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"path": "/"}'
```

### 3. Tag-based Revalidation

```typescript
export async function getFeaturedStores() {
  const res = await fetch(`${API_URL}/api/featured-stores`, {
    next: {
      tags: ['featured-stores'],
    },
  });
  return res.json();
}
```

```typescript
// Revalidate by tag
import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('featured-stores');
  return Response.json({ revalidated: true });
}
```

## Error Handling

### Option 1: Fallback to Dummy Data

```typescript
export async function getFeaturedStores(): Promise<FeaturedStore[]> {
  if (USE_REAL_API) {
    try {
      const res = await fetch(`${API_URL}/api/featured-stores`, {
        next: { revalidate: 300 },
      });

      if (!res.ok) throw new Error('API failed');
      return res.json();
    } catch (error) {
      console.error('API error, using dummy data:', error);
      return featuredStoresData; // Fallback
    }
  }

  return featuredStoresData;
}
```

### Option 2: Show Error State

```typescript
export async function FeaturedStoresWrapper() {
  try {
    const stores = await getFeaturedStores();

    return (
      <section>
        {stores.map(store => <StoreCard {...store} />)}
      </section>
    );
  } catch (error) {
    return (
      <section>
        <p>データの取得に失敗しました。</p>
      </section>
    );
  }
}
```

## Loading States (Optional)

Nếu muốn hiển thị loading state:

```tsx
// app/page.tsx
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <Suspense fallback={<FeaturedStoresSkeleton />}>
        <FeaturedStoresWrapper />
      </Suspense>

      <Suspense fallback={<NewsSkeleton />}>
        <NewsWrapper />
      </Suspense>
    </main>
  );
}
```

## Migration Example

### Before (Dummy Data)

```typescript
// homeService.ts
const USE_REAL_API = false;

export async function getFeaturedStores() {
  return featuredStoresData; // Dummy data
}
```

### After (Real API)

```typescript
// homeService.ts
const USE_REAL_API = true;

export async function getFeaturedStores() {
  const res = await fetch('https://api.example.com/featured-stores', {
    next: { revalidate: 300 },
  });
  return res.json();
}
```

### Component (NO CHANGES NEEDED!)

```typescript
// featured-stores-wrapper.tsx - KHÔNG THAY ĐỔI GÌ!
export async function FeaturedStoresWrapper() {
  const stores = await getFeaturedStores(); // ← Same code!

  return (
    <section>
      {stores.map(store => <StoreCard {...store} />)}
    </section>
  );
}
```

## Khi nào dùng Client Components?

Client Components (với React Query) vẫn hữu ích cho:

### 1. Real-time Updates

```tsx
'use client';

export function LiveStoresSection() {
  const { data } = useFeaturedStores(); // Poll every 30s
  // Auto-refresh khi có data mới
}
```

### 2. User Interactions

```tsx
'use client';

export function FilterableStoresSection() {
  const [filter, setFilter] = useState('all');
  const { data } = useFeaturedStores();

  const filtered = data?.filter(/* ... */);
  // User có thể filter, sort, search
}
```

### 3. Optimistic Updates

```tsx
'use client';

export function FavoriteStoresSection() {
  const { data, mutate } = useFeaturedStores();

  const toggleFavorite = () => {
    mutate(/* optimistic update */);
  };
}
```

## Best Practices

### ✅ DO:

- Dùng **Server Components** cho SEO-critical pages (homepage, landing pages)
- Dùng **ISR** (Incremental Static Regeneration) với `revalidate`
- Implement **error handling** với fallback
- Use **environment variables** cho API URLs

### ❌ DON'T:

- Không dùng Client Components cho static content
- Không fetch API trong Client Components cho SEO pages
- Không hard-code API URLs
- Không bỏ qua error handling

## Summary

```
┌─────────────────────────────────────────────────────┐
│ Homepage (SEO-critical)                             │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────────────────────────┐                │
│  │ Server Component (Wrapper)      │                │
│  │                                 │                │
│  │  async function Component() {  │                │
│  │    const data = await fetch(); │ ← API Call     │
│  │    return <UI>{data}</UI>       │   (Server)     │
│  │  }                             │                │
│  └─────────────────────────────────┘                │
│                                                      │
│  ✅ Pre-rendered cho SEO                            │
│  ✅ ISR caching (revalidate every 5 min)           │
│  ✅ Fast initial load                              │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Kết luận**: Bạn hoàn toàn có thể fetch API từ Server Components mà không cần chuyển sang Client Components. Giữ nguyên Server Components để tối ưu SEO!
