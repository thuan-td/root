/**
 * Contact CTA Section Component
 *
 * Contact information and inquiry call-to-action
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ContactCTASection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h3 className="font-bold mb-6 text-sm md:text-base">
          ご相談されたい方は、お問い合わせフォームからお気軽にお問い合わせください。
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Phone */}
          <div className="text-left">
            <div className="flex items-baseline gap-2 text-primary font-bold">
              <span className="text-sm">TEL.</span>
              <span className="text-4xl">045-263-9715</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
              <span className="border border-gray-400 px-1 rounded text-[10px]">
                営業時間
              </span>
              <span>平日 9:45〜17:30/土日祝休業</span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="w-full md:w-auto">
            <Button
              asChild
              className="bg-secondary hover:bg-sky-600 text-white font-bold py-3 px-12 rounded shadow transition w-full"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2"
              >
                <i className="fa-regular fa-envelope" /> お問い合わせ{' '}
                <i className="fa-solid fa-circle-chevron-right" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
