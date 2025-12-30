/**
 * Storage Breadcrumb Component
 *
 * Displays navigation breadcrumb for the storage detail page
 */

import Link from 'next/link';
import { BreadcrumbItem } from '../types';

interface StorageBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function StorageBreadcrumb({ items }: StorageBreadcrumbProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-2 text-xs text-gray-500 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <span key={index}>
            {item.href ? (
              <Link href={item.href} className="hover:underline cursor-pointer">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span> &gt; </span>}
          </span>
        ))}
      </div>
    </div>
  );
}
