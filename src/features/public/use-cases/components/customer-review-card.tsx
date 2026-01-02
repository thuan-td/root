/**
 * Customer Review Card Component
 *
 * Displays customer testimonial/review
 */

import Image from 'next/image';
import { CustomerReview } from '../types';
import { Badge } from '@/components/ui/badge';

interface CustomerReviewCardProps {
  review: CustomerReview;
}

const AVATAR_COLORS = {
  blue: 'bg-blue-50 border-blue-100',
  red: 'bg-red-50 border-red-100',
  orange: 'bg-orange-50 border-orange-100',
  teal: 'bg-teal-50 border-teal-100',
};

const BUBBLE_COLORS = {
  blue: 'bg-red-50 dark:bg-gray-800 border-red-200 dark:border-red-900',
  red: 'bg-red-50 dark:bg-gray-800 border-red-200 dark:border-red-900',
  orange: 'bg-red-50 dark:bg-gray-800 border-red-200 dark:border-red-900',
  teal: 'bg-red-50 dark:bg-gray-800 border-red-200 dark:border-red-900',
};

export function CustomerReviewCard({ review }: CustomerReviewCardProps) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`${
          index < rating ? 'fas' : 'far'
        } fa-star text-xs text-primary dark:text-red-400`}
      />
    ));
  };

  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col md:flex-row gap-6">
      {/* Avatar Section */}
      <div className="flex flex-col items-center shrink-0 w-32">
        <div
          className={`w-20 h-20 rounded-full ${AVATAR_COLORS[review.avatarColor]} border-2 overflow-hidden mb-2`}
        >
          <Image
            alt={review.name}
            src={review.avatarUrl}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="font-bold text-sm dark:text-white">{review.name} 様</p>
          <div className="flex gap-1 justify-center mt-1 text-[10px] text-gray-500">
            <Badge
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-700 px-1 rounded"
            >
              {review.age}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gray-100 dark:bg-gray-700 px-1 rounded"
            >
              {review.occupation}
            </Badge>
          </div>
          <div className="mt-2 text-[10px] text-gray-400">
            <span className="block">{review.prefecture}</span>
            <span className="block">{review.serviceType}</span>
          </div>
        </div>
      </div>

      {/* Review Content */}
      <div className="flex-grow">
        {/* Rating and Title Bubble */}
        <div
          className={`border ${BUBBLE_COLORS[review.avatarColor]} rounded-lg p-4 relative mb-4`}
        >
          <div className="absolute top-1/2 -left-2 w-4 h-4 bg-red-50 dark:bg-gray-800 border-l border-b border-red-200 dark:border-red-900 transform rotate-45 md:block hidden" />
          <div className="flex mb-1">{renderStars(review.rating)}</div>
          <h3 className="font-bold text-sm mb-0 dark:text-white">
            {review.title}
          </h3>
        </div>

        {/* Review Text */}
        <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
          {review.content}
        </p>
      </div>
    </div>
  );
}
