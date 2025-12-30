'use client';

import Link from 'next/link';
import { Menu, User, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import { LogoImage } from '@/components/images';

const LINK_URLS = [
  { href: '/', label: '店舗を探す' },
  { href: '/', label: 'サービス' },
  { href: '/storage', label: 'ルートとは' },
  { href: '/', label: '活用事例' },
  { href: '/contract-flow', label: 'ご契約の流れ' },
  { href: '/guide', label: 'ご利用ガイド' },
  { href: '/news', label: 'お知らせ' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur shadow-sm border-b">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoImage />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-col items-end space-y-2">
            {/* Top Row - Contact Info */}
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center text-primary font-bold">
                <Phone className="w-4 h-4 mr-1" />
                0120-161-857
              </span>
              <span>(平日 9:45〜17:30)</span>
              <Link
                href="/login"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <User className="w-4 h-4" />
                ログイン
              </Link>
            </div>

            {/* Bottom Row - Main Nav */}
            <nav className="flex space-x-6 text-sm font-bold">
              {LINK_URLS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Inquiry Button */}
          <div className="hidden md:block ml-4">
            <Link href="/contact">
              <Button className="bg-blue-500 hover:bg-blue-600 flex flex-col items-center h-auto py-3 px-4">
                <Mail className="w-5 h-5" />
                <span className="text-xs mt-1">お問い合わせ</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link href="/stores" className="hover:text-primary py-2">
                店舗を探す
              </Link>
              <Link href="/services" className="hover:text-primary py-2">
                サービス
              </Link>
              <Link href="/about" className="hover:text-primary py-2">
                ROOTについて
              </Link>
              <Link href="/use-cases" className="hover:text-primary py-2">
                活用事例
              </Link>
              <Link href="/contract-flow" className="hover:text-primary py-2">
                ご契約の流れ
              </Link>
              <Link href="/guide" className="hover:text-primary py-2">
                ご利用ガイド
              </Link>
              <Link href="/news" className="hover:text-primary py-2">
                お知らせ
              </Link>
              <Link href="/login" className="hover:text-primary py-2">
                ログイン
              </Link>
              <Link href="/contact">
                <Button className="w-full">お問い合わせ</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
