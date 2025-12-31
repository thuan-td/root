# Location Search Feature

Tính năng tìm kiếm cửa hàng theo vị trí hiện tại với bản đồ tương tác.

## Cấu trúc thư mục

```
location-search/
├── components/
│   ├── InteractiveMap.tsx          # Bản đồ với markers
│   ├── MapFilters.tsx              # Category filters và buttons
│   ├── LocationSearchSection.tsx   # Main container component
│   └── index.ts
├── data/
│   └── location-search.data.ts     # Store locations data
├── services/
│   └── locationSearchService.ts    # Data fetching services
└── README.md
```

## Components

### InteractiveMap

Hiển thị bản đồ với store markers theo category.

**Props:**

- `stores: StoreLocation[]` - Danh sách stores
- `selectedCategories: ('STORAGE' | 'GARAGE' | 'PARKING')[]` - Categories được chọn

**Features:**

- Store markers với màu sắc theo category
- Click marker để xem thông tin store
- Legend hiển thị categories
- Popup info khi select store

### MapFilters

Category checkboxes và location controls.

**Props:**

- `selectedCategories: ('STORAGE' | 'GARAGE' | 'PARKING')[]`
- `onCategoryToggle: (category) => void`
- `onRefreshLocation: () => void`
- `storeCount: number`

**Features:**

- 3 category checkboxes (STORAGE, GARAGE, PARKING)
- Refresh location button (GPS)
- Store count display
- "地区を表示する" action button

### LocationSearchSection

Container component kết hợp Map và Filters.

**Props:**

- `stores: StoreLocation[]`

**Features:**

- Grid layout (2/3 map, 1/3 filters)
- Category filtering state management
- Geolocation API integration

## Data Structure

### StoreLocation Type

```typescript
{
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: 'STORAGE' | 'GARAGE' | 'PARKING';
  address: string;
  distance?: number; // in meters
}
```

### Category Colors

```typescript
{
  STORAGE: '#E91E63',  // Pink
  GARAGE: '#1E3A8A',   // Blue
  PARKING: '#F59E0B',  // Orange
}
```

## Page Structure

### /current-location/page.tsx

**Sections:**

1. Breadcrumb (ホーム › 店舗を探す › 現在地から探す)
2. LocationSearchSection (Map + Filters)
3. SearchFeature (Reused component)
4. ContactCTASection

## SEO Optimization

**Meta Tags:**

- Title: "現在地から探す | 近くのトランクルーム・ガレージ・駐車場 | ROOT"
- Description with keywords
- Open Graph tags
- Twitter Card

**JSON-LD Schemas:**

1. WebPage
2. BreadcrumbList
3. ItemList (all store locations with geo coordinates)

## Geolocation Integration

```typescript
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    position => {
      // Update map center
      // Fetch nearby stores
    },
    error => {
      console.error('Error:', error);
    },
  );
}
```

## Category Filtering

State-based filtering:

```typescript
const [selectedCategories, setSelectedCategories] = useState([
  'STORAGE',
  'GARAGE',
  'PARKING',
]);

const filteredStores = stores.filter(store =>
  selectedCategories.includes(store.category),
);
```

## Map Implementation

**Current:** Simplified version với placeholder image

**Production:** Sử dụng một trong các libraries:

- `react-leaflet` (Open source, free)
- `@react-google-maps/api` (Google Maps)
- `mapbox-gl` (Mapbox)

### Example với react-leaflet:

```typescript
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

<MapContainer center={[lat, lng]} zoom={13}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {stores.map(store => (
    <Marker key={store.id} position={[store.lat, store.lng]}>
      <Popup>{store.name}</Popup>
    </Marker>
  ))}
</MapContainer>
```

## Reusable Components

1. **Breadcrumb** - Có thể tách ra thành shared component
2. **SearchFeature** - Đã được reuse từ store-search
3. **ContactCTASection** - Shared component

## Styling

**Colors:**

- STORAGE: Pink (#E91E63)
- GARAGE: Blue (#1E3A8A)
- PARKING: Orange (#F59E0B)
- Map background: Gray-100
- Filters: White with shadow

**Layout:**

- Desktop: 2/3 map + 1/3 filters (grid)
- Mobile: Stack vertically

## Accessibility

- Checkbox labels với proper associations
- Button ARIA labels
- Keyboard navigation
- Screen reader support

## Performance

- Conditional rendering (`if (!isOpen) return null`)
- Memoization for filtered stores
- Lazy load map library (production)
- Optimize marker rendering

## Future Enhancements

1. **Real Map Integration**
   - Integrate Google Maps or Leaflet
   - Real-time user location
   - Distance calculations

2. **Advanced Filtering**
   - Distance radius slider
   - Price range filter
   - Availability filter

3. **Directions**
   - Route to selected store
   - Walking/driving directions
   - Estimated time

4. **Clustering**
   - Marker clustering for many stores
   - Performance optimization

## Usage Example

```tsx
import { LocationSearchSection } from '@/features/location-search/components';
import { storeLocations } from '@/features/location-search/data/location-search.data';

export default function Page() {
  return <LocationSearchSection stores={storeLocations} />;
}
```

## Dependencies

**Current:**

- React
- Next.js
- Tailwind CSS
- shadcn/ui components

**For Production Map:**

```json
{
  "react-leaflet": "^4.2.1",
  "leaflet": "^1.9.4"
}
```

Or:

```json
{
  "@react-google-maps/api": "^2.19.2"
}
```

## Notes

- Map sử dụng placeholder image hiện tại
- Markers được positioned statically (top/left %)
- Geolocation API cần HTTPS
- Cần user permission cho location access
- Distance tính toán simplified (production cần proper geo formulas)
