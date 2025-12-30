/**
 * Image Gallery Component
 *
 * Displays main image with thumbnail gallery
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StorageImage } from '../types';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: StorageImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    images.find(img => img.isMain) || images[0],
  );

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <Image
          alt={selectedImage.alt}
          className="w-full h-full object-cover"
          src={selectedImage.url}
          width={800}
          height={450}
          priority
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-2">
        {images.map(image => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={cn(
              'aspect-square object-cover rounded cursor-pointer transition-all',
              selectedImage.id === image.id
                ? 'border-2 border-primary'
                : 'border border-gray-200 dark:border-gray-700 hover:opacity-80',
            )}
          >
            <Image
              alt={image.alt}
              src={image.url}
              width={150}
              height={150}
              className="w-full h-full object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
