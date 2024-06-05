This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to reproduce the issue [rainbow-me/browser-extension#1381](https://github.com/rainbow-me/browser-extension/issues/1381) with [Rainbow Wallet](https://rainbow.me/).

## Pre-requisites

- Node.js `>= v18.12`.
- Yarn `v4.2.2` (via `corepack`).

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000), and you should see the error in the browser console.

Maybe you need to try to connect the Rainbow Wallet extension to reproduce the issue.

## Environment

- OS: macOS Sonoma `v14.5`
- Browser: Chrome `v125.0.6422.113 (Official Build) (arm64)`
- Installed wallets:
  - MetaMask Wallet `v11.15.6`
  - Rainbow Wallet `v1.4.111`
  - Phantom Wallet `v24.9.1`
