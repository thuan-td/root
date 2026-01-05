'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  href: string;
  icon: string;
  label: string;
  badge?: string;
  badgeColor?: string;
  isActive?: boolean;
}

function SidebarLink({
  href,
  label,
  badge,
  badgeColor = 'teal',
  isActive = false,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-between px-3 py-2 rounded-md transition-colors group',
        isActive
          ? 'bg-white dark:bg-gray-800 shadow-sm'
          : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50',
      )}
    >
      <span className={cn('text-sm', isActive && 'text-primary font-bold')}>
        {label}
      </span>
      {badge && badgeColor === 'teal' && (
        <span className="material-icons-outlined text-teal-500 text-sm">
          check_circle
        </span>
      )}
      {!badge && (
        <span
          className={cn(
            'material-icons-outlined text-primary text-sm transition-opacity',
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
          )}
        >
          chevron_right
        </span>
      )}
    </Link>
  );
}

interface SidebarSectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

function SidebarSection({ title, icon, children }: SidebarSectionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center px-2 py-2 text-gray-800 dark:text-gray-200 font-bold border-b border-gray-300 dark:border-gray-600 pb-2 mb-2">
        <span className="material-icons-outlined mr-3 text-primary text-xl">
          {icon}
        </span>
        <span className="text-sm">{title}</span>
      </div>
      <nav className="space-y-1 pl-2">{children}</nav>
    </div>
  );
}

interface DashboardSidebarProps {
  userName?: string;
}

export default function DashboardSidebar({
  userName = '山田 太郎',
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-72 bg-[#F5F0E6] dark:bg-sidebar-dark px-4 py-8 md:min-h-screen border-r border-transparent dark:border-gray-700 space-y-8 flex-shrink-0">
      {/* User Name */}
      <div className="mb-6 px-2">
        <p className="font-bold text-gray-900 dark:text-white text-sm">
          {userName}様のマイページ
        </p>
      </div>

      {/* MyPage TOP Link */}
      <div className="space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center px-2 py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <span className="material-icons-outlined mr-3 text-primary text-xl">
            home
          </span>
          <span className="text-sm font-medium">マイページTOP</span>
        </Link>
      </div>

      {/* Property Information Section */}
      <SidebarSection title="物件情報" icon="apartment">
        <SidebarLink
          href="/dashboard/contract"
          icon="check_circle"
          label="ご契約中"
          badge="check"
          isActive={pathname === '/dashboard/contract'}
        />
        <SidebarLink
          href="/dashboard/pending-orders"
          icon="chevron_right"
          label="受付注文中"
          isActive={pathname === '/dashboard/pending-orders'}
        />
        <SidebarLink
          href="/dashboard/favorites"
          icon="chevron_right"
          label="お気に入り"
          isActive={pathname === '/dashboard/favorites'}
        />
        <SidebarLink
          href="/dashboard/payment-status"
          icon="chevron_right"
          label="お支払い状況"
          isActive={pathname === '/dashboard/payment-status'}
        />
      </SidebarSection>

      {/* Customer Information Section */}
      <SidebarSection title="お客様情報" icon="person_outline">
        <SidebarLink
          href="/dashboard/profile"
          icon="chevron_right"
          label="会員情報変更"
          isActive={pathname === '/dashboard/profile'}
        />
        <SidebarLink
          href="/dashboard/change-password"
          icon="chevron_right"
          label="パスワード変更"
          isActive={pathname === '/dashboard/change-password'}
        />
        <SidebarLink
          href="/dashboard/credit-card"
          icon="chevron_right"
          label="クレジットカード情報"
          isActive={pathname === '/dashboard/credit-card'}
        />
        <SidebarLink
          href="/dashboard/bank-account"
          icon="chevron_right"
          label="引き落とし口座情報"
          isActive={pathname === '/dashboard/bank-account'}
        />
        <SidebarLink
          href="/dashboard/payment-account"
          icon="chevron_right"
          label="お支払い専用口座"
          isActive={pathname === '/dashboard/payment-account'}
        />
        <SidebarLink
          href="/dashboard/notifications"
          icon="chevron_right"
          label="通知設定"
          isActive={pathname === '/dashboard/notifications'}
        />
      </SidebarSection>

      {/* Other Section */}
      <SidebarSection title="その他" icon="more_horiz">
        <SidebarLink
          href="/dashboard/faq"
          icon="chevron_right"
          label="よくある質問・お問い合わせ"
          isActive={pathname === '/dashboard/faq'}
        />
        <SidebarLink
          href="/dashboard/cancellation"
          icon="chevron_right"
          label="解約手続き"
          isActive={pathname === '/dashboard/cancellation'}
        />
      </SidebarSection>

      {/* Logout Button */}
      <div className="pt-6 pb-12 px-2">
        <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-primary text-primary dark:text-white dark:border-white rounded-full hover:bg-primary-light dark:hover:bg-gray-700 transition-colors text-sm font-bold bg-white dark:bg-transparent">
          <span className="material-icons-outlined text-lg">logout</span>
          <span>ログアウト</span>
        </button>
      </div>
    </aside>
  );
}
