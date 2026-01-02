import { Login } from '@/features/public/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン | ROOT Storage',
  description:
    'ROOT Storageにログインして、トランクルーム、ガレージ、駐車場の管理や予約を行えます。',
};

export default function LoginPage() {
  return <Login />;
}
