import Logo from '@/assets/imgs/Logo.png';
import Image from 'next/image';

export function LogoImage() {
  return (
    <div>
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
