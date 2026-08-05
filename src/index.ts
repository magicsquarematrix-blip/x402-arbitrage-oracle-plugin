import { CdpX402Client } from "@coinbase/cdp-sdk/x402";
import { wrapFetchWithPayment } from "@x402/fetch";

export interface ArbitrageSignalOptions {
  tokenAddress?: string;
  tradeSizeUsd?: number;
  serverUrl?: string;
}

export interface ArbitrageSignalResult {
  success: boolean;
  isProfitable?: boolean;
  netProfitUsd?: number;
  netRoiPercent?: number;
  buyVenue?: string;
  sellVenue?: string;
  verdict?: string;
  data?: any;
  error?: string;
}

const DEFAULT_SERVER_URL = "https://web4-x402-server-903824686658.us-central1.run.app/api/v1/scan-risk";

/**
 * Fetch verified DEX arbitrage net-profit signals using standard x402 pay-per-call.
 * Costs $0.01 USDC on Base or Solana.
 */
export async function getArbitrageSignal(options: ArbitrageSignalOptions = {}): Promise<ArbitrageSignalResult> {
  const targetUrl = options.serverUrl || DEFAULT_SERVER_URL;
  const queryParams = new URLSearchParams();
  
  if (options.tokenAddress) queryParams.append("tokenAddress", options.tokenAddress);
  if (options.tradeSizeUsd) queryParams.append("tradeSizeUsd", options.tradeSizeUsd.toString());

  const fullUrl = queryParams.toString() ? `${targetUrl}?${queryParams.toString()}` : targetUrl;

  try {
    const client = new CdpX402Client();
    const fetchWithPayment = wrapFetchWithPayment(fetch, client);
    
    const response = await fetchWithPayment(fullUrl, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to fetch arbitrage signal via x402"
    };
  }
}
