# Architecture Guide: SEO + React Query

## Cấu trúc dự án

Dự án này được thiết kế để **tối ưu SEO** trong khi vẫn **sẵn sàng cho API integration** sau này.

## Dual Component Strategy

### 1. **Server Components (Wrappers)** - Cho SEO

```
src/features/home/components/
├── featured-stores-wrapper.tsx  ← Server Component
├── news-wrapper.tsx             ← Server Component
├── services-wrapper.tsx         ← Server Component
└── faq-wrapper.tsx              ← Server Component
```

**Mục đích:**

- Pre-render static content
- SEO tối ưu (crawlers nhìn thấy nội dung ngay)
- Fast initial page load
- Sử dụng trong `app/page.tsx` (homepage)

**Cách hoạt động:**

```tsx
// Server Component - No React Query needed
import { featuredStoresData } from '../data/dummy';

export function FeaturedStoresWrapper() {
  return (
    <section>
      {featuredStoresData.map(store => (
        <StoreCard key={store.id} {...store} />
      ))}
    </section>
  );
}
```

### 2. **Client Components** - Cho API Integration

```
src/features/home/components/
├── featured-stores-section.tsx  ← Client Component + React Query
├── news-section.tsx             ← Client Component + React Query
├── services-section.tsx         ← Client Component + React Query
├── use-cases-section.tsx        ← Client Component + React Query
├── column-section.tsx           ← Client Component + React Query
└── faq-section.tsx              ← Client Component + React Query
```

**Mục đích:**

- Sẵn sàng cho API integration
- React Query cho caching, refetching, etc.
- Loading states
- Có thể dùng cho admin pages, dashboard, dynamic pages

**Cách hoạt động:**

```tsx
'use client';

import { useFeaturedStores } from '../hooks';

export function FeaturedStoresSection() {
  const { data, isLoading } = useFeaturedStores();

  if (isLoading) return <Skeleton />;

  return (
    <section>
      {data?.map(store => (
        <StoreCard key={store.id} {...store} />
      ))}
    </section>
  );
}
```

## React Query Hooks

```
src/features/home/hooks/
├── useHomeData.ts  ← Tất cả hooks
└── index.ts        ← Exports
```

**Available hooks:**

- `useFeaturedStores()` - Featured stores data
- `useNewsItems()` - News articles
- `useServices()` - Services (Storage, Garage, Parking)
- `useUseCases()` - Use case examples
- `useColumns()` - Column articles
- `useFaqs()` - FAQ items

**Hiện tại:** Hooks sử dụng dummy data từ `../data/dummy.ts`

**Sau này:** Chỉ cần thay đổi trong hooks:

```tsx
export function useFeaturedStores() {
  return useQuery({
    queryKey: ['featured-stores'],
    queryFn: async () => {
      // Thay vì dummy data:
      const response = await fetch('/api/featured-stores');
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
  });
}
```

## Khi nào dùng gì?

### Dùng Server Components (Wrappers) khi:

✅ SEO-critical pages (homepage, landing pages)
✅ Static content không thay đổi thường xuyên
✅ Cần fast initial load
✅ Content cần được crawlers nhìn thấy

**Example:** Homepage (`/`)

### Dùng Client Components (React Query) khi:

✅ Admin dashboard
✅ User profile pages
✅ Real-time data updates
✅ Interactive features (filters, search, pagination)
✅ Authenticated pages

**Example:** Admin dashboard (`/admin/stores`)

## File Structure

```
src/features/home/
├── components/
│   ├── hero-section.tsx              ← Server Component (static)
│   ├── search-section.tsx            ← Server Component (static)
│   │
│   ├── featured-stores-wrapper.tsx   ← Server (SEO)
│   ├── featured-stores-section.tsx   ← Client (API)
│   │
│   ├── news-wrapper.tsx              ← Server (SEO)
│   ├── news-section.tsx              ← Client (API)
│   │
│   ├── services-wrapper.tsx          ← Server (SEO)
│   ├── services-section.tsx          ← Client (API)
│   │
│   └── ...
│
├── data/
│   └── dummy.ts                      ← Static data source
│
└── hooks/
    ├── useHomeData.ts                ← React Query hooks
    └── index.ts
```

## Migration Path: Dummy Data → API

### Bước 1: Hiện tại (Dummy Data)

```tsx
// hooks/useHomeData.ts
export function useFeaturedStores() {
  return useQuery({
    queryKey: ['featured-stores'],
    queryFn: async () => {
      await delay(300);
      return featuredStoresData; // From dummy.ts
    },
  });
}
```

### Bước 2: Integrate API

```tsx
// hooks/useHomeData.ts
export function useFeaturedStores() {
  return useQuery({
    queryKey: ['featured-stores'],
    queryFn: async () => {
      const res = await fetch('/api/featured-stores');
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
  });
}
```

### Bước 3: Switch Components in Pages

```tsx
// app/page.tsx - Before (SEO-optimized)
<FeaturedStoresWrapper />

// app/admin/page.tsx - After (API-powered)
<FeaturedStoresSection />
```

## Performance Metrics

### Current Setup (Production Build):

- **Bundle size**: 33.3 kB
- **First Load JS**: 134 kB
- **Rendering**: Static (SSG)
- **SEO Score**: 100 (all content pre-rendered)

### When Using Client Components:

- **Bundle size**: ~40 kB (includes React Query)
- **First Load JS**: ~145 kB
- **Rendering**: Client-side hydration
- **SEO Score**: Lower (content not pre-rendered)

## Best Practices

### 1. Homepage & Landing Pages

```tsx
// ✅ GOOD - Use Server Components
import { FeaturedStoresWrapper } from '@/features/home/components';

export default function HomePage() {
  return <FeaturedStoresWrapper />;
}
```

### 2. Admin & Dynamic Pages

```tsx
// ✅ GOOD - Use Client Components
'use client';

import { FeaturedStoresSection } from '@/features/home/components';

export default function AdminStoresPage() {
  return <FeaturedStoresSection />;
}
```

### 3. Mixing Components

```tsx
// ✅ GOOD - Static hero, dynamic content
export default function HybridPage() {
  return (
    <>
      <HeroSection /> {/* Server Component */}
      <FeaturedStoresSection /> {/* Client Component */}
    </>
  );
}
```

## API Integration Checklist

Khi sẵn sàng integrate API:

- [ ] 1. Tạo API endpoints (`/api/featured-stores`, etc.)
- [ ] 2. Update hooks trong `useHomeData.ts`
- [ ] 3. Test với Client Components trước
- [ ] 4. Xác nhận data structure match
- [ ] 5. Update TypeScript types nếu cần
- [ ] 6. Giữ nguyên Server Components cho SEO pages
- [ ] 7. Chuyển sang Client Components cho admin pages

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

```tsx
// hooks/useHomeData.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function useFeaturedStores() {
  return useQuery({
    queryKey: ['featured-stores'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/featured-stores`);
      return res.json();
    },
  });
}
```

## Summary

| Feature         | Server Components | Client Components |
| --------------- | ----------------- | ----------------- |
| SEO             | ✅ Excellent      | ⚠️ Limited        |
| Performance     | ✅ Fast           | ⚠️ Slower         |
| API Integration | ❌ Not needed     | ✅ Ready          |
| Interactivity   | ❌ Static         | ✅ Dynamic        |
| Use Case        | Homepage, Landing | Admin, Dashboard  |

**Strategy**: Sử dụng **Server Components cho SEO**, giữ **Client Components cho API sau này**.
