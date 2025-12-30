/**
 * Storage Components Index
 * Export all storage feature components
 */

// ========================================
// SERVER COMPONENTS (for SEO & Static Pages)
// ========================================
export { Breadcrumb } from './Breadcrumb';
export { StorageHero } from './StorageHero';
export { IntroductionSection } from './IntroductionSection';

// ========================================
// CLIENT COMPONENTS (with Event Handlers)
// ========================================
export { ServiceGrid } from './ServiceGrid';
export { UsageExamplesSection } from './UsageExamplesSection';
export { StorageItemsSection } from './StorageItemsSection';
export { WhyChooseSection } from './WhyChooseSection';
export { ReviewsSection } from './ReviewsSection';
export { FAQSection } from './FAQSection';

// ========================================
// SERVER WRAPPER COMPONENTS (⭐ RECOMMENDED FOR SEO)
// ========================================
// Use these for SSR/SSG with full SEO optimization
// Data fetched on server, fully rendered HTML for crawlers
export { ServicesServerWrapper } from './server/ServicesServerWrapper';
export { FAQServerWrapper } from './server/FAQServerWrapper';
export { ReviewsServerWrapper } from './server/ReviewsServerWrapper';
export { UsageExamplesServerWrapper } from './server/UsageExamplesServerWrapper';
export { StorageItemsServerWrapper } from './server/StorageItemsServerWrapper';
export { WhyChooseServerWrapper } from './server/WhyChooseServerWrapper';

// ========================================
// CLIENT WRAPPER COMPONENTS (with React Query)
// ========================================
// Use these ONLY for dynamic pages that need real-time updates
// ⚠️ NOT recommended for SEO-critical pages (content not in initial HTML)
export { ServicesWrapper } from './ServicesWrapper';
export { FAQWrapper } from './FAQWrapper';
export { ReviewsWrapper } from './ReviewsWrapper';
export { UsageExamplesWrapper } from './UsageExamplesWrapper';
export { StorageItemsWrapper } from './StorageItemsWrapper';
export { WhyChooseWrapper } from './WhyChooseWrapper';
