# Storage Feature - API Integration Guide

## Overview

Storage feature được xây dựng với React Query để quản lý data fetching, caching, và state management. Hiện tại đang sử dụng **dummy data** nhưng có thể dễ dàng chuyển sang **real API** bằng cách thay đổi một flag.

## Architecture

```
src/features/storage/
├── services/
│   └── storageService.ts          # API calls (support cả real API và dummy data)
├── hooks/
│   └── useStorageData.ts          # React Query hooks
├── components/
│   ├── [Component].tsx            # Presentation components
│   └── [Component]Wrapper.tsx     # Container components với React Query
└── data/
    └── storage.data.ts            # Dummy data
```

## Service Layer

### File: `storageService.ts`

Service layer cung cấp các functions để fetch data:

```typescript
// Toggle giữa real API và dummy data
const USE_REAL_API =
  false - // Đổi thành true để dùng real API
  // Available functions:
  fetchStorageData() - // Fetch toàn bộ page data
  fetchServices() - // Fetch 3 services (Storage, Garage, Parking)
  fetchFAQs() - // Fetch FAQs
  fetchReviews() - // Fetch customer reviews
  fetchUsageExamples() - // Fetch usage scenarios
  fetchWhyChooseReasons() - // Fetch selling points
  fetchStorageItems(); // Fetch storable items
```

**Features:**

- ✅ Automatic API delay simulation (200-500ms)
- ✅ Error handling với fallback to dummy data
- ✅ TypeScript type-safe
- ✅ Easy toggle giữa real API và dummy data

## React Query Hooks

### File: `useStorageData.ts`

Custom hooks sử dụng React Query:

```typescript
import { useStorageData, useServices, useFAQs, etc. } from '@/features/storage/hooks/useStorageData'

// Usage:
const { data, isLoading, error } = useServices()
```

**Available Hooks:**

- `useStorageData()` - Fetch toàn bộ page data
- `useServices()` - Fetch services only
- `useFAQs()` - Fetch FAQs only
- `useReviews()` - Fetch reviews only
- `useUsageExamples()` - Fetch usage examples only
- `useWhyChooseReasons()` - Fetch why choose reasons only
- `useStorageItems()` - Fetch storage items only

**Features:**

- ✅ Automatic caching (5-10 minutes stale time)
- ✅ Loading states
- ✅ Error handling
- ✅ Automatic refetching on reconnect

## Wrapper Components

Wrapper components kết hợp presentation components với React Query hooks:

### Available Wrappers

1. **ServicesWrapper** - Displays 3 services grid
2. **FAQWrapper** - Displays FAQ accordion
3. **ReviewsWrapper** - Displays customer reviews
4. **UsageExamplesWrapper** - Displays usage scenarios
5. **StorageItemsWrapper** - Displays storable items
6. **WhyChooseWrapper** - Displays selling points

### Features

Tất cả wrappers có:

- ✅ Loading spinner khi đang fetch data
- ✅ Error message khi fetch failed
- ✅ Empty state handling
- ✅ TypeScript type-safe

### Example Code

```tsx
// Before (Static data)
import { ServiceGrid } from '@/features/storage/components';
import { storagePageData } from '@/features/storage/data/storage.data';

<ServiceGrid services={storagePageData.services} />;

// After (Dynamic with React Query)
import { ServicesWrapper } from '@/features/storage/components';

<ServicesWrapper />;
```

## Usage in Pages

### Current Implementation (storage/page.tsx)

```tsx
import {
  ServicesWrapper,
  FAQWrapper,
  ReviewsWrapper,
  UsageExamplesWrapper,
  StorageItemsWrapper,
  WhyChooseWrapper,
} from '@/features/storage/components';

export default function StoragePage() {
  return (
    <main>
      {/* Static sections */}
      <StorageHero {...data} />
      <IntroductionSection {...data} />

      {/* Dynamic sections with React Query */}
      <ServicesWrapper />
      <UsageExamplesWrapper />
      <StorageItemsWrapper />
      <WhyChooseWrapper />
      <ReviewsWrapper />
      <FAQWrapper />
    </main>
  );
}
```

## Switching to Real API

### Step 1: Update Service Configuration

Edit `src/features/storage/services/storageService.ts`:

```typescript
// Change this line:
const USE_REAL_API = false;

// To:
const USE_REAL_API = true;
```

### Step 2: Configure API Endpoints

Đảm bảo backend API có các endpoints sau:

```
GET /storage              -> Return StoragePageData
GET /storage/services     -> Return StorageService[]
GET /storage/faqs         -> Return FAQItem[]
GET /storage/reviews      -> Return CustomerReview[]
GET /storage/usage-examples -> Return UsageExample[]
GET /storage/why-choose   -> Return WhyChooseReason[]
GET /storage/items        -> Return StorageItem[]
```

### Step 3: Update API Base URL

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

### Step 4: Test

```bash
npm run dev
```

Mở `/storage` và kiểm tra:

- Network tab để xem API calls
- Console để xem errors (nếu có)
- Loading states hoạt động
- Data hiển thị đúng

## Error Handling

Service layer tự động fallback về dummy data nếu API call failed:

```typescript
try {
  const response = await apiClient.get('/storage');
  return response.data;
} catch (error) {
  console.error('Failed to fetch storage data:', error);
  return storagePageData; // Fallback to dummy data
}
```

Wrapper components hiển thị error message:

```tsx
if (error) {
  return (
    <section>
      <p className="text-red-500">サービス情報の読み込みに失敗しました。</p>
    </section>
  );
}
```

## Caching Strategy

React Query cache configuration:

```typescript
queryKey: ['storage-services'];
staleTime: 1000 * 60 * 5; // 5 minutes

// Data sẽ:
// - Cache trong 5 minutes
// - Auto refetch khi stale
// - Refetch on window focus (disabled)
// - Refetch on reconnect (enabled)
```

## Loading States

Mỗi wrapper component có loading state:

```tsx
if (isLoading) {
  return (
    <section className="...">
      <div className="flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    </section>
  );
}
```

## Performance

**Build size:**

```
Route (app)              Size     First Load JS
└ ○ /storage             33.6 kB  183 kB
```

**Optimization:**

- ✅ Code splitting (wrapper components are client components)
- ✅ Image optimization (Next.js Image component)
- ✅ Static generation for hero & introduction
- ✅ Query caching giảm API calls
- ✅ Lazy loading cho dynamic sections

## Testing API Calls

### Using Browser DevTools

1. Mở DevTools → Network tab
2. Filter: `Fetch/XHR`
3. Navigate to `/storage`
4. Xem các API calls:
   - `/storage/services`
   - `/storage/faqs`
   - `/storage/reviews`
   - etc.

### Using React Query DevTools (Optional)

Install React Query DevTools:

```bash
npm install @tanstack/react-query-devtools
```

Add to layout:

```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<QueryProvider>
  {children}
  <ReactQueryDevtools initialIsOpen={false} />
</QueryProvider>;
```

## Common Issues

### Issue 1: API calls không hoạt động

**Solution:**

- Check `USE_REAL_API = true` trong `storageService.ts`
- Check `NEXT_PUBLIC_API_URL` trong `.env.local`
- Check backend API đã chạy
- Check CORS settings

### Issue 2: Loading spinner hiển thị mãi

**Solution:**

- Check backend API response format
- Check network connectivity
- Check browser console cho errors
- Check TypeScript types match với API response

### Issue 3: Data không cache

**Solution:**

- Check `staleTime` configuration
- Check `queryKey` unique
- Clear browser cache và reload

## Best Practices

1. **Always use wrapper components** cho dynamic data
2. **Keep static sections** (Hero, Introduction) không dùng React Query
3. **Use TypeScript types** cho tất cả API responses
4. **Handle loading states** properly
5. **Handle error states** với user-friendly messages
6. **Test both dummy data và real API** modes
7. **Monitor bundle size** khi thêm dependencies

## Migration Path

### Current: Dummy Data Only

```
Storage Page → Wrapper Components → Hooks → Service (dummy data)
```

### Future: Real API

```
Storage Page → Wrapper Components → Hooks → Service → Backend API
                                              ↓ (fallback)
                                         Dummy Data
```

## Summary

✅ **Service layer** với real API support
✅ **React Query hooks** cho data fetching
✅ **Wrapper components** với loading/error states
✅ **Easy toggle** giữa dummy và real API
✅ **Type-safe** với TypeScript
✅ **Automatic caching** và refetching
✅ **Error handling** với fallback
✅ **Production ready** architecture

---

**Next Steps:**

1. Setup backend API endpoints
2. Change `USE_REAL_API = true`
3. Test thoroughly
4. Monitor performance
5. Add React Query DevTools (optional)
