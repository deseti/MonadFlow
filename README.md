# MonadFlow

<div align="center">
  <h1>🌊 MonadFlow</h1>
  <p><strong>A 3D Interactive Discovery Layer for Monad Ecosystem</strong></p>
  <p>
    <a href="https://monadflow.vercel.app">Live Demo</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## 🎯 Overview

MonadFlow is an immersive **3D-first discovery platform** and AI-powered recommendation engine built for the Monad mainnet ecosystem. The landing page features a stunning interactive 3D network visualization where you can explore **300+ dApps** in real-time. Experience the magic of Web3 discovery like never before!

**Built for:** Mission 9: Squad Up Challenge

**🌟 What makes us unique:** The 3D visualization is now the landing page - no intermediate steps, just immediate immersive exploration!

## ✨ Features

### 🎨 3D Network Visualization (Landing Page!)
- **Instant immersive experience** - 3D view loads immediately on homepage
- Interactive node-based interface powered by Three.js
- Visual representation of dApp relationships and composability
- Smooth animations and transitions
- Real-time data integration
- **The magic that makes MonadFlow unique!**

### 🤖 AI Chatbot Assistant (NadAI)
- Powered by OpenAI GPT-3.5-turbo
- Context-aware responses about Monad ecosystem
- Real-time help and guidance
- Professional English assistance
- Full-screen mobile chat interface

### 🔍 Advanced Discovery
- **Infinite Scroll**: Seamlessly load dApps as you explore
- Filter by 15+ categories (DeFi, Gaming, NFT, AI, etc.)
- Smart search functionality
- Grid and 3D view modes
- **300+ dApps** from official Monad ecosystem (Updated Nov 14, 2025)

### 🎮 Interactive Features
- Tour guide for first-time users
- Smart recommendations panel
- Live network statistics
- Network pulse indicator
- dApp detail modals with animations

### 📊 Live Data
- Real-time TVL, volume, and user statistics
- Direct integration with Monad testnet protocols
- Up-to-date ecosystem information

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS
- **React Three Fiber** - 3D graphics with Three.js
- **Framer Motion** - Animation library

### Web3
- **Viem** - Modern TypeScript Ethereum library
- **Wagmi** - React hooks for Ethereum
- **RainbowKit** - Wallet connection UI

### State Management
- **Zustand** - Lightweight state management
- **TanStack Query** - Data fetching and caching

### AI/ML
- **Google Gemini** - AI chatbot assistant
- **Gemini Pro** - Natural language understanding

### Deployment
- **Vercel** - Frontend hosting and serverless functions
- **GitHub** - Version control and collaboration

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deseti/MonadFlow.git
   cd MonadFlow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure your `.env.local`**
   ```env
   # WalletConnect Project ID (Required)
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
   
   # Google Gemini API Key (Required for AI Chatbot)
   GEMINI_API_KEY=your_gemini_api_key
   ```

   - Get your WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com)
   - Get your Gemini API Key from [Google AI Studio](https://makersuite.google.com/app/apikey) (Free tier available)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
MonadFlow/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Landing pages
│   ├── explorer/           # Main app
│   ├── dapp/[id]/         # DApp detail pages
│   └── api/               # API routes
├── components/
│   ├── ui/                # UI components (shadcn)
│   ├── 3d/                # Three.js components
│   └── features/          # Feature-specific components
├── lib/
│   ├── web3/              # Web3 utilities
│   ├── ai/                # AI/ML utilities
│   └── db/                # Database utilities
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🎨 Design System

MonadFlow uses the Monad brand colors:
- **Purple**: `#8B5CF6`
- **Blue**: `#3B82F6`
- **Cyan**: `#06B6D4`

## 📖 Documentation

- [Contributing Guide](./CONTRIBUTING.md)
- [API Documentation](./docs/API.md)
- [Component Library](./docs/COMPONENTS.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Team

Built by a team of 2 passionate developers for the Mission 9: Squad Up Challenge.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- [Monad](https://www.monad.xyz/) - For the incredible ecosystem
- [Mission 9 Challenge](https://tally.so/r/31qYe4) - For the opportunity
- [Monad Ecosystem Data](https://github.com/portdeveloper/monad-ecosystem) - For the comprehensive project list
- All the amazing Monad dApp builders

## 🔗 Links

- **Live Demo**: [monadflow.vercel.app](https://monadflow.vercel.app)
- **GitHub**: [github.com/deseti/MonadFlow](https://github.com/deseti/MonadFlow)
- **Twitter**: [@MonadFlow](#) (Coming soon)

## 📊 Stats

- 🎨 **300+ dApps** indexed (from official Monad ecosystem - Updated Nov 14, 2025)
- 🏷️ 15+ categories
- 🔴 Live testnet data
- 🎮 Interactive 3D exploration
- 🤖 AI-powered assistant (NadAI)
- 🤖 AI-powered chatbot assistant
- ♾️ Infinite scroll for seamless discovery

---

<div align="center">
  <p>Built with ❤️ for the Monad ecosystem</p>
  <p>Mission 9: Squad Up Challenge | November 2025</p>
</div>
