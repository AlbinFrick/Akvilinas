FROM --platform=linux/amd64 oven/bun:latest
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install 
COPY . .

