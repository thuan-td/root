'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useUseCases } from '../hooks';

export function UseCasesSection() {
  const { data: useCases, isLoading } = useUseCases();

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
            活用事例
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="h-64 bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          活用事例
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases?.map(useCase => (
            <div key={useCase.id}>
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={useCase.imageUrl}
                  alt={`${useCase.category} - ${useCase.title}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h4 className="font-black text-xs uppercase mb-1">
                {useCase.category}
              </h4>
              <h3 className="font-bold text-sm mb-2">{useCase.title}</h3>
              <p className="text-xs text-gray-400">{useCase.tags}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="rounded-full px-10">
            一覧を見る
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
