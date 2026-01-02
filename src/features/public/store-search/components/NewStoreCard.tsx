/**
 * New Store Card Component
 * Displays newly opened stores
 */

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { NewStore } from '../data/store-search.data';

interface NewStoreCardProps extends NewStore {}

export function NewStoreCard({
  title,
  address,
  imageUrl,
  date,
  badge,
}: NewStoreCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        {badge && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-primary text-primary-foreground font-bold">
              {badge}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="text-xs text-gray-500 mb-2">{date}</div>
        <h3 className="font-bold text-base mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{address}</p>
      </CardContent>
    </Card>
  );
}
