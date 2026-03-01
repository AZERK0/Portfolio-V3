# =============================================================================
# Dockerfile for apps/web (React + Vite)
# =============================================================================
# Build from monorepo root: docker build -f apps/web/Dockerfile -t portfolio-web .
# Run: docker run -p 3001:3001 portfolio-web
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
RUN pnpm --filter web build


# -----------------------------------------------------------------------------
# Production stage: Serve static build with Nginx
# -----------------------------------------------------------------------------
FROM nginx:1.27-alpine AS production

COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/web/dist/ /usr/share/nginx/html/

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
