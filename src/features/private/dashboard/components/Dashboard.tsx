'use client';

import Link from 'next/link';
import DashboardSidebar from './DashboardSidebar';
import { useDashboardData } from '../hooks';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

interface QuickAccessCardProps {
  href: string;
  icon: string;
  label: string;
  count?: number;
}

function QuickAccessCard({ href, icon, label, count }: QuickAccessCardProps) {
  return (
    <Link
      href={href}
      className="bg-white dark:bg-surface-dark rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-soft hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 group relative h-40"
    >
      <span className="material-icons-outlined text-primary text-5xl mb-3 font-light">
        {icon}
      </span>
      <span className="text-sm font-bold text-gray-800 dark:text-white">
        {label}
      </span>
      {count !== undefined && count > 0 && (
        <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
          {count}
        </span>
      )}
      <span className="absolute bottom-3 right-3 material-icons-outlined text-primary text-sm">
        chevron_right
      </span>
    </Link>
  );
}

interface NewsItemProps {
  date: string;
  badge: string;
  badgeType?: 'open' | 'news';
  title: string;
  href?: string;
}

function NewsItem({
  date,
  badge,
  badgeType = 'open',
  title,
  href = '#',
}: NewsItemProps) {
  return (
    <div className="py-4 flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
      <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
        <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
        <span
          className={`${badgeType === 'open' ? 'bg-primary' : 'bg-orange-300'} text-white text-[10px] px-2 py-0.5 rounded font-bold`}
        >
          {badge}
        </span>
      </div>
      <Link
        href={href}
        className="text-sm text-gray-800 dark:text-gray-200 hover:text-primary transition-colors hover:underline"
      >
        {title}
      </Link>
    </div>
  );
}

export default function Dashboard() {
  const { data, isLoading, isError, error } = useDashboardData();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            エラーが発生しました
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {error?.message || 'データの読み込みに失敗しました'}
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { user, stats, news } = data;

  return (
    <div className="text-gray-800 bg-[hsl(var(--background-admin))] dark:text-gray-200 min-h-screen flex flex-col font-body">
      {/* Header */}
      <header className="w-full dark:bg-surface-dark py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-center text-2xl font-bold tracking-wide text-black dark:text-white">
          マイページトップ
        </h1>
      </header>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <DashboardSidebar userName={user.name} />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 space-y-8 ">
          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickAccessCard
              href="/dashboard/favorites"
              icon="favorite_border"
              label="お気に入り物件"
              count={stats.totalFavorites}
            />
            <QuickAccessCard
              href="/dashboard/contract"
              icon="description"
              label="ご契約状況"
              count={stats.activeContracts}
            />
            <QuickAccessCard
              href="/dashboard/payment-status"
              icon="payments"
              label="お支払い状況"
              count={stats.pendingPayments}
            />
          </div>

          {/* News Section */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-soft border border-gray-200 dark:border-gray-700">
            {/* News Header */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
              <h2 className="text-xl font-bold text-primary">お知らせ</h2>
              <Link
                href="/dashboard/news"
                className="text-xs text-primary border border-primary px-4 py-1 rounded-full hover:bg-primary hover:text-white transition-colors flex items-center gap-1"
              >
                お知らせ一覧
                <span className="material-icons-outlined text-sm">
                  chevron_right
                </span>
              </Link>
            </div>

            {/* News List */}
            <div className="space-y-0 divide-y divide-gray-100 dark:divide-gray-700">
              {news.map(item => (
                <NewsItem
                  key={item.id}
                  date={item.date}
                  badge={item.badge}
                  badgeType={item.badgeType}
                  title={item.title}
                  href={item.url}
                />
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center mt-8 pb-10">
            <Link
              href="/contact"
              className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-12 rounded-full shadow-lg flex items-center gap-2 transition-transform transform hover:-translate-y-0.5"
            >
              お問い合わせ
              <span className="material-icons-outlined text-sm">
                chevron_right
              </span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
