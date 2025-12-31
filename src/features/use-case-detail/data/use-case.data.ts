/**
 * Use Case Detail Data
 */

export interface UseCase {
  id: string;
  slug: string;
  caseNumber: string; // "Case 01."
  title: string;
  tags: string[];
  heroImage: string;
  customer: {
    name: string; // 仮名
    age: string; // 年代
    occupation: string; // 職業
    service: string; // サービス
  };
  motivation: {
    image: string;
    description: string;
  };
  usage: {
    size: string; // ご利用サイズ
    area: string; // エリア
    purpose: string; // 使い方
    frequency: string; // 利用頻度
  };
  beforeAfter: {
    before: {
      image: string;
      description: string;
    };
    after: {
      image: string;
      description: string[];
    };
  };
  customerVoice: {
    avatar: string;
    rating: number;
    title: string;
    comment: string;
  };
  storagePromotion?: {
    image: string;
    title: string;
    subtitle: string;
  };
}

export const useCases: UseCase[] = [
  {
    id: '1',
    slug: 'improve-quality-of-life',
    caseNumber: 'Case 01.',
    title: '生活の質が向上しました！',
    tags: ['スポーツ用品', '趣味'],
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjYKutkfL9wzqjVtLLrz0agkaRGNTiMNtEZzFAFNJ5dsdgggUAkG1chJ-kwiq1nqJ3UiXi5kviZ0SslDZVPoVFF2C9xS35gj7ZIzPhb7OeFXk75Lw6sI_mzzP6KQ3JFOuGCtewvlJmxra92cuEjzxiv-lhnAw5PVXj_8CGYbi3_NiHXgwbiS2iOGdvGLydz-iLYBlWTcHLPJ-OuzSXwXxdhIjLJ2fXtB7OMY-hMoaFZ_6zxMMBo303U669jffDmB_HHlAYQK1qORM',
    customer: {
      name: 'H.K様',
      age: '30代',
      occupation: '会社員',
      service: 'ルートストレージ',
    },
    motivation: {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBmimSw_Aut9XO6gWxHvcH1WBV-dWdWDi5PWKVlwmBH8No8yBelWMXzOj5arS6YWlvsX1oIiKyGSaqzLFIo8oixbH8lu34qVhe8e9DMHPeTNqF7j3zvLSL3zi0qFdktm9cABnilyVMLanjptQO-SveOWG_PTLH8GBaY3HLo68hzOizX87yfQBNpHL3n7pRQ7CufU4Ptbi45fcm4iT2_Wrsiz8OxFTKjCJmMUWwbPRVeS1j75lt-yteQCXYeQ9Mkb1GOx4NfZLk_rZQ',
      description:
        '子どもの成長とともに荷物が増え、自宅収納が限界に。季節家電やアウトドア用品など、使用頻度は低いが捨てられない物の置き場所に困っていました。自宅を綺麗に整理したいので検討していました。',
    },
    usage: {
      size: 'ウッドタイプM',
      area: '東京都練馬区',
      purpose: '季節用品・アウトドア用品の保管を中心',
      frequency: '平均して3ヶ月に1回程度',
    },
    beforeAfter: {
      before: {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCl-MLTKllLYwK82cquRyWWX0eS_uK9CRF7btHj4Tb7AUKDHjH3jyJWDks-7kJFrGLw5jWw1MiAa2x7cKiYaroH-Pxv3KKm1wAu9cWzHzrzQCBHGzke9Vb8TuHwruilTvc6av3clpXXQi9JYP9vNTRG2q4CPGoDFXWPr_Hf68h9Xab0lXOP5Ae2EjPH4AoHP-ZttaOFZcS2lGpGNuJ1-R8bCtuV4Q_VlWkY3fOa6UoZCpZlTTOzeB3zb_E0wDHXltVLJW2ZiiI-20I',
        description:
          '自宅のクローゼットや部屋の隅に、使う頻度の低い荷物があふれ、生活スペースが圧迫されていました。特に大型のクーラーやアウトドア用品は置き場所に困り、掃除もしづらい状況でした。',
      },
      after: {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAVaDIq1lngO6B8LRgZvMAn4qMYKLrHPnK7b_RtX-4N9J3uU2A1bWjC9wgeBaSLwq9edGgglCOjxT7QLogDpG1yXimuIM3LeyvcfcwEzcOEd-u2NW8hGEfpRWQA01wFCOUOEJbCi29qsZCNIKfWvrz2d1zaKeA5LrvTJv2bUwhH-iXhEcGfAeiqknY5bF8NfUqTZwhkwSD0Hzcw8Bu9AqYfXj7eigevE5VX92nXcdPFACIxd-VLpGsdg02D0wUbSffZgvbELSVJkrg',
        description: [
          'トランクルームを利用することで、自宅の中が見違えるほどスッキリ。今は使わないものを外に置くことで、目に入る情報量が減り、精神的にも大きな余裕が生まれました。',
          '特にゴルフバッグのように「今すぐ買い替えを考えていたアイテム」が視界に入らなくなったことで、無駄な購入を抑えることができ、経済面でもメリットを感じています。',
        ],
      },
    },
    customerVoice: {
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDAerS_YYP8lpvgKxhU5w0e-f4C0mXzB_8Ak21m26yC6pqSrPKhWsEROGfEZno9Q_UJR1pjRN-Rse8UVFdKU6RIxuvvvwpqBbEmFFwC-T7YEim7_xfiF63ul-8t8IroVk08375D6obxAVSoe5awWU1_OSU2boALzMotcgg4oZGvlGr7pFpSGWBX0TJfK_Ar3_U4RJjsYjS3kf78i2oHH7tzhOXY33fzc-LDYStpqI3qb_dk_glhQjEyuS5D78JLqLmon7rgSr7pm1s',
      rating: 3,
      title: '駐車場が分かりやすく便利!!',
      comment:
        '季節用品・アウトドア用品の保管を中心。必要なときだけ気軽に通いに行ける点が便利です。',
    },
    storagePromotion: {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDgl0ORcbLqxIrxwookWYr00P2LXinoFhzpBlVXe_CcDbE8dgrAtyzTptlXV3rurCV1BHe2fiqfW_2lkFwyjABgxDJzFyylTq4bhqe6y3AO47iEVAtyCdBuZynlETMOIgwLzxlODLBbyOKUISw3RiyK0uACCTYhRKY5b4DmH8hJTXNxEN9KwXMOytWA3Aj8fqycXFGciuZnK4L0oYVqz1RDtzmmzFWWY7ni3iUflVD4lB8FftzmhAhdecJwXIZ6uwiNDaNnn8DILiM',
      title: 'このような使い方ができます',
      subtitle: 'トランクルーム（1.5畳～）の空き情報はこちら',
    },
  },
  {
    id: '2',
    slug: 'moving-storage',
    caseNumber: 'Case 02.',
    title: '引っ越しの荷物を一時保管',
    tags: ['ルートストレージ', '引っ越し'],
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4QuSuXAP9M9uMkmEM5ZsbcBli9nWVfV0rBbbFgnefr_jIAkCYKODElCwROArapeP462PnSoXC8MQ2UNl2GPmxL6bcFJNcZiSlHYPpCr3Z5DYLfeSyd2JUrEtOoikaU1PL1OKTPSFFUAlUx-NAWrN2Rq7B9vBOWuwUrvx-rTdICLD4j2WoAH8i2JvmGnsS3d3cL3msQyGdEsLboy41ACwe6xeRqZ5JhotUtH8u-g3K3e0Zu91bytPrzXfKmipsztFJR56yXLG9PU',
    customer: {
      name: 'M.T様',
      age: '40代',
      occupation: '会社員',
      service: 'ルートストレージ',
    },
    motivation: {
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBmimSw_Aut9XO6gWxHvcH1WBV-dWdWDi5PWKVlwmBH8No8yBelWMXzOj5arS6YWlvsX1oIiKyGSaqzLFIo8oixbH8lu34qVhe8e9DMHPeTNqF7j3zvLSL3zi0qFdktm9cABnilyVMLanjptQO-SveOWG_PTLH8GBaY3HLo68hzOizX87yfQBNpHL3n7pRQ7CufU4Ptbi45fcm4iT2_Wrsiz8OxFTKjCJmMUWwbPRVeS1j75lt-yteQCXYeQ9Mkb1GOx4NfZLk_rZQ',
      description:
        '遠方から都心に引っ越すため、普段使わない自宅の荷物と趣味の車のパーツを保管したいと考えて、自宅から近いトランクルームを探しました。思ったより清潔な環境を評価しています。',
    },
    usage: {
      size: 'ウッドタイプL',
      area: '神奈川県横浜市',
      purpose: '引っ越し荷物の一時保管',
      frequency: '月に2-3回程度',
    },
    beforeAfter: {
      before: {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCl-MLTKllLYwK82cquRyWWX0eS_uK9CRF7btHj4Tb7AUKDHjH3jyJWDks-7kJFrGLw5jWw1MiAa2x7cKiYaroH-Pxv3KKm1wAu9cWzHzrzQCBHGzke9Vb8TuHwruilTvc6av3clpXXQi9JYP9vNTRG2q4CPGoDFXWPr_Hf68h9Xab0lXOP5Ae2EjPH4AoHP-ZttaOFZcS2lGpGNuJ1-R8bCtuV4Q_VlWkY3fOa6UoZCpZlTTOzeB3zb_E0wDHXltVLJW2ZiiI-20I',
        description:
          '引っ越し前の荷物が自宅に山積みになり、新居への搬入タイミングを調整する必要がありました。',
      },
      after: {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAVaDIq1lngO6B8LRgZvMAn4qMYKLrHPnK7b_RtX-4N9J3uU2A1bWjC9wgeBaSLwq9edGgglCOjxT7QLogDpG1yXimuIM3LeyvcfcwEzcOEd-u2NW8hGEfpRWQA01wFCOUOEJbCi29qsZCNIKfWvrz2d1zaKeA5LrvTJv2bUwhH-iXhEcGfAeiqknY5bF8NfUqTZwhkwSD0Hzcw8Bu9AqYfXj7eigevE5VX92nXcdPFACIxd-VLpGsdg02D0wUbSffZgvbELSVJkrg',
        description: [
          'トランクルームを活用して、引っ越しのタイミングを柔軟に調整できました。新居の準備が整うまで安心して荷物を預けられました。',
        ],
      },
    },
    customerVoice: {
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDAerS_YYP8lpvgKxhU5w0e-f4C0mXzB_8Ak21m26yC6pqSrPKhWsEROGfEZno9Q_UJR1pjRN-Rse8UVFdKU6RIxuvvvwpqBbEmFFwC-T7YEim7_xfiF63ul-8t8IroVk08375D6obxAVSoe5awWU1_OSU2boALzMotcgg4oZGvlGr7pFpSGWBX0TJfK_Ar3_U4RJjsYjS3kf78i2oHH7tzhOXY33fzc-LDYStpqI3qb_dk_glhQjEyuS5D78JLqLmon7rgSr7pm1s',
      rating: 5,
      title: '清潔で安心して利用できました',
      comment:
        '引っ越しの荷物を一時的に保管するのに最適でした。24時間アクセス可能で便利です。',
    },
  },
];

// Related articles data
export interface RelatedArticle {
  id: string;
  date: string;
  title: string;
  image: string;
  tags: string[];
}

export const relatedArticles: RelatedArticle[] = [
  {
    id: '1',
    date: '2025年08月22日',
    title: '引っ越しの際のトランクルームの賢い活用術',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArAwLw5SLEGkUcS6isJE7TnNKiKHZdKLGc9D2C-Jrg9jiSJA0FGLUh-dLOe4zjsxDYb6j3WYFvGF0RG9IZjtaKvOT-qd_VPUvkU6rQWMitpz0Fdk49yDVuJUIrb_pMC1Dk-S-9QUvWlZNmV97k2S04V-Dc4jZLYYrUvZlN0VhLyyRI6Z2SAXt6V8p30Zv_TFB7Y_HJJiRH0YsX6mWVrBpcs0coukwVD9mBqP_dkUXITmH_ZzwghXAE-3QKvY3EmzKCtW5l6vSu3w0',
    tags: ['ルートストレージ', '引っ越し', '費用'],
  },
  {
    id: '2',
    date: '2025年07月15日',
    title: 'セキュリティ対策のポイントと知っておくべきこと',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAz52xQB4I7YystVOKJScC4K1vwEPB3YFtdMZ9-akBLA6JgwZG91ilfhkGSyEyanJBEFch8hcJrCDrt_7Notqy9HqSWmq2gHZ602FvNbh7GRCgOb_ahgNfiBQ9pc2CbVUkBiSlWxPPJ0qGHm9Rv2ASJaVbN-b20Sb-xMRp0-GkwW4IB18dsIrNlcZNAua4z7kf8P-NqLoQx8QUlwAHUbXj3O62MDLcWfQuOcWeJ6AjwJQm9SmTpQxm-9D3NHtgqd5lr6_g_jiZwfUQ',
    tags: ['ルートストレージ', '保管・収納'],
  },
  {
    id: '3',
    date: '2025年06月20日',
    title: '何を保管する？ トランクルームのおすすめの使い方',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMCKaCbBsaPXXCA64oeXYyApfcXNOBdGFw7ZKEI_cGun-DVo-cF--3MjBColDtlITBrAQR9aOaU23UJQglSiw8kOu37mOPCra0zi303bmKgIl3dk9RQIQOSK91hwUpKf-zkFQwrUASF9WFaRQaI9znP3MKTvCTC_s3b7vwYXyBEzWl90mcGxoMqbHyQacTkkfS4TV4RjIHOthAhYzO94PErBYhRfXaaAX8y6XGZtNn1BHcSTGf6zmvZO2izHpJGevTlA5DwREaX1Q',
    tags: ['ルートストレージ', '活用術', '費用'],
  },
  {
    id: '4',
    date: '2025年05月10日',
    title: 'ごちゃごちゃしない！トランクルームの収納のコツ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWG6Jl5F9wFgjmmGSS7GyJFLrhQpDQi2WAIMx-UBY3g8tuj5XJtjW-li7KrDwEs0E1ys-PTYiE6ZNT1wNSVcNzcMyboQLZo412gBE0Sg43qjl7z1hmfGvlNx4RTDPKb4Qb9TluNzdq2Fad4a121qkwP98C0qCBjWfV_CXFQpgz3lBuByEDpXuJqY2aPxva8qvAa_avaBTwV6sqRAE4nRb7jr871GGWXNj4L1KWVEcPHOZZTPcwHBffkSBXAUIbqUw6p_qizfkArG8',
    tags: ['ルートストレージ', '活用術', '収納'],
  },
];
