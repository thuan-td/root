import { ServicesCard } from '@/components/templates/service-card';
import { getServices } from '../services/homeService';
import { CardLink } from '../../../components/common/card-link';

// Server Component - Pre-rendered for SEO with async data fetching
export async function ServicesWrapper() {
  const services = await getServices();

  return (
    <section className="py-16 bg-[#F9F9F4]">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          ルートの<span className="text-primary">3</span>つのサービス
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <CardLink key={service.id} id={service.id} url="/services">
              <ServicesCard key={service.id} {...service} />
            </CardLink>
          ))}
        </div>
      </div>
    </section>
  );
}
