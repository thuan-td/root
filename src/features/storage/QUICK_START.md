# Storage Feature - Quick Start Guide

## 🚀 Cách sử dụng nhanh

### 1️⃣ Dummy Data Mode (Mặc định - Đang dùng)

Không cần setup gì, chỉ cần:

```bash
npm run dev
```

Truy cập: `http://localhost:3000/storage`

✅ Data từ `src/features/storage/data/storage.data.ts`
✅ Loading states tự động (giả lập 200-500ms delay)
✅ Không cần backend API

---

### 2️⃣ Real API Mode

**Bước 1:** Bật real API

```typescript
// File: src/features/storage/services/storageService.ts
const USE_REAL_API = true; // Đổi từ false → true
```

**Bước 2:** Setup API URL

```env
# File: .env.local
NEXT_PUBLIC_API_URL=https://your-api.com/api
```

**Bước 3:** Đảm bảo backend có endpoints:

```
GET /storage              # Toàn bộ data
GET /storage/services     # 3 services
GET /storage/faqs         # FAQs
GET /storage/reviews      # Reviews
GET /storage/usage-examples
GET /storage/why-choose
GET /storage/items
```

**Bước 4:** Test

```bash
npm run dev
```

---

## 📊 Sử dụng Components

### Static Components (Không cần API)

```tsx
import { StorageHero, IntroductionSection } from '@/features/storage/components'
import { storagePageData } from '@/features/storage/data/storage.data'

<StorageHero {...storagePageData.hero} />
<IntroductionSection {...storagePageData.introduction} />
```

### Dynamic Components (Với React Query)

```tsx
import {
  ServicesWrapper,
  FAQWrapper,
  ReviewsWrapper
} from '@/features/storage/components'

<ServicesWrapper />    {/* Auto fetch + loading + error handling */}
<FAQWrapper />
<ReviewsWrapper />
```

---

## 🎯 Available Components

### Server Components (Static)

- `Breadcrumb` - Navigation trail
- `StorageHero` - Hero section
- `IntroductionSection` - Service intro

### Client Components (Presentation)

- `ServiceGrid` - Services display
- `FAQSection` - FAQ accordion
- `ReviewsSection` - Testimonials
- `UsageExamplesSection` - Usage scenarios
- `StorageItemsSection` - Storable items
- `WhyChooseSection` - Selling points

### Wrapper Components (React Query)

- `ServicesWrapper` - Services + API
- `FAQWrapper` - FAQ + API
- `ReviewsWrapper` - Reviews + API
- `UsageExamplesWrapper` - Examples + API
- `StorageItemsWrapper` - Items + API
- `WhyChooseWrapper` - Reasons + API

---

## 🔧 Customizing Data

### Edit Dummy Data

```typescript
// File: src/features/storage/data/storage.data.ts

export const storagePageData: StoragePageData = {
  hero: {
    title: 'ルートなら',
    subtitle: '24時間いつでも',
    // ... edit here
  },
  services: [
    {
      id: '1',
      title: 'Storage',
      // ... add/edit services
    },
  ],
  faqs: [
    {
      question: '新しい質問',
      answer: '回答',
    },
  ],
};
```

### Add New Service

```typescript
services: [
  // ... existing services
  {
    id: '4',
    type: 'custom',
    title: 'New Service',
    subtitle: 'サブタイトル',
    description: '説明',
    image: '/images/service.jpg',
    features: ['特徴1', '特徴2'],
    badge: 'バッジ',
    color: '#FF5733',
    link: '/service-link',
  },
];
```

---

## 📝 API Response Format

Backend API phải return đúng TypeScript types:

### GET /storage/services

```json
[
  {
    "id": "1",
    "type": "storage",
    "title": "Storage",
    "subtitle": "ルートストレージ",
    "description": "屋内型トランクルーム",
    "image": "https://...",
    "features": ["特徴1", "特徴2", "特徴3"],
    "badge": "ルートストレージ",
    "color": "#c8102e",
    "link": "/storage"
  }
]
```

### GET /storage/faqs

```json
[
  {
    "id": "1",
    "question": "収納できるものは何ですか？",
    "answer": "衣類、家具、家電製品..."
  }
]
```

---

## 🐛 Troubleshooting

### Loading mãi không dừng

```typescript
// Check trong storageService.ts:
const USE_REAL_API = false; // Đảm bảo = false nếu dùng dummy data
```

### API call failed

```typescript
// Check .env.local:
NEXT_PUBLIC_API_URL=https://correct-url.com/api

// Check backend đã chạy
// Check CORS enabled
```

### Images không load

```typescript
// Check next.config.js:
images: {
  domains: ['lh3.googleusercontent.com', 'your-cdn.com'],
}
```

---

## 📦 Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Start production
npm start
```

---

## 🎨 Styling

Sử dụng Tailwind CSS + CSS variables:

```tsx
// Primary color (red)
className = 'text-primary bg-primary border-primary';

// Surface colors
className = 'bg-surface-light dark:bg-surface-dark';

// Text colors
className = 'text-gray-600 dark:text-gray-300';
```

---

## ✅ Checklist

**Setup:**

- [ ] Clone repo
- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Visit `/storage`

**Customize:**

- [ ] Edit `storage.data.ts`
- [ ] Update images
- [ ] Adjust colors
- [ ] Add/remove sections

**API Integration:**

- [ ] Setup backend endpoints
- [ ] Configure `.env.local`
- [ ] Set `USE_REAL_API = true`
- [ ] Test API calls
- [ ] Handle errors

**Production:**

- [ ] `npm run build` success
- [ ] No TypeScript errors
- [ ] Images optimized
- [ ] SEO metadata OK
- [ ] Test on mobile

---

## 📚 Tài liệu chi tiết

- [README.md](./README.md) - Component documentation
- [API_INTEGRATION.md](./API_INTEGRATION.md) - API integration guide
- [Types](./types/index.ts) - TypeScript definitions
- [Data](./data/storage.data.ts) - Mock data

---

## 💡 Tips

1. **Start with dummy data** để develop UI nhanh
2. **Use wrappers** cho tất cả dynamic sections
3. **Keep static sections** static (Hero, Intro)
4. **Check DevTools Network tab** khi test API
5. **TypeScript errors** = API response format sai
6. **Build regularly** để catch errors sớm

---

**Need help?** Check [API_INTEGRATION.md](./API_INTEGRATION.md) for detailed docs!
