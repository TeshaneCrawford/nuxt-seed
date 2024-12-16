# Nuxt Seed

A modern, edge-ready Nuxt.js starter template optimized for performance and developer experience. Built with TypeScript and deployed globally using NuxtHub on Cloudflare Workers.

## Key Features

- 🚀 **Edge-First Architecture**
  - Server-Side Rendering on Cloudflare Workers
  - Global deployment across 275+ locations
  - Built-in edge caching and optimization

- 💻 **Developer Experience**
  - TypeScript support out of the box
  - ESLint pre-configured
  - Nuxt DevTools enabled
  - Hot Module Replacement (HMR)

- 🎨 **Modern Styling**
  - UnoCss for utility-first CSS
  - Radix UI Colors for consistent theming
  - Automatic dark/light mode support
  - Custom font optimization with Nuxt Fonts

- 🔧 **Production Ready**
  - Zero-config deployment with NuxtHub
  - Built-in database, KV, and blob storage support
  - Performance optimized builds
  - View Transitions API support

## Quick Start

### Prerequisites

This template requires [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/installation#using-corepack).

### Installation

```bash
# Clone the repository from GitHub
git clone https://github.com/TeshaneCrawford/nuxt-seed.git my-app
cd my-app

# Install dependencies
pnpm install
```

### Configuration

Create a `.env` file to customize the welcome message:

```bash
NUXT_PUBLIC_HELLO_TEXT="Welcome to Your App!"
```

### Development

```bash
# Start development server
pnpm dev

# Type-check and lint
pnpm lint
```

### Deployment

Deploy to the edge with NuxtHub:

```bash
# Build and deploy
pnpm deploy
```

Monitor your deployment through the [NuxtHub Admin](https://admin.hub.nuxt.com) dashboard.

## Documentation

- [Nuxt Documentation](https://nuxt.com)
- [NuxtHub Guide](https://hub.nuxt.com)
- [UnoCss Documentation](https://unocss.dev/)
- [Radix Colors](https://www.radix-ui.com/colors)

## License

MIT
