/**
 * Nearby Store Link Component
 *
 * Client component wrapper for store card click navigation
 */

'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface NearbyStoreLinkProps {
  storeId: string;
  children: ReactNode;
  className?: string;
}

export function NearbyStoreLink({
  storeId,
  children,
  className = '',
}: NearbyStoreLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/storage-detail/${storeId}`);
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
