import { NewsCard } from '@/components/templates/news-card';
import { CardLink } from '@/components/common/card-link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getNewsItems } from '../services/homeService';

// Server Component - Pre-rendered for SEO with async data fetching
export async function NewsWrapper() {
  const newsItems = await getNewsItems();

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          お知らせ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {newsItems.map(item => (
            <CardLink
              key={item.id}
              id={'nishi-tsuruma-storage-opening'}
              url="/news"
              className="text-center"
            >
              <NewsCard {...item} />
            </CardLink>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-full px-10">
            一覧を見る
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
