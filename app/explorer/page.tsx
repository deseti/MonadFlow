"use client";

import { useState, Suspense } from "react";
import { dappsData, getCategories } from "@/lib/data/dapps";
import { DApp } from "@/types";
import { Search, Grid3x3, Network, Info } from "lucide-react";
import { ConnectWallet } from "@/components/connect-wallet";
import dynamic from "next/dynamic";
import { DAppDetailModal } from "@/components/dapp-detail-modal";
import { StatsPanel } from "@/components/stats-panel";
import { NetworkPulse } from "@/components/network-pulse";
import { TourGuide } from "@/components/tour-guide";
import { RecommendationPanel } from "@/components/recommendation-panel";

// Dynamically import 3D components (client-side only)
const NetworkGraph = dynamic(
  () => import("@/components/3d/network-graph").then((mod) => mod.NetworkGraph),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-lg">Loading 3D View...</div>
      </div>
    ),
  }
);

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d"); // Always 3D by default!
  const [selectedDApp, setSelectedDApp] = useState<DApp | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = getCategories();

  // Filter dApps based on search and category
  const filteredDApps = dappsData.filter((dapp) => {
    const matchesSearch =
      searchQuery === "" ||
      dapp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dapp.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || dapp.categories.includes(selectedCategory as any);

    return matchesSearch && matchesCategory;
  });

  const handleDAppClick = (dapp: DApp) => {
    setSelectedDApp(dapp);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold gradient-text">
              MonadFlow
            </a>
            <div className="flex items-center gap-4">
              <NetworkPulse />
              <ConnectWallet />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Live Stats Panel */}
        <StatsPanel />

        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search dApps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 glass rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-monad-purple text-sm sm:text-base"
            />
          </div>

          {/* Filters - Horizontal scrollable on mobile */}
          <div className="overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
            <div className="flex flex-nowrap gap-2 min-w-min sm:flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all ${
                  selectedCategory === null
                    ? "bg-gradient-to-r from-monad-purple to-monad-blue text-white"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-monad-purple to-monad-blue text-white"
                      : "glass text-gray-300 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-between items-center gap-2">
            <p className="text-gray-400 text-xs sm:text-sm truncate">
              {filteredDApps.length} dApps
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("3d")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "3d"
                    ? "bg-monad-purple text-white"
                    : "glass text-gray-400"
                }`}
                title="3D Network View"
              >
                <Network className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-monad-purple text-white"
                    : "glass text-gray-400"
                }`}
                title="Grid View"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {viewMode === "3d" ? (
          <div className="glass rounded-2xl overflow-hidden relative" style={{ height: "min(70vh, 600px)", minHeight: "400px" }}>
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="text-white text-lg">Loading 3D Experience...</div>
                </div>
              }
            >
              <NetworkGraph dapps={filteredDApps} onDAppClick={handleDAppClick} />
            </Suspense>
            
            {/* 3D View Instructions - Hidden on mobile, shown on desktop */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 glass rounded-xl p-3 sm:p-4 max-w-xs hidden sm:block">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-monad-purple mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-300">
                  <p className="font-semibold text-white mb-1">Explore in 3D</p>
                  <p>🖱️ Click & drag to rotate</p>
                  <p>🔍 Scroll to zoom</p>
                  <p>✨ Click nodes for details</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filteredDApps.map((dapp) => (
              <DAppCard key={dapp.id} dapp={dapp} onClick={handleDAppClick} />
            ))}
          </div>
        )}
      </div>

      {/* dApp Detail Modal */}
      <DAppDetailModal
        dapp={selectedDApp}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Recommendation Panel - Only show in grid view on the side */}
      {viewMode === "grid" && selectedDApp && (
        <div className="fixed bottom-8 right-8 w-96 max-w-[calc(100vw-2rem)] max-h-96 overflow-y-auto z-40">
          <RecommendationPanel
            selectedDApp={selectedDApp}
            relatedDApps={dappsData.filter(
              (d) =>
                d.id !== selectedDApp.id &&
                d.categories.some((cat) => selectedDApp.categories.includes(cat))
            )}
          />
        </div>
      )}

      {/* Interactive Tour Guide */}
      <TourGuide isFirstTime={true} />
    </main>
  );
}

function DAppCard({ dapp, onClick }: { dapp: DApp; onClick: (dapp: DApp) => void }) {
  return (
    <button
      onClick={() => onClick(dapp)}
      className="glass rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-200 group text-left w-full"
    >
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <img
          src={dapp.logo}
          alt={dapp.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.png";
          }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-monad-purple transition-colors truncate">
            {dapp.name}
          </h3>
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
            {dapp.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 mb-3 sm:mb-4">
        {dapp.description}
      </p>

      <div className="flex items-center gap-2 text-xs flex-wrap">
        {dapp.isLive && (
          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">
            Live
          </span>
        )}
        {dapp.onlyOnMonad && (
          <span className="px-2 py-1 bg-monad-purple/20 text-monad-purple rounded">
            Monad Only
          </span>
        )}
      </div>
    </button>
  );
}
