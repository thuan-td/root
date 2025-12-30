# Component Usage Guide

## Khi nào dùng Server Components vs Client Components?

### 🎯 Quick Decision Tree

```
Cần SEO tốt? → YES → Dùng Server Components (Wrapper)
                NO ↓

Cần filter/search/real-time? → YES → Dùng Client Components (Section)
                               NO → Dùng Server Components
```

---

## 🖥️ Server Components (Recommended cho homepage)

### Khi nào dùng:

✅ Homepage, landing pages
✅ SEO-critical content
✅ Static hoặc ít thay đổi
✅ Không cần user interaction
✅ Không cần real-time updates

### Components available:

```tsx
import {
  FeaturedStoresWrapper, // Stores với API fetching
  NewsWrapper, // News với API fetching
  ServicesWrapper, // Services với API fetching
  FAQWrapper, // FAQs với API fetching
} from '@/features/home/components';
```

### Example usage:

```tsx
// app/page.tsx - Homepage (SEO tối ưu)
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedStoresWrapper /> {/* ✅ Server Component */}
      <NewsWrapper /> {/* ✅ Server Component */}
      <ServicesWrapper /> {/* ✅ Server Component */}
    </main>
  );
}
```

### Lợi ích:

- ✅ Perfect SEO (pre-rendered)
- ✅ Fast initial load
- ✅ Smaller bundle size
- ✅ No hydration needed
- ✅ Data cached với Next.js ISR

---

## ⚛️ Client Components (Cho tính năng dynamic)

### Khi nào dùng:

✅ Admin dashboard
✅ User filtering, sorting, searching
✅ Real-time data updates
✅ Pagination / Infinite scroll
✅ Interactive features
✅ Form submissions

### Components available:

```tsx
import {
  UseCasesSection, // Use cases với React Query
  ColumnSection, // Columns với React Query
} from '@/features/home/components';
```

### Example usage:

#### 1. Filterable List

```tsx
'use client';

import { UseCasesSection } from '@/features/home/components';
import { useState } from 'react';

export default function FilterableUseCases() {
  const [category, setCategory] = useState('all');

  return (
    <div>
      {/* Filter buttons */}
      <FilterButtons onChange={setCategory} />

      {/* Client Component với React Query */}
      <UseCasesSection category={category} />
    </div>
  );
}
```

#### 2. Real-time Dashboard

```tsx
'use client';

import { ColumnSection } from '@/features/home/components';

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      {/* Auto-refresh every 30s */}
      <ColumnSection refetchInterval={30000} />
    </div>
  );
}
```

### Lợi ích:

- ✅ Interactive features
- ✅ Real-time updates
- ✅ React Query caching
- ✅ Loading states
- ✅ Optimistic updates

---

## 📊 So sánh

| Feature              | Server Components      | Client Components                |
| -------------------- | ---------------------- | -------------------------------- |
| **SEO**              | ✅ Perfect             | ❌ Limited                       |
| **Performance**      | ✅ Fast (pre-rendered) | ⚠️ Slower (hydration)            |
| **Bundle Size**      | ✅ Smaller             | ⚠️ Larger (includes React Query) |
| **Filtering**        | ❌ Not supported       | ✅ Full support                  |
| **Real-time**        | ❌ ISR only (5min+)    | ✅ Polling/WebSocket             |
| **User Interaction** | ❌ Static              | ✅ Interactive                   |
| **Caching**          | ✅ Next.js ISR         | ✅ React Query                   |

---

## 🎨 Use Cases & Examples

### Homepage (SEO Priority)

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <>
      {/* All Server Components for SEO */}
      <HeroSection />
      <SearchSection />
      <FeaturedStoresWrapper /> {/* ← Server fetch */}
      <NewsWrapper /> {/* ← Server fetch */}
      <ServicesWrapper /> {/* ← Server fetch */}
      <FAQWrapper /> {/* ← Server fetch */}
    </>
  );
}
```

**Result**: Perfect SEO, fast load, static pre-rendering

---

### Admin Dashboard (Interactive)

```tsx
// app/admin/page.tsx
'use client';

import { UseCasesSection, ColumnSection } from '@/features/home/components';

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Client Components with React Query */}
      <UseCasesSection /> {/* ← Client-side fetch */}
      <ColumnSection /> {/* ← Client-side fetch */}
    </div>
  );
}
```

**Result**: Real-time updates, interactive, no SEO needed

---

### Filterable Page (Hybrid)

```tsx
// app/use-cases/page.tsx
import { HeroSection } from '@/features/home/components';
import FilterableUseCases from './filterable-use-cases';

export default function UseCasesPage() {
  return (
    <>
      {/* Server Component for SEO */}
      <HeroSection />

      {/* Client Component for filtering */}
      <FilterableUseCases />
    </>
  );
}
```

**Result**: Good SEO + Interactive features

---

## 🔄 Data Flow

### Server Components (Wrapper)

```
User Request
    ↓
Next.js Server
    ↓
homeService.ts (fetch API)
    ↓
Pre-render Component
    ↓
Send HTML to Browser (with data)
    ↓
✅ SEO Perfect (crawlers see content)
```

### Client Components (Section)

```
User Request
    ↓
Next.js Server
    ↓
Send HTML (no data yet)
    ↓
Browser loads JavaScript
    ↓
React Query (fetch API)
    ↓
Update UI with data
    ↓
⚠️ SEO Limited (crawlers might not see content)
```

---

## 🛠️ Adding New Components

### If you need SEO:

1. Create Server Component (async function)
2. Add service function in `homeService.ts`
3. Use in homepage

```tsx
// 1. Create Server Component
export async function NewFeatureWrapper() {
  const data = await getNewFeature(); // ← Service
  return <section>{data.map(...)}</section>;
}

// 2. Add to homeService.ts
export async function getNewFeature() {
  if (USE_REAL_API) {
    const res = await fetch(`${API_URL}/api/new-feature`, {
      next: { revalidate: 300 }
    });
    return res.json();
  }
  return dummyData;
}
```

### If you need filtering/real-time:

1. Create Client Component ('use client')
2. Add React Query hook
3. Use in interactive pages

```tsx
// 1. Create Client Component
'use client';

export function NewFeatureSection() {
  const { data, isLoading } = useNewFeature();

  if (isLoading) return <Skeleton />;
  return <section>{data.map(...)}</section>;
}

// 2. Add hook
export function useNewFeature() {
  return useQuery({
    queryKey: ['new-feature'],
    queryFn: async () => {
      const res = await fetch('/api/new-feature');
      return res.json();
    },
  });
}
```

---

## 📝 Best Practices

### ✅ DO:

- Dùng Server Components cho homepage
- Dùng Client Components cho admin/dashboard
- Mix cả 2 khi cần (hero = server, filter = client)
- Document rõ component nào dùng cho mục đích gì

### ❌ DON'T:

- Dùng Client Components cho SEO pages
- Dùng Server Components cho real-time features
- Mix data fetching (1 component dùng cả 2 methods)
- Forget về caching strategies

---

## 🚀 Quick Reference

| Page Type             | Component Choice  | Reason           |
| --------------------- | ----------------- | ---------------- |
| Homepage              | Server Components | SEO priority     |
| Landing Page          | Server Components | SEO priority     |
| Admin Dashboard       | Client Components | No SEO needed    |
| User Profile          | Client Components | Interactive      |
| Search Results        | Client Components | Filtering needed |
| Blog Post             | Server Components | SEO priority     |
| Product List (filter) | Client Components | Filtering needed |
| Static Content        | Server Components | Fast & SEO       |

---

**Summary**:

- **Homepage** → Server Components (Wrappers)
- **Dynamic features** → Client Components (Sections)
- **Khi không chắc** → Server Components (tốt hơn cho SEO)
