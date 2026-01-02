/**
 * Use Case Link Component
 *
 * Client component wrapper for use case card click navigation
 */

'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface UseCaseLinkProps {
  useCaseId: string;
  children: ReactNode;
}

export function UseCaseLink({ useCaseId, children }: UseCaseLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/use-cases/${useCaseId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer h-full"
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
