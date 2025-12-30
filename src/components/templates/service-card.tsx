'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServicesCardProps {
  id: string;
  number: string;
  title: string;
  imageUrl: string;
  description: string;
  borderColor: string;
}

export function ServicesCard({
  id,
  number,
  title,
  imageUrl,
  description,
  borderColor,
}: ServicesCardProps) {
  return (
    <Card
      key={id}
      className={`p-6 text-center relative pt-12 border-t-4 ${borderColor}`}
    >
      <span className="absolute top-4 left-4 text-xs font-black text-primary">
        {number}
      </span>

      <h3 className="font-black text-xl mb-4 tracking-widest uppercase">
        {title}
      </h3>

      <div className="h-40 overflow-hidden rounded mb-4 relative">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <p className="text-xs text-muted-foreground mb-6 text-left leading-relaxed">
        {description}
      </p>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        詳細はこちら
        <ArrowRight className="ml-1 w-3 h-3" />
      </Button>
    </Card>
  );
}
