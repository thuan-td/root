/**
 * Related Areas Section Component
 *
 * Displays links to related areas and stations
 */

import Link from 'next/link';
import { RelatedArea, RelatedStation } from '../types';

interface RelatedAreasSectionProps {
  stations: RelatedStation[];
  areas: {
    tokyo: RelatedArea[];
    saitama: RelatedArea[];
    chiba: RelatedArea[];
  };
  prefectures: RelatedArea[];
  storageName: string;
}

export function RelatedAreasSection({
  stations,
  areas,
  prefectures,
  storageName,
}: RelatedAreasSectionProps) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-bold text-primary border-b border-gray-300 dark:border-gray-700 pb-2 mb-4">
        東京都葛飾区の近隣エリアから店舗を探す
      </h2>
      <div className="space-y-4 text-xs">
        {/* Nearby Stations */}
        <div>
          <h3 className="font-bold mb-2">
            {storageName}の近隣店舗を周辺の駅から探す
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-secondary">
            {stations.map(station => (
              <Link
                key={station.id}
                href={station.href}
                className="hover:underline"
              >
                {station.name}(XXX件)
              </Link>
            ))}
          </div>
        </div>

        {/* Neighboring Cities */}
        <div>
          <h3 className="font-bold mb-2">
            {storageName}の近隣店舗を隣接する市区町村から探す
          </h3>

          {/* Tokyo */}
          <div className="text-gray-500 mb-1 font-bold">東京都</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-secondary mb-2">
            {areas.tokyo.map(area => (
              <Link key={area.id} href={area.href} className="hover:underline">
                {area.name}(XXX件)
              </Link>
            ))}
          </div>

          {/* Saitama */}
          <div className="text-gray-500 mb-1 font-bold">埼玉県</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-secondary mb-2">
            {areas.saitama.map(area => (
              <Link key={area.id} href={area.href} className="hover:underline">
                {area.name}(XXX件)
              </Link>
            ))}
          </div>

          {/* Chiba */}
          <div className="text-gray-500 mb-1 font-bold">千葉県</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-secondary">
            {areas.chiba.map(area => (
              <Link key={area.id} href={area.href} className="hover:underline">
                {area.name}(XXX件)
              </Link>
            ))}
          </div>
        </div>

        {/* Prefectures */}
        <div>
          <h3 className="font-bold mb-2">
            {storageName}の店舗所在の都道府県から他の店舗を探す
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-secondary">
            {prefectures.map(prefecture => (
              <Link
                key={prefecture.id}
                href={prefecture.href}
                className="hover:underline"
              >
                {prefecture.name}(XXX件)
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
