import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StoreCardProps {
  id: string;
  title: string;
  address: string;
  station: string;
  price: number;
  imageUrl: string;
  category: 'STORAGE' | 'GARAGE' | 'PARKING';
  color: string;
  lineText: string;
  available?: boolean;
}

export function StoreCard({
  title,
  address,
  station,
  price,
  imageUrl,
  category,
  color,
  lineText,
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
        {/* <div className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-br-lg">
          ROOT
        </div> */}
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

        <div className="font-bold">
          月額 <span className="text-xl">{price.toLocaleString()}</span> 円
        </div>

        <div className="border-t pt-3 mt-5 flex items-end justify-between">
          <span
            className={`relative font-black text-md uppercase mb-5 tracking-widest`}
          >
            {category}
            <span
              className={`absolute -bottom-3 left-0 right-0 p-0.5 text-[8px] leading-none text-white bg-${color}`}
            >
              {lineText}
            </span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
