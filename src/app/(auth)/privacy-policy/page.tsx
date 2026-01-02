'use client';

import PrivacyPolicy from '@/features/public/auth/components/PrivacyPolicy';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/register';

  const handleAgree = () => {
    // Store agreement in sessionStorage
    sessionStorage.setItem('privacyPolicyAgreed', 'true');
    sessionStorage.setItem('termsAgreed', 'true');
    // Navigate back to register page
    router.push(returnUrl);
  };

  return <PrivacyPolicy onAgree={handleAgree} returnUrl={returnUrl} />;
}
