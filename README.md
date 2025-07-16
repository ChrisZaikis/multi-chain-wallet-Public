# Multi-Chain Wallet Manager

A **React-based app** for connecting and managing wallets on **Ethereum**, **Solana** and **Bitcoin** blockchains. This app uses **Wagmi** for Ethereum wallet integration, and **Solana Wallet Adapter** for Solana wallets. Users can connect to Ethereum using Metamask and Solana and Bitcoin using Phantom wallet.

## Features

- **Multi-Chain Wallet Connector:**
  - Connect to Ethereum, Solana and Bitcoin wallets.
- **Ethereum Wallets:**
  - Supports MetaMask
- **Solana Wallets:**
  - Supports Phantom
- **Bitcoin Wallets:**
  - Supports Phantom
- **Display Token Balance:**
  - After connecting a wallet, wallet's balances for each token in that ecosystem is displayed.
- **Dynamic UI Updates:**
  - UI dynamically updates when wallets are connected or disconnected.

## Tech Stack

- **React with Vite**: To build frontend UI.
- **Solana Wallet Adapter**: For Solana wallet connections.
- **Wagmi**: For Ethereum and UTXO wallet connections.
- **LI/FI SDK**: To query a list of all supported tokens and chains.
- **Material-UI (MUI)**: Used for a clean and responsive UI.
- **Tailwind CSS**: Used for styling.
- **TanStack Query**: For data fetching and caching
- **TanStack Virtual**: For optimized list rendering
- **Playwright**: For unit and e2e testing

### How to run

1. Install deps:

   ```bash
    npm install
   ```

2. Run the project:
   ```bash
    npm run dev
   ```
