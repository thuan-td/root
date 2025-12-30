import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StoreCardProps {
  title: string;
  address: string;
  station: string;
  price: number;
  imageUrl: string;
  category: 'STORAGE' | 'GARAGE' | 'PARKING';
  available?: boolean;
}

const categoryColors = {
  STORAGE: 'border-primary',
  GARAGE: 'border-blue-900',
  PARKING: 'border-yellow-600',
};

export function StoreCard({
  title,
  address,
  station,
  price,
  imageUrl,
  category,
  available = true,
}: StoreCardProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-br-lg">
          ROOT
        </div>
      </div>

      <CardContent className="p-6">
        {available && (
          <Badge
            variant="outline"
            className="border-green-500 text-green-500 mb-2"
          >
            予約受付中
          </Badge>
        )}

        <h3 className="font-bold text-lg mb-2">{title}</h3>

        <p className="text-xs text-muted-foreground mb-3">
          {address}
          <br />
          {station}
        </p>

        <div className="border-t pt-3 flex items-end justify-between">
          <div className="font-bold">
            月額 <span className="text-xl">{price.toLocaleString()}</span> 円
          </div>
          <span
            className={`font-black text-xs uppercase tracking-widest border-b-2 ${categoryColors[category]}`}
          >
            {category}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
