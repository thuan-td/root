'use client';

import { Search, MapPin, Map, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

interface SearchFeatureProps {
  prefectures: string[];
  usagePurposes: string[];
}

export function SearchFeature({
  prefectures,
  usagePurposes,
}: SearchFeatureProps) {
  return (
    <div className="bg-[#4DB6AC] py-12">
      <div className="container">
        <div className="flex items-center gap-2 mb-6 text-white">
          <Search className="w-8 h-8" />
          <h2 className="text-2xl font-bold">
            Search{' '}
            <span className="text-sm font-normal ml-2">
              トランクルームを探す
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Search */}
          <div className="bg-card rounded-lg p-6 shadow-lg flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-1/2 h-48 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <div className="opacity-30 absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop"
                  alt="関東マップ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-2 text-center">
                {prefectures.map(prefecture => (
                  <Button
                    key={prefecture}
                    variant="secondary"
                    size="sm"
                    className="text-xs rounded-full"
                  >
                    {prefecture}
                  </Button>
                ))}
              </div>
              <span className="absolute top-2 left-2 text-xs font-bold text-muted-foreground">
                マップから探す
              </span>
            </div>

            <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
              <Button
                variant="ghost"
                className="flex items-center gap-3 justify-start w-full group"
              >
                <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                <span className="font-bold">現在地から探す</span>
                <span className="ml-auto text-primary">›</span>
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-3 justify-start w-full group"
              >
                <Map className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                <span className="font-bold">エリアから探す</span>
                <span className="ml-auto text-primary">›</span>
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-3 justify-start w-full group"
              >
                <Train className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                <span className="font-bold">路線・駅から探す</span>
                <span className="ml-auto text-primary">›</span>
              </Button>
            </div>
          </div>

          {/* Purpose & Quick Search */}
          <div className="flex flex-col gap-6">
            {/* Purpose Search */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                用途別検索
              </h3>
              <div className="flex flex-wrap gap-2">
                {usagePurposes.map(purpose => (
                  <Button
                    key={purpose}
                    variant="secondary"
                    size="sm"
                    className="text-sm"
                  >
                    {purpose}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Search */}
            <div className="bg-card rounded-lg p-6 shadow-lg flex-grow">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                簡易検索
              </h3>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="用途" />
                  </SelectTrigger>
                  <SelectContent>
                    {usagePurposes.map(purpose => (
                      <SelectItem key={purpose} value={purpose.toLowerCase()}>
                        {purpose}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <span className="self-center text-muted-foreground">×</span>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="エリア" />
                  </SelectTrigger>
                  <SelectContent>
                    {prefectures.map(prefecture => (
                      <SelectItem
                        key={prefecture}
                        value={prefecture.toLowerCase()}
                      >
                        {prefecture}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button className="px-6">
                  <Search className="w-4 h-4 mr-1" />
                  検索
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Search Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-2xl flex flex-wrap lg:flex-nowrap items-center gap-4">
          <div className="text-xl font-black shrink-0">
            用途とエリアから簡単検索
          </div>

          <div className="flex-grow flex items-center gap-4">
            <div className="relative flex-grow">
              <select className="w-full bg-gray-100 rounded-lg h-12 px-4 appearance-none font-medium">
                <option>用途</option>
                <option>家財</option>
                <option>ビジネス</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>

            <div className="text-gray-300">×</div>

            <div className="relative flex-grow">
              <select className="w-full bg-gray-100 rounded-lg h-12 px-4 appearance-none font-medium">
                <option>エリア</option>
                <option>東京</option>
                <option>神奈川</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>
          </div>

          <button className="bg-[#BF0000] text-white h-12 px-12 rounded-lg font-bold flex items-center hover:bg-red-800 transition-all shrink-0">
            <Search size={18} className="mr-2" /> 検索
          </button>
        </div>
      </div>
    </div>
  );
}
