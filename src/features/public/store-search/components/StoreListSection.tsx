/**
 * Store List Section Component
 * Displays list of stores with pagination
 */

'use client';

import { useState } from 'react';
import { StoreListCard } from './StoreListCard';
import { Pagination } from './Pagination';
import { CardLink } from '@/components/common/card-link';
import type { Store } from '../data/store-search.data';
import { ChevronRight } from 'lucide-react';

interface StoreListSectionProps {
  stores: Store[];
  itemsPerPage?: number;
}

export function StoreListSection({
  stores,
  itemsPerPage = 10,
}: StoreListSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(stores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStores = stores.slice(startIndex, endIndex);

  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-3xl font-black text-slate-900">店舗一覧</h2>
          <div className="flex items-center gap-6">
            <p className="text-sm font-medium">
              全 <span className="text-xl font-bold">199</span> 件
            </p>
            <select className="border border-slate-200 rounded-md px-4 py-2 text-sm bg-slate-50 font-bold">
              <option>並び替え</option>
              <option>賃料が安い順</option>
              <option>広い順</option>
            </select>

            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                1
              </button>
              <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-xs font-bold hover:bg-slate-200">
                2
              </button>
              <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-xs font-bold hover:bg-slate-200">
                3
              </button>
              <span className="py-2">...</span>
              <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-xs font-bold">
                11
              </button>
              <button className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">
            店舗一覧
            <span className="ml-4 text-lg text-gray-600">
              全{stores.length}件 {currentPage}ページ目
            </span>
          </h2>
        </div>

        {/* Store list */}
        <div className="space-y-4 mb-8">
          {currentStores.map(store => (
            <CardLink key={store.id} id={store.id} url="/storage">
              <StoreListCard {...store} />
            </CardLink>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
