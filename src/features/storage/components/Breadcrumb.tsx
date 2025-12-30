/**
 * Breadcrumb Component
 * Displays navigation breadcrumb trail
 */

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { BreadcrumbItem } from '../types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="bg-gray-50 px-4 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400 sm:px-6 lg:px-8"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="mx-1 h-3 w-3" />}
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
