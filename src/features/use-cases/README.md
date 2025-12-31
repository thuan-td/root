# Use Cases Feature

Tính năng hiển thị các use case (活用事例) - ví dụ sử dụng dịch vụ của khách hàng.

## Tổng quan

Feature này bao gồm:

- Danh sách các use case với filter theo service và usage type
- Customer reviews/testimonials
- Hero image
- Related articles (sẽ implement sau)
- Contact CTA section

## Cấu trúc file

```
use-cases/
├── components/
│   ├── use-case-card.tsx           # Card hiển thị use case
│   ├── use-case-link.tsx           # Client component cho navigation
│   ├── use-cases-filters.tsx       # Filter buttons (Client)
│   ├── customer-review-card.tsx    # Customer review card
│   └── index.ts                    # Barrel export
├── data/
│   └── dummy.ts                    # Mock data
├── types/
│   └── index.ts                    # TypeScript types
└── README.md                       # File này
```

## Components

### Server Components

**UseCaseCard** - Hiển thị use case card

- Image với overlay title
- Description (line-clamp-4)
- Tags
- Arrow icon

**CustomerReviewCard** - Hiển thị customer review

- Avatar với colors khác nhau
- Star rating
- Review title và content

### Client Components

**UseCaseLink** - Wrapper component cho navigation

- Sử dụng `useRouter` để navigate
- Keyboard accessible (Enter, Space)

**UseCasesFilters** - Filter component

- 2 nhóm filter: Service và Usage
- Active state tracking
- Callbacks cho filter changes

## Data Models

### UseCase

```typescript
{
  id: string
  caseNumber: number
  title: string
  description: string
  imageUrl: string
  serviceType: ServiceType
  usageType: UsageType
  tags: string[]
}
```

### CustomerReview

```typescript
{
  id: string;
  name: string;
  age: string;
  occupation: string;
  prefecture: string;
  serviceType: string;
  rating: number(1 - 5);
  title: string;
  content: string;
  avatarUrl: string;
  avatarColor: 'blue' | 'red' | 'orange' | 'teal';
}
```

## Pattern: Server + Client Components

Feature này sử dụng **Composition Pattern**:

### ❌ Cách SAI

```tsx
'use client';
export function UseCaseCard({ useCase }) {
  const router = useRouter(); // Toàn bộ phải client-side
  return <div onClick={() => router.push(...)}>{/* ... */}</div>
}
```

### ✅ Cách ĐÚNG

```tsx
// use-case-card.tsx (Server Component)
export function UseCaseCard({ useCase }) {
  return (
    <UseCaseLink useCaseId={useCase.id}>
      {/* Render server-side ✅ */}
    </UseCaseLink>
  );
}

// use-case-link.tsx (Client Component)
('use client');
export function UseCaseLink({ useCaseId, children }) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/use-cases/${useCaseId}`)}>{children}</div>
  );
}
```

## SEO Optimization

- ✅ Metadata (title, description, keywords)
- ✅ OpenGraph tags
- ✅ Breadcrumb JSON-LD schema
- ✅ Semantic HTML structure
- ✅ Alt text cho images
- ✅ Server-side rendering cho content

## Styling

Sử dụng:

- Tailwind CSS utility classes
- shadcn/ui components (Button, Badge)
- Font Awesome icons
- Material Icons (optional)
- Responsive design (mobile-first)

## Usage

```tsx
import { UseCaseCard, UseCasesFilters } from '@/features/use-cases/components';
import { USE_CASES_PAGE_DATA } from '@/features/use-cases/data/dummy';

export default function UseCasesPage() {
  const data = USE_CASES_PAGE_DATA;

  return (
    <div>
      <UseCasesFilters
        onServiceFilter={type => console.log(type)}
        onUsageFilter={type => console.log(type)}
      />

      <div className="grid grid-cols-3 gap-8">
        {data.useCases.map(useCase => (
          <UseCaseCard key={useCase.id} useCase={useCase} />
        ))}
      </div>
    </div>
  );
}
```

## Tích hợp với components có sẵn

- **Header**: From `@/components/layouts/header`
- **Footer**: From `@/components/layouts/Footer`
- **Button**: From `@/components/ui/button`
- **Badge**: From `@/components/ui/badge`

## Future Enhancements

- [ ] Implement filter functionality (currently only console.log)
- [ ] Add pagination
- [ ] Add related articles section
- [ ] Implement individual use case detail page (`/use-cases/[id]`)
- [ ] Add loading states
- [ ] Add error handling
- [ ] Connect to real API
- [ ] Add search functionality
- [ ] Add share buttons

## Accessibility

- ✅ Keyboard navigation support
- ✅ ARIA roles
- ✅ Alt text for images
- ✅ Semantic HTML
- ✅ Focus indicators

## Performance

- ✅ Next.js Image optimization
- ✅ Server Components for static content
- ✅ Client Components only where needed
- ✅ Code splitting
- ✅ Lazy loading images
