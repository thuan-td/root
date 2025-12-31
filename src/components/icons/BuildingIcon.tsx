import Icon from '@/assets/icons/Shop.svg';
import Image from 'next/image';

export function BuildingIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src={Icon}
        alt="logo"
        width={160}
        height={160}
        className="object-contain"
      />
    </div>
  );
}
