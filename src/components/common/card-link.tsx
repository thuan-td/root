/**
 * Nearby Store Link Component
 *
 * Client component wrapper for store card click navigation
 */

'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface StoreLinkProps {
  id: string;
  children: ReactNode;
  className?: string;
  url: string;
}

export function CardLink({
  id,
  children,
  url,
  className = '',
}: StoreLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${url}/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      role="link"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
}
