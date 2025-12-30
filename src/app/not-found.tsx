import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          ページが見つかりません
        </h2>
        <p className="text-gray-600 max-w-md">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link href="/">
          <Button size="lg">ホームに戻る</Button>
        </Link>
      </div>
    </div>
  );
}
