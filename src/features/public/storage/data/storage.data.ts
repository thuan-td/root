/**
 * Storage Service Fake Data
 * Mock data for the storage service page
 */

import type { StoragePageData } from '../types';

export const storagePageData: StoragePageData = {
  hero: {
    title: 'ルートなら',
    subtitle: '24時間いつでも',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    stats: {
      hours: '24',
      days: '365',
    },
  },
  introduction: {
    title: 'お利用のニーズで選べるルートのサービス',
    description: [
      'ルートは、屋内型トランクルーム、レンタルガレージ、月極駐車場のルートパーキングを関東中心に展開しています。',
      '使い勝手の良さ、セキュリティはもちろん、建物の見た目にまでこだわり、お客様のニーズに合わせたプランを多数ご用意しています。ご利用希望の方や空き状況を確認される方は、当サイトよりご確認ください。',
      'また、ご予約や仮押さえ、お問い合わせ等もしていただけます。お住まいの家の近くのトランクルーム、レンタルガレージ、ガレージオフィス、月極駐車場は、「店舗を探す」のページよりご確認ください。',
    ],
  },
  services: [
    {
      id: '1',
      type: 'storage',
      title: 'Storage',
      subtitle: 'ルートストレージ',
      description: '屋内型トランクルーム',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDANNG5oMN2sgBOH1iKpvGaL48wsIBUa2wp_0xATSngcOild0xvBnfWiDmZJFsH4_PvJH9dZSv-ranmLzC7B3RAco3Y-kIM7YGIQkZLO4FuYVHjrS_dlsNyXKxuxt8-E7K-WppC7eENY6_36qVsswgo8YRZUObL-3leeCBAVDeAMvYl9oBK47sT5M2yjcS11IQB8hnHBzJZRi5AG3-Bm0hy1PxSnJjw7cQn8UaiVa5mTO-eELctHfWoSsuhl3mTzZ81L4jdx2vAaHA',
      features: [
        'もっと収納場所が欲しい',
        '引っ越し時の一時保管場所が欲しい',
        '会社の書類を保管したい',
      ],
      badge: 'ルートストレージ',
      color: '#c8102e',
      link: '/storage',
    },
    {
      id: '2',
      type: 'garage',
      title: 'Garage',
      subtitle: 'ルートガレージ',
      description: 'レンタルガレージ',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDj7shvUtZoxbyMJ-iRvLXz3EXHivRrF4YZLYq_22laYJxEmijpwMATBHJllhfm8b3TIGbUkBJWDTZxW7NX3NowzvB0ax_xvlKCspkDIQED3MQzlTStJp8sGK95CVp2dh3EVky71WrK2awx39bO6lZ95IwQbfGAfFKNozlDT5gqViX79PqAO4ptcUupPqEejt8QPM2Zo0KIMMys13LVbZtGKLqt70W-reOMNYHKJ8YvVGW8TfmzLkPjJ52lVmVoGTnEDwIxHuneMRM',
      features: [
        '車やバイクを大切に保管したい',
        'メンテナンスしたい',
        'オフィスが欲しい',
      ],
      badge: 'ルートガレージ',
      color: '#b8860b',
      link: '/garage',
    },
    {
      id: '3',
      type: 'parking',
      title: 'Parking',
      subtitle: 'ルートパーキング',
      description: '月極駐車場',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDuNFFiKWAXeC6WCIVIaWabRNjb-4ERUxjltheaTltFmQjdj2IILZn9UoPoDVLQOGrC2bm5ODgkMdebGVg0h1al-8L_sYXGQdQP1jy6PJl1pLfc02kZXJQFUf5RSoLHKE7qKhnlhIEVkqtfFkZophsmwgoLQhBarH2rVKK6o8IPxscWpWJa5sn1t6YEK5RJ6oGelWa_HFuaRGc46UoST26-7yIpmZw4_2MteeyO0Xuc16EXHve339KSN0f1ebQEl2mBAI6FbZC9Y6g',
      features: [
        '自家用車の駐車場を確保したい',
        '社用車の駐車場が欲しい',
        '2台目の駐車場に使いたい',
      ],
      badge: 'ルートパーキング',
      color: '#d2691e',
      link: '/parking',
    },
  ],
  usageExamples: [
    {
      id: '1',
      title: '季節に合わせた収納場所として',
      highlightedWord: '季',
      description: [
        '衣替えで次のシーズンオフの服、夏だけ使う扇風機、冬だけ使うファンヒーターなど、季節の品を収納すれば、自宅には今使うものだけになってスッキリ！',
        '季節の変わり目にはルートに行って入れ替え作業、新しい生活スタイルになれです。',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAaMh0avoHo73lS7f8zN5btJFji-BIC4HXY5utgzFV4l-UbgS5i2A3wwfw6PvfdM1BYQ0OEtz5CAmm-iohqXxvO7jZMbuK61i-QV7xf6Hd2P2oiHSjgz2NFb7WGv3Sh6O2XW601O5CKCPjpsE0Qo3FgwJgRjQLbycqw0-_qlXrVdq8P3x0XvxJu1WUg8IYEUTHQ7L6aN1vFAsnzRskqtZa11ExNRqrQ2HvZXJrZe0TSZ0ihbFy4kn_3dCyMDkofPztmqlj_cUL-ihc',
      imageShape: 'circle',
      imagePosition: 'left',
    },
    {
      id: '2',
      title: '引っ越し・リフォーム時の一時保管場所として',
      highlightedWord: '引',
      description: [
        '引っ越しで退去したけど新居が決まっていない、まだ使えないといったとき、またリフォームで自宅が使えなくなったときの一時的な保管場所に便利です。',
        '「ルートストレージ」のXLタイプなら大型の家具を含め、多くの荷物をぎっちり収納できます。',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjlnIEnNEjXc5ePLSpkut6tHiCb2stVh4nEgBid7PZR51T3RXkWJZRoHeLRaDzbTigxzRucML65tjNqVJpPO3ksCih4kLscWg4sdXF4dXL7tLC5XcIcZcizgSlci9bTfoAuO1S0njcVXurbuP7P2X8WbX-kzpe8PTPKpBJrOPQhJVUbXNg3PT-p19eFyGN5rgNwjvH2NyxMQm-j_OuYOutA4ckojo2_lo1Ihg_xhmJgeeyTiDKoWoyYVEIOKH_bBPUzW5-KgRzChQ',
      imageShape: 'rectangle',
      imagePosition: 'right',
    },
    {
      id: '3',
      title: '会社の資料や在庫管理場所として',
      highlightedWord: '会',
      description: [
        '「ルートストレージ」で資料を保管するも良し。「ルートガレージ」のガレージオフィスタイプで事務所として使うも良し。',
        'ルートは、個人のお客様だけでなく法人のお客様にも便利です。',
      ],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCvyUjYyMk9_wkd_EU8stOYZn8Q-w4cRPFGs7KiRw3_L_T46jSBYQS8CacLLCcgoc95lef5gBWO12kq_Tc3VzX5hZRqG_FPb-pK5PDqhxFaadIx7vhC4QSXqrpXK429iPYPpyef5GSjo-AvVjplm6e1XF2TwEQX1pjlHYTxNh_xI6HA7fEiKbguFcZlMPUFyi7xfEtmo-W9wvFIp6z9gld0xAB_DaaBQO2-yh8yHnkYqkwD9HsRkzaF7_XFi39pXxcX9ndP5nWbW-U',
      imageShape: 'rectangle',
      imagePosition: 'left',
    },
  ],
  storageItems: [
    {
      id: '1',
      title: '趣味で集めた推し活グッズ',
      description:
        '推し活で集めたアニメやアイドルのグッズが増え続けるのが悩みだけど、貴重なグッズだからって捨てられない…。\nそんな時は「ルートストレージ」で大切に保管してもらえます。',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDKPlD1HRl6z5oElYQ9zPf_Y71ZQEVuDw5R5pIPiQSkxbjgaQol-Z8gAcZ0OUogh4T9xaYHEtQwOFkXTZP7Ln0EbBT1x5uQsyql5H0jRuNYXByNDV2wvU0GYpaQvBp8tstpDsjYoBA2ixyFB0W36cBrguhW3CBmPJhMGThtB2x-vW5VEhkBt7rUv0rv118P_2NL4q8wfdtc_XLVNezDaB8H8uKP-MOrkizmKNTbmPe_aKOMmT78C8TxOm60-Bvq8lh5t7zcR8b1MQg',
    },
    {
      id: '2',
      title: '思い出の品物',
      description:
        '成長した子供の、赤ちゃんだった頃の洋服やおもちゃ。\n亡くなった祖父母のアルバムや古い手紙、記念に贈り合ったトロフィーや賞状など、思い出の品物を「ルートストレージ」で大切に残します。',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA67mJNtyCkcDilWrkAjAAxtuj1Y2DuT0SRkP_MvnxDxz4AL-fKaD2__LeLw_qShB1Dsb0qCKYzujMs5ayO259V29HFHYOfjyaCYT5bMDMfl91cxTonCwR-9YWk1HzXfZc7xCqJdQ1aNwaMQ40Go8Goz-ab2nXH7IIHdt_pqfstzFqbHD4rziuzQ9yebF8RI1mCZpPjrtzZ0JIEgdATNPlL7vRyGAYgjuM-5IukYLFyQpIYExb6uoo6lVdcUnqOCNRfy0mgQ-pU3-c',
    },
    {
      id: '3',
      title: '車やバイクなどの乗り物',
      description:
        'あなりも宝物にしたい乗り物を「ルート」で大切に保管できます。\n自転車・ロードバイクは「ルートストレージ」のサイズ大きめのお部屋に、車やバイクは「ルートガレージ」に保管できます。',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBklsioaPWHrDdq3pZJPSFN61ruj7j2ZlW32k1AEBQ9dN_v-1z096Djg4DadWrILvMPRAhNzGg8NzigGLrBfM7J6Hm98RkkDYUjFDA6h8frUtR_i8OyEQjWtP3HjhcYD55MwcngDmqkEwS1Ytq59FdBkEWstwvMp5hgNJmVqPx-mLH0ooiqGh_q2N8imd0_od5vWL4YPN0tAJDxCnf3WFHphx2o1igaiN68XdzRSVr0jax4Ta1FACMMpS6HfirCwm7ba5KMJU-WbFQ',
    },
  ],
  whyChooseReasons: [
    {
      id: '1',
      title: '自然な外観と清潔さで、女性も安心。',
      description:
        '倉庫の暗い雰囲気をイメージされる方もいらっしゃるかもしれませんが、ルートは住宅地に溶け込む一般建築のようなトランクルームです。お部屋が明るく清潔感があります。\n\nお客様の大切なアイテムを守るため、空気の流れにこだわった、精密な空気循環システムを取り入れ、湿気やカビなどの発生を防ぎやすい仕組みになっています。',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDpW32SMEla4Sgr96lKHIm7CyifW4Go6FbjR5kvkLMo2TSCzHh0f1Wi4Elu0kwxMLsa5iVCrUFgs8KgQFLd-uauU1KcmHyUTg9GRVeLwU-PYY-gCNQo3zSZPmXc37rQ7NNDyeO1CTgyyrosHSrxo0VAo5KjluzsXVzT-QWZOYVM0XdIHtwj72mu6ijhxfw8FW6MVh5x5CjF5Uo6J9fiuAc3Zgbqg7gGtSL1QwYd7F18TGwHoRliluxyKt6-fkca3KtEqfwNwGe4YiM',
    },
    {
      id: '2',
      title: '自宅より安心！万全なセキュリティ体制。',
      description:
        '自宅は警備システムがなく、普段の鍵の閉め忘れが多くて鍵のかけ忘れが発生しがちといった人が多いです。\n\nルートでは、盗難のリスクを最大限軽減させるため、SECOMやALSOKによる24時間の機械警備を実施し、それぞれのお部屋には個別の鍵があり、外からの侵入が難しくなっています。',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBGBjy9XbGV1Wdi_V0JWAM7naKv1xtM78s9DIM2qw57lrTVmpbG4EvkiFEZ2xvTti5aiFjL6w5bvl_0UKn1W_kh2JAyApTrRzzkKeLey7UwMbq1aum_35nTxHrcv6bBJlPaCn__DuNq7r1Sx918yBi7zu0q__pmihJ47k2kR3AYBVENXB4k36V20vbO5G4aZExcmgB87TI2HTDtFIKmbiN2M9Km2IgXv98CXaHRaS6NydsabXczP506ai0VeCSH_Kfa_qiigi1kxWo',
    },
    {
      id: '3',
      title: '拠点数が多く、近所で見つかる。',
      description:
        'トランクルームは、自宅の近くでいつでも取りに行ったり、置きに行ったりできる場所にあるのが理想的。\n\n関東一円に350拠点もルートならば、あなたの自宅の近くにもきっと見つかるはず。24時間ご利用可能で、思い立ったときにお出し入れできます。',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDfimbTBvMxgUfbEsRmVWJX6KDofBhIKgE-LXjEq_Cin4ZLuRpVJHfA3EDLHXDJ9bOcQFe3ssegfafqYgZz_PnI3QOc_0Dl-kSQ5z9rrVi1sp96iYObxQ3q21of9WnHdNcblOta7J5jKBeW1VEwfdea_hIl-hnxxmfHFrwGVjiy9eoKOhKrfDzEBhDNLVPNZ9-fGu56aum0MtQ7ZOIVDQAvPiy0RUb7N9VK_Tzz207LA8ccVcivPEMvxUbxWukZEOQQU-BtBEw9lLo',
    },
  ],
  reviews: [
    {
      id: '1',
      name: 'H.K',
      age: '30代',
      occupation: '会社員',
      location: '東京都',
      serviceType: 'ルートストレージ',
      rating: 5,
      title: '駐車場が借りられて便利!!',
      comment:
        '郊外から都心に引っ越しするので、普段使わない自宅の荷物と趣味の車のパーツを保管したいと考えて、自宅から近いトランクルームを探しました。明るく清潔な環境が重要だと思い選びました。今は第2のクローゼット的として頻繁に利用してます、趣味の車のパーツや大きな家具の他に洋服、靴、雛人形、スポーツ用品などの季節もののや普段着ない生物や洋服などを整理収納して保管しています。',
    },
    {
      id: '2',
      name: 'M.I',
      age: '30代',
      occupation: '会社員',
      location: '神奈川県',
      serviceType: 'ルートストレージ',
      rating: 5,
      title: '衣類や季節家電の収納に',
      comment:
        '季節物の衣類、冷暖房器具、子供の頃の衣類や雑貨を収納しています。主に家族が荷物を出し入れするので、現地の状況は不明ですが、衣類等はカビなど発生せず保管出来ています。いつか着ようかなと捨てられずにいた冬のコート等、たっぷりある自宅には置いておけないものを置くことができてとても助かっています。',
    },
  ],
  faqs: [
    {
      id: '1',
      question: '収納できるものは何ですか？',
      answer:
        '衣類、家具、家電製品、書類、趣味用品など、ほとんどのものを収納できます。ただし、危険物、生鮮食品、動植物などは収納できません。詳しくはお問い合わせください。',
    },
    {
      id: '2',
      question: 'どのくらいの大きさのものが収納できますか？',
      answer:
        'お部屋のサイズは様々ご用意しております。小さなロッカータイプから、大型家具も入る広いスペースまで、お客様のニーズに合わせてお選びいただけます。サイズの詳細は各店舗ページでご確認ください。',
    },
    {
      id: '3',
      question: '泥棒などへの防犯対策はどうなっていますか？',
      answer:
        '24時間体制でSECOMまたはALSOKによる機械警備を実施しております。また、各お部屋には個別の鍵があり、防犯カメラも設置されています。お客様の大切な荷物を安全に保管いたします。',
    },
    {
      id: '4',
      question: '契約に必要なものは何ですか？',
      answer:
        'ご契約には、本人確認書類（運転免許証、パスポートなど）、印鑑、初期費用（初月賃料、敷金、事務手数料など）が必要です。法人でのご契約の場合は、別途必要書類がございますので、お問い合わせください。',
    },
    {
      id: '5',
      question: '短期間だけの利用は可能ですか？',
      answer:
        'はい、可能です。最短1ヶ月からご利用いただけます。引っ越しやリフォームの際の一時保管場所としても多くのお客様にご利用いただいております。',
    },
  ],
};
