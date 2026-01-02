/**
 * Usage Examples Section Component
 * Displays various usage scenarios with alternating layouts
 */

import Image from 'next/image';
import type { UsageExample } from '../types';

interface UsageExamplesSectionProps {
  examples: UsageExample[];
}

export function UsageExamplesSection({ examples }: UsageExamplesSectionProps) {
  return (
    <section className="overflow-hidden bg-white py-16 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl space-y-24 px-4 sm:px-6 lg:px-8">
        {examples.map(example => {
          const isLeftImage = example.imagePosition === 'left';
          const isCircle = example.imageShape === 'circle';

          return (
            <div
              key={example.id}
              className={`flex flex-col items-center gap-12 ${
                isLeftImage ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  {isCircle ? (
                    <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-8 border-surface-light shadow-xl dark:border-gray-700 md:mx-0 md:h-80 md:w-80">
                      <Image
                        src={example.image}
                        alt={example.title}
                        width={320}
                        height={320}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 768px) 256px, 320px"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto h-64 w-full max-w-md overflow-hidden rounded-lg shadow-xl md:ml-auto">
                      <Image
                        src={example.image}
                        alt={example.title}
                        width={448}
                        height={256}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 448px"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="mb-4 text-xl font-bold">
                  <span className="text-2xl text-primary">
                    {example.highlightedWord}
                  </span>
                  {example.title.substring(1)}
                </h3>
                {example.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
