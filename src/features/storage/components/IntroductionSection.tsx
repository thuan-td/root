/**
 * Introduction Section Component
 * Displays the service introduction text
 */

interface IntroductionSectionProps {
  title: string;
  description: string[];
}

export function IntroductionSection({ description }: IntroductionSectionProps) {
  return (
    <section className="bg-white py-16 dark:bg-background-dark">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold">
          お利用の
          <span className="border-b-2 border-primary text-primary">ニーズ</span>
          で選べるルートのサービス
        </h2>
        <div className="space-y-4 text-left text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-center">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
