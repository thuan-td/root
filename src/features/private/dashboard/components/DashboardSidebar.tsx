'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';

import {
  HomeIcon,
  PropertyIcon,
  UserIcon,
  CommentIcon,
} from '@/components/icons';

interface SidebarLinkProps {
  href: string;
  label: string;
  isSpecial?: boolean; // Cho mục "ご契約中" có style khác
  isActive?: boolean;
}

function SidebarLink({ href, label, isSpecial = false }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-between px-4 py-3 ml-6 rounded-md transition-all group relative',
        isSpecial
          ? 'bg-white text-button-active underline rounded-full my-1 shadow-sm'
          : 'text-gray-800 hover:bg-gray-100/50',
      )}
    >
      <span className={cn('text-[13px] font-medium', isSpecial && 'font-bold')}>
        {label}
      </span>

      <div
        className={cn(
          'w-5 h-5 rounded-full flex items-center justify-center text-white',
          isSpecial ? 'bg-[#3AB091]' : 'bg-[#C72424]',
        )}
      >
        <span className="material-icons-outlined !text-[13px] font-black pl-[1px]">
          {isSpecial ? 'arrow_forward_ios' : 'arrow_forward_ios'}
        </span>
      </div>
    </Link>
  );
}

interface SidebarSectionProps {
  title: string;
  Icon: any;
  children: React.ReactNode;
}

function SidebarSection({ title, Icon, children }: SidebarSectionProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center py-3 font-bold border-b border-gray-300 mb-2 mt-4">
        <Icon className="mr-3 text-[#E67E6E] w-8" size={10} strokeWidth={1.5} />
        <span className="text-[15px]">{title}</span>
      </div>
      <nav className="flex flex-col">{children}</nav>
    </div>
  );
}

export default function DashboardSidebar({ userName = '山田 太郎' }) {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-72 text-base px-5 py-6 min-h-screen space-y-4">
      <div className="pb-2">
        <p className="font-bold text-black text-xl">
          {userName} 様のマイページ
        </p>
      </div>

      {/* Mục TOP */}
      <Link href="/dashboard" className="flex items-center py-3 text-base">
        <HomeIcon className="w-8 h-8 mr-2" />
        <span className="text-[15px] font-bold">マイページTOP</span>
      </Link>

      {/* Section: 物件情報 */}
      <SidebarSection title="物件情報" Icon={PropertyIcon}>
        <SidebarLink
          href="/dashboard/contract"
          label="ご契約中"
          isSpecial={true}
          isActive={pathname === '/dashboard/contract'}
        />
        <SidebarLink
          href="/dashboard/holding"
          label="仮押さえ中"
          isActive={pathname === '/dashboard/holding'}
        />
        <SidebarLink href="/dashboard/favorites" label="お気に入り" />
        <SidebarLink href="/dashboard/payment-status" label="お支払い状況" />
      </SidebarSection>

      {/* Section: お客様情報 */}
      <SidebarSection title="お客様情報" Icon={UserIcon}>
        <SidebarLink href="/dashboard/profile" label="会員情報変更" />
        <SidebarLink href="#" label="パスワード変更" />
        <SidebarLink href="#" label="クレジットカード情報" />
        <SidebarLink href="#" label="引き落とし口座情報" />
        <SidebarLink href="#" label="お支払い専用口座" />
        <SidebarLink href="/dashboard/notifications" label="通知設定" />
      </SidebarSection>

      {/* Section: その他 */}
      <SidebarSection title="その他" Icon={CommentIcon}>
        <SidebarLink href="#" label="お問合わせ" />
        <SidebarLink href="#" label="解約手続き" />
      </SidebarSection>

      {/* Logout */}
      <div className="pt-8 pb-10">
        <button className="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-[#C72424] text-[#C72424] rounded-full bg-white font-bold text-[14px] hover:bg-red-50 transition-colors">
          <LogOut size={18} />
          <span>ログアウト</span>
        </button>
      </div>
    </aside>
  );
}
