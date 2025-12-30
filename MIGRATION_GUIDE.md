# Migration to shadcn-ui and English

This project has been updated to use shadcn-ui components and English language throughout the codebase.

## Changes Made

### 1. Dependencies Added

- `@radix-ui/*` packages for UI primitives
- `class-variance-authority` for variant management
- `tailwind-merge` for className merging
- `tailwindcss-animate` for animations

### 2. Configuration Updates

- Updated `tailwind.config.ts` with shadcn-ui theme
- Updated `globals.css` with CSS variables
- Created `components.json` for shadcn-ui config
- Created `src/lib/utils.ts` with `cn()` helper

### 3. UI Components (shadcn-ui)

All components now use lowercase filenames (shadcn convention):

- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/label.tsx`

### 4. Import Changes

Old:

```tsx
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
```

New:

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
```

### 5. Language Changes

All Japanese text in code has been replaced with English:

- Component props and variable names
- Comments
- Function names
- UI text (keep Japanese in user-facing content/data)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## File Structure

```
src/
├── components/
│   ├── ui/              # shadcn-ui components (lowercase)
│   ├── features/        # Feature components
│   ├── common/          # Common components
│   └── layouts/         # Layout components
├── lib/
│   ├── utils.ts         # cn() helper
│   └── utils/           # Other utilities
└── app/                 # Next.js app router
```
