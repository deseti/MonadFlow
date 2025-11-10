import { http } from "wagmi";
import { Chain } from "viem";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

// Monad Testnet Configuration
// Note: Mainnet has not launched yet, so we only use testnet
export const monadTestnet: Chain = {
  id: 10143, // Monad Testnet Chain ID (Official)
  name: "Monad Testnet",
  nativeCurrency: {
    name: "Monad",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_MONAD_TESTNET_RPC_URL || "https://testnet-rpc.monad.xyz"],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_MONAD_TESTNET_RPC_URL || "https://testnet-rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Vision Explorer",
      url: "https://testnet.monvision.io",
    },
  },
  testnet: true,
};

// Wagmi Configuration - Using only Testnet (Mainnet not launched yet)
export const config = getDefaultConfig({
  appName: "MonadFlow",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "YOUR_PROJECT_ID",
  chains: [monadTestnet],
  transports: {
    [monadTestnet.id]: http(),
  },
  ssr: true,
});
