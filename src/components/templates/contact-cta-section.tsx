import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ContactCTASection() {
  return (
    <section className="bg-blue-400 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-card rounded-xl shadow-2xl p-10 text-center">
          <h3 className="font-bold text-lg mb-6">
            ご相談されたい方は、お気軽にお問い合わせフォームよりご連絡ください。
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Phone Section */}
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-sm">TEL.</span>
                <span className="font-bold text-4xl md:text-5xl text-primary font-sans">
                  045-263-9715
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-xs">
                  営業時間
                </Badge>
                <span className="text-xs font-bold text-muted-foreground">
                  平日 9:45〜17:30 土日祝休み
                </span>
              </div>
            </div>

            {/* Email Button */}
            <div className="w-full md:w-auto">
              <Button
                size="lg"
                className="w-full md:w-auto px-12 bg-blue-500 hover:bg-blue-600"
              >
                <Mail className="mr-2" />
                お問い合わせ
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
