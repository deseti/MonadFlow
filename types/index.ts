/**
 * DApp Category Types
 */
export type DAppCategory =
  | "DeFi"
  | "NFT"
  | "Gaming"
  | "Social"
  | "Infrastructure"
  | "AI"
  | "Oracle"
  | "Bridge"
  | "Wallet"
  | "Analytics"
  | "DEX"
  | "Lending"
  | "Other";

/**
 * DApp Interface
 */
export interface DApp {
  id: string;
  name: string;
  description: string;
  logo: string;
  categories: DAppCategory[];
  website: string;
  twitter?: string;
  discord?: string;
  github?: string;
  isLive: boolean;
  onlyOnMonad: boolean;
  tvl?: number;
  users?: number;
  volume24h?: number;
  tags: string[];
  featured?: boolean;
}

/**
 * DApp Connection - for graph visualization
 */
export interface DAppConnection {
  source: string; // dApp ID
  target: string; // dApp ID
  type: "integration" | "composability" | "shared-token" | "partnership";
  strength: number; // 0-1
}

/**
 * User Activity for recommendations
 */
export interface UserActivity {
  walletAddress: string;
  visitedDApps: string[]; // dApp IDs
  favoredCategories: DAppCategory[];
  lastVisit: Date;
  badges: string[];
}

/**
 * Badge System
 */
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

/**
 * Recommendation Result
 */
export interface Recommendation {
  dapp: DApp;
  score: number;
  reason: string;
}
