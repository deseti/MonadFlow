"use client";

import { DApp } from "@/types";
import { Star, Flame } from "lucide-react";

interface RecommendationPanelProps {
  selectedDApp: DApp | null;
  relatedDApps: DApp[];
}

/**
 * Smart recommendation panel based on selected dApp
 * Shows similar dApps in the same categories
 */
export function RecommendationPanel({
  selectedDApp,
  relatedDApps,
}: RecommendationPanelProps) {
  if (!selectedDApp) {
    return null;
  }

  return (
    <div className="glass rounded-xl p-4 mt-4 border border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 text-monad-purple" />
        <h3 className="text-lg font-semibold text-white">Related dApps</h3>
        <Flame className="w-4 h-4 text-orange-400" />
      </div>

      {relatedDApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relatedDApps.slice(0, 4).map((dapp) => (
            <div
              key={dapp.id}
              className="glass rounded-lg p-3 hover:border-monad-purple/50 border border-white/5 transition-all"
            >
              <div className="flex items-start gap-3">
                <img
                  src={dapp.logo}
                  alt={dapp.name}
                  className="w-8 h-8 rounded-lg flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.png";
                  }}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white truncate">
                    {dapp.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {dapp.categories[0] || "Ecosystem"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400">No similar dApps found</p>
      )}
    </div>
  );
}
