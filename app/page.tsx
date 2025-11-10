import Link from "next/link";
import { ArrowRight, Sparkles, Network, Brain } from "lucide-react";
import { ConnectWallet } from "@/components/connect-wallet";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text">
              MonadFlow
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Discover the Monad ecosystem in 3D. 
              AI-powered recommendations. Immersive exploration.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Network className="w-5 h-5 text-monad-purple" />
              <span className="text-sm font-medium text-white">3D Network Graph</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Brain className="w-5 h-5 text-monad-blue" />
              <span className="text-sm font-medium text-white">AI Recommendations</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-monad-cyan" />
              <span className="text-sm font-medium text-white">Gamified Discovery</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/explorer"
              className="group px-8 py-4 bg-gradient-to-r from-monad-purple to-monad-blue rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex justify-center">
              <ConnectWallet />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl w-full">
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold gradient-text">200+</div>
              <div className="text-gray-400 text-sm mt-2">dApps</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-gray-400 text-sm mt-2">Categories</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold gradient-text">Live</div>
              <div className="text-gray-400 text-sm mt-2">Mainnet Data</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>Built for Mission 9: Squad Up Challenge</p>
          <p className="mt-2">Open Source • MIT License</p>
        </div>
      </footer>
    </main>
  );
}
