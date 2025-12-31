# Store Search Feature

Tính năng tìm kiếm cửa hàng cho ứng dụng ROOT Storage Service.

## Cấu trúc thư mục

```
store-search/
├── components/           # React components
│   ├── server/          # Server components (SEO optimized)
│   │   ├── StoreListWrapper.tsx
│   │   ├── NewStoresWrapper.tsx
│   │   ├── FAQWrapper.tsx
│   │   └── index.ts
│   ├── MapFilterSection.tsx    # Map và filter UI
│   ├── SearchBar.tsx           # Search input với filters
│   ├── StoreListCard.tsx       # Card chi tiết store
│   ├── StoreListSection.tsx    # List stores với pagination
│   ├── NewStoreCard.tsx        # Card cho new stores
│   ├── NewStoresSection.tsx    # Section showcase new stores
│   ├── Pagination.tsx          # Reusable pagination
│   ├── FAQSection.tsx          # FAQ accordion
│   └── index.ts
├── data/                # Static data & types
│   └── store-search.data.ts
├── services/            # Data fetching services
│   └── storeSearchService.ts
└── README.md
```

## Components

### Client Components

#### MapFilterSection

Hiển thị bản đồ tương tác với các tùy chọn filter.

**Props:**

- `onFilterChange?: (type: 'map' | 'station' | 'area') => void`

**Usage:**

```tsx
<MapFilterSection onFilterChange={type => console.log(type)} />
```

#### SearchBar

Thanh tìm kiếm với filter options.

**Props:**

- `placeholder?: string`
- `onSearch?: (query: string, filters: SearchFilters) => void`
- `showFilters?: boolean`

**Usage:**

```tsx
<SearchBar
  placeholder="エリアと入力してください"
  onSearch={(query, filters) => handleSearch(query, filters)}
/>
```

#### StoreListCard

Card hiển thị thông tin chi tiết của store.

**Props:**

- Extends `Store` type từ `store-search.data.ts`
- `showCampaign?: boolean`

**Usage:**

```tsx
<StoreListCard {...store} showCampaign={true} />
```

#### Pagination

Component phân trang có thể tái sử dụng.

**Props:**

- `currentPage: number`
- `totalPages: number`
- `onPageChange: (page: number) => void`

**Usage:**

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={page => setCurrentPage(page)}
/>
```

### Server Components (SEO Optimized)

#### StoreListWrapper

Server component fetch danh sách stores cho SEO.

```tsx
<StoreListWrapper />
```

#### NewStoresWrapper

Server component fetch new stores cho SEO.

```tsx
<NewStoresWrapper />
```

#### FAQWrapper

Server component fetch FAQs cho SEO.

```tsx
<FAQWrapper />
```

## Data Structure

### Store Type

```typescript
{
  id: string;
  title: string;
  address: string;
  station: string;
  distance?: string;
  price: number;
  maxPrice?: number;
  imageUrl: string;
  category: 'STORAGE' | 'GARAGE' | 'PARKING';
  available: boolean;
  isNew: boolean;
  features?: string[];
  unitType?: string;
  sizes?: string[];
  campaign?: string;
}
```

## SEO Optimization

Page được tối ưu SEO với:

1. **Meta Tags**: Title, description, keywords
2. **Open Graph**: Social sharing metadata
3. **JSON-LD Structured Data**:
   - SearchResultsPage
   - BreadcrumbList
   - ItemList (stores)
   - FAQPage
4. **Server-Side Rendering**: All data được render trên server
5. **Semantic HTML**: Proper heading hierarchy, ARIA labels

## Sử dụng Components từ shadcn/ui

- `Button` - Các nút action
- `Card` / `CardContent` - Layout cards
- `Badge` - Status badges
- `Input` - Search input
- `Select` - Dropdown filters
- `Accordion` - FAQ section

## Reusable Components

Các components có thể tái sử dụng cho các page khác:

1. **Pagination** - Dùng cho bất kỳ danh sách nào cần phân trang
2. **SearchBar** - Có thể customize cho các loại search khác
3. **StoreListCard** - Template cho card display
4. **FAQSection** - Có thể dùng cho FAQ ở các page khác

## Best Practices

1. **Server Components First**: Sử dụng server components khi có thể cho SEO
2. **Client Components Only When Needed**: Chỉ dùng 'use client' khi cần interactivity
3. **Type Safety**: Tất cả components đều có TypeScript types
4. **Accessibility**: ARIA labels, keyboard navigation
5. **Performance**: Image optimization với Next.js Image component
