/**
 * News & Announcements Data
 */

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: 'OPEN' | 'INFO' | 'CAMPAIGN' | 'MAINTENANCE';
  badge?: string;
  featuredImage: string;
  content: string[];
  location?: {
    title: string;
    mapImage: string;
    description: string;
    address?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: '西鶴間ルートストレージオープン予定のお知らせ。',
    slug: 'nishi-tsuruma-storage-opening',
    date: '2025年9月1日',
    category: 'OPEN',
    badge: 'OPEN予定',
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTZEHzlVMfUuZKYDcKKITQ1c8Wm_Kyt-gl_MfLqvUSvBdageXUhkf_JpgdruFyQJR0oKqLce-tTdpDOACxfMZ-lU0oeURRGADAYh_aWBquEu9KOr4xX2_ONKS1FkoxiEoVW0CBlgkBEeSMe9IbbylWImSs4NssCvu0lj_vKGmDhKA4SRXkSRiXrgBTs_0qQpUdQI_z6s3TcBptKPhuqiHxn4FfC4-gFhrC3Tnej-toi937lrioPNFeZhHCjNqjvxbqTwQ0pTTLR0k',
    content: [
      '西鶴間ルートストレージは、小田急江ノ島線 鶴間駅から徒歩7分、厚木街道・ライラック通り沿い屋根町交差点を北に約250m進んだ先に位置する便利な立地のレンタル収納スペースです。家庭やビジネスの収納ニーズにお応えし、様々なサイズのトランクルームを取り揃え、お客様の収納ニーズに合わせた最適なプランをご提案いたします。',
      '24時間セキュリティシステム、専門のメンテナンススタッフ・安心の最新設備で、お客様の家財や季節品、ビジネス用品など幅広い物品を安全に保管いたします。',
    ],
    location: {
      title: '店舗の場所',
      mapImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKi7wth1tU2iwDIUqjFckDH4IxTDhl5KXrmTJDljE_mgW1ojH3XVTzhnPFiLBSNfbD6GipaGkZ6w2ZHQX4f8eUgdvVuXg6vniSVdyAUDiPja054A4bKeqb9IIT0KqnW6OCQVJYWMHCd5HwnwCBoMzga7dnA5zpt_JH3BqVcvNdtRjCpa56idDZ6Sh5-IBxd7t1qm74-ImlEPPM6eE48_8PF1vQQdCEWj5PeJKMoWYu5Voq8UWW656rSkWkgEW4Vej1CN-BJFiVbww',
      description: '鶴切農園前駅より徒歩15分',
      address: '神奈川県大和市西鶴間',
      coordinates: {
        lat: 35.4917,
        lng: 139.4328,
      },
    },
  },
  {
    id: '2',
    title: '横浜市緑区ルートストレージ新規オープンのお知らせ',
    slug: 'yokohama-midori-storage-opening',
    date: '2025年11月1日',
    category: 'OPEN',
    badge: 'OPEN予定',
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    content: [
      '横浜市緑区に新しいトランクルームがオープンいたします。駅から徒歩3分の好立地で、24時間365日いつでもご利用いただけます。',
      'SECOM完備で安心・安全。各種サイズのお部屋をご用意しております。',
    ],
    location: {
      title: '店舗の場所',
      mapImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKi7wth1tU2iwDIUqjFckDH4IxTDhl5KXrmTJDljE_mgW1ojH3XVTzhnPFiLBSNfbD6GipaGkZ6w2ZHQX4f8eUgdvVuXg6vniSVdyAUDiPja054A4bKeqb9IIT0KqnW6OCQVJYWMHCd5HwnwCBoMzga7dnA5zpt_JH3BqVcvNdtRjCpa56idDZ6Sh5-IBxd7t1qm74-ImlEPPM6eE48_8PF1vQQdCEWj5PeJKMoWYu5Voq8UWW656rSkWkgEW4Vej1CN-BJFiVbww',
      description: '鴨居駅より徒歩3分',
      coordinates: {
        lat: 35.5091,
        lng: 139.5647,
      },
    },
  },
  {
    id: '3',
    title: '年末年始の営業時間のお知らせ',
    slug: 'year-end-business-hours',
    date: '2024年12月25日',
    category: 'INFO',
    badge: 'お知らせ',
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    content: [
      '平素より格別のご高配を賜り、厚く御礼申し上げます。',
      '年末年始の営業時間についてお知らせいたします。',
      '12月30日〜1月3日: 休業',
      '1月4日より通常営業',
      'トランクルームは24時間ご利用いただけます。',
    ],
  },
];

// Category labels and colors
export const categoryConfig = {
  OPEN: { label: 'OPEN予定', color: 'bg-primary text-white' },
  INFO: { label: 'お知らせ', color: 'bg-blue-600 text-white' },
  CAMPAIGN: { label: 'キャンペーン', color: 'bg-green-600 text-white' },
  MAINTENANCE: { label: 'メンテナンス', color: 'bg-yellow-600 text-white' },
};
