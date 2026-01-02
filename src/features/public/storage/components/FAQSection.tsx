/**
 * FAQ Section Component
 * Displays frequently asked questions with accordion
 */

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="bg-surface-light py-16 dark:bg-surface-dark">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold">よくある質問</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map(faq => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-lg border-none bg-white shadow-sm dark:bg-background-dark"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <div className="flex items-start gap-4 text-sm font-bold">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                    Q
                  </span>
                  <span className="flex-1">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0">
                <p className="pl-10 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center rounded-full bg-primary px-12 py-3 text-sm text-white shadow-lg transition-colors hover:bg-red-700"
          >
            一覧を見る <span className="ml-1">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
