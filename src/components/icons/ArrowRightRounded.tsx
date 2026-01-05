import Logo from '@/assets/icons/arrow-right-red.svg';
import Image from 'next/image';
import type { ImageType } from '@/types/common.types';

export function ArrowRightRounded({ className, width, height }: ImageType) {
  return (
    <div className={className}>
      <Image
        src={Logo}
        alt="logo"
        width={width || 160}
        height={height || 160}
        className="object-contain"
      />
    </div>
  );
}
