# Public Features

Features available to **all users** without authentication.

## Features Included

### 1. **auth** - Authentication

- Login page
- Registration page
- Password reset
- Social login
- Email verification

### 2. **home** - Homepage

- Hero section
- Featured storage units
- Search functionality
- Services showcase
- FAQs

### 3. **storage** - Storage Listing

- Storage grid/list view
- Filters and sorting
- Search results

### 4. **storage-detail** - Storage Detail

- Individual storage unit pages
- Photos, specs, location
- Booking form
- Reviews

### 5. **store-search** - Store Search

- Advanced search
- Map-based search
- Filter options

### 6. **area-search** - Area Search

- Search by prefecture
- Area-specific results

### 7. **current-location** - Location Search

- GPS-based search
- Nearby storage units

### 8. **use-cases** - Use Cases

- Usage examples
- Customer stories

### 9. **use-case-detail** - Use Case Details

- Individual use case pages

### 10. **service-detail** - Service Details

- Service information pages

### 11. **news** - News & Articles

- Blog posts
- Company news
- Industry updates

## Usage

```tsx
// Import from public features
import { Login } from '@/features/public/auth';
import { Hero } from '@/features/public/home';
import { StorageGrid } from '@/features/public/storage';
```

## Characteristics

- ✅ No authentication required
- ✅ SEO optimized
- ✅ Public routes
- ✅ Accessible to everyone
- ✅ Server-side rendering enabled

## Routes

All public features map to routes without authentication:

- `/` - Home
- `/login` - Auth
- `/register` - Auth
- `/storage` - Storage listing
- `/storage/[id]` - Storage detail
- `/store-search` - Store search
- `/use-cases` - Use cases
- `/news/[slug]` - News
- etc.
