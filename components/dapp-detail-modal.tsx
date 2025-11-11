"use client";

import { DApp } from "@/types";
import { X, ExternalLink, Twitter, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DAppDetailModalProps {
  dapp: DApp | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal displaying detailed dApp information
 * Triggered when clicking a node in 3D view
 */
export function DAppDetailModal({ dapp, isOpen, onClose }: DAppDetailModalProps) {
  if (!dapp) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 p-4"
          >
            <div className="glass rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <img
                    src={dapp.logo}
                    alt={dapp.name}
                    className="w-16 h-16 rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.png";
                    }}
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {dapp.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {dapp.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 bg-monad-purple/20 text-monad-purple rounded-full text-sm font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {dapp.description}
              </p>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {dapp.isLive && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 font-medium">Live on Monad</span>
                  </div>
                )}
                {dapp.onlyOnMonad && (
                  <div className="px-4 py-2 bg-monad-purple/20 rounded-lg">
                    <span className="text-monad-purple font-medium">Exclusive to Monad</span>
                  </div>
                )}
                {dapp.featured && (
                  <div className="px-4 py-2 bg-amber-500/20 rounded-lg">
                    <span className="text-amber-400 font-medium">⭐ Featured</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {dapp.tags.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {dapp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-lg text-gray-300 text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats */}
              {(dapp.tvl || dapp.users || dapp.volume24h) && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {dapp.tvl && (
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="text-gray-400 text-sm mb-1">TVL</div>
                      <div className="text-white font-bold text-lg">
                        ${(dapp.tvl / 1000000).toFixed(1)}M
                      </div>
                    </div>
                  )}
                  {dapp.users && (
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="text-gray-400 text-sm mb-1">Users</div>
                      <div className="text-white font-bold text-lg">
                        {dapp.users.toLocaleString()}
                      </div>
                    </div>
                  )}
                  {dapp.volume24h && (
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="text-gray-400 text-sm mb-1">24h Volume</div>
                      <div className="text-white font-bold text-lg">
                        ${(dapp.volume24h / 1000000).toFixed(1)}M
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={dapp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-monad-purple to-monad-blue rounded-lg text-white font-medium hover:scale-105 transition-transform"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </a>
                {dapp.twitter && (
                  <a
                    href={dapp.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-white hover:scale-105 transition-transform"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                )}
                {dapp.github && (
                  <a
                    href={dapp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-white hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
