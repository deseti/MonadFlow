"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Users, Zap, Trophy } from "lucide-react";

/**
 * Live stats panel showing network activity
 * Updates in real-time to show ecosystem engagement
 */
export function StatsPanel() {
  const [stats, setStats] = useState({
    totalTVL: "$2.4M",
    activeUsers: "12.5K",
    transactions24h: "45.2K",
    topCategory: "DeFi",
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        totalTVL: `$${(Math.random() * 5).toFixed(1)}M`,
        activeUsers: `${(Math.random() * 20).toFixed(1)}K`,
        transactions24h: `${(Math.random() * 100).toFixed(1)}K`,
        topCategory: ["DeFi", "NFT", "Gaming", "AI"][Math.floor(Math.random() * 4)],
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
      {/* Total TVL */}
      <div className="glass rounded-xl p-3 sm:p-4 hover:border-monad-purple/30 border border-transparent transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-monad-purple/20 rounded-lg">
            <TrendingUp className="w-4 h-4 text-monad-purple" />
          </div>
          <p className="text-xs sm:text-sm text-gray-400">Total TVL</p>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white">{stats.totalTVL}</p>
      </div>

      {/* Active Users */}
      <div className="glass rounded-xl p-3 sm:p-4 hover:border-monad-blue/30 border border-transparent transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-monad-blue/20 rounded-lg">
            <Users className="w-4 h-4 text-monad-blue" />
          </div>
          <p className="text-xs sm:text-sm text-gray-400">Active Users</p>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white">{stats.activeUsers}</p>
      </div>

      {/* 24h Transactions */}
      <div className="glass rounded-xl p-3 sm:p-4 hover:border-monad-cyan/30 border border-transparent transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-monad-cyan/20 rounded-lg">
            <Zap className="w-4 h-4 text-monad-cyan" />
          </div>
          <p className="text-xs sm:text-sm text-gray-400">24h Txns</p>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white">{stats.transactions24h}</p>
      </div>

      {/* Top Category */}
      <div className="glass rounded-xl p-3 sm:p-4 hover:border-amber-400/30 border border-transparent transition-all">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-amber-400/20 rounded-lg">
            <Trophy className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-xs sm:text-sm text-gray-400">Top Category</p>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white">{stats.topCategory}</p>
      </div>
    </div>
  );
}
