# 🚀 Quick Start Guide

## Installation (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.local.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) ✨

## ✅ What's Working

- ✅ **TypeScript**: Zero errors, strict mode enabled
- ✅ **ESLint**: Configured with Next.js + TypeScript rules
- ✅ **Prettier**: Auto-formatting on save
- ✅ **shadcn/ui**: Modern, accessible UI components
- ✅ **Husky**: Git hooks for code quality
- ✅ **lint-staged**: Auto-fix on commit
- ✅ **TailwindCSS**: Utility-first CSS with custom theme

## 🎨 UI Components (shadcn/ui)

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

// Example usage
<Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
  </CardHeader>
  <CardContent>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
    <Button className="w-full mt-4">Submit</Button>
  </CardContent>
</Card>;
```

## 📝 Development Workflow

### Making Changes

```bash
# 1. Make your changes
# 2. Stage files
git add .

# 3. Commit (hooks run automatically)
git commit -m "feat: add new feature"

# Hooks will:
# ✓ Lint your code
# ✓ Fix ESLint errors
# ✓ Format with Prettier
# ✓ Validate commit message
```

### Available Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format all files
npm run type-check   # Check TypeScript
```

## 🎯 Project Structure

```
src/
├── app/                    # Next.js app router (pages)
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── features/          # Feature components
│   ├── common/            # Shared components
│   └── layouts/           # Layout components
├── lib/
│   ├── utils.ts           # cn() helper
│   ├── api/               # API client
│   ├── query/             # React Query
│   └── utils/             # Utilities
├── services/              # API services
├── types/                 # TypeScript types
└── styles/                # Global styles
```

## 🔧 Key Features

### 1. Type-Safe Development

```tsx
import type { MobileHome } from '@/types/models.types';

// Full type safety throughout
```

### 2. Server & Client Components

```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetchData(); // Direct server fetch
  return <div>{data}</div>;
}

// Client Component
('use client');
export function ClientComponent() {
  const [state, setState] = useState();
  return <div>Interactive</div>;
}
```

### 3. React Query for API

```tsx
'use client';
import { useQuery } from '@tanstack/react-query';

export function DataComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  });
}
```

### 4. Styling with TailwindCSS

```tsx
<div className="bg-background text-foreground">
  <Card className="shadow-lg hover:shadow-xl transition-shadow">
    <Button variant="default" size="lg">
      Click me
    </Button>
  </Card>
</div>
```

## 📚 Learn More

- [Full README](README.md) - Complete project documentation
- [Setup Guide](SETUP.md) - Detailed setup instructions
- [Changes](CHANGES.md) - What's new and changed
- [Migration Guide](MIGRATION_GUIDE.md) - Migration details

## 🆘 Common Issues

### Git hooks not working?

```bash
npm run prepare
```

### Type errors?

```bash
npm run type-check
```

### Lint errors?

```bash
npm run lint:fix
```

### Import errors?

Use lowercase for shadcn/ui:

```tsx
// ❌ Wrong
import { Button } from '@/components/ui/Button';

// ✅ Correct
import { Button } from '@/components/ui/button';
```

## 🎉 You're Ready!

The project is fully set up with:

- ✅ Modern tooling
- ✅ Code quality checks
- ✅ Type safety
- ✅ Auto-formatting
- ✅ Git hooks
- ✅ shadcn/ui components

Start building! 🚀
