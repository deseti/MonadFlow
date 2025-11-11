import Link from "next/link";
import { ArrowRight, Sparkles, Network, Brain, Zap, BarChart3 } from "lucide-react";
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
              Discover the Monad ecosystem in stunning 3D. 
              Immersive exploration. Real-time analytics. All in one place.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/explorer"
              className="group px-8 py-4 bg-gradient-to-r from-monad-purple to-monad-blue rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
            >
              Enter 3D Explorer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex justify-center">
              <ConnectWallet />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl w-full">
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold gradient-text">100+</div>
              <div className="text-gray-400 text-sm mt-2">dApps</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-gray-400 text-sm mt-2">Categories</div>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold gradient-text">Live</div>
              <div className="text-gray-400 text-sm mt-2">on Testnet</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Platform Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: 3D Network */}
          <Link href="/explorer" className="group">
            <div className="glass p-8 rounded-2xl hover:border-monad-purple/50 border border-transparent transition-all duration-300 hover:scale-105 h-full cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-8 h-8 text-monad-purple" />
                <h3 className="text-2xl font-bold text-white">3D Network Graph</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Explore 100+ dApps in an interactive 3D space. Click nodes to see details, hover to view stats, and rotate to discover connections between protocols.
              </p>
              <div className="flex items-center gap-2 text-monad-purple font-semibold group-hover:gap-4 transition-all">
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Feature 2: Smart Recommendations */}
          <Link href="/explorer" className="group">
            <div className="glass p-8 rounded-2xl hover:border-monad-blue/50 border border-transparent transition-all duration-300 hover:scale-105 h-full cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-monad-blue" />
                <h3 className="text-2xl font-bold text-white">Smart Suggestions</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Click any dApp to see intelligent recommendations of similar protocols. Discover related projects based on shared categories and use cases.
              </p>
              <div className="flex items-center gap-2 text-monad-blue font-semibold group-hover:gap-4 transition-all">
                Try It Out
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Feature 3: Live Analytics */}
          <Link href="/explorer" className="group">
            <div className="glass p-8 rounded-2xl hover:border-monad-cyan/50 border border-transparent transition-all duration-300 hover:scale-105 h-full cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-monad-cyan" />
                <h3 className="text-2xl font-bold text-white">Live Analytics</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Real-time ecosystem stats showing total TVL, active users, 24h transactions, and trending categories. Watch the Monad ecosystem grow in real-time.
              </p>
              <div className="flex items-center gap-2 text-monad-cyan font-semibold group-hover:gap-4 transition-all">
                View Stats
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          How to Explore
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="glass p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-monad-purple to-monad-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              1
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Connect Wallet</h4>
            <p className="text-gray-400 text-sm">
              Link your wallet to access personalized features and interact with dApps.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-monad-blue to-monad-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              2
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Rotate & Zoom</h4>
            <p className="text-gray-400 text-sm">
              Use your mouse to rotate the 3D network. Scroll to zoom in/out and explore.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-monad-cyan to-monad-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              3
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Hover & Learn</h4>
            <p className="text-gray-400 text-sm">
              Hover over nodes to see dApp names, categories, and TVL instantly.
            </p>
          </div>

          {/* Step 4 */}
          <div className="glass p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-monad-purple to-monad-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
              4
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Discover More</h4>
            <p className="text-gray-400 text-sm">
              Click dApps to see full details, related projects, and external links.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="glass p-16 rounded-2xl border border-monad-purple/20 text-center">
          <Sparkles className="w-16 h-16 text-monad-purple mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Explore Monad?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dive into the 3D ecosystem visualization and discover 100+ projects building on Monad testnet.
          </p>
          <Link
            href="/explorer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-monad-purple to-monad-blue rounded-lg font-semibold text-white hover:scale-105 transition-transform"
          >
            Launch Explorer
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">MonadFlow</h4>
              <p className="text-gray-400 text-sm">
                3D ecosystem explorer for Monad blockchain testnet.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Links</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li><a href="https://monad.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Monad</a></li>
                <li><a href="https://github.com/deseti/MonadFlow" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="https://testnet.monvision.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Explorer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Mission 9</h4>
              <p className="text-gray-400 text-sm">
                Squad Up Challenge • Open Source • MIT License
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>Built with Next.js, React Three Fiber & TailwindCSS</p>
            <p className="mt-2">© 2025 MonadFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
