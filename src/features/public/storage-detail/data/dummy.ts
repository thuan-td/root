/**
 * Storage Detail Dummy Data
 *
 * Mock data for the storage detail page
 */

import {
  StorageDetailPageData,
  StorageDetail,
  UnitCategory,
  FloorPlan,
  ContractStep,
  NearbyStore,
} from '../types';

/**
 * Main storage facility data
 */
export const STORAGE_KOIWA: StorageDetail = {
  id: 'koiwa-root-storage',
  name: '小岩ルートストレージ',
  address: '124-0006 東京都葛飾区小岩1丁目1番1号',
  area: '東京都葛飾区',
  prefecture: '東京都',
  city: '葛飾区',
  postalCode: '124-0006',
  access: '小岩駅西葛西駅から徒歩15分',
  images: [
    {
      id: 'img-1',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXWmw0Aq_TXoGg3L0U7_EdG2Ca3Jfj3Q8QECAWigClGFHLaqcM0JXLcpaBre78Kkb2Q8z8w0Su01uv5Ct778Y_NgjlQIKkdsn3cistOnch8hoofkF8xSyGE6spC4BYd0ZeTPeRN494Zwfhz4jgQWi9k5fxL36s-PvPng-6yNwe2Px-X7ePTfLeNAyzlY052yZgH2Mwiw-RuzDiXA59wfJGDPgDqiuox3VWH42p5J2Z2gRhU9d6mjaD7BleYJ9X1z31LP4mSBw3N6Y',
      alt: 'Main Store View',
      isMain: true,
    },
    {
      id: 'img-2',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI1ZBaPYyDAYGbsaLIkixiKRVH5NyKmcBQ_vTpXHUWkpYzxDNWDrZuEVLQR9YjV2UBPtzQKusbBdG_XRRg7qjiUSrdLZvfu7ynwnZ_grhMEKtJmcdPlZzkAweJnaVO5GyS1vSaNHT2h971VL4YJirK999Y_iz5kuSm35aWcM3-AvkqnAzCEmmAY8x6L5XY582ROhg9tEK5HYRTqaH8sKT453p1FZdP-GyzOBseNQnfU3JvVavQsB1RpZGz2iE7u77ZBvkkQmOgz6o',
      alt: 'Thumb 1',
    },
    {
      id: 'img-3',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeyKi-oJNXC6cGaYLbFQD6Zk6Ygp5Fq_eYMuIrUQHRi5ikiZjffv0_2o8YGoUMm1Z2aRcaLf4PmAfHIkc4aUiu6_A0xssi1-hkPlMCSLKWNLz8r43_cwRvwTi9cQhKFmIXlR3Cz7sQOvqfTRfEsgwvVJ2Frul0yDR8isYTAa2tZf2HK3qV0xTe0IFFJVCAGCMgaPFju8Mz5J-wmIWAa1aKN5YnHMDjAnQMl1MZfk-tEQDYnXdfXkfE8haCWIQF4BMR6eXWLs-3wD8',
      alt: 'Thumb 2',
    },
    {
      id: 'img-4',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB_qC1pPBJb1fKP9zSWl-HITvKP_FCOKPRUR11oLsV_JIzxD4Zab6fEwF8b2bojFainRjvTOSxcEtq3i4g_eLvwB9-KNpdO_9NcrFUvCIPp8GLUgI1lWZe4ainIaTbVtYuIxc91ukTgGKuR-Omv7VEGaxiFOMagFMtCrk24RInD2fB2gsLUZOYr_0Pj6Gf7x5uSSl1j6U54iq4L1nhG0cK0m4FfQWwOznS5dQh09N-SiRBeBs-bWimt-eGpUA3u8P_HkStwmsr63-g',
      alt: 'Thumb 3',
    },
    {
      id: 'img-5',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN3txKW3mbyyU5Cp1D9HQV-gn-KWT_5xpJx-AWh9I_iztCOZC5cVDD_7P-BOjjqKQl-B1-RogfQCWBPEmBXv8Rfk7Dw-TtAeYXODigNU9Ds0jzQmEHJ3-KuIGzA6KHJUlGWySPhs0UgBLgGFvwPowMU-2WO1nVKHZAZiXSbWmhddNNdTuwN2mEkKeE_m4dbs_LlPkGSZZ1p6z5Ae_ensHAeoi29Z-edTmQC140WxFwPWLYE-a4rJnMBQlyOuUeAHuS-gcksenfHvg',
      alt: 'Thumb 4',
    },
    {
      id: 'img-6',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvRikORCi9DObwGInjaq3KSYOpWH-lKGKAXYfnLkTk4toVxJRM2gYAfV483cxjEoBAbKGVg-WPIpcn1qyVE9ZUdwoG6cfodn5ro7NIPf1ImbgdVZxA3UYZpfIGwUNAgDTxw_Mf8taI-xM7dE3Yz9HSx5I4Qzra-TXCVh-to2sYd4eBAPd5RMbwJFRdc1D7zFKNeQrtxDDfnKvXZF8DvYK6zEQWUJbcbextqBcKZ7H4iEADLmkaOZHKG2bQJBPKZwisUoFepptbrQQ',
      alt: 'Thumb 5',
    },
  ],
  campaign: {
    id: 'campaign-1',
    title: '6ヶ月間分の賃料50%OFF',
    description:
      'このブランクルーム限定の特別キャンペーンです。\nご契約の方は6ヶ月間分の賃料が50%OFFになります。',
    badge: '賃料',
    discountPercentage: 50,
    duration: '6ヶ月間分',
    conditions: ['※6ヶ月以上のご契約の方が対象です。'],
  },
  facilities: [
    { id: 'f1', name: '駐車場無料', icon: 'car', available: true },
    {
      id: 'f2',
      name: 'フリーレント',
      icon: 'clipboard-check',
      available: true,
    },
    { id: 'f3', name: 'コンセント\n無し', icon: 'plug', available: false },
    { id: 'f4', name: 'エアコン完備', icon: 'fan', available: true },
    { id: 'f5', name: '換気扇', icon: 'wind', available: true },
    { id: 'f6', name: '内部階段', icon: 'stairs', available: false },
    { id: 'f7', name: '網戸', icon: 'bug', available: false },
    { id: 'f8', name: '郵便ポスト', icon: 'envelope', available: false },
    { id: 'f9', name: '無料WiFi', icon: 'wifi', available: true },
    { id: 'f10', name: '個別鍵', icon: 'key', available: true },
  ],
  description:
    '小岩澤ルームストレージは、JR常磐線 小岩澤駅から徒歩3分、水戸街道沿いと本町交差点を北に約170m進んだ 北に曲り便利な立地に位置するレンタル収納スペースです。家庭からビジネスの収納ニーズにお応えする、様々なサイズのブランクルームを取り揃え、お客様の収納ニーズに合わせた最適なプランを提案させて頂きます。24時間セキュリティシステム、専任のメンテナンススタッフ・安心の最新設備で、お客様の家具・季節品・ビジネス用品など幅広い収納品を安全に保管します。一本松・小岩澤・豊島・仲六郷を含む側でブランクルームをお探しの方は、アクセスしやすい小岩澤ルームストレージをご利用ください。※こちらの店舗は安心パック1,650円(税込)が毎月発生いたします。',
  location: {
    latitude: 35.7382,
    longitude: 139.8789,
    mapImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAoKQzhn5W9Cbq-9tYbpGXDkbNkOhyLk7n5mnuJGS58Ycnl1CFkbruTP656HrBFHtVYu-z1TQ7WkVmojQnK5Mqh1rJRzmPJTU3B_tcv6yHYdR46lVviPAyr9_5E1K7iZQpdXYg4Uk6roX9ERHJB3Ql88ihQIIrwSgUh-cx8NEtV6LwZ4-uAydsi1iLdD7BSYmcgSl2U4kg0BdH4d0y9CzcTWQ9yg_f79YnExzuQ3rfBMwhcLSanQIUSwM3aDD4A1hnYlKg78mX514',
    accessInstructions: '小岩駅西葛西駅から徒歩15分',
  },
};

/**
 * Unit categories with individual units
 */
export const UNIT_CATEGORIES: UnitCategory[] = [
  {
    id: 'cat-s',
    type: 'S',
    name: '約1.5畳未満',
    sizeRange: '(7,700円〜)',
    priceStart: 7700,
    description:
      '"一人暮らしで収納に困っています！"\n私たちのSタイププランクルームは、自宅のクローゼットを拡張感覚で利用できる丁度いいスペースで、効率的にアイテムを収納することができます。衣類の整理にもう一部屋、パソコンまで収納可能です。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAan3KJ5zGw5jlZvraj4l_P4Ly2VSLbL1G7q-Njx_1ed6wYH4Iiq4fBpMex0BdusXowYriEF-Xc2Tzde4Yaa24Ke3GU-_fCBJJcUA-lsRw4sE_eUz8bb_0ituHOc9fvUwWHxhqFVenuPdchBKivA25XBnUOMrU19bT2bKeofkZVbbuxFoCA2ThiHHZhV57iVeiXWyCmLJQuMfFvCMn8hN3gBDnCvZ_JcTsIsBMN4GYsGz7fiqcMQ5ZDcHL9jHGG-6xKHvLNWcQRwm0',
    units: [
      {
        id: 'unit-s-1',
        unitNumber: '約1.3畳',
        floor: '1F',
        size: '約1.3畳',
        dimensions: { width: 1.1, depth: 1.85, height: 2.1, unit: 'm' },
        originalPrice: 7700,
        campaignPrice: 3850,
        availability: 'full',
        isFeatured: true,
      },
      {
        id: 'unit-s-2',
        unitNumber: '201',
        floor: '2F',
        size: '幅1.1m×奥行1.85m×高さ2.1m',
        dimensions: { width: 1.1, depth: 1.85, height: 2.1, unit: 'm' },
        originalPrice: 7700,
        campaignPrice: 3850,
        availability: 'available',
      },
      {
        id: 'unit-s-3',
        unitNumber: '202',
        floor: '2F',
        size: '幅1.1m×奥行1.85m×高さ2.1m',
        dimensions: { width: 1.1, depth: 1.85, height: 2.1, unit: 'm' },
        originalPrice: 7700,
        campaignPrice: 3850,
        availability: 'available',
      },
    ],
    isExpanded: true,
  },
  {
    id: 'cat-m',
    type: 'M',
    name: '約1.5畳〜約1.8畳未満',
    sizeRange: '(11,000円〜)',
    priceStart: 11000,
    description:
      'Mタイプの収納スペース。小さな部屋の荷物を収納するのに最適です。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAan3KJ5zGw5jlZvraj4l_P4Ly2VSLbL1G7q-Njx_1ed6wYH4Iiq4fBpMex0BdusXowYriEF-Xc2Tzde4Yaa24Ke3GU-_fCBJJcUA-lsRw4sE_eUz8bb_0ituHOc9fvUwWHxhqFVenuPdchBKivA25XBnUOMrU19bT2bKeofkZVbbuxFoCA2ThiHHZhV57iVeiXWyCmLJQuMfFvCMn8hN3gBDnCvZ_JcTsIsBMN4GYsGz7fiqcMQ5ZDcHL9jHGG-6xKHvLNWcQRwm0',
    units: [],
    isExpanded: false,
  },
  {
    id: 'cat-l',
    type: 'L',
    name: '約1.8畳〜約4.0畳未満',
    sizeRange: '(22,000円〜)',
    priceStart: 22000,
    description: 'Lタイプの収納スペース。家具や大きな荷物も収納できます。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAan3KJ5zGw5jlZvraj4l_P4Ly2VSLbL1G7q-Njx_1ed6wYH4Iiq4fBpMex0BdusXowYriEF-Xc2Tzde4Yaa24Ke3GU-_fCBJJcUA-lsRw4sE_eUz8bb_0ituHOc9fvUwWHxhqFVenuPdchBKivA25XBnUOMrU19bT2bKeofkZVbbuxFoCA2ThiHHZhV57iVeiXWyCmLJQuMfFvCMn8hN3gBDnCvZ_JcTsIsBMN4GYsGz7fiqcMQ5ZDcHL9jHGG-6xKHvLNWcQRwm0',
    units: [],
    isExpanded: false,
  },
  {
    id: 'cat-xl',
    type: 'XL',
    name: '約4.0畳〜6.0畳未満',
    sizeRange: '(33,000円〜)',
    priceStart: 33000,
    description: 'XLタイプの収納スペース。広々とした収納が必要な方に最適です。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAan3KJ5zGw5jlZvraj4l_P4Ly2VSLbL1G7q-Njx_1ed6wYH4Iiq4fBpMex0BdusXowYriEF-Xc2Tzde4Yaa24Ke3GU-_fCBJJcUA-lsRw4sE_eUz8bb_0ituHOc9fvUwWHxhqFVenuPdchBKivA25XBnUOMrU19bT2bKeofkZVbbuxFoCA2ThiHHZhV57iVeiXWyCmLJQuMfFvCMn8hN3gBDnCvZ_JcTsIsBMN4GYsGz7fiqcMQ5ZDcHL9jHGG-6xKHvLNWcQRwm0',
    units: [],
    isExpanded: false,
  },
];

/**
 * Floor plan data
 */
export const FLOOR_PLAN: FloorPlan = {
  id: 'floorplan-1',
  title: 'フロアマップ',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBefjM3oohDGBsyuqEYkmQwYrHvjTUw3SnFx2GaniNLmK7_5snKF8dqF9THjAVQXAqpHLJHVGdrWU7jF0g5lHQ0_snnCN0RG3r-yAbsFj2Gx36bxHjC9vFzy7VrHdG2Ucvf6apmMo_tpeq8vfKAotVmAFrxgcXcvre9JjhcL-lQVU6B8koTeOGeZNvTgP8fLL5BGYQTl-RpE2U7w79pkBR5Ip_ClQDoYHTdh10wTh365s5To0zHw4fqfoKmGIwK5l7kIu55Z_eOmpw',
  floors: ['1F', '2F'],
};

/**
 * Contract flow steps
 */
export const CONTRACT_STEPS: ContractStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'お申込み',
    icon: 'file-signature',
    hasStepLabel: true,
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: '審査',
    icon: 'magnifying-glass',
    hasStepLabel: true,
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: '初期費用の\nお支払い',
    icon: 'file-invoice-dollar',
    hasStepLabel: true,
  },
  {
    id: 'step-4',
    stepNumber: 0,
    title: '入居確認',
    icon: 'handshake',
    hasStepLabel: false,
  },
  {
    id: 'step-5',
    stepNumber: 4,
    title: '鍵のお渡し',
    icon: 'key',
    hasStepLabel: true,
  },
];

/**
 * Nearby stores
 */
export const NEARBY_STORES: NearbyStore[] = [
  {
    id: 'store-1',
    name: '小岩ルートストレージ',
    address: '124-0006 東京都葛飾区小岩1丁目1番1号',
    access: '京成線小岩駅西葛西駅から徒歩15分',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvAtJxs4kqWFdN_vNFAOQ1o665tV9eOa1jKPsmEFUROEr6661VFNc5YqsllNervl3AzLWKNUb7c0EGybfPjcszbLFyb0_asx4hI7ETC882cyK3GZShFhvKN6z7aCIZ-GLKtdhFNpGJ9FJDLYx4iACttx6m82iwJYQYUn5yKtBLXKvOOVAX-kMxB-Yh6znSYKjB3h_7p0oLhxRBG5OJQg_LACxdG5hcsSETRwF-xX2QguZJX4b1Xv-Vne_1oNI13y0ysZNW4XsA0RM',
    badge: { text: '予約受付中', variant: 'available' },
    campaign: 'このブランクルーム限定特別キャンペーン！6ヶ月間分賃料が50%OFF',
    type: 'STORAGE',
    units: {
      types: 'S(4室) / M(5室)',
      sizes: '1.3畳〜1.6畳',
    },
    price: {
      min: 7000,
      max: 9900,
    },
    isNew: true,
  },
  {
    id: 'store-2',
    name: '若栗3ルートレガーレ',
    address: '154-0023 東京都世田谷区若栗5-34-8',
    access: '東急田園都市線「若栗」駅 徒歩7分',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPJjpeFlLBQLnVw3GHGMGUcicnnAY3GxCCZkbV6hvfd5mvJT0uFar1PnB5yj-JR87wczMnAPKprQZI3CX32L1aAfX9-0fRD0jxTgUfCMHEMO5zIr7bwaDEPM2qjkD3h1IXLQnvDTkmVRiCMh5d68e9bn-nur1oFT-u4fe7N3jW-WVBHje1NeGhEdABj49eaN1f4iNLAU2VfN9PCToagb7axOS7_R-86LI_VxWQiw0PJqZ2EXeg38IMmBwcoY-xMuh3uny35GcwVGA',
    badge: { text: '予約受付中', variant: 'available' },
    campaign: '【店舗限定特別キャンペーン】2ヶ月間分賃料が無料',
    type: 'PARKING',
    units: {
      types: 'BikeGarage',
      sizes: '6.1畳〜6.2畳',
    },
    price: {
      min: 61000,
      max: 62000,
    },
    isNew: true,
  },
  {
    id: 'store-3',
    name: '多摩センタールートパーキング',
    address: '206-0041 東京都多摩市愛宕4-6-12',
    access: '京王・小田急線「多摩センター駅」から徒歩10分',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJdASHIIjVQ2OIL_8-jZB6IVonSCbhokV1N94jWdLlPwHWRjvwxnBFAnEoEImAUZD9dXhZkD5PqkAuWY-EZ1Z1bo7texkijQFacEdETTgakkW2TYFI0vaihgxPllb5XvNiS-J1M7DOAtFgMvRA_v83XQ5YAodrqR7c1RYpkBZL3yrxSH1Qw3V6os0m0pu6KVep3O2ecvunHXz8YX3TNub4z3kyR7NvKwXf6FhU3fUuwfxgXjCTrmAWhl6i0zoc6a6Bk9sn090zy6w',
    badge: { text: '空きわずか', variant: 'waitlist' },
    campaign: '【店舗限定特別キャンペーン】2ヶ月間分賃料が無料',
    type: 'GARAGE',
    units: {
      types: 'Parking 自動車(12台) / バイク(4台)',
      sizes: '約7.0畳',
    },
    price: {
      min: 12100,
      max: 12100,
    },
    isNew: true,
  },
];

/**
 * Complete page data
 */
export const STORAGE_DETAIL_PAGE_DATA: StorageDetailPageData = {
  storage: STORAGE_KOIWA,
  unitCategories: UNIT_CATEGORIES,
  floorPlan: FLOOR_PLAN,
  contractSteps: CONTRACT_STEPS,
  nearbyStores: NEARBY_STORES,
  relatedStations: [
    { id: 's1', name: '綾瀬駅', count: 999, href: '#' },
    { id: 's2', name: '亀有駅', count: 999, href: '#' },
    { id: 's3', name: '新小岩駅', count: 999, href: '#' },
    { id: 's4', name: '金町駅', count: 999, href: '#' },
    { id: 's5', name: '京成高砂駅', count: 999, href: '#' },
  ],
  relatedAreas: {
    tokyo: [
      { id: 'a1', name: '墨田区', count: 999, href: '#' },
      { id: 'a2', name: '江戸川区', count: 999, href: '#' },
      { id: 'a3', name: '足立区', count: 999, href: '#' },
    ],
    saitama: [
      { id: 'a4', name: '八潮市', count: 999, href: '#' },
      { id: 'a5', name: '三郷市', count: 999, href: '#' },
    ],
    chiba: [{ id: 'a6', name: '松戸市', count: 999, href: '#' }],
  },
  relatedPrefectures: [{ id: 'p1', name: '東京都', count: 999, href: '#' }],
};
