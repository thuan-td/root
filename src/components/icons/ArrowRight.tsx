import Logo from '@/assets/icons/arrow-right.svg';
import Image from 'next/image';

export function ArrowRight({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src={Logo}
        alt="logo"
        width={160}
        height={160}
        className="object-contain"
      />
    </div>
  );
}
