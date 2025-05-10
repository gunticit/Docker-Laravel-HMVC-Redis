## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Structure

my-next-app/
├── public/                     # Static files (images, fonts, favicon,...)
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── (auth)/             # Route Group (ví dụ: /auth/login, /auth/register)
│   │   └── (dashboard)/        # Route Group (ví dụ: /dashboard/home, /dashboard/users)
│   ├── components/             # Shared UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   └── Header/
│   ├── features/               # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types.ts
│   │   ├── product/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types.ts
│   ├── lib/                    # API clients, helpers, utils
│   ├── hooks/                  # Global hooks
│   ├── stores/                 # State management (Zustand, Redux,...)
│   ├── middlewares/            # Custom middlewares (if needed)
│   ├── constants/              # Global constants
│   ├── types/                  # Global types/interfaces
│   ├── styles/                 # Global styles

├── tests/                      # Unit & integration tests
├── .env.local                  # Local environment variables
├── next.config.js              # Next.js config
├── tsconfig.json               # TypeScript config
├── jest.config.js              # Jest config (if testing)
├── .eslintrc.js                # ESLint config
├── .prettierrc                 # Prettier config
└── package.json
