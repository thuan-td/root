/**
 * FAQ Section Component
 * Displays frequently asked questions with accordion
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQ } from '../data/store-search.data';

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-4xl">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          よくあるご質問
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map(faq => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border rounded-lg px-6 bg-gray-50"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-start gap-4 text-left">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                    Q
                  </span>
                  <span className="font-medium">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm">
                    A
                  </span>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* View all link */}
        <div className="text-center mt-8">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-red-600 hover:underline font-medium"
          >
            一覧を見る
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
