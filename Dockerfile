# Build stage
FROM node:20.18.0-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000
