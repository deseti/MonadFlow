# Monad Network Information

## Official Network Details

### ⚠️ Important Note
**Monad Mainnet has NOT launched yet. Only Testnet is available.**

### Monad Testnet ✅
- **Chain ID**: `10143`
- **Network Name**: Monad Testnet
- **RPC URL**: `https://testnet-rpc.monad.xyz`
- **Currency Symbol**: `MON`
- **Currency Name**: Monad
- **Decimals**: 18
- **Block Explorer**: https://testnet.monvision.io/
- **Status**: ✅ Live and Active

### Monad Mainnet ⏳
- **Status**: 🚧 Not Launched Yet
- **Launch Date**: TBA (To Be Announced)
- **Note**: MonadFlow currently uses Testnet only

## Adding Monad Testnet to MetaMask

### Manual Method
1. Open MetaMask
2. Click network dropdown
3. Click "Add Network"
4. Click "Add a network manually"
5. Fill in the details:
   - **Network Name**: Monad Testnet
   - **New RPC URL**: https://testnet-rpc.monad.xyz
   - **Chain ID**: 10143
   - **Currency Symbol**: MON
   - **Block Explorer URL**: https://testnet.monvision.io/

### Programmatic Method (In App)
MonadFlow automatically configures the network when you connect your wallet using RainbowKit.

## Getting Testnet MON

To get testnet MON tokens for development:
1. Visit the Monad Discord
2. Use the faucet channel
3. Request testnet tokens with your wallet address

## Network Configuration in MonadFlow

The network is configured in `lib/web3/config.ts`:

```typescript
// Only Testnet is configured (Mainnet not launched yet)
export const monadTestnet: Chain = {
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: {
    name: "Monad",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Vision Explorer",
      url: "https://testnet.monvision.io",
    },
  },
  testnet: true,
};
```

## Environment Variables

Set this in your `.env.local` file:

```bash
# Only Testnet (Mainnet not available yet)
NEXT_PUBLIC_MONAD_TESTNET_RPC_URL=https://testnet-rpc.monad.xyz
```

## Resources

- **Official Website**: https://www.monad.xyz/
- **Documentation**: https://docs.monad.xyz/
- **Ecosystem**: https://www.monad.xyz/ecosystem
- **Testnet Explorer**: https://testnet.monvision.io/
- **Discord**: https://discord.gg/monad
- **Twitter**: https://x.com/monad_xyz

## Testing Connection

To test if your app can connect to Monad Testnet:

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. Click "Connect Wallet"

4. Select your wallet (MetaMask, Coinbase Wallet, etc.)

5. You should see "Monad Testnet" as an available network

6. Switch to Monad Testnet

7. Your wallet should connect successfully

## Smart Contract Deployment

When deploying contracts to Monad Testnet:

```bash
# Using Hardhat
npx hardhat run scripts/deploy.js --network monadTestnet

# Using Foundry
forge create --rpc-url https://testnet-rpc.monad.xyz \
  --private-key YOUR_PRIVATE_KEY \
  YourContract
```

## Network Status

Check network status and health:
- **RPC Status**: https://testnet-rpc.monad.xyz
- **Explorer**: https://testnet.monvision.io/

## Common Issues

### Issue: Cannot connect to network
**Solution**: Check that RPC URL is correct and network is accessible

### Issue: Transactions failing
**Solution**: Ensure you have testnet MON in your wallet

### Issue: Wrong network
**Solution**: Switch to Monad Testnet in your wallet

## Notes

- Monad is a high-performance EVM-compatible blockchain
- Supports parallel execution for increased throughput
- Optimized for DeFi applications
- Testnet is for development and testing only
- Mainnet launch date: TBA

---

*Last updated: November 10, 2025*
