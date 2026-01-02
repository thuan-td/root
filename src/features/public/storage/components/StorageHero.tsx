/**
 * Storage Hero Section Component
 * Displays the hero section with 24/7 availability message
 */

import Image from 'next/image';

interface StorageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  stats: {
    hours: string;
    days: string;
  };
}

export function StorageHero({ title, image, stats }: StorageHeroProps) {
  return (
    <section className="relative">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-8 pt-12 sm:px-6 md:flex-row lg:px-8">
        <div className="mb-8 w-full md:mb-0 md:w-1/2">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            <span className="mb-2 block text-primary">{title}</span>
            <span className="text-5xl text-primary md:text-6xl">
              {stats.hours}
            </span>
            時間いつでも
          </h1>
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>

      <div className="mt-[-100px] bg-primary pb-16 pt-32 text-white md:mt-[-150px]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24 mb-12 h-64 w-full overflow-hidden rounded-lg shadow-2xl md:-mt-32 md:h-96">
            <Image
              src={image}
              alt="People moving boxes into storage"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              ご契約のその日から
              <span className="text-4xl md:text-5xl">{stats.hours}</span>時間
              <span className="text-4xl md:text-5xl">{stats.days}</span>日
            </h2>
            <p className="text-lg font-bold md:text-2xl">
              いつでも自由に荷物の出し入れが可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
