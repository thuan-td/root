'use client';

import React, { useState, useEffect, useRef } from 'react';

const IMAGES = [
  'https://picsum.photos/400/500?random=4',
  'https://picsum.photos/400/500?random=5',
  'https://picsum.photos/400/500?random=6',
  'https://picsum.photos/400/500?random=7',
  'https://picsum.photos/400/500?random=8',
  'https://picsum.photos/400/500?random=9',
];

export const AutoScrollingColumn: React.FC = () => {
  const totalOriginal = IMAGES.length;
  const displayImages = [...IMAGES, ...IMAGES, ...IMAGES];

  const [currentIndex, setCurrentIndex] = useState(totalOriginal);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemHeight, setItemHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (firstItemRef.current) {
        const height = firstItemRef.current.offsetHeight + 16; // subtract gap
        setItemHeight(height + 16); // including gap
      }
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }, 4000); // 2s chạy + 2s nghỉ

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    if (currentIndex <= 0) {
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalOriginal);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }

    if (currentIndex >= totalOriginal * 2) {
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalOriginal);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, totalOriginal]);

  return (
    <div className="absolute inset-0 w-full h-full  overflow-hidden">
      <div
        ref={containerRef}
        className={`flex flex-col gap-4 w-full px-2 pt-2 ${
          isTransitioning
            ? 'transition-transform duration-[2000ms] ease-linear'
            : 'transition-none'
        }`}
        style={{
          transform: `translateY(-${currentIndex * itemHeight}px)`,
          willChange: 'transform',
        }}
      >
        {displayImages.map((src, idx) => (
          <div
            key={idx}
            ref={idx === 0 ? firstItemRef : null}
            className="w-full aspect-[4/4] rounded-2xl overflow-hidden flex-shrink-0 ring-1 ring-black/5"
          >
            <img
              src={src}
              alt={`Scroll ${idx}`}
              className="w-full h-full object-cover transform-gpu"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* <div className="absolute inset-x-0 top-0 h-24 z-10"></div>
      <div className="absolute inset-x-0 bottom-0 h-24 z-10"></div> */}
    </div>
  );
};
