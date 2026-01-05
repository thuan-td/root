'use client';

import { SearchFeature } from '@/components/templates/search-feature';

const prefectures = ['東京', '神奈川', '埼玉', '千葉'];
const usagePurposes = ['荷物を保管する', '書類保管', '季節用品', '資材保管'];

export function SearchSection() {
  return (
    <div className="-mt-24 bg-[#4DB6AC] pt-24">
      <SearchFeature
        prefectures={prefectures}
        usagePurposes={usagePurposes}
        isQuickSearchBarVisible={false}
      />
    </div>
  );
}
