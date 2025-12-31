/**
 * Store Search Page Data
 * Fake data for demonstration
 */

export const storeSearchData = {
  // Filter options
  prefectures: [
    { id: 'tokyo', name: '東京都', storeCount: 120 },
    { id: 'kanagawa', name: '神奈川県', storeCount: 85 },
    { id: 'saitama', name: '埼玉県', storeCount: 65 },
    { id: 'chiba', name: '千葉県', storeCount: 48 },
    { id: 'ibaraki', name: '茨城県', storeCount: 32 },
  ],

  popularStations: [
    { id: 'shinjuku', name: '新宿駅', line: 'JR山手線' },
    { id: 'shibuya', name: '渋谷駅', line: 'JR山手線' },
    { id: 'ikebukuro', name: '池袋駅', line: 'JR山手線' },
    { id: 'yokohama', name: '横浜駅', line: 'JR東海道線' },
    { id: 'kawasaki', name: '川崎駅', line: 'JR東海道線' },
    { id: 'omiya', name: '大宮駅', line: 'JR京浜東北線' },
  ],

  // Store listings
  stores: [
    {
      id: '1',
      title: '世田谷ルートストレージ',
      address: '〒154-0013 東京都世田谷区駒沢2-1-3',
      station: '東急田園都市線 駒沢大学駅 徒歩5分',
      distance: '駅から300m',
      price: 7000,
      maxPrice: 9500,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
      category: 'STORAGE' as const,
      available: true,
      isNew: true,
      features: ['24時間利用可', '駐車場完備', 'セキュリティ完備'],
      unitType: 'トランクルーム',
      sizes: ['1畳', '2畳'],
      campaign: '【キャンペーン中】今月契約で初月半額＋2ヶ月目無料OFF！',
    },
    {
      id: '2',
      title: '若林ルートガレージ',
      address: '〒154-0023 東京都世田谷区若林2-8-1',
      station: '東急世田谷線 若林駅 徒歩3分',
      distance: '駅から200m',
      price: 61000,
      maxPrice: 82000,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
      category: 'GARAGE' as const,
      available: true,
      isNew: false,
      features: ['バイク保管可', '電源コンセント', '換気設備あり'],
      unitType: 'バイクガレージ',
      sizes: ['1台', '2台'],
      campaign: '【週末限定SALE】今月契約で事務手数料半額',
    },
    {
      id: '3',
      title: '平塚センターストール・パーキング',
      address: '〒254-0046 神奈川県平塚市立野町17-8',
      station: 'JR東海道本線 平塚駅 徒歩7分',
      distance: '駅から550m',
      price: 13500,
      maxPrice: 15100,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
      category: 'PARKING' as const,
      available: true,
      isNew: true,
      features: ['屋根付き', '防犯カメラ完備', '大型車OK'],
      unitType: 'ユニットタイプ',
      sizes: ['普通車', '大型車'],
    },
    {
      id: '4',
      title: '世田ルートストレージ',
      address: '〒154-0024 東京都世田谷区三軒茶屋1-35-14',
      station: '東急田園都市線 三軒茶屋駅 徒歩2分',
      distance: '駅から150m',
      price: 7800,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
      category: 'STORAGE' as const,
      available: false,
      isNew: false,
      features: ['24時間利用可', 'エアコン完備'],
      unitType: 'トランクルーム',
      sizes: ['0.5畳', '1畳'],
    },
  ],

  // New stores for showcase
  newStores: [
    {
      id: '101',
      title: '横浜市緑ルートストレージ',
      address: '横浜市緑区鴨居 鴨居駅から徒歩3分',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
      date: '2024年1月16日',
      badge: 'STORAGE',
    },
    {
      id: '102',
      title: '横浜市緑ルートストレージ',
      address: '横浜市緑区鴨居 鴨居駅から徒歩3分',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
      date: '2024年1月16日',
      badge: 'STORAGE',
    },
    {
      id: '103',
      title: '横浜市緑ルートストレージ',
      address: '横浜市緑区鴨居 鴨居駅から徒歩3分',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
      date: '2024年1月16日',
      badge: 'STORAGE',
    },
  ],

  // FAQ data
  faqs: [
    {
      id: 'faq-1',
      question: '店舗まで何分以内ですか？',
      answer:
        'この度は数あるトランクルーム・レンタルガレージ・月極駐車場の中から、弊社をお選び頂き誠にありがとうございます。この度は数あるトランクルーム・レンタルガレージ・月極駐車場の中から、弊社をお選び頂き誠にありがとうございます。',
    },
    {
      id: 'faq-2',
      question: 'どなたかの紹介が必要なお部屋ですか？',
      answer:
        'いいえ、紹介は不要です。どなたでもお申し込みいただけます。WEBサイトまたはお電話にてお気軽にお問い合わせください。',
    },
    {
      id: 'faq-3',
      question: '支払いに関しての詳細はどこでみていますか？',
      answer:
        'お支払い方法は、口座振替、クレジットカード決済をご用意しております。詳細は契約時にご案内いたします。',
    },
  ],
};

export type Store = (typeof storeSearchData.stores)[0];
export type NewStore = (typeof storeSearchData.newStores)[0];
export type FAQ = (typeof storeSearchData.faqs)[0];
