import { getArbitrageSignal } from "./index";

export function x402ArbitrageActionProvider() {
  return {
    name: "x402_arbitrage_oracle",
    description: "Queries high-frequency DEX arbitrage spread and net-profit signals powered by x402 paywall",
    actions: [
      {
        name: "scan_dex_arbitrage",
        description: "Queries pre-flight verified DEX arbitrage signals on Base & Solana for $0.01 USDC",
        invoke: async (args: { tokenAddress?: string; tradeSizeUsd?: number }) => {
          return await getArbitrageSignal(args);
        }
      }
    ]
  };
}
