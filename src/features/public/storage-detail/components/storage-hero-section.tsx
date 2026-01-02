/**
 * Storage Hero Section Component
 *
 * Main hero section with images and facility information
 */

import Link from 'next/link';
import { StorageDetail } from '../types';
import { ImageGallery } from './image-gallery';
import { CampaignBanner } from './campaign-banner';
import { FacilityGrid } from './facility-grid';

interface StorageHeroSectionProps {
  storage: StorageDetail;
}

export function StorageHeroSection({ storage }: StorageHeroSectionProps) {
  return (
    <section>
      {/* Header */}
      <div className="flex items-baseline gap-4 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">
        <span className="bg-black text-white px-2 py-0.5 text-sm font-bold tracking-wider">
          STORAGE
        </span>
        <h1 className="text-2xl md:text-3xl font-bold">
          {storage.name} ({storage.area})
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <ImageGallery images={storage.images} />

        {/* Right: Information */}
        <div className="space-y-6">
          {/* Campaign Banner */}
          {storage.campaign && <CampaignBanner campaign={storage.campaign} />}

          {/* Address & Access */}
          <div className="space-y-4 text-sm">
            {/* Address */}
            <div className="flex items-start justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
              <div>
                <h4 className="font-bold text-accent-dark dark:text-teal-400 mb-1">
                  住所
                </h4>
                <p>{storage.address}</p>
              </div>
              <Link
                href="#location"
                className="flex flex-col items-center text-primary text-xs hover:opacity-80"
              >
                <i className="fa-solid fa-map-location-dot text-2xl" />
                <span>MAP</span>
              </Link>
            </div>

            {/* Access */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
              <h4 className="font-bold text-accent-dark dark:text-teal-400 mb-1">
                アクセス
              </h4>
              <p>{storage.access}</p>
            </div>
          </div>

          {/* Facilities */}
          <FacilityGrid facilities={storage.facilities} />

          {/* Description */}
          <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <h4 className="font-bold text-accent-dark dark:text-teal-400 mb-2">
              ご案内事項
            </h4>
            <p>{storage.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
