import Icon from '@/assets/icons/Location.svg';
import Image from 'next/image';

export function LocationIcon({ className }: { className?: string }) {
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
