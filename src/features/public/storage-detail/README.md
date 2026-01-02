# Storage Detail Feature

This feature provides a comprehensive storage facility detail page with SEO optimization and reusable components.

## Overview

The Storage Detail feature displays detailed information about individual storage facilities, including:

- Image gallery with thumbnails
- Campaign/promotion banners
- Facility amenities and features
- Available storage units with pricing
- Floor plans
- Contract flow process
- Nearby stores
- Related areas and stations
- Contact information

## File Structure

```
storage-detail/
├── components/
│   ├── campaign-banner.tsx         # Campaign promotion banner
│   ├── contact-cta-section.tsx     # Contact call-to-action
│   ├── contract-flow-section.tsx   # Contract process steps
│   ├── facility-grid.tsx           # Facility amenities grid
│   ├── floor-plan-section.tsx      # Floor plan display
│   ├── image-gallery.tsx           # Image gallery with thumbnails
│   ├── location-section.tsx        # Map and location info
│   ├── nearby-store-card.tsx       # Individual store card
│   ├── nearby-stores-section.tsx   # Nearby stores list
│   ├── related-areas-section.tsx   # Related areas and stations
│   ├── storage-breadcrumb.tsx      # Breadcrumb navigation
│   ├── storage-hero-section.tsx    # Main hero section
│   ├── unit-card.tsx               # Individual unit card
│   ├── unit-category-section.tsx   # Collapsible category section
│   ├── units-section.tsx           # All units display
│   └── index.ts                    # Barrel export
├── data/
│   └── dummy.ts                    # Mock data
├── types/
│   └── index.ts                    # TypeScript types
└── README.md                       # This file
```

## Components

### Small Reusable Components

- **StorageBreadcrumb**: Navigation breadcrumb
- **ImageGallery**: Main image with thumbnail gallery (client component)
- **CampaignBanner**: Promotional campaign display
- **FacilityGrid**: Grid of facility amenities
- **UnitCard**: Individual storage unit card
- **UnitCategorySection**: Collapsible unit category (client component)
- **NearbyStoreCard**: Nearby store card

### Section Components

- **StorageHeroSection**: Main hero with images and info
- **LocationSection**: Map and location display
- **UnitsSection**: All unit categories
- **FloorPlanSection**: Floor plan image
- **ContractFlowSection**: Contract process steps
- **NearbyStoresSection**: List of nearby stores
- **RelatedAreasSection**: Related areas and stations
- **ContactCTASection**: Contact information and CTA

## Usage

### Basic Page Implementation

```tsx
import {
  StorageBreadcrumb,
  StorageHeroSection,
  LocationSection,
  UnitsSection,
  FloorPlanSection,
  ContractFlowSection,
  NearbyStoresSection,
  RelatedAreasSection,
  ContactCTASection,
} from '@/features/storage-detail/components';
import { STORAGE_DETAIL_PAGE_DATA } from '@/features/storage-detail/data/dummy';

export default function StorageDetailPage() {
  const data = STORAGE_DETAIL_PAGE_DATA;

  return (
    <>
      <StorageBreadcrumb items={breadcrumbItems} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <StorageHeroSection storage={data.storage} />
        <LocationSection location={data.storage.location} />
        <UnitsSection categories={data.unitCategories} />
        <FloorPlanSection floorPlan={data.floorPlan} />
        <ContractFlowSection steps={data.contractSteps} />
        <NearbyStoresSection stores={data.nearbyStores} />
        <RelatedAreasSection
          stations={data.relatedStations}
          areas={data.relatedAreas}
          prefectures={data.relatedPrefectures}
          storageName={data.storage.name}
        />
      </main>
      <ContactCTASection />
    </>
  );
}
```

## SEO Optimization

The feature includes comprehensive SEO optimization:

### Metadata

- Dynamic title and description
- Keywords
- OpenGraph tags
- Twitter card tags
- Canonical URLs

### Structured Data (JSON-LD)

1. **LocalBusiness Schema**: SelfStorage type with address and geo coordinates
2. **Breadcrumb Schema**: Navigation breadcrumb list
3. **Product/Offer Schema**: Available storage units with pricing

Example metadata generation:

```tsx
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const storage = await getStorageData(params.id);

  return {
    title: `${storage.name} - ROOT STORAGE`,
    description: storage.description,
    openGraph: {
      title: storage.name,
      images: [storage.images[0].url],
    },
  };
}
```

## Data Model

### Main Types

- **StorageDetail**: Complete storage facility information
- **StorageImage**: Image with URL and alt text
- **Campaign**: Promotional campaign details
- **Facility**: Amenity/feature information
- **UnitCategory**: Size category (S/M/L/XL) with units
- **Unit**: Individual storage unit with pricing
- **FloorPlan**: Floor plan image
- **ContractStep**: Contract process step
- **NearbyStore**: Nearby facility information
- **RelatedArea/Station**: Related location links

## Styling

The feature uses:

- Tailwind CSS utility classes
- shadcn/ui components (Button, Badge, Card)
- Custom color variables defined in `globals.css`
- Font Awesome icons for UI elements
- Responsive design with mobile-first approach

### Custom Colors

- `accent-dark`: Darker teal for headings
- `promo-green-bg`: Light green for campaign banners
- `promo-green-text`: Dark green for campaign text
- `surface-light/dark`: Surface colors for cards

## Integration with Existing Components

The feature reuses:

- **Header**: From `@/components/layouts/header`
- **Footer**: From `@/components/layouts/Footer`
- **Button**: From `@/components/ui/button`
- **Badge**: From `@/components/ui/badge`
- **cn utility**: From `@/lib/utils`

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Alt text for all images
- Proper heading hierarchy

## Performance Optimization

- Next.js Image component for optimized images
- Priority loading for hero images
- Lazy loading for thumbnails
- Server-side rendering for SEO
- Client components only where needed (interactivity)

## Future Enhancements

- [ ] Add real API integration
- [ ] Implement unit booking functionality
- [ ] Add user reviews and ratings
- [ ] Implement image lightbox/modal
- [ ] Add virtual tour support
- [ ] Implement availability calendar
- [ ] Add comparison feature
- [ ] Implement favorites/wishlist

## License

Part of ROOT Storage project
