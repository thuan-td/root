/**
 * Storage Type Card Component
 *
 * Displays a storage type option with image, details, and recommendations
 */

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { StorageType } from '../types';

interface StorageTypeCardProps {
  storageType: StorageType;
}

export function StorageTypeCard({ storageType }: StorageTypeCardProps) {
  return (
    <div className="bg-white dark:bg-background-dark p-4 rounded-lg shadow-sm">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 mb-4 rounded overflow-hidden">
        <Image
          alt={storageType.name}
          src={storageType.imageUrl}
          width={400}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <Badge className="bg-secondary text-white text-xs px-2 py-1 rounded">
          {storageType.badge}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded"
        >
          {storageType.size}
        </Badge>
      </div>
      <h3 className="font-bold mb-2">{storageType.title}</h3>
      <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded text-xs">
        <p className="text-primary font-bold mb-1">こんな人にお勧め！</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          {storageType.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
