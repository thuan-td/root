import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      className="relative pt-12 pb-24 overflow-hidden"
      aria-label="メインコンテンツ"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 relative">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              itemProp="name"
            >
              <span className="text-primary">首都圏室内型</span>
              <br />
              <span className="text-primary">トランクルーム</span>
            </h1>

            {/* Yellow Badge */}
            <div className="absolute -top-10 right-0 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-[#FFEB3B] rounded-full flex flex-col items-center justify-center text-center shadow-lg transform rotate-12 z-20">
              <span className="text-xs font-bold text-gray-800">
                拠点数
                <br />
                トップクラス
              </span>
              <span className="text-2xl md:text-3xl font-black text-primary">
                ~350
              </span>
              <span className="text-xs font-bold text-gray-800">
                拠点
                <br />
                突破
              </span>
            </div>

            <p className="text-muted-foreground text-lg md:pr-20">
              安心・安全な収納スペース
              <br />
              24時間365日、自由に出入り
              <br />
              あなたの生活にプラスを
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[400px]">
            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                alt="首都圏室内型トランクルーム外観 - 24時間365日利用可能な安全な収納スペース"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
              <Image
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop"
                alt="清潔で広々としたトランクルーム内部 - セキュリティ完備"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Top Left Small Image */}
            <div className="absolute top-10 left-10 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-lg border-4 border-background z-10 hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=300&fit=crop"
                alt="ROOTストレージをご利用いただいているお客様"
                fill
                className="object-cover"
                loading="lazy"
                sizes="20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
