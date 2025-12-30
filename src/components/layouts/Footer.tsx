import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

import { LogoImage } from '@/components/images';
import { ArrowRightIcon } from '@/components/icons';

const CATEGORIES_LINKS = {
  店舗を探す: [
    { name: '現在地から探す', href: '/' },
    { name: 'エリアから探す', href: '/' },
    { name: '路線・駅から探す', href: '/' },
  ],
  サービス: [
    { name: 'ルートストレージ', href: '/' },
    { name: 'ルートガレージ', href: '/' },
    { name: 'ルートパーキング', href: '/' },
  ],
  ルートとは: [{ name: 'ご契約の流れ', href: '/' }],
  ご利用ガイド: [
    { name: 'ご契約に必要なもの', href: '/' },
    { name: 'お支払いについて', href: '/' },
    { name: '初期費用について', href: '/' },
    { name: 'ご解約について', href: '/' },
  ],
  よくある質問: [
    { name: 'コラム＆お役立ち情報', href: '/' },
    { name: 'キャンペーン', href: '/' },
    { name: 'お知らせ', href: '/' },
    { name: 'お問い合わせ', href: '/' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#F6F6F6] text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          {/* Logo */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start">
            <LogoImage />
            <div>
              <p className="mt-4 text-sm uppercase">follow us</p>
              <div className="flex space-x-4 mt-5 lg:10">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          {/* CATEGORY LINKS */}
          {Object.entries(CATEGORIES_LINKS).map(([category, links]) => (
            <div key={category} className="mb-6">
              <h3 className="font-semibold text-black mb-4 no-underline lg:underline  border-b border-black pb-1 lg:border-0 flex justify-between">
                {category}
                <ArrowRightIcon className="inline-block lg:hidden w-4 h-4 ml-2" />
              </h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-block hover:translate-x-4 transition-transform duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-x-5 text-[#5d5d5d]">
          <Link className="underline" href="/">
            企業情報
          </Link>
          <Link className="underline text-[#5d5d5d]" href="/">
            プライバシーポリシー
          </Link>
          <Link className="underline text-[#5d5d5d]" href="/">
            特定商取引法に基づく表示
          </Link>
        </div>

        <div className="flex justify-between border-t border-gray-800 mt-8 pt-8 text-center text-sm text-[#5d5d5d] flex-col md:flex-row gap-4">
          <p>〒101-0048 東京都千代田区神田司町2-2-11 新倉ビル2階</p>
          <p>&copy; 2025 モバイルホーム. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
