import { getArbitrageSignal } from "./index";

export const x402ArbitrageAction = {
  name: "GET_X402_ARBITRAGE_SIGNAL",
  description: "Fetches pre-flight verified DEX arbitrage net-profit trade signals across Base and Solana using x402 ($0.01 USDC)",
  similes: ["SCAN_ARBITRAGE", "CHECK_DEX_SPREAD", "FIND_NET_PROFIT_TRADE"],
  handler: async (runtime: any, message: any, state: any, options: any, callback: any) => {
    const tokenAddress = options?.tokenAddress || message?.content?.tokenAddress;
    const tradeSizeUsd = options?.tradeSizeUsd || 1000;

    const result = await getArbitrageSignal({ tokenAddress, tradeSizeUsd });
    
    if (callback) {
      callback({
        text: `Arbitrage Signal Verdict: ${result.verdict || "PROCESSED"} | Net Profit: $${result.netProfitUsd || 0}`,
        content: result
      });
    }
    return result;
  },
  examples: [
    [
      { user: "user", content: { text: "Scan Base DEXes for top arbitrage opportunities" } },
      { user: "agent", content: { text: "Paid $0.01 USDC via x402. Aerodrome -> Uniswap V3 Spread: +$18.45 (1.85% ROI)" } }
    ]
  ]
};
