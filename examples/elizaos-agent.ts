import { getArbitrageSignal } from "../src/index";

async function runElizaExample() {
  console.log("=== Testing ElizaOS Agent x402 Plugin ===");
  const signal = await getArbitrageSignal({ tradeSizeUsd: 1000 });
  console.log("Verified Arbitrage Signal Received:", JSON.stringify(signal, null, 2));
}

runElizaExample().catch(console.error);
