/**
 * Location Search Page Data
 * Data for current location search feature
 */

export interface StoreLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: 'STORAGE' | 'GARAGE' | 'PARKING';
  address: string;
  distance?: number; // in meters
}

// Sample store locations in Tokyo area
export const storeLocations: StoreLocation[] = [
  {
    id: '1',
    name: '世田谷ルートストレージ',
    lat: 35.6464,
    lng: 139.6531,
    category: 'STORAGE',
    address: '東京都世田谷区駒沢2-1-3',
    distance: 1200,
  },
  {
    id: '2',
    name: '渋谷ルートガレージ',
    lat: 35.6595,
    lng: 139.7004,
    category: 'GARAGE',
    address: '東京都渋谷区道玄坂1-5-8',
    distance: 800,
  },
  {
    id: '3',
    name: '新宿ルートパーキング',
    lat: 35.6938,
    lng: 139.7034,
    category: 'PARKING',
    address: '東京都新宿区西新宿1-1-1',
    distance: 1500,
  },
  {
    id: '4',
    name: '池袋ルートストレージ',
    lat: 35.7295,
    lng: 139.7109,
    category: 'STORAGE',
    address: '東京都豊島区南池袋1-28-1',
    distance: 2000,
  },
  {
    id: '5',
    name: '品川ルートガレージ',
    lat: 35.6284,
    lng: 139.7387,
    category: 'GARAGE',
    address: '東京都港区高輪3-13-3',
    distance: 1800,
  },
  {
    id: '6',
    name: '目黒ルートストレージ',
    lat: 35.6339,
    lng: 139.7157,
    category: 'STORAGE',
    address: '東京都目黒区目黒1-4-1',
    distance: 950,
  },
  {
    id: '7',
    name: '中目黒ルートパーキング',
    lat: 35.6431,
    lng: 139.6979,
    category: 'PARKING',
    address: '東京都目黒区上目黒3-1-1',
    distance: 600,
  },
  {
    id: '8',
    name: '恵比寿ルートストレージ',
    lat: 35.6467,
    lng: 139.7102,
    category: 'STORAGE',
    address: '東京都渋谷区恵比寿南1-5-5',
    distance: 450,
  },
];

// Default center (Tokyo Station)
export const defaultCenter = {
  lat: 35.6812,
  lng: 139.7671,
};

// Map configuration
export const mapConfig = {
  zoom: 13,
  minZoom: 10,
  maxZoom: 18,
};

// Category colors for markers
export const categoryColors = {
  STORAGE: '#E91E63', // Pink
  GARAGE: '#1E3A8A', // Blue
  PARKING: '#F59E0B', // Orange
};

export const categoryLabels = {
  STORAGE: 'STORAGE',
  GARAGE: 'GARAGE',
  PARKING: 'PARKING',
};
