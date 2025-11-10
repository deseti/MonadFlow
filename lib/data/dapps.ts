import { DApp } from "@/types";

/**
 * Monad Ecosystem DApps Data
 * Source: https://www.monad.xyz/ecosystem
 * Last updated: November 10, 2025
 */
export const dappsData: DApp[] = [
  // DeFi Category
  {
    id: "ambient-finance",
    name: "Ambient",
    description: "Spot AMM combining multiple liquidity types with modular hooks, dynamic fees and MEV protection.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910fa442716854f1f3390_Ambient_logo.webp",
    categories: ["DeFi"],
    website: "https://monad.ambient.finance/",
    twitter: "https://x.com/ambient_finance",
    isLive: true,
    onlyOnMonad: false,
    tags: ["AMM", "DEX", "Liquidity"],
    featured: true,
  },
  {
    id: "apriori",
    name: "Apriori",
    description: "MEV infrastructure and liquid staking protocol, designed for the parallel execution era and natively built on Monad.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91139ebe3a25cc1bbc74f_Apriori_logo.webp",
    categories: ["DeFi"],
    website: "http://testnet-staking.apr.io/",
    twitter: "https://x.com/apriori",
    isLive: true,
    onlyOnMonad: true,
    tags: ["Staking", "MEV", "Liquid Staking"],
    featured: true,
  },
  {
    id: "azaar",
    name: "Azaar",
    description: "High-performance DEX aggregator and trading platform built for Monad.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91170f43c1f7d17690959_Azaar_logo.webp",
    categories: ["DeFi"],
    website: "https://azaar.com/",
    twitter: "https://x.com/AzaarExchange",
    isLive: true,
    onlyOnMonad: false,
    tags: ["DEX", "Aggregator", "Trading"],
    featured: false,
  },
  {
    id: "bean-exchange",
    name: "Bean Exchange",
    description: "Gamified decentralized spot & perpetual exchange natively built on Monad Network.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9118b1f770571ff12b289_Bean%20Exchange_logo.webp",
    categories: ["DeFi"],
    website: "https://bean.exchange/",
    twitter: "https://x.com/Bean_DEX",
    isLive: true,
    onlyOnMonad: true,
    tags: ["Perpetuals", "DEX", "Gamified"],
    featured: true,
  },
  {
    id: "clober",
    name: "Clober",
    description: "Fully on-chain CLOB DEX protocol with a gas-efficient matching engine optimized for on-chain execution.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebcb9cf681db7a60d2e22_clober.webp",
    categories: ["DeFi"],
    website: "https://alpha.clober.io/",
    twitter: "https://x.com/CloberDEX",
    isLive: true,
    onlyOnMonad: false,
    tags: ["CLOB", "DEX", "Order Book"],
    featured: false,
  },

  // Infrastructure
  {
    id: "alchemy",
    name: "Alchemy",
    description: "End-to-end platform giving devs everything to build and scale web3 apps - from APIs to monitoring.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910dc1f770571ff122b0c_Alchemy_logo.webp",
    categories: ["Infrastructure"],
    website: "https://alchemy.com/",
    twitter: "https://x.com/Alchemy",
    isLive: true,
    onlyOnMonad: false,
    tags: ["API", "RPC", "Infrastructure"],
    featured: true,
  },
  {
    id: "chainlink",
    name: "Chainlink",
    description: "The standard for onchain finance, verifiable data, and cross-chain interoperability.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e79b975a193baa9b8f85_chainlink.webp",
    categories: ["Infrastructure", "Oracle"],
    website: "https://chain.link/",
    twitter: "https://x.com/chainlink",
    isLive: true,
    onlyOnMonad: false,
    tags: ["Oracle", "Data Feeds", "Cross-chain"],
    featured: true,
  },

  // NFT & Gaming
  {
    id: "drkvrs",
    name: "DRKVRS",
    description: "Web3 Multiplayer Action RPG game with innovative mechanics, set in a dystopian and brutalist world.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67d3a1aa464cdce0ecbee499_drkvrs%20jpg.webp",
    categories: ["Gaming", "NFT"],
    website: "https://www.drkvrs.io/",
    twitter: "https://x.com/drkvrs",
    isLive: true,
    onlyOnMonad: false,
    tags: ["RPG", "Gaming", "NFT"],
    featured: true,
  },

  // Wallets
  {
    id: "rainbowkit",
    name: "RainbowKit",
    description: "The best way to connect a wallet. Designed for everyone. Built for developers.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911826ca74a7001624998_rainbowkit_logo.webp",
    categories: ["Wallet", "Infrastructure"],
    website: "https://www.rainbowkit.com/",
    twitter: "https://x.com/rainbowdotme",
    isLive: true,
    onlyOnMonad: false,
    tags: ["Wallet", "Connection", "UI"],
    featured: false,
  },

  // AI Category
  {
    id: "gm-agents",
    name: "GM Agents",
    description: "AI super app that brings together a wide range of AI agents — for text, image, audio, and video.",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816d9af2f69162a3cf9fc_gm%20logo%20_400x400.webp",
    categories: ["AI"],
    website: "https://gmagents.ai/",
    twitter: "https://x.com/GMAgents_AI",
    isLive: false,
    onlyOnMonad: false,
    tags: ["AI", "Agents", "Multimodal"],
    featured: false,
  },

  // Add more dApps here...
];

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  const categories = new Set<string>();
  dappsData.forEach((dapp) => {
    dapp.categories.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories).sort();
}

/**
 * Get featured dApps
 */
export function getFeaturedDApps(): DApp[] {
  return dappsData.filter((dapp) => dapp.featured);
}

/**
 * Get dApps by category
 */
export function getDAppsByCategory(category: string): DApp[] {
  return dappsData.filter((dapp) => dapp.categories.includes(category as any));
}

/**
 * Search dApps
 */
export function searchDApps(query: string): DApp[] {
  const lowerQuery = query.toLowerCase();
  return dappsData.filter(
    (dapp) =>
      dapp.name.toLowerCase().includes(lowerQuery) ||
      dapp.description.toLowerCase().includes(lowerQuery) ||
      dapp.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get dApp by ID
 */
export function getDAppById(id: string): DApp | undefined {
  return dappsData.find((dapp) => dapp.id === id);
}
