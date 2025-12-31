# Storage Detail Architecture

## Server Components vs Client Components

### Vấn đề

Trong Next.js App Router, components mặc định là **Server Components**. Server Components không thể sử dụng React hooks như `useState`, `useEffect`, `useRouter`, v.v.

### Giải pháp: Composition Pattern

Thay vì chuyển toàn bộ component thành Client Component, chúng ta sử dụng **Composition Pattern** để tách riêng phần tương tác.

## Pattern: Server Component + Client Wrapper

### Ví dụ: NearbyStoreCard

#### ❌ Cách SAI - Chuyển toàn bộ thành Client Component

```tsx
'use client';

import { useRouter } from 'next/navigation';

export function NearbyStoreCard({ store }) {
  const router = useRouter(); // ❌ Toàn bộ component phải chạy client-side

  return (
    <div onClick={() => router.push(`/storage-detail/${store.id}`)}>
      {/* Phần lớn nội dung này KHÔNG cần tương tác */}
      {/* Nhưng vẫn phải render client-side */}
    </div>
  );
}
```

**Vấn đề:**

- ❌ Toàn bộ component phải render client-side
- ❌ Tăng JavaScript bundle size
- ❌ Chậm hơn do phải hydrate toàn bộ component
- ❌ Không tận dụng được Server Components

#### ✅ Cách ĐÚNG - Composition Pattern

**1. Tạo Client Component nhỏ cho phần tương tác:**

```tsx
// nearby-store-link.tsx
'use client';

import { useRouter } from 'next/navigation';

export function NearbyStoreLink({ storeId, children }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/storage-detail/${storeId}`)}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}
```

**2. Giữ phần lớn là Server Component:**

```tsx
// nearby-store-card.tsx (Server Component - no 'use client')
import { NearbyStoreLink } from './nearby-store-link';

export function NearbyStoreCard({ store }) {
  return (
    <NearbyStoreLink storeId={store.id}>
      {/* Phần này render server-side ✅ */}
      <Image src={store.imageUrl} />
      <h3>{store.name}</h3>
      <p>{store.description}</p>
      {/* ... */}
    </NearbyStoreLink>
  );
}
```

**Lợi ích:**

- ✅ Phần lớn HTML render server-side (nhanh hơn)
- ✅ Chỉ phần tương tác (click handler) chạy client-side
- ✅ Giảm JavaScript bundle size
- ✅ SEO tốt hơn (HTML đầy đủ từ server)

## Các Pattern Khác

### 1. Event Handler Pattern

Khi bạn chỉ cần event handler đơn giản:

```tsx
// Client Component wrapper
'use client';

export function ClickableCard({ onClick, children }) {
  return <div onClick={onClick}>{children}</div>;
}

// Server Component
import { ClickableCard } from './clickable-card';

export function ProductCard({ product }) {
  return (
    <ClickableCard onClick={() => console.log('clicked')}>
      <Image src={product.image} />
      {/* ... */}
    </ClickableCard>
  );
}
```

### 2. Form Pattern

Khi cần forms với validation:

```tsx
// Client Component
'use client';

import { useForm } from 'react-hook-form';

export function ContactForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <button type="submit">Submit</button>
    </form>
  );
}

// Server Component
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section>
      <h2>Contact Us</h2>
      <ContactForm
        onSubmit={async data => {
          'use server';
          // Server Action
        }}
      />
    </section>
  );
}
```

### 3. State Management Pattern

Khi cần state nhưng muốn giữ SEO:

```tsx
// Client Component (chỉ phần cần state)
'use client';

export function ExpandableContent({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Thu gọn' : 'Xem thêm'}
      </button>
      {expanded && <div>{children}</div>}
    </>
  );
}

// Server Component
import { ExpandableContent } from './expandable-content';

export function ProductDescription({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <ExpandableContent>
        {/* Content này vẫn render server-side */}
        <p>{product.fullDescription}</p>
      </ExpandableContent>
    </div>
  );
}
```

## Quy tắc chung

### Khi nào dùng Server Component (mặc định):

✅ Fetch data từ database/API
✅ Truy cập backend resources
✅ Giữ sensitive info (API keys, tokens)
✅ Render static content
✅ SEO-critical content

### Khi nào cần Client Component:

✅ Event handlers (onClick, onChange, etc.)
✅ React hooks (useState, useEffect, useRouter)
✅ Browser APIs (localStorage, window, etc.)
✅ Interactive components (modals, dropdowns)
✅ Third-party libraries dùng React hooks

## Best Practices

### 1. Tách nhỏ Client Components

```tsx
// ❌ Tránh
'use client';

export function LargePage() {
  const [state, setState] = useState();
  return <div>{/* Hàng ngàn dòng code */}</div>;
}

// ✅ Nên
export function LargePage() {
  return (
    <div>
      {/* Phần lớn server-side */}
      <InteractiveButton /> {/* Chỉ phần này client-side */}
    </div>
  );
}
```

### 2. Pass minimal props to Client Components

```tsx
// ❌ Tránh
<ClientComponent data={hugeObject} />

// ✅ Nên
<ClientComponent id={hugeObject.id} name={hugeObject.name} />
```

### 3. Sử dụng children prop

```tsx
// ✅ Server content được pass qua children
<ClientWrapper>
  <ServerRenderedContent /> {/* Vẫn server-side */}
</ClientWrapper>
```

## Tổng kết

Pattern này cho phép bạn:

- ✅ Tận dụng Server Components (performance, SEO)
- ✅ Vẫn sử dụng React hooks khi cần
- ✅ Giữ bundle size nhỏ
- ✅ Tối ưu hóa loading time

**Nguyên tắc vàng**: Dùng Server Component cho đến khi bạn THỰC SỰ cần interactivity!
