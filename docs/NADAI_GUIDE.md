# NadAI - MonadFlow's AI Assistant

## Overview

**NadAI** is the specialized AI assistant for MonadFlow, powered by OpenAI's GPT models. NadAI is specifically trained to understand and guide users through the MonadFlow platform and the entire Monad blockchain ecosystem.

## Features

✨ **What NadAI Can Do:**
- Answer questions about all 100+ dApps in MonadFlow
- Explain Monad blockchain concepts
- Guide users through the platform features
- Recommend dApps based on user interests
- Provide intelligent conversational assistance
- Provide real-time ecosystem insights

## Setup Instructions

### 1. Get Your OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Click "Create new secret key"
3. Copy your API key

### 2. Add API Key to Environment

In your `.env.local` file:

```env
OPENAI_API_KEY=your_api_key_here
```

Example:
```env
OPENAI_API_KEY=sk-proj-your_actual_key_here
```

### 3. Verify Setup

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000/explorer](http://localhost:3000/explorer)

3. Look for the **✨ floating button** at the bottom-right corner

4. Click it to open NadAI chat window

5. Try asking questions like:
   - "What is MonadFlow?"
   - "Show me the best DeFi dApps"
   - "How does the 3D visualization work?"
   - "How many categories are there?"

## NadAI Knowledge Base

NadAI has comprehensive knowledge about:

### MonadFlow Platform
- 3D Network Visualization
- Grid View with infinite scroll
- Search and filtering capabilities
- Real-time statistics dashboard
- Smart recommendations engine
- Interactive tour guide
- dApp detail modals

### 100+ dApps Across Categories:
- **DeFi**: Ambient, Apriori, Bean Exchange, Celeris, Drake, ELFi, Euler, and more
- **Wallets**: Backpack, Ambire, Bitget, Bybit, Coin98, FoxWallet, and more
- **AI**: Aarna, Atlantis, Blazpay, Catton AI, Fortytwo, and more
- **Gaming**: Breath of Estova, DRKVRS, and more
- **NFTs & Social**: CoNFT, Farcaster, Dusted, Cult, and more
- **Oracles & Infrastructure**: Chainlink, Band Protocol, Chronicle, and more
- **Cross-chain**: Across Protocol, Cycle Network, Entangle, and more
- And many more categories!

### Monad Blockchain
- Monad testnet details (Chain ID: 10143)
- RPC endpoints
- Explorer information
- Ecosystem structure
- Current status and roadmap

## Example Conversations

### Example 1: DApp Discovery
```
User: "I want to find the best DeFi protocol"
NadAI: "In MonadFlow we have 30+ DeFi protocols! Some popular ones:
- Ambient: AMM with flexible liquidity types
- Apriori: MEV infrastructure and liquid staking
- Drake: Advanced trading features
- Euler: Lending protocol

Which one interests you most? I can explain in more detail!"
```

### Example 2: Platform Guide
```
User: "How do I use the 3D view?"
NadAI: "Great question! Here's how to explore the 3D Network Graph:

🖱️ **Rotate**: Click and drag to spin the network
🔍 **Zoom**: Use your scroll wheel to zoom in/out
✨ **Click nodes**: Click any dApp sphere to see full details
📊 **Hover**: Hover over nodes to see TVL and key stats

Try it out and discover something cool! 🚀"
```

### Example 3: Category Exploration
```
User: "How many categories are there?"
NadAI: "We have 15+ comprehensive categories:
1. DeFi (30+ dApps)
2. Wallets (8+ dApps)
3. AI (8+ dApps)
4. Analytics (8+ dApps)
5. Gaming (5+ dApps)
6. NFTs & Social (8+ dApps)
7. Oracles & Infrastructure (10+ dApps)
8. Cross-chain (8+ dApps)
...and many more!

Which category interests you most?"
```

## Personality & Tone

NadAI communicates with:
- ✅ Friendly and enthusiastic attitude
- ✅ Casual, conversational tone
- ✅ Relevant emojis for engagement
- ✅ Clear, easy-to-understand explanations
- ✅ Patience with beginners
- ✅ Respect for experienced users
- ✅ Professional English communication

## Technical Details

### Architecture
- **AI Model**: OpenAI GPT-3.5-turbo
- **Hosting**: Vercel serverless function
- **Route**: `/api/chat` (POST)
- **Frontend**: React component with Framer Motion animations
- **UI**: Floating button with expandable chat window

### API Integration
```typescript
// POST /api/chat
{
  "message": "Your question here",
  "history": [/* previous messages */]
}

// Response
{
  "success": true,
  "response": "NadAI's answer"
}
```

## Customization

To modify NadAI's behavior:

1. Edit the system prompt in `/app/api/chat/route.ts`
2. The prompt is in the `getNadAISystemPrompt()` function
3. Update the initial greeting if desired
4. Modify the dApps context in the knowledge base

## Troubleshooting

### "OpenAI API key not configured"
- Check `.env.local` file exists
- Verify `OPENAI_API_KEY` is set correctly
- Restart development server after adding key

### Chat not responding
- Check browser console for error messages
- Verify API key is valid and has credits remaining
- Check network tab in DevTools for `/api/chat` request

### Slow responses
- OpenAI API may have rate limits depending on your tier
- Check your usage at https://platform.openai.com/usage
- Consider response caching for better UX

## Pricing

- **Tier 1**: 3 RPM (requests per minute)
- **Higher Tiers**: More requests with usage-based billing

Check [OpenAI Pricing](https://openai.com/pricing) for current rates.

## Support

For issues or suggestions about NadAI:
1. Check the [MonadFlow GitHub](https://github.com/deseti/MonadFlow)
2. Create an issue with details
3. Include your question/error message

---

**Built with ❤️ for the Monad ecosystem**

NadAI - Your Guide to Monad Discovery 🌊✨
