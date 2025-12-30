# Tài liệu Render Dự án Next.js

## 📋 Tổng quan

Dự án Next.js được xây dựng với kiến trúc Server-Side Rendering (SSR) tối ưu cho SEO, sử dụng TypeScript, TailwindCSS, và React Query để quản lý API.

## 🎯 Yêu cầu Kỹ thuật

### Core Technologies

- **Framework**: Next.js (App Router/Pages Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Data Fetching**: React Query (TanStack Query)
- **Target Market**: Nhật Bản

### Tiêu chuẩn Code Quality

- ESLint + Prettier
- TypeScript strict mode
- Code conventions nhất quán
- Git hooks (Husky + lint-staged)

## 🏗️ Kiến trúc Folder

```
root/
├── public/                      # Static assets
│   ├── images/
│   ├── fonts/
│   └── locales/                # i18n files (Japanese)
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Route groups
│   │   ├── (main)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/             # React components
│   │   ├── common/            # Shared components
│   │   ├── features/          # Feature-specific components
│   │   ├── layouts/           # Layout components
│   │   └── ui/                # UI primitives
│   │
│   ├── lib/                   # Library configurations
│   │   ├── api/               # API client setup
│   │   ├── query/             # React Query setup
│   │   └── utils/             # Utility functions
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useApi.ts
│   │   └── useQuery.ts
│   │
│   ├── services/              # API service layers
│   │   ├── user.service.ts
│   │   └── product.service.ts
│   │
│   ├── types/                 # TypeScript type definitions
│   │   ├── api.types.ts
│   │   └── models.types.ts
│   │
│   ├── constants/             # Constants & configurations
│   │   └── config.ts
│   │
│   └── styles/                # Global styles
│       └── globals.css
│
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🚀 Cách Render Dự án

### 1. Server-Side Rendering (SSR)

Next.js hỗ trợ nhiều phương thức render:

#### a) Server Components (Mặc định - Next.js 13+)

```tsx
// src/app/products/page.tsx
import { getProducts } from '@/services/product.service';

export default async function ProductsPage() {
  // Data được fetch trên server
  const products = await getProducts();

  return (
    <div>
      <h1>商品一覧</h1>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// Generate metadata cho SEO
export async function generateMetadata() {
  return {
    title: '商品一覧 | サイト名',
    description: '最新の商品をご覧ください',
    openGraph: {
      title: '商品一覧',
      description: '最新の商品をご覧ください',
      locale: 'ja_JP',
    },
  };
}
```

#### b) Client Components với React Query

```tsx
// src/components/features/ProductList.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/product.service';

export function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### 2. Setup React Query

```tsx
// src/lib/query/query-client.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
```

```tsx
// src/app/layout.tsx
import { QueryClientProvider } from '@/lib/query/QueryProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
```

### 3. API Service Layer

```typescript
// src/services/product.service.ts
import { apiClient } from '@/lib/api/client';
import type { Product } from '@/types/models.types';

export async function getProducts(): Promise<Product[]> {
  const response = await apiClient.get('/products');
  return response.data;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
}
```

### 4. SEO Optimization

```tsx
// src/app/products/[id]/page.tsx
import { Metadata } from 'next';
import { getProductById } from '@/services/product.service';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id);

  return {
    title: `${product.name} | サイト名`,
    description: product.description,
    keywords: product.tags.join(', '),
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
    alternates: {
      canonical: `https://example.com/products/${params.id}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id);

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <div className="prose max-w-none">{product.description}</div>
    </article>
  );
}
```

## 🎨 TailwindCSS Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

## 🌐 Môi trường Nhật Bản

### Internationalization Setup

```typescript
// src/lib/i18n/config.ts
export const i18nConfig = {
  locales: ['ja'],
  defaultLocale: 'ja',
  timeZone: 'Asia/Tokyo',
};
```

### Date/Time Formatting

```typescript
// src/lib/utils/date.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(date);
}
```

## 📦 Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "type-check": "tsc --noEmit"
  }
}
```

## 🔧 Code Quality Configuration

### ESLint (.eslintrc.json)

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### Prettier (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🚀 Deployment & Build

### Build Process

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://example.com
```

## 📊 Performance & SEO Best Practices

1. **Image Optimization**: Sử dụng `next/image` component
2. **Font Optimization**: Sử dụng `next/font` cho Google Fonts
3. **Static Generation**: Sử dụng `generateStaticParams` cho dynamic routes
4. **Caching**: Cấu hình React Query cache strategies
5. **Code Splitting**: Sử dụng dynamic imports khi cần thiết
6. **Metadata**: Đầy đủ meta tags cho mỗi page
7. **Structured Data**: Thêm JSON-LD schema markup

## 🔍 Testing Strategy

```typescript
// src/components/features/__tests__/ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    const product = {
      id: '1',
      name: 'テスト商品',
      price: 1000,
    };

    render(<ProductCard product={product} />);
    expect(screen.getByText('テスト商品')).toBeInTheDocument();
  });
});
```

## 📝 Notes

- Luôn sử dụng Server Components khi không cần interactivity
- React Query cho Client Components cần real-time data
- Metadata được generate trên server cho SEO tối ưu
- TailwindCSS classes được purge tự động trong production
- TypeScript strict mode đảm bảo type safety
