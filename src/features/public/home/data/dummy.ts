// Dummy data for home page sections

export const featuredStoresData = [
  {
    id: '1',
    title: '亀有ルートストレージ',
    address: '〒124-0006 東京都葛飾区亀有1-35-13',
    station: '京成線 亀有駅より徒歩15分',
    price: 7000,
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    category: 'STORAGE' as const,
    available: true,
  },
  {
    id: '2',
    title: '若宮3丁目ルートガレージ',
    address: '〒154-0023 東京都世田谷区若宮5-34-8',
    station: '東急世田谷線 若宮駅より徒歩7分',
    price: 55000,
    imageUrl:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop',
    category: 'GARAGE' as const,
    available: true,
  },
  {
    id: '3',
    title: '多摩センター駐車場',
    address: '〒206-0041 東京都多摩市落合4-6-12',
    station: '多摩センター駅より徒歩10分',
    price: 11000,
    imageUrl:
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop',
    category: 'PARKING' as const,
    available: true,
  },
];

export const newsItemsData = [
  {
    id: '1',
    title: '2025年9月1日 西鶴間ルートストレージオープン',
    date: '2025年8月22日',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    tag: 'OPEN',
  },
  {
    id: '2',
    title: '2025年11月 本牧本郷町ルートストレージオープン予定',
    date: '2025年8月22日',
    imageUrl:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
    tag: 'OPEN',
  },
  {
    id: '3',
    title: '2025年4月1日 株式会社ルートストアから株式会社ルートへ社名変更',
    date: '2025年8月22日',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    tag: 'OPEN',
  },
];

export const servicesData = [
  {
    id: '1',
    number: '01',
    title: 'STORAGE',
    description:
      'トランクルームは、ご自宅やオフィスの収納スペースとして最適です。24時間365日、いつでも自由に出入りできます。安心・安全なセキュリティ対策も万全です。',
    imageUrl:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop',
    borderColor: 'border-primary',
  },
  {
    id: '2',
    number: '02',
    title: 'GARAGE',
    description:
      'ガレージは、お客様の大切な車やバイクを安全に保管できます。屋内型なので雨風から守り、盗難対策も完備しています。',
    imageUrl:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop',
    borderColor: 'border-blue-900',
  },
  {
    id: '3',
    number: '03',
    title: 'PARKING',
    description:
      '駐車場は、首都圏各地に展開しております。月極駐車場として、お客様の大切なお車を安全にお預かりいたします。',
    imageUrl:
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop',
    borderColor: 'border-yellow-600',
  },
];

export const useCasesData = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
    category: 'PARKING',
    title: 'テキストテキストテキストテキスト',
    tags: '#トランクルーム #子育て',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    category: 'STORAGE',
    title: 'テキストテキストテキストテキスト',
    tags: '#トランクルーム #子育て',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    category: 'GARAGE',
    title: 'テキストテキストテキストテキスト',
    tags: '#トランクルーム #子育て',
  },
];

export const columnsData = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    date: '2025年8月22日',
    title: '2025年11月本牧本郷町ルートストレージ オープン予定',
    tags: '#トランクルーム #子育て',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
    date: '2025年8月22日',
    title: '2025年11月本牧本郷町ルートストレージ オープン予定',
    tags: '#トランクルーム #子育て',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
    date: '2025年8月22日',
    title: '2025年11月本牧本郷町ルートストレージ オープン予定',
    tags: '#トランクルーム #子育て',
  },
];

export const faqsData = [
  {
    id: '1',
    question: '何を保管できますか？',
    answer:
      '家具、家電、衣類、書籍、趣味のコレクション、季節用品など、様々なものを保管できます。ただし、危険物、生き物、食品など一部保管できないものもございます。詳しくはお問い合わせください。',
  },
  {
    id: '2',
    question: 'どのくらいのサイズのものが保管でき、何を確認すべきですか？',
    answer:
      'お部屋のサイズは0.5畳から8畳まで様々なタイプをご用意しております。保管したい荷物の量や大きさに応じて最適なサイズをお選びいただけます。事前に見学も可能です。',
  },
  {
    id: '3',
    question: '盗難に対してどのようなセキュリティ対策がありますか？',
    answer:
      '24時間監視カメラ、入退室管理システム、警備会社との連携など、万全のセキュリティ体制を整えております。安心してご利用いただけます。',
  },
];
