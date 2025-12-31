/**
 * Store Search Dropdown Component
 * Dropdown menu for store search with 4 tabs and featured stores
 */

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface StoreSearchDropdownProps {
  isOpen: boolean;
  subMenu?: { href: string; label: string; icon: React.ReactNode }[];
  onClose: () => void;
}

// Sample featured stores
const featuredStores = [
  {
    id: '1',
    title: '契約手数料1万円無料キャンペーン\n中村区名西通ルートストレージ',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    badge: '契約手数料1万円無料キャンペーン',
  },
  {
    id: '2',
    title: '2025年11月上旬\n藤市塚越ルートストレージ\nオープン予定',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    badge: null,
  },
];

export function StoreSearchDropdown({
  isOpen,
  subMenu,
  onClose,
}: StoreSearchDropdownProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('store');

  const handleRedirect = (href: string) => {
    setActiveTab(href);
    router.push(href);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dropdown Content */}
      <div className="absolute left-0 right-0 top-full bg-white shadow-2xl z-50 border-t-4 border-primary">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="container py-8">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {subMenu &&
              subMenu.map(tab => (
                <div
                  key={tab.href}
                  onClick={handleRedirect.bind(null, tab.href)}
                  className={`flex items-center gap-4 px-6 py-3 rounded-lg transition-all`}
                >
                  <div className={`flex items-center justify-center`}>
                    {tab.icon}
                  </div>
                  <span
                    className={cn(
                      'text-sm font-bold whitespace-nowrap hover:text-primary cursor-pointer',
                      activeTab === tab.href
                        ? 'text-black'
                        : 'hover:text-primary',
                    )}
                  >
                    {tab.label}
                  </span>
                </div>
              ))}
          </div>

          {/* Featured Stores */}
          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            {featuredStores.map(store => (
              <div
                key={store.id}
                className="group cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-white border"
              >
                <div className="relative h-48">
                  <Image
                    src={store.imageUrl}
                    alt={store.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {store.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                        {store.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold whitespace-pre-line line-clamp-3">
                    {store.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="px-8 py-2"
              onClick={() => {
                onClose();
                window.location.href = '/store-search';
              }}
            >
              すべての店舗を見る
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
