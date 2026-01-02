/**
 * Area Search Content Component
 * Main content component for area search page
 */

'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import type { Prefecture } from '../data/area-search.data';

interface AreaSearchContentProps {
  prefectures: Prefecture[];
}

export function AreaSearchContent({ prefectures }: AreaSearchContentProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [multiSelectMode, setMultiSelectMode] = useState(false);

  const handleAreaToggle = (areaId: string) => {
    setSelectedAreas(prev =>
      prev.includes(areaId)
        ? prev.filter(id => id !== areaId)
        : [...prev, areaId],
    );
  };

  const handleSelectAll = (areas: { id: string; count: number }[]) => {
    const availableAreaIds = areas
      .filter(area => area.count > 0)
      .map(area => area.id);
    setSelectedAreas(prev => {
      const allSelected = availableAreaIds.every(id => prev.includes(id));
      if (allSelected) {
        return prev.filter(id => !availableAreaIds.includes(id));
      } else {
        return [...new Set([...prev, ...availableAreaIds])];
      }
    });
  };

  return (
    <div className="w-full pb-16">
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue={prefectures[0].id} className="w-full">
          {/* Prefecture Tabs */}
          <TabsList className="w-full justify-start mb-8 bg-white dark:bg-gray-800 border-b h-auto p-0">
            {prefectures.map(prefecture => (
              <TabsTrigger
                key={prefecture.id}
                value={prefecture.id}
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3"
              >
                <span className="font-bold">{prefecture.name}</span>
                <span className="ml-2 text-gray-500">({prefecture.count})</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="multi-select"
                checked={multiSelectMode}
                onCheckedChange={checked =>
                  setMultiSelectMode(checked as boolean)
                }
              />
              <Label
                htmlFor="multi-select"
                className="text-sm font-medium cursor-pointer"
              >
                複数選択
              </Label>
            </div>
            <div className="flex-grow">
              <Input
                type="text"
                placeholder="エリア名で検索"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="max-w-md"
              />
            </div>
            {selectedAreas.length > 0 && (
              <Button
                variant="outline"
                onClick={() => setSelectedAreas([])}
                className="whitespace-nowrap"
              >
                選択解除 ({selectedAreas.length})
              </Button>
            )}
          </div>

          {/* Prefecture Content */}
          {prefectures.map(prefecture => (
            <TabsContent key={prefecture.id} value={prefecture.id}>
              {prefecture.sections.map(section => {
                const filteredAreas = section.areas.filter(area =>
                  area.name.toLowerCase().includes(searchQuery.toLowerCase()),
                );

                if (filteredAreas.length === 0) return null;

                return (
                  <div key={section.id} className="mb-10">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                      <h2 className="text-xl font-bold">
                        {section.title}
                        <span className="ml-2 text-gray-500 text-base">
                          ({section.count})
                        </span>
                      </h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSelectAll(filteredAreas)}
                        className="text-primary hover:text-primary"
                      >
                        すべて選択
                      </Button>
                    </div>

                    {/* Area Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {filteredAreas.map(area => {
                        const isDisabled = area.count === 0;
                        const isSelected = selectedAreas.includes(area.id);

                        return (
                          <div
                            key={area.id}
                            className={`border rounded-lg p-4 transition ${
                              isDisabled
                                ? 'bg-gray-50 dark:bg-gray-900 cursor-not-allowed opacity-50'
                                : isSelected
                                  ? 'bg-primary/10 border-primary cursor-pointer hover:bg-primary/20'
                                  : 'bg-white dark:bg-gray-800 cursor-pointer hover:border-primary hover:shadow-sm'
                            }`}
                            onClick={() => {
                              if (!isDisabled) {
                                if (multiSelectMode) {
                                  handleAreaToggle(area.id);
                                } else {
                                  // Single select mode - navigate or select
                                  setSelectedAreas([area.id]);
                                }
                              }
                            }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-grow">
                                <p
                                  className={`font-medium mb-1 ${
                                    isDisabled
                                      ? 'text-gray-400'
                                      : 'text-gray-900 dark:text-white'
                                  }`}
                                >
                                  {area.name}
                                </p>
                                <p
                                  className={`text-sm ${
                                    isDisabled
                                      ? 'text-gray-400'
                                      : 'text-gray-500 dark:text-gray-400'
                                  }`}
                                >
                                  {area.count}件
                                </p>
                              </div>
                              {multiSelectMode && !isDisabled && (
                                <Checkbox
                                  checked={isSelected}
                                  onCheckedChange={() =>
                                    handleAreaToggle(area.id)
                                  }
                                  onClick={e => e.stopPropagation()}
                                />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          ))}
        </Tabs>

        {/* Search Button */}
        {selectedAreas.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button size="lg" className="rounded-full px-8">
              選択したエリアで検索 ({selectedAreas.length})
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
