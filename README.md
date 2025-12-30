# Mobile Home Rental Platform - Japan

A modern web platform for searching and booking mobile homes across Japan, built with Next.js, TypeScript, and shadcn/ui.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **State Management**: React Query (TanStack Query)
- **HTTP Client**: Axios
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Fonts**: Noto Sans JP

## 📁 Project Structure

```
root/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── mobile-homes/      # Property listings & details
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── not-found.tsx      # 404 page
│   │
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── common/           # Shared components
│   │   ├── features/         # Feature-specific components
│   │   └── layouts/          # Layout components
│   │
│   ├── lib/                  # Library configurations
│   │   ├── api/              # API client setup
│   │   ├── query/            # React Query setup
│   │   ├── utils/            # Utility functions
│   │   └── utils.ts          # cn() helper
│   │
│   ├── services/             # API service layer
│   │   ├── mobile-home.service.ts
│   │   └── booking.service.ts
│   │
│   ├── types/                # TypeScript type definitions
│   │   ├── models.types.ts
│   │   └── api.types.ts
│   │
│   └── styles/               # Global styles
│       └── globals.css
│
├── public/                   # Static files
├── components.json          # shadcn/ui config
├── .env.local.example       # Environment variables example
└── doc.md                   # Rendering documentation
```

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set your API URLs:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_SITE_URL=https://your-site-url.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Format code with Prettier
npm run format

# Type checking
npm run type-check
```

## 🎨 Features

### ✅ Implemented

- **Homepage**: Hero section, features, recommended properties
- **Property Search**: Search by location, dates, and guest count
- **Property Listings**: Paginated list view
- **Property Details**: Image gallery, amenities, reviews
- **Responsive Design**: Mobile, tablet, and desktop support
- **SEO Optimization**: Metadata, OG tags, structured data
- **shadcn/ui Components**: Modern, accessible UI components

### 🔜 Coming Soon

- User Authentication (Login/Register)
- Booking System
- Favorites Feature
- Review Submission
- Owner Dashboard
- Payment Integration

## 🏗️ Architecture

### Server Components vs Client Components

- **Server Components**: Data fetching, SEO-critical pages
- **Client Components**: Interactive features, state management

### Data Fetching Strategy

- **Server Side**: Direct `async/await` fetching (homepage, detail pages)
- **Client Side**: React Query with caching (listing pages, search)

### Styling

- TailwindCSS utility-first approach
- shadcn/ui for reusable components
- CSS variables for theming
- Responsive design (mobile-first)

## 📝 Code Standards

### TypeScript

- Strict mode enabled
- Explicit type definitions
- Minimal use of `any`

### Components

- Functional components
- Props type definitions required
- Proper naming convention (PascalCase for components)

### Styling

- TailwindCSS classes
- `cn()` helper for conditional classes
- shadcn/ui components for consistency

## 🌐 Internationalization

- Default language: Japanese (ja)
- Date/Time: Tokyo timezone (Asia/Tokyo)
- Currency: Japanese Yen (JPY)
- User-facing content in Japanese
- Code and comments in English

## 🎨 shadcn/ui Components

This project uses shadcn/ui components. To add new components:

```bash
# Example: Add a dialog component
npx shadcn-ui@latest add dialog
```

Available components:

- button
- card
- input
- label
- badge
- dialog
- dropdown-menu
- select
- separator
- toast

## 📄 License

Private Project

## 👥 Contributing

Contributions are welcome! Please follow the code standards and submit PRs.

## 📞 Support

For issues or questions, please create an Issue in the repository.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query)
