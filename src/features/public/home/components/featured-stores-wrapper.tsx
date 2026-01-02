import { StoreCard } from '@/components/templates/store-card';
import { getFeaturedStores } from '../services/homeService';
import { CardLink } from '@/components/common/card-link';

// Server Component - Pre-rendered for SEO with async data fetching
export async function FeaturedStoresWrapper() {
  const stores = await getFeaturedStores();

  return (
    <section className="py-16 bg-[#F9F9F4]">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          キャンペーン中の
          <span className="text-primary border-b-4 border-primary/20">
            おすすめ
          </span>
          店舗
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map(store => (
            <CardLink key={store.id} id={store.id} url="/storage">
              <StoreCard key={store.id} {...store} />
            </CardLink>
          ))}
        </div>
      </div>
    </section>
  );
}
