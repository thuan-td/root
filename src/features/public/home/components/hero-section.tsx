import { Banner1, Banner2, Banner3, Banner } from '@/components/images';
import { AutoScrollingColumn } from '@/components/templates/auto-scrolling-column';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-label="メインコンテンツ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 h-[30rem]">
          {/* Left: Text Content & Small Images */}
          <div className="flex-1 space-y-8 self-end">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                <span className="block mb-3">
                  <span className="text-primary">首</span>都圏室内型
                </span>
                <span className="text-black">
                  <span className="text-primary">ト</span>ランクルーム
                </span>
              </h1>

              {/* Floating Yellow Badge */}
              <div className="absolute -top-4 -right-60 md:-right-64 bg-[#FFF100] text-sm lg:text-base rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-lg transform rotate-0 z-10">
                <span className="font-bold">拠点数</span>
                <span className="font-bold">トップクラス</span>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-bold">約</span>
                  <span className="text-2xl md:text-3xl font-black text-primary">
                    350
                  </span>
                  <span className="font-bold">拠点</span>
                </div>
                <span className="font-bold bg-black text-white px-2 rounded-full">
                  突破
                </span>
              </div>
            </div>

            {/* Sub Gallery (Bottom row of banner) */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-12 max-w-2xl">
              {[Banner1, Banner2, Banner3].map((BannerComponent, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden">
                  <BannerComponent width={400} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Main Image & Scrolling Column */}
          <div className="flex flex-row gap-4">
            {/* Center Main Image */}
            <div className="flex-[2] rounded-3xl overflow-hidden self-end">
              <Banner width={600} />
            </div>

            {/* Auto Scrolling Column */}
            <div className="flex-1 relative overflow-hidden rounded-3xl">
              <AutoScrollingColumn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
