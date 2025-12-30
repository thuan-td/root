# Project Setup Guide

## Prerequisites

- Node.js 18+ and npm
- Git

## Installation Steps

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd mobile-home-rental-jp

# Install dependencies
npm install
```

### 2. Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and configure:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_SITE_URL=https://your-site-url.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 3. Git Hooks (Husky)

Git hooks are automatically set up when you run `npm install`. They include:

#### Pre-commit Hook

- Runs `lint-staged` to check and format staged files
- Auto-fixes ESLint errors
- Formats code with Prettier

#### Commit Message Hook

- Validates commit message is not empty
- Ensures minimum message length (10 characters)

### 4. Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## Available Scripts

| Command                | Description                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Start development server        |
| `npm run build`        | Build for production            |
| `npm start`            | Start production server         |
| `npm run lint`         | Run ESLint                      |
| `npm run lint:fix`     | Fix ESLint errors automatically |
| `npm run format`       | Format code with Prettier       |
| `npm run format:check` | Check code formatting           |
| `npm run type-check`   | Run TypeScript type checking    |

## Code Quality Tools

### ESLint

Configured with:

- Next.js recommended rules
- TypeScript rules
- Prettier integration

### Prettier

- Auto-formats on save (if IDE is configured)
- Runs on pre-commit hook
- Consistent code style

### TypeScript

- Strict mode enabled
- No implicit any
- Proper type checking

### Husky + lint-staged

- Pre-commit: Lints and formats staged files
- Commit-msg: Validates commit messages

## Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Code will be auto-formatted on save (if IDE configured)
   - Or run `npm run format` manually

3. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add mobile home search feature"
   ```

   - Pre-commit hook will auto-fix linting issues
   - Commit message will be validated

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Troubleshooting

### Husky hooks not running

If git hooks aren't working:

```bash
# Reinstall husky
npm run prepare

# Or manually
npx husky install
```

### Lint-staged errors

If lint-staged fails:

```bash
# Run linting manually
npm run lint:fix

# Run formatting manually
npm run format

# Then commit again
git commit -m "your message"
```

### Type errors

```bash
# Check types
npm run type-check

# Fix import issues
# Make sure all imports use lowercase for shadcn/ui components
# Example: '@/components/ui/button' not '@/components/ui/Button'
```

## IDE Setup

### VS Code

Install recommended extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Next Steps

1. Configure your API endpoints in services
2. Customize the theme in `tailwind.config.ts`
3. Add your actual data models
4. Implement authentication
5. Deploy to production

## Support

For issues or questions, please check:

- [README.md](README.md) - Project overview
- [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) - Migration details
- Create an issue in the repository
