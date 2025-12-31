/**
 * News Card Component
 *
 * Displays a news item with image and badge
 */

import Image from 'next/image';
import type { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <span className="absolute top-0 left-0 bg-secondary text-white text-xs px-2 py-1 font-bold z-10">
          {news.badge}
        </span>
        <Image
          alt={news.title}
          src={news.imageUrl}
          width={400}
          height={192}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="text-xs text-gray-500 mb-1">{news.date}</div>
      <h3 className="font-bold text-sm leading-snug">{news.title}</h3>
    </div>
  );
}
