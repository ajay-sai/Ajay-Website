# Dockerfile for Cloud Run deployment
# Multi-stage build for optimized image size

# Stage 1: Build the application
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy application source
COPY . .

# Build the application
# This creates dist/public (frontend) and dist/index.js (backend)
RUN npm run build

# Stage 2: Production image
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy public assets (images, resume, sitemap, robots.txt)
COPY --from=builder /app/public ./public

# Copy shared schema (needed for runtime type checking)
COPY --from=builder /app/shared ./shared

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose Cloud Run port
EXPOSE 8080

# Health check (optional but recommended)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080/api/projects', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["npm", "start"]
