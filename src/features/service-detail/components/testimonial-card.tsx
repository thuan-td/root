/**
 * Testimonial Card Component
 *
 * Displays customer testimonial with avatar and rating
 */

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fa${index < rating ? 's' : 'r'} fa-star text-primary text-sm`}
      />
    ));
  };

  return (
    <div className="flex-1 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 relative">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border border-gray-300">
          <Image
            alt={testimonial.name}
            src={testimonial.avatarUrl}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-primary text-sm mb-1 flex gap-1">
            {renderStars(testimonial.rating)}
          </div>
          <div className="font-bold text-sm">{testimonial.title}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 border-b border-gray-100 pb-2">
        <span className="font-bold text-gray-800 dark:text-gray-200">
          {testimonial.name} 様
        </span>
        <span>{testimonial.age}</span>
        <span>{testimonial.occupation}</span>
      </div>
      <div className="flex gap-2 mb-4">
        <Badge
          variant="secondary"
          className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded"
        >
          {testimonial.prefecture}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded"
        >
          {testimonial.serviceType}
        </Badge>
      </div>
      <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
        {testimonial.content}
      </p>
    </div>
  );
}
