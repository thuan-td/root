import Image from 'next/image';

interface NewsCardProps {
  title: string;
  date: string;
  imageUrl: string;
  tag?: string;
}

export function NewsCard({
  title,
  date,
  imageUrl,
  tag = 'OPEN',
}: NewsCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <div className="absolute top-2 left-2 bg-[#4DB6AC] text-white text-xs font-bold px-2 py-1 rounded shadow z-10">
          {tag} 予定
        </div>
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-1">{date}</p>
      <h3 className="font-bold text-sm group-hover:text-primary transition">
        {title}
      </h3>
    </article>
  );
}
