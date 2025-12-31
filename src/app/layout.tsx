import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { QueryProvider } from '@/lib/query/QueryProvider';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/Footer';
import '@/styles/globals.css';
import 'leaflet/dist/leaflet.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'モバイルホーム - 日本全国のモバイルホーム検索・予約サイト',
  description:
    '日本全国のモバイルホームを簡単に検索・予約。旅行、長期滞在、イベントなど様々な用途でご利用いただけます。',
  keywords: [
    'モバイルホーム',
    'キャンピングカー',
    'レンタル',
    '日本',
    '旅行',
    '予約',
  ],
  openGraph: {
    title: 'モバイルホーム - 日本全国のモバイルホーム検索・予約サイト',
    description:
      '日本全国のモバイルホームを簡単に検索・予約。旅行、長期滞在、イベントなど様々な用途でご利用いただけます。',
    locale: 'ja_JP',
    type: 'website',
    siteName: 'モバイルホーム',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'モバイルホーム - 日本全国のモバイルホーム検索・予約サイト',
    description:
      '日本全国のモバイルホームを簡単に検索・予約。旅行、長期滞在、イベントなど様々な用途でご利用いただけます。',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans">
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
