import Icon from '@/assets/icons/comment.svg';
import Image from 'next/image';

export function CommentIcon({ className }: { className?: string }) {
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
