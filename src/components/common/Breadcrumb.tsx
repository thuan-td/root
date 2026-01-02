import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <header className="w-full px-6 py-4 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:underline cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    index === items.length - 1 ? 'text-red-400 font-medium' : ''
                  }
                >
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && <span className="mx-1">|</span>}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
