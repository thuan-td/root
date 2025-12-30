import Image from 'next/image';

export function UsageBannerSection() {
  return (
    <section className="container py-8">
      <div className="rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row h-auto md:h-64">
        {/* Left side - Teal background */}
        <div className="bg-[#4DB6AC] p-8 md:w-1/3 flex flex-col justify-center text-white">
          <h3 className="font-bold text-2xl mb-2">
            <span className="text-[#FFEB3B]">用途に応じた使い方</span>ができる
            <br />
            こちらを確認ください!!
          </h3>
          <p className="text-xs opacity-90">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>

        {/* Right side - Image */}
        <div className="md:w-2/3 relative">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=400&fit=crop"
            alt="Workshop"
            fill
            className="object-cover"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 bg-[#FFEB3B] flex items-center justify-center font-bold text-gray-900 tracking-widest text-lg p-2 text-center"
            style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
          >
            ご利用ガイドを見る
          </div>
        </div>
      </div>
    </section>
  );
}
