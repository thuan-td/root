# Storage Service Feature

## Overview

This feature implements a comprehensive storage service page for the ROOT platform, showcasing storage solutions, garages, and parking services. The page is optimized for SEO and built with reusable components.

## Features

### ✅ SEO Optimization

- **Meta Tags**: Complete meta tags including title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **JSON-LD Structured Data**:
  - LocalBusiness schema for company information
  - BreadcrumbList for navigation
  - FAQPage schema for Q&A content
  - Service schema for storage offerings
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Canonical URLs**: Prevents duplicate content issues

### 🧩 Reusable Components

All components are modular and can be reused across different pages:

#### 1. **Breadcrumb** (`Breadcrumb.tsx`)

- Navigation trail component
- Props: `items: BreadcrumbItem[]`
- Usage: Can be used on any page requiring breadcrumb navigation

#### 2. **StorageHero** (`StorageHero.tsx`)

- Hero section with 24/7 availability message
- Props: `title`, `subtitle`, `image`, `stats`
- Reusable for other service pages

#### 3. **IntroductionSection** (`IntroductionSection.tsx`)

- Service introduction text
- Props: `title`, `description[]`
- Can be adapted for any introduction text

#### 4. **ServiceGrid** (`ServiceGrid.tsx`)

- Grid display of three main services
- Props: `services: StorageService[]`
- Client Component (uses event handlers for hover effects)
- Reusable for displaying any service offerings

#### 5. **UsageExamplesSection** (`UsageExamplesSection.tsx`)

- Alternating layout for usage scenarios
- Props: `examples: UsageExample[]`
- Flexible image shapes (circle/rectangle) and positions (left/right)

#### 6. **StorageItemsSection** (`StorageItemsSection.tsx`)

- Grid of storable items with circular images
- Props: `items: StorageItem[]`
- Can be used for showcasing any product/item categories

#### 7. **WhyChooseSection** (`WhyChooseSection.tsx`)

- Alternating layout for selling points
- Props: `reasons: WhyChooseReason[]`
- Reusable for feature highlights on any page

#### 8. **ReviewsSection** (`ReviewsSection.tsx`)

- Customer testimonials grid
- Props: `reviews: CustomerReview[]`
- Uses shadcn Card and Badge components
- Can be used on any page requiring social proof

#### 9. **FAQSection** (`FAQSection.tsx`)

- Accordion-style FAQ
- Props: `faqs: FAQItem[]`
- Uses shadcn Accordion component
- Reusable for any Q&A content

### 🎨 Shadcn/UI Components Used

The feature leverages the following shadcn/ui components:

1. **Card** - Used in ServiceGrid and ReviewsSection
2. **Badge** - Used in ServiceGrid and ReviewsSection
3. **Accordion** - Used in FAQSection
4. **Button** - Implicit through Link styling

### 📊 TypeScript Types

All types are defined in `/src/features/storage/types/index.ts`:

```typescript
-StorageService - // Service offering data
  StorageFeature - // Feature highlights
  UsageExample - // Usage scenario with layout options
  WhyChooseReason - // Selling point
  StorageItem - // Storable item category
  CustomerReview - // Testimonial data
  FAQItem - // Q&A pair
  StoragePageData - // Complete page data structure
  BreadcrumbItem; // Breadcrumb navigation item
```

### 🎯 Fake Data

Mock data is provided in `/src/features/storage/data/storage.data.ts`:

- Complete page content in Japanese
- Hero section data
- 3 service offerings (Storage, Garage, Parking)
- 3 usage examples with images
- 3 storable item categories
- 3 reasons to choose ROOT
- 2 customer reviews
- 5 FAQ items

## File Structure

```
src/features/storage/
├── components/
│   ├── Breadcrumb.tsx              # Navigation breadcrumb
│   ├── StorageHero.tsx             # Hero section
│   ├── IntroductionSection.tsx     # Service intro
│   ├── ServiceGrid.tsx             # Services grid (Client)
│   ├── UsageExamplesSection.tsx    # Usage scenarios
│   ├── StorageItemsSection.tsx     # Storable items
│   ├── WhyChooseSection.tsx        # Selling points
│   ├── ReviewsSection.tsx          # Customer reviews
│   ├── FAQSection.tsx              # FAQ accordion
│   └── index.ts                    # Component exports
├── types/
│   └── index.ts                    # TypeScript interfaces
├── data/
│   └── storage.data.ts             # Mock data
└── README.md                       # This file
```

## Page Structure

The `/storage` page (`/src/app/storage/page.tsx`) includes:

1. **SEO Setup**
   - Metadata export with complete SEO tags
   - 4 JSON-LD structured data blocks

2. **Page Sections** (in order):
   - Breadcrumb
   - Hero Section (24/7 availability)
   - Introduction
   - Service Grid (Storage, Garage, Parking)
   - Usage Examples (3 scenarios)
   - Storage Items (What can be stored)
   - Why Choose ROOT (3 reasons)
   - Customer Reviews
   - Search Section (from home feature)
   - FAQ Section
   - Contact CTA (from home feature)

3. **Layout**
   - Header (from layouts)
   - Main content
   - Footer (from layouts)

## Usage

### Import Components

```tsx
import {
  Breadcrumb,
  StorageHero,
  IntroductionSection,
  ServiceGrid,
  UsageExamplesSection,
  StorageItemsSection,
  WhyChooseSection,
  ReviewsSection,
  FAQSection,
} from '@/features/storage/components';
```

### Import Data

```tsx
import { storagePageData } from '@/features/storage/data/storage.data';
```

### Use in a Page

```tsx
export default function StoragePage() {
  return (
    <main>
      <StorageHero {...storagePageData.hero} />
      <IntroductionSection {...storagePageData.introduction} />
      <ServiceGrid services={storagePageData.services} />
      {/* ... other sections */}
    </main>
  );
}
```

## Customization

### Adding New Services

Edit `/src/features/storage/data/storage.data.ts`:

```typescript
services: [
  {
    id: '4',
    type: 'custom',
    title: 'New Service',
    subtitle: 'サブタイトル',
    description: '説明',
    image: '/path/to/image.jpg',
    features: ['特徴1', '特徴2', '特徴3'],
    badge: 'バッジ名',
    color: '#custom-color',
    link: '/custom-link',
  },
  // ... existing services
];
```

### Changing Colors

Service colors are defined in the data:

- Storage: `#c8102e` (red)
- Garage: `#b8860b` (gold)
- Parking: `#d2691e` (orange)

### Adding More FAQs

Simply add to the `faqs` array in the data file:

```typescript
faqs: [
  // ... existing FAQs
  {
    id: '6',
    question: '新しい質問',
    answer: '回答内容',
  },
];
```

## SEO Best Practices Implemented

1. ✅ **Metadata**: Complete title, description, keywords
2. ✅ **Open Graph**: Social sharing optimization
3. ✅ **Structured Data**: Multiple JSON-LD schemas
4. ✅ **Semantic HTML**: Proper heading hierarchy
5. ✅ **Alt Text**: All images have descriptive alt attributes
6. ✅ **Mobile Optimization**: Responsive images with sizes attribute
7. ✅ **Internal Linking**: Breadcrumbs and navigation
8. ✅ **Loading Optimization**: Priority loading for hero image
9. ✅ **Accessibility**: ARIA labels and semantic markup

## Performance Considerations

- **Images**: Using Next.js Image component with optimized sizes
- **Code Splitting**: Client components are code-split automatically
- **Static Generation**: Page is pre-rendered at build time
- **Minimal Client JS**: Only ServiceGrid is a Client Component

## Dependencies

- Next.js 14+
- React 18+
- TypeScript 5+
- Tailwind CSS 3+
- shadcn/ui components
- lucide-react (icons)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design from mobile to desktop

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support (via shadcn components)
- Screen reader friendly
- Color contrast compliance

## Future Enhancements

Potential improvements for future iterations:

1. **Interactive Map**: Add location finder with Google Maps
2. **Pricing Calculator**: Dynamic pricing based on size/duration
3. **Booking System**: Integrate reservation functionality
4. **Virtual Tours**: 360° images of storage units
5. **Live Chat**: Customer support integration
6. **Comparison Tool**: Side-by-side service comparison
7. **Testimonial Carousel**: Auto-rotating reviews
8. **Blog Integration**: Storage tips and guides

## Testing

The page builds successfully with:

- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ Proper image optimization
- ✅ SEO metadata validation
- ✅ Responsive layout

Build output:

```
Route (app)              Size     First Load JS
├ ○ /storage             3 kB     152 kB
```

## License

This feature is part of the ROOT mobile home rental platform.
