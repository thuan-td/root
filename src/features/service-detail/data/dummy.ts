/**
 * Landing Page Mock Data
 *
 * Fake data for ROOT Storage landing page
 */

import type { LandingPageData } from '../types';

export const LANDING_PAGE_DATA: LandingPageData = {
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD0jgWviHNVjB4ecrFQembxn5iONL-lWkztlIZQEy9FYI-2uY1YjKgS_4ZElgikFeZc0mTciH19y0vHFRuMcxinGpa_QDMyLnezw25AaiU3HneZAl_0B9Hg5N-jCCoNOL__is76ipE5tyPlY4w125y2AHptMnf3inIeQei5_xZ5ssXzoYs8G99ufbah6Vdukg4vn9ePjZnmUR_4I-qgD7JIThBlrHUr2M0zbJ4NVxM5yljeVTcKPeJJDGarS9VZXJnlmcMA9ZQeB1U',
  heroTitle: 'ルートストレージ',
  heroSubtitle:
    '季節の模様替えから引っ越し荷物の仮置き場などに、目的に応じて多彩な利用シーンをサポートします。',
  features: [
    {
      id: 'feature-1',
      title: '自宅以外のプライベート空間',
      description:
        '扉面を閉めると、そこはまた一つのプライベート空間。まるで自宅の延長のように感じられる外観・内観です。便利な棚付きタイプの部屋もあります。',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCN0N10sPwkqj7ysmd_c641EEg9IAN-IZoZADn8LzpTZc21fvzXx12z0v8pvLiilUcNj6W8HVNbTSoGzHUeK-mL8OrzbnDYEL7h4sY11GxQ92e6D2bLzCjVynTSfUjlUXXNC_OcWgp6Ar-_rZry_lSfUF1X_51UOLZUIAgcyV-7beu9EsXXpNuqi-fVQJUnhQaCnSlK48LaM3mJlWkHvnvDm7XmnRUeEBnKRezV74NGrUltXBpA9d2g8UUwfqtlqalc5_b8NDgJ3Ns',
    },
    {
      id: 'feature-2',
      title: '24時間 安心のセキュリティ',
      description:
        '24時間機械警備体制でしっかりと安全を見守り、各個室には個別鍵を設置。高いセキュリティで安心してご利用いただけるトランクルームです。',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAs-kykbAoEBMMHbXP3kVfjtmV2mldcBrHb-PCdhvFw4q9Dxq6gvNMeS7gdZ_tfgs5Z7_u93gWWJ2Nb3WQLLqLHS3caEDnAyN57CQS91V88R9XeweRgYBuChjYuYtDtnP9CqTPVZpGIYzkXeO_3bP5-wiNw9vV0c-i5GzVcE2gf7Z55AV8-RBiwj1JxFAf7zrYPQ6i7k2ujyxfTwbpHsmRndirG9xjt7XBGSK2q-ITWNzUS9qpKS7gEh3Ew-3TytO7QCMV445XY7Sg',
    },
    {
      id: 'feature-3',
      title: '空気の循環で保管環境をキープ',
      description:
        'デリケートな保管品にとって、湿気やカビは大敵です。だから、空気の循環を徹底的に最適化。湿度と温度をコントロールした保管環境です。',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDjv97U-Tvv5ndp9wPBTsxwwEK8Ro2O2_Qz6qx8ASIpZdlRlNN4Gb3WCik1pKkGUJ1W1Xzpn8OarVilYEQQTmCqm9b7JNV6kRI41fHTXmaggiaX2roZDE4Ywh-cNCXsQE6uOc7Vl9t4CTdKUyW9wdO7N5Mqh--33x6foc4eMNE5bhpUor7udssy0vRA8zxaVk2_cQyctLgyrdXrjt47Qyvc5JoHJztpppw4WLQTSk8_zjA2bW5i4ccr8x-NgSVst6586AwQr6AsetU',
    },
  ],
  storageTypes: [
    {
      id: 'locker',
      name: 'ロッカータイプ',
      badge: 'ロッカータイプ',
      size: '約1畳',
      title: '置き場所に困るアイテムを手軽に収納！',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDC9SThlh051RPOIRQqyaSm-Eltq1QdK0KQZ4T6oVoX108Vwmunhpnnu6hsDkTeb9W-FFuWVuJ0EyrFonwPhI6cIzAtVz7X1bnmaPU2TvTGSkQ1TeAAz_lYoz_8oOZuLR9sEIefU0c_HdmirMuE2X1gkq8zGJESwx38mbTpO-zLy3NFCNe9JnU6rp1lut7jJjhyGOVmsV9aOkf8AdaqeYQXw1uhd-x-5xiYjRv8ZsaX2wI8FqRYBH_lYpykOKSgLOOLuFjTy7QS3XI',
      recommendations: [
        '本棚に入りきらない本やアルバムが…',
        '捨てられない通貨類がたくさんある',
        '床に置きっぱなしの物が多い',
      ],
    },
    {
      id: 's-type',
      name: 'Sタイプ',
      badge: 'Sタイプ',
      size: '~約1.5畳',
      title: 'シーズンオフの品々もこれで安心！',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAgsMcnV-oF1wW460UCEQEAMk52d3bqeRwb4Uca1jJ1Ad9VqFeGCE60TJUZfOH4ea6YSlaKRc0j4FnUo_2Jf6MyWpkQnCUwr-JpagTRhDuzHSHNgCn_avwXTKxkUFEXyXMO9HbvemSeXtv2xm5CNf99hcOSPR20cb96aULo03pQVJNRwFyWEJATrrM7G2aZ4-g2X3Ih1Xorqld-9K5gy6WrWtbDNrc5KqbWXYDnLIV5JNppjteCGKNTisiu1pJdlUnhCo-SjYcWsBM',
      recommendations: [
        '衣替えの時、服の置き場所に困っている',
        '一人暮らしで収納が少ない…',
        '玄関にあるスキーグッズが邪魔になっている',
      ],
    },
    {
      id: 'm-type',
      name: 'Mタイプ',
      badge: 'Mタイプ',
      size: '約1.5~1.8畳',
      title: '家族全員分をまとめてカバーの収納力',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBY7ZbOkMYaYgKD4txmJauvSWG6NQbkyZz8urp_9N8sKy0IpAE_vmHL4EzBxQtEJSDALoKbcAD_XQ6768bMrfUlE8Z-iLw0E7FS5COe3BxC8HNnZRoaQw88QENVLG5FoRuFiCYFoFTH9ZjRboaubtMI_3NulERasjQOweezB4KwLlc9qyuy2KO_Jdb3KgvKb-WwgmEjtAzqPMfNsOef8ZL_ZxrqSwG4qLglazqeMU6skOO-eKSt5QFENZ7eIXoV1QMdP0vdasYx0nE',
      recommendations: [
        '家族が多く家が手狭になっている',
        'アウトドアに凝っていてグッズが多い',
        '大切に残したい思い出の品物が増えた',
      ],
    },
    {
      id: 'l-type',
      name: 'Lタイプ',
      badge: 'Lタイプ',
      size: '約2畳前後',
      title: '自転車もOK！ 法人利用のお客様多数',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBzcfj6m3pLTKTLZVx2dCfrYyTYiiz9qe8avd-cHwk9SXEIvfZfhu3sBWII69-ehYhp4_gkVth_aLcl2nPr1t3PD5Qyf_XWwxTYZ-QEdxk_mBM6Voc-utg0yvQd7wFsqFNwevZCMsFNtIpgehsptVW70HHQNc3sqRTTSRg8hNGFNzjmfqR5FGMA5-dcnIW6tJ_rXJuXyHGx-OA-w-20iQQr4SeXVQJIZc7dfqH_teFhhl0YjMKdvRoOHiMyR7gE3Z3Xsw-Xcf6luVI',
      recommendations: [
        '自転車・ロードバイクを保管したい',
        'オフィスが手狭なのでどうにかしたい',
        '収納したい物が大型を含めてどっさり',
      ],
    },
    {
      id: 'xl-type',
      name: 'XLタイプ',
      badge: 'XLタイプ',
      size: '約4畳~',
      title: '引っ越し時にもまとめて保管できる',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBv4RjKO43qsoZa5BbaiOSKjxXUJSMcCUqBSJoHOxCoRhPtC_7yXPNIvjtM8vlkNWNsZzkvhNvzDK_KrouQ01ibMBpC69PJdY78hooFKgvkHmUlKR46NheuHXxJfXOqoUmDyY4GSH-nZKtLHuqH7tpSE1tebP8QT7Q7Xazc1E_ip3bWPQcsxb8QWMKVHLeguocNffxPG635flHEDopVQJ4m14uHc5SM_C2G1PGsKCoE6muqPpSWsLF0634GkZIq111jeOguCAwKWZQ',
      recommendations: [
        '引っ越しがあるが、新居がまだ使えない',
        'リフォーム予定で仮住まいに住むことになった',
        '自宅とは別に一部屋分の広い収納が欲しい',
      ],
    },
  ],
  searchLocations: [
    { prefecture: '埼玉県', count: 61, isMain: false },
    { prefecture: '東京都', count: 414, isMain: true },
    { prefecture: '神奈川県', count: 44, isMain: false },
    { prefecture: '千葉県', count: 21, isMain: false },
  ],
  campaignStores: [
    {
      id: 'kanamachi',
      name: '金町ルートストレージ',
      address: '124-0006 東京都葛飾区金町1-35-13',
      nearestStation: '京成線金町駅から徒歩15分',
      price: 7000,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB9l6Yos9w6XQRhf4ggKSzCmpFAipyHqLX7jO7A1obRjzeGVi67vqWc5MKlHVlVbnPFW6z_fu5Ma53PzBLPNfzjVnvoCG9GrUL2WnXxfGslB0fN2PSrpJGSqPnLRjCcWrckgWWoTHZJcYKcGQYuDa1jM7zkuDC4j3bG_HAfE572QbGkTVteQxObEbZRpXfqHfx1VtpXYctf_KIXUN6F5AcbaVhPaqxsoNsa8PvLxGVgzYUGOXRLLmlu80Ni3reVWGpxaduwINco2Qs',
      serviceType: 'STORAGE',
      hasReservation: true,
    },
    {
      id: 'wakabadai',
      name: '若葉台ルートストレージ',
      address: '154-0023 東京都世田谷区若葉5-34-8',
      nearestStation:
        '東急世田谷線「若葉」駅 徒歩7分\n小田急線「下北沢代田」駅 徒歩15分',
      price: 55000,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBtHD0JJq2ex-RuRKnMfctdUlaHqd0dyf0zjp4Z_w5smcUdI7aUxZzB1afAEolxGWEXFEz0YnalWMgwSkD4dlrPbEIIoRRiIpKT5i-Dp_XxqEkQMVWI-VTrzXkZr0kIELmglkr2iGwJ5X6aq0HJHVF0E_zCwgfu1KgLCQoQYkm_lCcvrEm52l7I5_NMkXoWWeG4YjLWnluADxlZfzpYBBTe5Fqj9VtlN6JQGMM3EHkMZUpYlPWw68__H1XgQskFA5slW_xwaRoiklU',
      serviceType: 'STORAGE',
      hasReservation: true,
    },
    {
      id: 'tama-center',
      name: '多摩センタールートストレージ',
      address: '206-0041 東京都多摩市愛宕4-6-12',
      nearestStation: '京王・小田急線「多摩センター駅」から徒歩10分',
      price: 7000,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBsTg-WGqZLmHYEY8zyf2JrxkI3CxRy4WRVSs6bWIieHeRdI9Gh_G6ZCy0rF7XCLaOcWa7kUaV96qNkTArq7lh5aCx2zJ8JLJhnxDmPzoyQcuafALrrAm15efW1vwpfC2V6U6gDNe-e-xtAp8M_pL-TIXyU9IFYpepU77f5BjvQyR7YZj9O0nYrD05GTWcnXIDhqw1QxbsygfMoc4-IzQWoGJpmftBU7QnRpHyN-SRf8bNik34X4hY78ZP0S4SVzNpOaxHAQmRO4oo',
      serviceType: 'STORAGE',
      hasReservation: true,
    },
  ],
  newsItems: [
    {
      id: 'news-1',
      date: '2025年8月22日',
      title: '2025年9月1日 西荻西ルートストレージ オープンします',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDD4iXhsEGiIOTtzJN2jMpBQiu6bwmpmRlo0Mb3HEMIkFAL-2VZigdmcAf9ru3mvg04MaWfIjzh8hXUfT8cESqK0Vvb-wU2eJhtOzB-5aJBLARz9UMwwRVzJ8AVnlIaVwCkJ2pTSoMGy4HCK-AQzxF8E9lKQTgMtfIWG98R6dg9kiwcAWLMk0mA2RN5X95JFNkVlZAheqGnkiVVX9xo7tscghW9E76nbSXPWz3us9mJGY6IDFQ1H7HeQti06-RgAZEdJA4swgtVGIw',
      badge: 'OPEN予定',
    },
    {
      id: 'news-2',
      date: '2025年8月22日',
      title: '2025年11月 一本木町塩越ルートストレージ オープン予定',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBGKOnEoM3RimvnEX8Dyr0DUMK4jP3cskOrep-55P4Ov4nVLuRSMUFiho3Mvn4SJu1XIjOoW-jnhkqQ2pH4S04hnzVY1H-2dyobCRNqZ2kLtR-JuEun4PQGMZYZJMFvR6QevpQYFAkFQP3szy0rFzNFaZwi_RmClvVF6-dNuk8NzbayDnxwtMoNYtRIVSZ8wr5pOA4AQy0OWn3lrLYCTnANvn5ui4vVYD0ulqE9vieZils3he_AFD7z06QTbCSnbltu29xqhEuk1y8',
      badge: 'OPEN予定',
    },
    {
      id: 'news-3',
      date: '2025年8月22日',
      title:
        '2025年4月1日よりルートストア株式会社からルート株式会社へ会社名が変更となりました。',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBpHlodGjOlX2idQjygBNcTisqJrG8XxHpsBLpu7urGkeFhtVxUpgMrD7JxrB4yqa0UiCWwWVBfPSYUaypoI-u7ZRhvJMSI1tGu2AFK1xB3cWZNK3SwoXk12eii9-_KAc-tzmqO5LJ23_LwVCEwBJAwHF6D4kItNFFXuZdmKXDWVlM-QqT3zV3dDLVtkVk4UUMvIPc9wexjzcCI_vLwiPgHZXl221K3rLcJ138tpWtYmw1uB5C1yBrjha_18z2bYVQhf4OGtogXesk',
      badge: 'OPEN予定',
    },
  ],
  useCases: [
    {
      id: 'case-01',
      caseNumber: 1,
      title: 'オフシーズンの用品を大切に保管しています',
      description:
        'オフシーズンの洗濯、スポーツ用品、アウトドア用品、防災用品、廃棄するか検討中の家具や通貨等。\n自宅が綺麗に片付くので重宝しています。',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuARoBp96NA6okiK_6HMJxdx_zT-jwsZdTu1Mc0pIUIjmr4545QlDFHLTlATXzrnwNUuI3PClpvQFftPHHEP6YNj9OKvAYHB8mSItqtCJVQb9Pdey2ehb187wPfGm5q82akVb9DT59oEHHD_J_tXOoaMry465J3_AMmhUO2qJBVsejbbLXOVGumupTHhFqI4PG34avEoWEQUt5e3Td9Bz3sZQoSGFw6paD1O1FmkSdivOjvtpmupZhso4plYqf0XuouMUb3jNg_04O4',
      tags: ['ルートストレージ', 'スポーツ用品'],
      serviceType: 'storage',
    },
    {
      id: 'case-02',
      caseNumber: 2,
      title: '引っ越しの際の一時保管に利用',
      description:
        '郊外から都心に引っ越しがあるので、普段使わない自宅の荷物と趣味の車のパーツを保管しようと考えて、自宅から近いトランクルームを探しました。月額55,000円。',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBxnJHYri8uPkf8UrYi9dI3JZq9QhHHWqIqEJrLmrwQXFYbyOsLQDT-Fu4qmA-6bhO5zmY8oWtCHYq_1OEfMunzF0wLgUOYHdVbGsTYcKGYcp_8QnpTtqrdQUc-LbPF6BBNeR_JNcX7jS4lpWdlBbkK5IguSqovKVi5_dDPPZ6GQAqNy43_oL3q79LYtUXT2rARTfCnQymYBSp7GEOWsKQVGUbwbgkkd4e8YOuYhGkaNZTm8pw6GJr2NBwn_nbBvRVqBeDbDiNn8gM',
      tags: ['ルートストレージ', '引っ越し'],
      serviceType: 'storage',
    },
    {
      id: 'case-03',
      caseNumber: 3,
      title: '愛車の整備スペースとして活用',
      description:
        '屋内ガレージで、天候を気にせず愛車の整備が可能になりました。保管だけでなく、趣味の時間も作れる場所として利用させていただいています。',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB8lq9FGn65TlQpRU7l-oTY8aOnUd4MCyEFaZMqcD_sBt26GLbtuf19DUCqaaTGqTAlOGTgiJah9gREL5VSw3GfgdZ9cYdGmX50HRSZuxNAS7k0O94aZWAZ6P6F95vP8lY3HwRqt8Np8idODX9jvhseqXGudbaZuQyX4omyEscvY9BoCBn83UHygMF1XrFl_rdQ2Ar97qdhPOXj1PDrQ1pzKHW9n7hT5XbxlmoQK_eUUPnXH1zVr9z1fHfR-Zh3utwKHeRbnVx1We8',
      tags: ['ルートストレージ', '趣味'],
      serviceType: 'storage',
    },
  ],
  testimonials: [
    {
      id: 'testimonial-1',
      name: 'H.K',
      age: '30代',
      occupation: '会社員',
      prefecture: '東京都',
      serviceType: '都心ルートストレージ',
      rating: 5,
      title: '駐車場も備わっており便利!!',
      content:
        '郊外から都心に引っ越しがあるので、普段使わない自宅の荷物と趣味の車のパーツを保管しようと考えて、自宅から近いトランクルームを探しました。思ったより清潔な環境を重視して選びました。今は第2のクローゼットみたいに頻繁に利用していて、趣味の車のパーツや大きな家具の他に洗濯や靴や遺人形やスノーボード用品などの季節物のある、普段着ない衣類や洗濯などを整理コンビニエンスにして保管しています。',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAaeLI80CRWZpNY1V1FGcsVQwVF0ipRrJ-B1-nt2dJcDWVJJvwzuZBp1nXnLBEUrELtgAbaiPnNnleEhk45s_xHuMxQ9W_t_79wj2RGqLTpyDtiVb4xl7VBUUsPi-WGXgDayyW8CNS3ZhKVqj4m7isHB7_Ck0Vii8uIlQQ2tW77QdlSs8JVCKX8JdXKBFpzZMA7QoQ4JYbcNmueXrka_ke63idcqOdWXi0K-Ib6UfPzwkSJ2c2Glx7At4fQSd5_9E14_Qtmos8kRUc',
    },
    {
      id: 'testimonial-2',
      name: 'M.I',
      age: '30代',
      occupation: '会社員',
      prefecture: '神奈川県',
      serviceType: 'ルートストレージ',
      rating: 5,
      title: '衣類や季節家電の収納に',
      content:
        '季節物の衣類、冷暖房器具、子供の頃の衣類や通貨を収納しています。主に家族の荷物を出し入れするため、現地の状況は不明ですが、衣類等はカビなど発生せず保管出来ています。つい着なくなったけど捨てられない、冬のコート等がかさばり、自宅には置いておけないものを置くことができてとても助かっています。',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ0RpXo7ZQcK6U1l2Nvxe6lPJYxmi7t55aIAouyq6KjwEynObL1iNQ2tnfhiai3vuehqC3U3zQsZTP6GNSamAZBu02CyTfjbSkkyVjjBNc9exOdWnY7zV_9OYhB6e14SUr8kVO7a6bz0HaXbTU7bvQC9-cU0PBfgOqVJayRvg0DzN84NpbV32UGh3mAA9OGdPWUEQ4fion3yY-PT9zX9faKhDJzjhuwoPxJYehSqUrpvFSlBr2YEbcRkLWZ4lLvQFjEjiwDWybG7s',
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: '収納できるものは何ですか？',
      answer:
        'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。',
      isOpen: true,
    },
    {
      id: 'faq-2',
      question: 'どのくらいのものが収納できるか想像つきません。',
      answer: '',
      isOpen: false,
    },
    {
      id: 'faq-3',
      question: '泥棒などへの防犯対策はどうなっていますでしょうか？',
      answer: '',
      isOpen: false,
    },
  ],
  contractSteps: [
    {
      stepNumber: 1,
      label: 'お申込み',
      icon: 'description',
      isMainStep: true,
    },
    {
      stepNumber: 0,
      label: '審査',
      icon: 'assignment_ind',
      isMainStep: false,
    },
    {
      stepNumber: 2,
      label: '初期費用の\nお支払い',
      icon: 'payments',
      isMainStep: true,
    },
    {
      stepNumber: 0,
      label: '入居確認',
      icon: 'handshake',
      isMainStep: false,
    },
    {
      stepNumber: 3,
      label: '鍵の受け渡し',
      icon: 'vpn_key',
      isMainStep: true,
    },
  ],
};
