'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useColumns } from '../hooks';

export function ColumnSection() {
  const { data: columns, isLoading } = useColumns();

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
            コラム&お役立ち情報
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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
          コラム&お役立ち情報
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {columns?.map(column => (
            <article key={column.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3 h-48">
                <Image
                  src={column.imageUrl}
                  alt={column.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-xs text-gray-500 mb-1">{column.date}</p>
              <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition">
                {column.title}
              </h3>
              <p className="text-xs text-gray-400">{column.tags}</p>
            </article>
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
