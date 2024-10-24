# Build stage
FROM node:20.18.0-alpine AS builder

# Create non-root user
RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup

# Set working directory
WORKDIR /app

# Change ownership
RUN chown -R nodeuser:nodegroup /app

# Switch to non-root user
USER nodeuser

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

# Copy source code
COPY ./src ./src
# COPY ./public ./public

# Copy configure fie
COPY index.html ./
COPY tsconfig.app.json tsconfig.json tsconfig.node.json ./
COPY vite.config.ts ./

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000
