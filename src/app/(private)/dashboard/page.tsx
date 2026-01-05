import { Dashboard } from '@/features/private/dashboard';

export const metadata = {
  title: 'マイページトップ | Root Storage',
  description: 'お客様のマイページ - 契約状況、お支払い情報などを管理',
};

export default function DashboardPage() {
  return <Dashboard />;
}
