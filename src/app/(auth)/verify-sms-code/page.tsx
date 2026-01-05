'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import VerifySmsCode from '@/features/public/auth/components/VerifySmsCode';

function VerifySmsCodeContent() {
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get('phone') || undefined;

  return <VerifySmsCode phoneNumber={phoneNumber} />;
}

export default function VerifySmsCodePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifySmsCodeContent />
    </Suspense>
  );
}
