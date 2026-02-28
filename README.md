# Turborepo + React + Firebase

Monorepo Turbo initialise a la racine du dossier avec `pnpm`, Vite (React/TS), et Firebase.

## Commandes utilisees

```sh
npx create-turbo@latest . --package-manager pnpm --example with-vite --skip-install --no-git
pnpm install
pnpm add firebase --filter web
pnpm add -Dw firebase-tools
```

## Demarrage

```sh
cp apps/web/.env.example apps/web/.env.local
pnpm dev
```

Ensuite, remplis `apps/web/.env.local` avec tes variables Firebase.

## Firebase CLI

```sh
pnpm exec firebase login
pnpm exec firebase init
```
