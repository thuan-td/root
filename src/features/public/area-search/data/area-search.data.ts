/**
 * Area Search Data
 * Data for prefecture and city/ward search
 */

export interface Area {
  id: string;
  name: string;
  count: number;
  slug: string;
}

export interface Prefecture {
  id: string;
  name: string;
  slug: string;
  count: number;
  sections: AreaSection[];
}

export interface AreaSection {
  id: string;
  title: string;
  count: number;
  areas: Area[];
}

export const prefectures: Prefecture[] = [
  {
    id: '1',
    name: '東京都',
    slug: 'tokyo',
    count: 134,
    sections: [
      {
        id: 'tokyo-23',
        title: '東京都23区',
        count: 87,
        areas: [
          { id: '1', name: '港区', count: 12, slug: 'minato-ku' },
          { id: '2', name: '新宿区', count: 8, slug: 'shinjuku-ku' },
          { id: '3', name: '目黒区', count: 5, slug: 'meguro-ku' },
          { id: '4', name: '千代田区', count: 7, slug: 'chiyoda-ku' },
          { id: '5', name: '中央区', count: 6, slug: 'chuo-ku' },
          { id: '6', name: '台東区', count: 4, slug: 'taito-ku' },
          { id: '7', name: '墨田区', count: 3, slug: 'sumida-ku' },
          { id: '8', name: '江東区', count: 9, slug: 'koto-ku' },
          { id: '9', name: '品川区', count: 11, slug: 'shinagawa-ku' },
          { id: '10', name: '目黒区', count: 5, slug: 'meguro-ku' },
          { id: '11', name: '大田区', count: 8, slug: 'ota-ku' },
          { id: '12', name: '世田谷区', count: 14, slug: 'setagaya-ku' },
          { id: '13', name: '渋谷区', count: 10, slug: 'shibuya-ku' },
          { id: '14', name: '中野区', count: 6, slug: 'nakano-ku' },
          { id: '15', name: '杉並区', count: 7, slug: 'suginami-ku' },
          { id: '16', name: '豊島区', count: 5, slug: 'toshima-ku' },
          { id: '17', name: '北区', count: 4, slug: 'kita-ku' },
          { id: '18', name: '荒川区', count: 3, slug: 'arakawa-ku' },
          { id: '19', name: '板橋区', count: 6, slug: 'itabashi-ku' },
          { id: '20', name: '練馬区', count: 8, slug: 'nerima-ku' },
          { id: '21', name: '足立区', count: 5, slug: 'adachi-ku' },
          { id: '22', name: '葛飾区', count: 4, slug: 'katsushika-ku' },
          { id: '23', name: '江戸川区', count: 6, slug: 'edogawa-ku' },
        ],
      },
      {
        id: 'tokyo-other',
        title: '東京都下',
        count: 47,
        areas: [
          { id: '24', name: '八王子市', count: 5, slug: 'hachioji' },
          { id: '25', name: '立川市', count: 4, slug: 'tachikawa' },
          { id: '26', name: '武蔵野市', count: 6, slug: 'musashino' },
          { id: '27', name: '三鷹市', count: 3, slug: 'mitaka' },
          { id: '28', name: '青梅市', count: 2, slug: 'ome' },
          { id: '29', name: '府中市', count: 5, slug: 'fuchu' },
          { id: '30', name: '昭島市', count: 2, slug: 'akishima' },
          { id: '31', name: '調布市', count: 4, slug: 'chofu' },
          { id: '32', name: '町田市', count: 6, slug: 'machida' },
          { id: '33', name: '小金井市', count: 2, slug: 'koganei' },
          { id: '34', name: '小平市', count: 3, slug: 'kodaira' },
          { id: '35', name: '日野市', count: 2, slug: 'hino' },
          { id: '36', name: '東村山市', count: 1, slug: 'higashimurayama' },
          { id: '37', name: '国分寺市', count: 3, slug: 'kokubunji' },
          { id: '38', name: '国立市', count: 2, slug: 'kunitachi' },
          { id: '39', name: '福生市', count: 1, slug: 'fussa' },
          { id: '40', name: '狛江市', count: 1, slug: 'komae' },
          { id: '41', name: '東大和市', count: 0, slug: 'higashiyamato' },
          { id: '42', name: '清瀬市', count: 0, slug: 'kiyose' },
          { id: '43', name: '東久留米市', count: 0, slug: 'higashikurume' },
          { id: '44', name: '武蔵村山市', count: 0, slug: 'musashimurayama' },
          { id: '45', name: '多摩市', count: 0, slug: 'tama' },
          { id: '46', name: '稲城市', count: 0, slug: 'inagi' },
          { id: '47', name: '羽村市', count: 0, slug: 'hamura' },
          { id: '48', name: 'あきる野市', count: 0, slug: 'akiruno' },
          { id: '49', name: '西東京市', count: 0, slug: 'nishitokyo' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: '千葉県',
    slug: 'chiba',
    count: 45,
    sections: [
      {
        id: 'chiba-main',
        title: '千葉県',
        count: 45,
        areas: [
          { id: '50', name: '千葉市', count: 12, slug: 'chiba' },
          { id: '51', name: '市川市', count: 8, slug: 'ichikawa' },
          { id: '52', name: '船橋市', count: 10, slug: 'funabashi' },
          { id: '53', name: '松戸市', count: 7, slug: 'matsudo' },
          { id: '54', name: '柏市', count: 8, slug: 'kashiwa' },
        ],
      },
    ],
  },
  {
    id: '3',
    name: '埼玉県',
    slug: 'saitama',
    count: 61,
    sections: [
      {
        id: 'saitama-main',
        title: '埼玉県',
        count: 61,
        areas: [
          { id: '60', name: 'さいたま市', count: 15, slug: 'saitama' },
          { id: '61', name: '川口市', count: 9, slug: 'kawaguchi' },
          { id: '62', name: '川越市', count: 8, slug: 'kawagoe' },
          { id: '63', name: '所沢市', count: 7, slug: 'tokorozawa' },
          { id: '64', name: '越谷市', count: 6, slug: 'koshigaya' },
        ],
      },
    ],
  },
  {
    id: '4',
    name: '神奈川県',
    slug: 'kanagawa',
    count: 88,
    sections: [
      {
        id: 'kanagawa-main',
        title: '神奈川県',
        count: 88,
        areas: [
          { id: '70', name: '横浜市', count: 25, slug: 'yokohama' },
          { id: '71', name: '川崎市', count: 18, slug: 'kawasaki' },
          { id: '72', name: '相模原市', count: 10, slug: 'sagamihara' },
          { id: '73', name: '横須賀市', count: 7, slug: 'yokosuka' },
          { id: '74', name: '藤沢市', count: 9, slug: 'fujisawa' },
        ],
      },
    ],
  },
  {
    id: '5',
    name: '愛知県',
    slug: 'aichi',
    count: 52,
    sections: [
      {
        id: 'aichi-main',
        title: '愛知県',
        count: 52,
        areas: [
          { id: '80', name: '名古屋市', count: 20, slug: 'nagoya' },
          { id: '81', name: '豊田市', count: 8, slug: 'toyota' },
          { id: '82', name: '岡崎市', count: 6, slug: 'okazaki' },
          { id: '83', name: '一宮市', count: 5, slug: 'ichinomiya' },
          { id: '84', name: '春日井市', count: 4, slug: 'kasugai' },
        ],
      },
    ],
  },
];

// Prefectures for search feature (reuse from home)
export const searchPrefectures = ['東京', '神奈川', '千葉', '埼玉'];

// Usage purposes for search feature (reuse from home)
export const usagePurposes = [
  '家財',
  'ビジネス',
  '引っ越し',
  '季節用品',
  'レジャー用品',
  '書類・商品',
];
