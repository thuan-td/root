import Logo from '@/assets/imgs/maps/mapJP.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { ImageType } from '@/types/common.types';

export function MapJP({ className, width, height }: ImageType) {
  return (
    <div>
      <Image
        src={Logo}
        alt="logo"
        width={width || 160}
        height={height || 160}
        className={cn('object-contain', className)}
      />
    </div>
  );
}
