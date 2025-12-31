import Icon from '@/assets/icons/train.svg';
import Image from 'next/image';

export function TrainIcon({ className }: { className?: string }) {
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
