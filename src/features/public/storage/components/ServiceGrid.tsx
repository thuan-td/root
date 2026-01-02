/**
 * Service Grid Component
 * Displays the three main services (Storage, Garage, Parking)
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import type { StorageService } from '../types';

interface ServiceGridProps {
  services: StorageService[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  const getServiceNumber = (index: number) => {
    return (index + 1).toString().padStart(2, '0');
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case 'storage':
        return '#c8102e';
      case 'garage':
        return '#b8860b';
      case 'parking':
        return '#d2691e';
      default:
        return '#c8102e';
    }
  };

  return (
    <section className="bg-surface-light py-16 dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold">
          ルートの
          <span className="border-b-2 border-primary text-primary">3つ</span>
          のサービス
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="relative overflow-hidden border-t-4 bg-white shadow-md dark:bg-background-dark"
              style={{ borderTopColor: getServiceColor(service.type) }}
            >
              <div
                className="absolute left-4 top-4 text-sm font-bold"
                style={{ color: getServiceColor(service.type) }}
              >
                {getServiceNumber(index)}
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold uppercase tracking-wider">
                  {service.title}
                </CardTitle>
                <Badge
                  className="mx-auto mt-2 rounded-full px-2 py-0.5 text-xs text-white"
                  style={{ backgroundColor: getServiceColor(service.type) }}
                >
                  {service.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4 h-40 overflow-hidden rounded bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <ul className="mb-6 list-inside list-disc space-y-1 text-xs text-gray-600 dark:text-gray-300">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link
                    href={service.link}
                    className="inline-flex items-center rounded-full border px-6 py-2 text-xs transition-colors hover:text-white"
                    style={{
                      borderColor: getServiceColor(service.type),
                      color: getServiceColor(service.type),
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = getServiceColor(
                        service.type,
                      );
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    詳細はこちら <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
