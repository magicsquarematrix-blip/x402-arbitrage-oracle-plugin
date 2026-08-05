# ⚡ x402 Cross-DEX Atomic Arbitrage & Net-Profit Oracle Plugin

[![x402 Version](https://img.shields.io/badge/x402-v2-blue.svg)](https://docs.cdp.coinbase.com/x402)
[![Base Mainnet](https://img.shields.io/badge/Network-Base%20Mainnet-blue)](https://base.org)
[![Solana](https://img.shields.io/badge/Network-Solana-purple)](https://solana.com)
[![Price](https://img.shields.io/badge/Price-%240.01%20USDC-green.svg)](#pricing)

**1-Line Drop-in Plugin for ElizaOS, CDP AgentKit, LangChain, and Autonomous AI Agents**

This plugin provides autonomous AI agents with real-time, pre-flight verified DEX arbitrage net-profit signals across **Base** (Aerodrome, Uniswap V3, BaseSwap, Slipstream) and **Solana** (Raydium, Jupiter). 

It automatically handles the **x402 v2 Pay-Per-Call Protocol** — issuing $0.01 USDC micro-payments on-chain per query without requiring API keys or subscriptions.

---

## 🚀 Features

- ⚡ **Pre-Flight Net Profit Verification**: Deducts DEX swap fees, gas costs, MEV sandwich risk, and hidden token sell-taxes before signaling a trade.
- 💰 **Pay-Per-Call ($0.01 USDC)**: Powered by the standard x402 v2 protocol. Zero subscriptions, zero API keys.
- 🤖 **ElizaOS & AgentKit Ready**: Plug and play with ElizaOS actions and Coinbase AgentKit ActionProviders.
- 🌐 **Dual Chain (Base & Solana)**: Supports EVM contract addresses (`0x...`) and Solana token mint addresses.

---

## 📦 Installation

```bash
npm install x402-arbitrage-oracle-plugin
```

---

## 💡 Quick Start

### 1. Direct TypeScript / Node.js Integration

```typescript
import { getArbitrageSignal } from "x402-arbitrage-oracle-plugin";

// 1 Line — Automatically pays $0.01 USDC via x402 & fetches verified arbitrage signal
const signal = await getArbitrageSignal({
  tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // Optional: target token or omit for Top 5 live spreads
  tradeSizeUsd: 1000
});

console.log("Arbitrage Signal Result:", signal);
```

---

### 2. ElizaOS Integration

```typescript
import { x402ArbitrageAction } from "x402-arbitrage-oracle-plugin/elizaos";

// Register action with your ElizaOS Agent runtime
export const agentConfig = {
  name: "ArbitrageTraderAgent",
  actions: [x402ArbitrageAction]
};
```

---

### 3. Coinbase CDP AgentKit Integration

```typescript
import { x402ArbitrageActionProvider } from "x402-arbitrage-oracle-plugin/agentkit";
import { AgentKit } from "@coinbase/agentkit";

const agentKit = await AgentKit.from({
  actionProviders: [x402ArbitrageActionProvider()]
});
```

---

## 📡 Live API Endpoint Specifications

- **Live Server URL**: `https://web4-x402-server-903824686658.us-central1.run.app/api/v1/scan-risk`
- **Protocol**: x402 v2 Payment Required (`HTTP 402`)
- **Cost**: `$0.01 USDC` (10,000 base units)
- **Base Recipient Wallet**: `0x444A2fE410A2474c016F3715eFC4E7F0869d317B`
- **Solana Recipient Wallet**: `GoSFT6SuT2fXaNDm1iaZJprpEFR3JDs7B6SkPPXJHDuf`

---

## 📄 License

MIT © Web 4.0 Time Wizard Team
