import Logo from '@/assets/imgs/banner.webp';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { ImageType } from '@/types/common.types';

export function Banner({ className, width, height }: ImageType) {
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
