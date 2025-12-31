/**
 * Use Cases Dummy Data
 *
 * Mock data for the use cases page
 */

import {
  UseCasesPageData,
  UseCase,
  CustomerReview,
  RelatedArticle,
} from '../types';

/**
 * Use cases data
 */
export const USE_CASES: UseCase[] = [
  {
    id: 'case-01',
    caseNumber: 1,
    title: 'オフシーズンの用品を大切に保管しています',
    description:
      'オフシーズンの洋服、スポーツ用品、アウトドア用品、防災用品、廃棄される検討中の家具、雑貨等、自宅を綺麗に片付けので重宝しています。',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFU0XAz28Ybzt3PaWDJOJwcV3LlNwNutDz7atsfvPjVwStjqxj8J6fpqU6o0nCfmCx1i8drHZy7hHJ6tTzPKuvCg-tiIMNdqTrdDV73YXYuwiMiyYtiCDuQS5x_j2JqClOfYeFScBxT4FyNDkTBIeDnAk7dlG5KlK4SOcpwyWEWyVCMjQeSKFwEfOc1IsWgytwLVuOiGF6qROspm20EGTAPshnEw7-XGq2ENBLbrHUHf1__FBnx38rbKCg3itg-3pljdPyv6JoYcE',
    serviceType: 'storage',
    usageType: 'sports',
    tags: ['ルートストレージ', 'スポーツ用品'],
  },
  {
    id: 'case-02',
    caseNumber: 2,
    title: '趣味の釣竿用品を大切に保管しています',
    description:
      'つい増えてしまう釣竿道具を2.6畳タイプに移動しました。全ての用品を無事に収納出来て満足しています。\n収納力も高く、月々の支払も安くて助かります。',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzld7TG18wOQ0LgUpixiPyvyq0-RYE06kqqodEuAOhpO_pCzWwKk2YK1c4jThOkcLSWLM0I3xDVKNloSR2MSkKYbM2WAuSWzkGye3w_96XuCoyI8jjikDFlnpIlWJT9AQodxaFBOb_bDervLMNyGliHycyLrD7mT7zE-pw67uJPb6re3lUh-MiNLEpEkXbv3x78rg9Pdi_eSlgcHQTMx8Fa8uYwK9Fxtzob47tl642OomBKGcn6fIFKf__24pp4GlFHj869dpihRk',
    serviceType: 'storage',
    usageType: 'hobby',
    tags: ['ルートストレージ', '趣味'],
  },
  {
    id: 'case-03',
    caseNumber: 3,
    title: '冬場のキャンプ用品はまとめて保管しています',
    description:
      '次のキャンプシーズンが始まるまでの間は、大量のキャンプ用品を毎年ルートのストレージで保管しています。\n今から次のシーズンが楽しみです。',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxBmpz78htMRI5y4DZP8e_mWWH9i2GsmjlDrMm8AfVlOFU7lCWT2DrieXcFSBpFBFXh0hQdJrVqTI7OkKAuykBlsM8OK4VGM7_toVy3TWWHjVxjaLJpi9IcAQnRQevhsBcZxZRDZHDC2QN0xpJ5nn28LZwiyGpekDGO6nl73lDDq_6TsLw1hTrarLCFQN_9248yTNCBkrAihINRDnwXSGcWBoR7ARC0td2wIbr5IqrU3IvJMQ5GJKmtHrNMo7wErytTIe55A-msuI',
    serviceType: 'storage',
    usageType: 'hobby',
    tags: ['ルートストレージ', 'キャンプ用品'],
  },
  {
    id: 'case-04',
    caseNumber: 4,
    title: '捨てられない大切な思い出の品を保管しています',
    description:
      '季節物の衣類、冷暖房器具、子供たちの衣類、雑貨を収納しています。主に家族が荷物をだしいれますが、現地の状況は不安ですが、衣類等はカビなど発生せず保管出来...',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ5NNBw8eQwfNbJX32fCPLcrGedjEA1icEuyruxiApUqsmXFzC4JTqKQhzi8BQ3LlatkOuarlPR9LUGJD4SA1beZjmkIY3rtLH4Go4k6loc9kbUiS_acsMbfdQbJ1lvujytdSdkzNUfIRK1xqFIbrWbaOaKcWr1zr5niD2ZJBFZqhJf2mhZpluIROY9USr2N3SRLpDoJQ83dqRFbhz9RCDlkkDeNm_UMrYTMAWdBIGtXgfO2efi7CdTFjetmlLR48acCpRF15sUnI',
    serviceType: 'storage',
    usageType: 'childcare',
    tags: ['ルートストレージ', '子育て'],
  },
  {
    id: 'case-05',
    caseNumber: 5,
    title: '大切な愛車と過ごす大切な時間です',
    description:
      '屋内ガレージでお天候を気にせず愛車の洗車が可能になりました。保管だけでなく、趣味の時間をも作れる場所として利用させていただいています。',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWEU3d2mRE-1muMElSUrSVLS1g6_EiFkosWrcNrDJp_-u6ORoNxtuYylYc6yExkf6xCvdirftsa1FPSBSt5a9FWYDZyzADMYumQXVvIQZdaiOe63NSUKy_lsyVwXcmeeZqcS8gRl4rLVrEOdveXXK46HstGtFWAXfi3aWavA4a4RC5bjwKsMU8X_OZiuXNU81MCzQaP1aNCfkPDuJvpLOD6WLa9YbDKQYA1huQRMt2NW6X0YlLUAHy7sbW4bdnir0No47S_Axl5uE',
    serviceType: 'garage',
    usageType: 'hobby',
    tags: ['ルートガレージ', '趣味'],
  },
  {
    id: 'case-06',
    caseNumber: 6,
    title: '引越しの一次保管場所として使用しています',
    description:
      '新居が完成するまでの期間、大切家具や家電を一時的に保管するのに利用しています。お陰様で引っ越しの負担が大幅に軽減しました。',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB52fO87IWPBnPjWKZ9_0RvOL9UEtfkrjh3eddw18C6Yrx6QEEmuYXh1DF5swwfqnbwe3vFcQaaU4FB-wCzPJBjmyYqdb5u-PYK-n3wRuybwuoG1zsZgvXFTJ6Dymo9z1VrElhC2rj9RyvDwyltwm3tRtx1jSg-khg-weOqeBLZapfvn5tdneK2cXLfOWdzEZyE8-_fa3q5dn1LvVX0YeEKVhWEuoFhlGQPaVuJwh35-6K2KyotZd7NDT5QuA1uOOofRHD08EntNu0',
    serviceType: 'storage',
    usageType: 'moving',
    tags: ['ルートストレージ', '引越し'],
  },
];

/**
 * Customer reviews
 */
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    name: 'H.K',
    age: '30代',
    occupation: '会社員',
    prefecture: '東京都',
    serviceType: 'ルートストレージ',
    rating: 4,
    title: '駐車場が同じで便利!!',
    content:
      '遠方から都心に引っ越ししたので、普段使わない自宅の荷物と趣味の車のパーツを保管したいと考えて、自宅から近いトランクルームを探しました。明るく清潔な環境を重視して選びました。今は第2のクローゼットとして頻繁に利用しており、趣味の車のパーツや大きな家具の他に洋服や靴、雛人形、スノーボード、用品など、季節物のある普段使いな物から洋服などを正しくコレートして保管しています。',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYiQwblDU4fTqrW3fDIDbUNAe4p_i_B0c_GqWtGi02WYDtCixLw6UjJnTCYhkRZyUgknUV9t4g4rtr_4h2XrYBszGJXifUmDqyp46mhAiNpffqdVilrHvqIRCpzodgSa7pmWH2DKaza0lThuptOYw_4iE0oPWVUjxmIdHcQy3dPzjGGj_4ZFKIBb0Sr9qJPHpTm8yq15FCwU6Cnrhw8ZTe5iOQUrCUiueCuKNUyGFKmdJN8Hf8x1C8FHCd4Umsrh90VF8XWFjDgfQ',
    avatarColor: 'blue',
  },
  {
    id: 'review-2',
    name: 'M.I',
    age: '30代',
    occupation: '会社員',
    prefecture: '神奈川県',
    serviceType: 'ルートストレージ',
    rating: 4,
    title: '衣類や季節家電の収納に',
    content:
      '季節物の衣類、冷暖房器具、子供の頃の衣類、雑貨を収納しています。主に家族が荷物をだしいれますが、現地の状況は不安ですが、衣類等はカビなど発生せず保管出来ています。いつか着ないだろう捨てればいいのですが、冬のコート等、たっぷりあり、自宅には置いておけない物を置くことができてとても助かっています。',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYCh0PPnWAGFpSx4e8FEk3DO6svSB7iz4toqn9O415u18NdRxVX9dYQW7SZJwQcdU6Ro9NuJVy2IQAzhMjpIm9xp9Uk0bBJsb9F7qbWqMLa6US17BNu1Y2tauNo-MUHEiLb-5Cmz7cBEUyuELy1P85HzQSuvzA4ibBui1__e-GFe4PEZvc6Uq_oFF4vvl85-fDU8QYJIrRzL8zku-A0EN_0Zlqy5x_QbtSC4NdfE97MzxNFNwwLqgYg2trF1R6-NKop_9YhQ7oD1Q',
    avatarColor: 'red',
  },
  {
    id: 'review-3',
    name: 'D.I',
    age: '30代',
    occupation: '会社員',
    prefecture: '埼玉県',
    serviceType: 'ルートストレージ',
    rating: 4,
    title: '生活の質が向上した',
    content:
      'オフシーズンの洋服、スポーツ用品、アウトドア用品、防災用品、廃棄される検討中の家具、雑貨等、自宅を綺麗に片付けので重宝しています。自宅に不用品を置かないということは、普段の生活の中で見なくて済むということであり、それは物質的な空間の快適さだけでなく、日常生活での意識や経済活動の質の向上にも寄与すると考えています。',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRQ7LPUgvttlbb_9L6quUhWIFJOFfvKrSFvj7hzomXyk7UuyVe179YEriIgoFq7MPvhT3LFpNHF-9xiE1pk5Fom7V89iKlWLp98LAgvmj-aPGfI4kQBBT-ZOUcJLzD04w-OAiKvyqX6Br81K0Eb_jZ82lZwD5TFqE7laePflrX9KGNIkyVZGTvruYHzZQ9J_Y6RTAQf7MCXfalv-DplMt2v05abbcTRuzgh48jtXghRTa-tQGmJhZYYQCSO6Jxywvj8FiwJIBuVjA',
    avatarColor: 'orange',
  },
  {
    id: 'review-4',
    name: 'A.I',
    age: '50代',
    occupation: '会社員',
    prefecture: '東京都',
    serviceType: 'ルートストレージ',
    rating: 4,
    title: '子供の思い出の品を収納',
    content:
      '基本的に子供のものが入っています。生まれた頃からのアルバム、絵本、運動会、ゲームなど、レアで捨てるのは惜しい物が入っています。他には、自分の普段着ない服（礼服、ドライ衣装）が入っています。平均して3ヶ月に1回程度の利用です。',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiL1oeZ0NgCTwjc_UFJpS7gkcgdc1bI1xO8nUbvIHzOK1IPLQ-QjB7Mc-MzAW5BeMKWjKm4eUgNez0IFZfXB1pYUP_dQE1rvVEUbvLt7XPszU76VOqF_r6m4ak34xOdCTTFGhtpoN919m-nlKpqt71SsCPqLlULX4Ppgfb3uSMCtRGYBzHKhLMUVnY5GpWGRjF48iqvbdE6fQSadjv8SC0KAFXi13HLZXN-tGksPlVd6B7P-JLCp64TfYIHkbuqrBKMG2Yjg3VN1E',
    avatarColor: 'teal',
  },
];

/**
 * Related articles
 */
export const RELATED_ARTICLES: RelatedArticle[] = [
  {
    id: 'article-1',
    title: '引っ越しの際のトランクルームの賢い活用術',
    date: '2025年08月22日',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0eDcuGOCytLWobvIvZt5hGv5YEDwuWrlnQgumAhBBq2tGnAP9-ghRVqN_Bt-_mf58uxaR3DuBje6qoGWeCncA-7bo-azP59hwavWSvF9mdTmck77ZsopHDEMLk4Vlk-_Ouv8XAk4_zJzmn_5YwmeEuYRgPAQhu3KAika1s-MUqnFV4NuOrHKqdkzw4yx-QN3gGMexX5lHXrEUyNhq3-Apg6xrJD5EuNhieK7_AgCUzN1ASxzYzFQIQu0jO9q2opnetBCaBZhOEn0',
    tags: ['ルートストレージ', '引っ越し', '費用'],
  },
  {
    id: 'article-2',
    title: 'セキュリティ対策のポイントと知っておきたいこと',
    date: '2025年07月15日',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbzzYAKsuUy7UzvyN5d7xHvSOoYi2MaawZGjoqHvklP0CpcFRWpnnSDooTXUZm9nMlotaA7kwGHB_yyqxrt5_s38MlOhunK3QZW57x8YFyAv2PwjSzg6W90YBeDPmVu1xgvEJgFNskb66Xyh5R4SC95ARyVQdOjsikblhhpnvUqLV1RM3Y7OgX9F2Mmpwa-OaUzaSW0zMVgAK654OHHd9RNY4kyv8cr4j8DzkDKIgAEg96X2ykOr71J9Kecp-iz2oFo4HTion4Qdo',
    tags: ['ルートストレージ', '保管・収納'],
    badge: {
      text: '防犯カメラ',
      color: 'red',
    },
  },
  {
    id: 'article-3',
    title: '何を保管する？ トランクルームのおすすめの使い方',
    date: '2025年06月20日',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvM83339cS0WW3tiFpEU6EFOm27sgwfL3ZAtBfa77DwLSKAD3-76We-gnxpkqld7WjzBUNpR0pqgyni1jnWPWDARlrEvnd0x7EcBMi3mD3N-em27i7x4LP_6Yjql2ka_cbVwiOMl5BZngG4AC2KbZyIiNBGLXG5HPxW52Q2ZYFqxRXoFQVcjrh_FwLLez44WSFOup_I3wG3OusMiSEFjwFdrWh3qWiOcZuef1E9EC8NS5SBxG5tn7eKNMsW3JgHg1Qeh6Dwdysfv4',
    tags: ['ルートストレージ', '活用術', '費用'],
  },
  {
    id: 'article-4',
    title: 'ごちゃごちゃしない！ トランクルームの収納のコツ',
    date: '2025年05月10日',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPDCXvoJaiJtoVHsz-kXW-vBD-Hi4m_oUohehaOhYs6h3gY2ER2e9wiFXDfVF1EfwU9Xn9jc9DHAppz_ikvLGPpthmY38jcQ9xR9fvVogEmzO8U-RlOVVEl0nxh_ubmJkS3ZaBk6ZXLvFQ--NA91c3c5mFa0m5dxdsQh8raToeVEjAqo86ETqPP2z9H_l42qpOxrYNE2bQHsHyT27j3S8A76L84V4xLBSex2YO-9cm9ASe7epHx-I6cWxceXMno_SRsKTFpP14ENA',
    tags: ['ルートストレージ', '活用術', '収納'],
  },
];

/**
 * Complete page data
 */
export const USE_CASES_PAGE_DATA: UseCasesPageData = {
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAaL6qkeHkBBVx0YWOcqWE-KH4mVYF9htxtxuSPuRKROowSDR8t6_-Y8vYkuuMQPZ9pTuyyLj_SKscMhXnN3me2QKmbL633X7vy-AFBPyM9U38IvOYl6SOs5eTEVSI8q3OClnEMRaBojV6n3cEKrEcavgvUT2J7jWplc-JMF4lUJCn55ZmWROBWqaPKgHutYO5ZJC7gh7Q_hCq6CALqRmdhAPATia9Fgq7epW9fEF3Re5kqSKnLw9J31mhiZR5h9vF1hcffNRY4FLY',
  useCases: USE_CASES,
  reviews: CUSTOMER_REVIEWS,
  relatedArticles: RELATED_ARTICLES,
};
