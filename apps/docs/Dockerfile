# =============================================================================
# Dockerfile for apps/docs (React + Vite)
# =============================================================================
# Build from monorepo root: docker build -f apps/docs/Dockerfile -t portfolio-docs .
# Run: docker run -p 3002:3002 portfolio-docs
# =============================================================================


# -----------------------------------------------------------------------------
# Base stage: Node.js with pnpm
# -----------------------------------------------------------------------------
FROM node:22-alpine AS base

RUN corepack enable && corepack prepare pnpm@10.30.3 --activate

WORKDIR /app


# -----------------------------------------------------------------------------
# Build stage: Install dependencies and build
# -----------------------------------------------------------------------------
FROM base AS builder

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY packages/ ./packages/
COPY apps/ ./apps/

RUN pnpm install --frozen-lockfile
RUN pnpm --filter docs build


# -----------------------------------------------------------------------------
# Production stage: Serve static build with Nginx
# -----------------------------------------------------------------------------
FROM nginx:1.27-alpine AS production

COPY apps/docs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/docs/dist/ /usr/share/nginx/html/

EXPOSE 3002

CMD ["nginx", "-g", "daemon off;"]
