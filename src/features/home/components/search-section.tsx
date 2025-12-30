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

const prefectures = ['東京', '神奈川', '埼玉', '千葉'];
const usagePurposes = ['荷物を保管する', '書類保管', '季節用品', '資材保管'];

export function SearchSection() {
  return (
    <section className="bg-[#4DB6AC] py-12">
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
      </div>
    </section>
  );
}
