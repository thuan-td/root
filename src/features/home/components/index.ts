// ========================================
// SERVER COMPONENTS (for SEO & Static Pages)
// ========================================
// Use these for homepage, landing pages, and SEO-critical content
// Data is fetched server-side and pre-rendered

export { HeroSection } from './hero-section';
export { SearchSection } from './search-section';
export { UsageBannerSection } from './usage-banner-section';
export { ContactCTASection } from './contact-cta-section';

// Server Components with async API fetching
export { FeaturedStoresWrapper } from './featured-stores-wrapper';
export { NewsWrapper } from './news-wrapper';
export { ServicesWrapper } from './services-wrapper';
export { FAQWrapper } from './faq-wrapper';

// ========================================
// CLIENT COMPONENTS (for Dynamic Features)
// ========================================
// Use these for pages that need:
// - Real-time data updates
// - User filtering, sorting, searching
// - Pagination or infinite scroll
// - Interactive features

export { UseCasesSection } from './use-cases-section';
export { ColumnSection } from './column-section';

// ========================================
// SHARED TEMPLATES
// ========================================
export { NewsCard } from '../../../components/templates/news-card';
export { StoreCard } from '../../../components/templates/store-card';
