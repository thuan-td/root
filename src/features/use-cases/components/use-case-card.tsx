/**
 * Use Case Card Component
 *
 * Displays individual use case with image and details
 * Server Component
 */

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { UseCase } from '../types';
import { UseCaseLink } from './use-case-link';

interface UseCaseCardProps {
  useCase: UseCase;
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <UseCaseLink useCaseId={useCase.id}>
      <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 h-full">
        {/* Case Number */}
        <div className="p-4 pb-2">
          <span className="text-xl font-bold dark:text-white">
            Case {useCase.caseNumber.toString().padStart(2, '0')}.
          </span>
        </div>

        {/* Image with overlay title */}
        <div className="relative mx-4 mb-4 group">
          <Image
            alt={`Case ${useCase.caseNumber}`}
            src={useCase.imageUrl}
            width={400}
            height={192}
            className="w-full h-48 object-cover rounded"
          />
          <div className="absolute bottom-4 left-0 right-0 mx-4 bg-white/95 dark:bg-gray-800/95 p-3 text-center shadow border-l-4 border-primary">
            <p className="text-primary font-bold text-sm dark:text-red-400">
              <span className="border-b border-primary dark:border-red-400">
                {useCase.title}
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-4 flex-grow">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
            {useCase.description}
          </p>
        </div>

        {/* Tags and Arrow */}
        <div className="px-6 pb-6 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {useCase.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow shrink-0 ml-2">
              <i className="fas fa-chevron-right text-[10px]" />
            </span>
          </div>
        </div>
      </div>
    </UseCaseLink>
  );
}
