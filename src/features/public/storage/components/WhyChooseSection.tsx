/**
 * Why Choose Section Component
 * Displays reasons to choose ROOT storage service
 */

import Image from 'next/image';
import type { WhyChooseReason } from '../types';

interface WhyChooseSectionProps {
  reasons: WhyChooseReason[];
}

export function WhyChooseSection({ reasons }: WhyChooseSectionProps) {
  return (
    <section className="bg-white py-16 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-2xl font-bold">
          <span className="text-primary">ルート</span>が選ばれる理由
        </h2>
        <div className="space-y-16">
          {reasons.map((reason, index) => {
            const isLeftImage = index % 2 === 0;

            return (
              <div
                key={reason.id}
                className={`relative flex flex-col items-center gap-8 ${
                  isLeftImage ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      width={600}
                      height={256}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div
                  className={`hidden md:absolute md:left-1/2 md:top-1/2 md:block md:z-10 md:h-1 md:w-8 md:-translate-x-1/2 md:-translate-y-1/2 md:transform md:bg-primary`}
                ></div>
                <div
                  className={`w-full md:w-1/2 ${isLeftImage ? 'md:pl-8' : 'md:pr-8'}`}
                >
                  <h3 className="mb-4 text-lg font-bold">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {reason.description.split('\n\n').map((paragraph, idx) => (
                      <span key={idx}>
                        {paragraph}
                        {idx < reason.description.split('\n\n').length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
