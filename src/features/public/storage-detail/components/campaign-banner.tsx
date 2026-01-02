/**
 * Campaign Banner Component
 *
 * Displays promotional campaign information
 */

import { Badge } from '@/components/ui/badge';
import { Campaign } from '../types';

interface CampaignBannerProps {
  campaign: Campaign;
}

export function CampaignBanner({ campaign }: CampaignBannerProps) {
  return (
    <div className="bg-promo-green-bg border border-green-200 p-4 rounded-md flex gap-4">
      {/* Icon Section */}
      <div className="hidden sm:flex flex-col items-center justify-center bg-green-500 text-white p-2 rounded w-20 shrink-0 text-center">
        <i className="fa-solid fa-bullhorn text-xl mb-1" />
        <span className="text-xs font-bold">キャンペーン</span>
      </div>

      {/* Content Section */}
      <div className="text-sm text-gray-700 dark:text-gray-300">
        <h3 className="font-bold text-promo-green-text mb-1 text-lg">
          <Badge className="bg-yellow-300 text-black px-1 rounded mr-1 text-xs align-middle">
            {campaign.badge}
          </Badge>{' '}
          {campaign.title}
        </h3>
        <p className="text-xs leading-relaxed whitespace-pre-line">
          {campaign.description}
          <span className="text-gray-500 mt-1 block">
            &lt;キャンペーン適用条件&gt;
            <br />
            {campaign.conditions.map((condition, index) => (
              <span key={index}>
                {condition}
                <br />
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
}
