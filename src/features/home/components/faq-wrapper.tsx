import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getFaqs } from '../services/homeService';

// Server Component - Pre-rendered for SEO with async data fetching
export async function FAQWrapper() {
  const faqs = await getFaqs();

  return (
    <section className="py-16 bg-[#F9F9F4]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          よくあるご質問
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map(faq => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-card rounded-lg shadow-sm px-6 border-none"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-start gap-4 text-left">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    Q
                  </span>
                  <span className="font-bold">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-10 text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <Button className="rounded-full px-10">
            一覧を見る
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
