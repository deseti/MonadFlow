import { http, createConfig } from "wagmi";
import { Chain } from "viem";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

// Monad Mainnet Configuration
export const monadMainnet: Chain = {
  id: 41454, // Monad Mainnet Chain ID (verify this)
  name: "Monad",
  nativeCurrency: {
    name: "Monad",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_MONAD_RPC_URL || "https://rpc.monad.xyz"],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_MONAD_RPC_URL || "https://rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Explorer",
      url: "https://explorer.monad.xyz",
    },
  },
  testnet: false,
};

// Monad Testnet Configuration
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

// Wagmi Configuration
export const config = getDefaultConfig({
  appName: "MonadFlow",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "YOUR_PROJECT_ID",
  chains: [monadMainnet, monadTestnet],
  transports: {
    [monadMainnet.id]: http(),
    [monadTestnet.id]: http(),
  },
  ssr: true,
});
