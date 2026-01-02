/**
 * Use Case Card for Landing Page
 *
 * Displays a use case example with image, description, and tags
 */

import Image from 'next/image';
import type { UseCaseItem } from '../types';

interface UseCaseCardLandingProps {
  useCase: UseCaseItem;
}

export function UseCaseCardLanding({ useCase }: UseCaseCardLandingProps) {
  return (
    <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-sm border-t-4 border-primary">
      <h3 className="text-primary font-bold text-lg mb-4">
        Case {String(useCase.caseNumber).padStart(2, '0')}.
      </h3>
      <div className="h-40 bg-gray-200 mb-4 rounded overflow-hidden">
        <Image
          alt={useCase.title}
          src={useCase.imageUrl}
          width={400}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed whitespace-pre-line">
        {useCase.description}
      </p>
      <div className="flex flex-wrap gap-2 text-xs">
        {useCase.tags.map((tag, index) => (
          <span
            key={index}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {tag}
          </span>
        ))}
        <span className="bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]">
          &gt;
        </span>
      </div>
    </div>
  );
}
