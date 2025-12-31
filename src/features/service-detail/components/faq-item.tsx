/**
 * FAQ Item Component
 *
 * Displays a single FAQ question/answer with collapsible functionality
 * Client Component for interactivity
 */

'use client';

import { useState } from 'react';
import type { FAQ } from '../types';

interface FAQItemProps {
  faq: FAQ;
}

export function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(faq.isOpen || false);

  return (
    <div className="bg-white dark:bg-background-dark rounded-lg p-4 shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <div className="flex items-center font-bold text-sm">
          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mr-3 text-xs">
            Q
          </span>
          {faq.question}
        </div>
        <span className="material-icons text-gray-400">
          {isOpen ? 'remove' : 'add'}
        </span>
      </div>
      {isOpen && faq.answer && (
        <div className="mt-4 pl-9 text-xs text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 pt-2">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
