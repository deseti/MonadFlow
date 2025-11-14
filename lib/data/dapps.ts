import { DApp } from "@/types";

/**
 * Monad Ecosystem DApps Data
 * Source: https://github.com/portdeveloper/monad-ecosystem/blob/main/data/projects.json
 * Last updated: November 14, 2025
 * Total Projects: 400+
 */

// Helper function to create DApp entry
function createDApp(
  name: string,
  url: string,
  category: string[],
  description?: string,
  featured: boolean = false
): DApp {
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return {
    id,
    name,
    description: description || `${name} - A project in the Monad ecosystem.`,
    logo: `https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/placeholder-${id}.webp`,
    categories: category as any[],
    website: url,
    twitter: `https://x.com/${name.toLowerCase().replace(/\s+/g, '')}`,
    isLive: true,
    onlyOnMonad: false,
    tags: category,
    featured,
    // Demo stats (will be replaced with real data from API later)
    tvl: Math.floor(Math.random() * 50000000) + 1000000,
    users: Math.floor(Math.random() * 100000) + 1000,
    volume24h: Math.floor(Math.random() * 10000000) + 100000,
  };
}

export const dappsData: DApp[] = [
  // === FEATURED PROJECTS ===
  createDApp("Ambient", "https://monad.ambient.finance", ["DeFi"], 
    "Spot AMM combining multiple liquidity types with modular hooks, dynamic fees and MEV protection.", true),
  createDApp("Apriori", "http://testnet-staking.apr.io", ["DeFi"], 
    "MEV infrastructure and liquid staking protocol, designed for the parallel execution era.", true),
  createDApp("Uniswap", "https://app.uniswap.org/", ["DeFi"], 
    "The world's leading decentralized exchange protocol.", true),
  createDApp("Chainlink", "https://chain.link/", ["Oracle", "Infrastructure"], 
    "Industry-standard decentralized oracle network providing secure and reliable data feeds.", true),
  createDApp("LayerZero", "https://layerzero.network/", ["Cross-chain", "Infrastructure"], 
    "Omnichain interoperability protocol enabling seamless cross-chain messaging.", true),
  createDApp("The Graph", "https://thegraph.com/", ["Analytics", "Infrastructure"], 
    "Decentralized indexing protocol for querying blockchain data.", true),

  // === DEFI PROTOCOLS ===
  createDApp("0x", "https://0x.org/", ["DeFi"]),
  createDApp("AUSD", "https://agora.finance", ["DeFi", "Stablecoin"]),
  createDApp("AZEx", "https://azex.io/home", ["DeFi", "DEX"]),
  createDApp("Accountable", "https://yield.accountable.capital/", ["DeFi", "Yield"]),
  createDApp("Across Protocol", "https://across.to/", ["DeFi", "Bridge"]),
  createDApp("AethonSwap", "https://www.aethonswap.com/", ["DeFi", "DEX"]),
  createDApp("Ammalgam", "https://alpha.ammalgam.xyz/", ["DeFi", "DEX"]),
  createDApp("ApeBond", "https://ape.bond", ["DeFi", "Bonds"]),
  createDApp("Atlantis", "https://atlantisdex.xyz", ["DeFi", "DEX"]),
  createDApp("Balancer", "https://balancer.fi/", ["DeFi", "AMM"]),
  createDApp("Bean Exchange", "https://bean.exchange/", ["DeFi", "DEX"]),
  createDApp("Bebop", "https://bebop.xyz/", ["DeFi", "DEX"]),
  createDApp("Bima", "https://bima.money/", ["DeFi"]),
  createDApp("Caddy Finance", "https://caddy.finance/", ["DeFi"]),
  createDApp("Capa", "https://capa.fi/", ["DeFi"]),
  createDApp("Celeris", "https://celeris.exchange", ["DeFi", "DEX"]),
  createDApp("Clober", "https://alpha.clober.io/?utm_source=monad_eco&utm_medium=referral", ["DeFi", "DEX"]),
  createDApp("Covenant", "https://covenant.finance", ["DeFi"]),
  createDApp("Crust Finance", "https://crust.finance", ["DeFi"]),
  createDApp("Crystal", "https://crystal.exchange", ["DeFi", "DEX"]),
  createDApp("Cult Markets", "https://testnet.cultmarkets.com/", ["DeFi"]),
  createDApp("Curvance", "https://monad.curvance.com/monad", ["DeFi"]),
  createDApp("Demask Finance", "https://demask.finance/", ["DeFi"]),
  createDApp("Diffuse", "https://www.diffuse.fi/", ["DeFi"]),
  createDApp("Dirol Protocol", "https://dex.dirol.io/swap", ["DeFi", "DEX"]),
  createDApp("Drake", "https://drake.exchange/", ["DeFi", "DEX"]),
  createDApp("Dyson Finance", "https://dyson.finance/", ["DeFi"]),
  createDApp("ELFi", "https://www.elfi.xyz/", ["DeFi"]),
  createDApp("Eisen Finance", "https://eisenfinance.com/", ["DeFi"]),
  createDApp("Euclid Protocol", "https://www.euclidprotocol.io/", ["DeFi"]),
  createDApp("Euler", "http://euler.finance", ["DeFi", "Lending"]),
  createDApp("FWX", "https://fwx.finance", ["DeFi"]),
  createDApp("Folks Finance", "https://folks.finance/", ["DeFi"]),
  createDApp("Garden", "https://garden.finance/", ["DeFi"]),
  createDApp("Gearbox Protocol", "https://gearbox.fi/", ["DeFi"]),
  createDApp("Golden Goose", "https://test.goose.farm/goose", ["DeFi"]),
  createDApp("Hashflow", "https://app.hashflow.com/", ["DeFi", "DEX"]),
  createDApp("Hive", "https://bhive.finance/", ["DeFi"]),
  createDApp("IZUMi Finance", "https://alpha.izumi.finance/trade/swap", ["DeFi", "DEX"]),
  createDApp("Impossible Finance", "https://impossible.finance/", ["DeFi"]),
  createDApp("Jumper Exchange", "https://jumper.exchange/?utm_source=monad_ecosystem&utm_medium=referral&utm_campaign=monad_integration", ["DeFi", "Bridge"]),
  createDApp("Kansei", "https://kansei.finance/trade", ["DeFi", "DEX"]),
  createDApp("KiloEx", "https://www.kiloex.io/", ["DeFi", "Perpetuals"]),
  createDApp("Kinza Finance", "https://monad-test.kinza.finance/#/", ["DeFi", "Lending"]),
  createDApp("LAGOON", "https://lagoon.finance/", ["DeFi"]),
  createDApp("LFJ", "https://pandaria.lfj.gg/", ["DeFi"]),
  createDApp("LI.FI", "https://li.fi/", ["DeFi", "Bridge"]),
  createDApp("LeverUp", "https://leverup.xyz/", ["DeFi", "Leverage"]),
  createDApp("Likwid", "https://likwid.fi/", ["DeFi"]),
  createDApp("Lombard", "https://lombard.finance/", ["DeFi"]),
  createDApp("Mach Exchange", "https://mach.exchange/", ["DeFi", "DEX"]),
  createDApp("Meow Finance", "https://meowfi.xyz/", ["DeFi"]),
  createDApp("Morpheus", "https://morpheus.farm/", ["DeFi"]),
  createDApp("Mozi", "https://mozi.finance/", ["DeFi"]),
  createDApp("Multipli.fi", "https://multipli.fi/", ["DeFi"]),
  createDApp("Nabla Finance", "https://www.nabla.fi/", ["DeFi"]),
  createDApp("Narwhal Finance", "https://testnet.narwhal.finance/", ["DeFi"]),
  createDApp("Neverland", "https://neverland.money/", ["DeFi"]),
  createDApp("NitroFinance", "https://nitrofinance.xyz/", ["DeFi"]),
  createDApp("Nostra", "https://monad.nostra.finance/lend-borrow", ["DeFi", "Lending"]),
  createDApp("OctoSwap", "https://octo.exchange/", ["DeFi", "DEX"]),
  createDApp("OpenOcean", "https://openocean.finance/", ["DeFi", "Aggregator"]),
  createDApp("Orbiter Finance", "https://www.orbiter.finance/", ["DeFi", "Bridge"]),
  createDApp("Orderly", "https://orderly.network/", ["DeFi", "DEX"]),
  createDApp("Owlto Finance", "https://owlto.finance/", ["DeFi", "Bridge"]),
  createDApp("PancakeSwap", "https://pancakeswap.finance/", ["DeFi", "DEX"]),
  createDApp("Peridot", "https://peridot.finance/", ["DeFi"]),
  createDApp("Permute Finance", "https://permute.finance/", ["DeFi"]),
  createDApp("Pingu Exchange", "https://pingu.exchange/", ["DeFi", "DEX"]),
  createDApp("Primex Finance", "https://primex.finance/", ["DeFi"]),
  createDApp("Puffer Finance", "https://linktr.ee/puffer_finance", ["DeFi", "Liquid Staking"]),
  createDApp("Relend Network", "https://relend.network/", ["DeFi", "Lending"]),
  createDApp("Renzo", "https://www.renzoprotocol.com/", ["DeFi", "Liquid Staking"]),
  createDApp("Rhino.fi", "https://rhino.fi/", ["DeFi"]),
  createDApp("Rubic", "https://testnet.rubic.exchange/", ["DeFi", "Bridge"]),
  createDApp("Sherpa", "https://app.sherpa.trade/lander", ["DeFi", "Trading"]),
  createDApp("SkyTrade", "https://sky.trade/", ["DeFi", "Trading"]),
  createDApp("Solv Protocol", "https://solv.finance/", ["DeFi"]),
  createDApp("Spine Finance", "https://spine.finance/", ["DeFi"]),
  createDApp("Sprout", "https://www.sproutfi.xyz/", ["DeFi"]),
  createDApp("StakeStone", "https://stakestone.io/", ["DeFi", "Staking"]),
  createDApp("Stargate", "https://stargate.finance/", ["DeFi", "Bridge"]),
  createDApp("Sumer", "https://app.sumer.money/", ["DeFi", "Lending"]),
  createDApp("Swaap", "https://www.swaap.finance/", ["DeFi", "AMM"]),
  createDApp("Swyrl Finance", "https://swyrl.finance/", ["DeFi"]),
  createDApp("Timelock", "https://www.timelock.trade/", ["DeFi"]),
  createDApp("Timeswap", "https://timeswap.io/", ["DeFi"]),

  // === WALLETS ===
  createDApp("Ambire Wallet", "https://www.ambire.com", ["Wallet"]),
  createDApp("Atomic Wallet", "https://atomicwallet.io/", ["Wallet"]),
  createDApp("Backpack Wallet", "https://backpack.app/", ["Wallet"]),
  createDApp("Bitget Wallet", "https://web3.bitget.com/en?source=bitget", ["Wallet"]),
  createDApp("Bybit Web3 Wallet", "https://www.bybit.com/en/web3", ["Wallet"]),
  createDApp("Coin98 AI Wallet", "https://coin98.com/", ["Wallet", "AI"]),
  createDApp("FoxWallet", "https://foxwallet.com/en", ["Wallet"]),
  createDApp("HaHa Wallet", "https://www.haha.me/", ["Wallet"]),
  createDApp("KuCoin Web3 Wallet", "https://www.kucoin.com/download", ["Wallet"]),
  createDApp("Leap Wallet", "https://www.leapwallet.io/", ["Wallet"]),
  createDApp("Nomas Wallet", "https://nomaswallet.com/", ["Wallet"]),
  createDApp("OKX Wallet", "https://www.okx.com/web3", ["Wallet"]),
  createDApp("Phantom", "https://phantom.com/", ["Wallet"]),
  createDApp("SafePal", "https://www.safepal.com/", ["Wallet"]),
  createDApp("TokenPocket", "https://www.tokenpocket.pro/", ["Wallet"]),
  createDApp("Uniswap Wallet", "https://wallet.uniswap.org/", ["Wallet"]),

  // === AI PROJECTS ===
  createDApp("Aarna", "https://www.aarna.ai/", ["AI"]),
  createDApp("Blazpay", "https://blazpay.com", ["AI", "Payments"]),
  createDApp("Catton AI", "https://catton.ai", ["AI"]),
  createDApp("Fans3 AI", "https://www.fans3.ai/", ["AI", "Social"]),
  createDApp("Fortytwo", "https://fortytwo.network/", ["AI"]),
  createDApp("GM Agents", "https://gmagents.ai/", ["AI"]),
  createDApp("KINETK", "https://www.kinetk.ai/", ["AI"]),
  createDApp("Kodeus AI", "https://kodeus.ai/", ["AI"]),
  createDApp("Mflo", "https://mflo.ai/", ["AI"]),
  createDApp("MindAgentsAI", "http://mindagents.net/", ["AI"]),
  createDApp("Monadata AI", "https://monadata.ai/", ["AI", "Analytics"]),
  createDApp("Nubila", "https://nubila.ai/", ["AI"]),
  createDApp("dFusion AI", "https://www.dfusion.ai/", ["AI"]),

  // === ANALYTICS & DATA ===
  createDApp("Allium", "https://www.allium.so/", ["Analytics"]),
  createDApp("Birdeye", "https://birdeye.so/", ["Analytics"]),
  createDApp("Birdeye Data Services", "https://bds.birdeye.so/", ["Analytics"]),
  createDApp("BlockVision", "https://blockvision.org/", ["Analytics"]),
  createDApp("Chainbase", "https://chainbase.com/", ["Analytics"]),
  createDApp("Chainsight", "https://chainsight.network/", ["Analytics"]),
  createDApp("Defined", "https://defined.fi", ["Analytics"]),
  createDApp("Dune", "http://dune.com/home", ["Analytics"]),
  createDApp("Flipside Crypto", "https://flipsidecrypto.com", ["Analytics"]),
  createDApp("GoldRush by Covalent", "https://goldrush.dev/", ["Analytics"]),
  createDApp("Goldsky", "https://goldsky.com/", ["Analytics"]),
  createDApp("Hemera", "https://thehemera.com/", ["Analytics"]),
  createDApp("Mobula", "https://mobula.io/", ["Analytics"]),
  createDApp("MonadExplorer by BlockVision", "https://monadexplorer.com/", ["Analytics", "Explorer"]),
  createDApp("Noves", "https://noves.fi/", ["Analytics"]),
  createDApp("OKX Explorer", "https://www.okx.com/web3/explorer/monad-testnet", ["Analytics", "Explorer"]),
  createDApp("SubQuery", "https://subquery.network/", ["Analytics"]),

  // === GAMING ===
  createDApp("Breath of Estova", "https://www.breathofestova.com/", ["Gaming"]),
  createDApp("DAU Cards", "https://gmonad.daucards.com/", ["Gaming"]),
  createDApp("DRKVRS", "https://www.drkvrs.io", ["Gaming"]),
  createDApp("DiscoCats", "https://mydiscocats.com/", ["Gaming"]),
  createDApp("Enjoyoors", "https://enjoyoors.xyz", ["Gaming"]),
  createDApp("FUKU", "https://testnet.fukunad.xyz/", ["Gaming"]),
  createDApp("Flap", "https://monad.flap.sh/board", ["Gaming"]),
  createDApp("Gorillionaire", "https://www.gorillionai.re/", ["Gaming"]),
  createDApp("Kingdomly", "https://www.kingdomly.app/", ["Gaming"]),
  createDApp("LEVR.bet", "https://levr.bet/", ["Gaming", "Betting"]),
  createDApp("Legends of Elysium", "https://legendsofelysium.io/", ["Gaming"]),
  createDApp("Lumiterra", "https://lumiterra.net/", ["Gaming"]),
  createDApp("Mahjong123", "https://monad.mahjong123.io/", ["Gaming"]),
  createDApp("Outpost Surge", "https://www.outpostsurge.com/", ["Gaming"]),
  createDApp("PLAY Network", "https://www.theplay.network/", ["Gaming"]),
  createDApp("RareBetSports", "https://rarelink.rarebetsports.io/", ["Gaming", "Sports"]),
  createDApp("Rug Rumble", "http://rugrumble.xyz/", ["Gaming"]),
  createDApp("Showdown", "https://showdown.win/", ["Gaming"]),
  createDApp("Tezza Poker", "https://t.me/playtezzapoker_bot", ["Gaming"]),
  createDApp("Valor Quest", "https://t.me/ValorQuestBot", ["Gaming"]),

  // === NFT & SOCIAL ===
  createDApp("AllDomains", "https://monad.alldomains.id/", ["NFT", "Domains"]),
  createDApp("Azaar", "https://azaar.com/", ["NFT", "Marketplace"]),
  createDApp("Buzzing Club", "https://www.buzzing.club/", ["Social"]),
  createDApp("CoNFT", "https://conft.app", ["NFT"]),
  createDApp("CULT", "https://www.cult.trade/", ["Social", "NFT"]),
  createDApp("Castora", "https://castora.xyz", ["NFT"]),
  createDApp("Codex", "https://www.codex.io", ["NFT"]),
  createDApp("Dusted", "https://www.dusted.app", ["NFT", "Social"]),
  createDApp("Farcaster", "http://farcaster.xyz/", ["Social"]),
  createDApp("Gifted.art", "https://gifted.art/", ["NFT", "Art"]),
  createDApp("Kizzy", "https://kizzy.io/", ["NFT"]),
  createDApp("LootGO", "https://lootgo.app/", ["NFT", "Gaming"]),
  createDApp("Lootify", "https://beta.lootify.xyz/", ["NFT"]),
  createDApp("M0narch", "https://m0narch.xyz/", ["NFT"]),
  createDApp("Magic Eden", "https://magiceden.io/", ["NFT", "Marketplace"]),
  createDApp("Memesteroid", "https://memesteroid.fun/", ["Social", "Meme"]),
  createDApp("Mintpad", "https://mintpad.co/", ["NFT", "Launchpad"]),
  createDApp("Moseiki", "https://moseiki.app/", ["NFT"]),
  createDApp("NADSA", "https://nadsa.space/", ["NFT"]),
  createDApp("NFTs2Me", "http://nfts2me.com/app/monad-testnet/", ["NFT"]),
  createDApp("Nad.fun", "https://testnet.nad.fun/", ["Social"]),
  createDApp("NadSmith", "https://x.com/NadSmith_", ["NFT"]),
  createDApp("Narrative", "https://www.testnet.narrative.xyz/", ["Social"]),
  createDApp("Opals", "https://opals.io/", ["NFT"]),
  createDApp("OpenSea", "https://opensea.io/", ["NFT", "Marketplace"]),
  createDApp("POINK", "https://poink.xyz/", ["Social", "Meme"]),
  createDApp("Pecker", "https://pecker.so/", ["NFT"]),
  createDApp("Poster.fun", "https://www.monad.xyz/poster.fun", ["Social"]),
  createDApp("Purps", "https://www.purps.xyz/", ["NFT"]),
  createDApp("Redbrick", "https://redbrick.land/monad", ["NFT", "Metaverse"]),
  createDApp("Reservoir", "https://reservoir.tools/", ["NFT", "Infrastructure"]),
  createDApp("RgbClash", "https://rgbclash.xyz/", ["Gaming", "NFT"]),
  createDApp("STAGE.fun", "https://stage.fun/", ["Social"]),
  createDApp("Scatter.art", "https://www.scatter.art/", ["NFT", "Art"]),
  createDApp("Sidekick", "https://sidekick.fans/", ["Social"]),
  createDApp("Slogain", "https://monad.slogain.gg/", ["Social"]),
  createDApp("Talentum", "https://monad.talentum.id/", ["Social", "Talent"]),
  createDApp("TownSquare", "https://www.townsq.xyz/", ["Social"]),
  createDApp("Winks.fun", "https://www.winks.fun/", ["Social"]),
  createDApp("Wonad", "https://www.thiswonad.xyz/", ["Social"]),
  createDApp("X2C", "https://x2c.fun/", ["Social"]),
  createDApp("XL", "https://testnet.xl.fun/monad", ["Social"]),

  // === ORACLES & INFRASTRUCTURE ===
  createDApp("Acurast", "https://acurast.com/", ["Oracle", "Infrastructure"]),
  createDApp("Band Protocol", "https://www.bandprotocol.com/", ["Oracle"]),
  createDApp("Chronicle", "https://chroniclelabs.org/", ["Oracle"]),
  createDApp("EOracle", "https://www.eoracle.io/", ["Oracle"]),
  createDApp("Pyth Network", "http://pyth.network/", ["Oracle"]),
  createDApp("RedStone", "https://www.redstone.finance/", ["Oracle"]),
  createDApp("Stork", "https://www.stork.network/", ["Oracle"]),
  createDApp("Switchboard", "https://switchboard.xyz/", ["Oracle"]),
  createDApp("Alchemy", "https://alchemy.com", ["Infrastructure"]),
  createDApp("Biconomy", "http://biconomy.io", ["Infrastructure"]),
  createDApp("Blockdaemon", "https://www.blockdaemon.com/", ["Infrastructure"]),
  createDApp("Blocklive", "https://blocklive.io", ["Infrastructure"]),
  createDApp("DRPC", "https://drpc.org", ["Infrastructure", "RPC"]),
  createDApp("Dynamic", "https://www.dynamic.xyz/", ["Infrastructure", "Auth"]),
  createDApp("Envio", "https://envio.dev/", ["Infrastructure", "Indexing"]),
  createDApp("Gelato", "https://www.gelato.network/", ["Infrastructure", "Automation"]),
  createDApp("Hyperlane", "https://hyperlane.xyz/", ["Infrastructure", "Interoperability"]),
  createDApp("INFINIT", "https://infinit.tech/", ["Infrastructure"]),
  createDApp("Index Network", "https://index.network/", ["Infrastructure", "Indexing"]),
  createDApp("Layerhub", "https://layerhub.xyz/", ["Infrastructure"]),
  createDApp("MetaKeep", "https://metakeep.xyz/", ["Infrastructure", "Custody"]),
  createDApp("Nillion", "http://www.nillion.com/", ["Infrastructure", "Privacy"]),
  createDApp("Notifi", "https://notifi.network/", ["Infrastructure", "Notifications"]),
  createDApp("Pimlico", "https://www.pimlico.io/", ["Infrastructure", "Account Abstraction"]),
  createDApp("Privy", "http://privy.io/", ["Infrastructure", "Auth"]),
  createDApp("QuickNode", "https://www.quicknode.com/", ["Infrastructure", "RPC"]),
  createDApp("Reown", "https://reown.com/", ["Infrastructure"]),
  createDApp("SQD", "https://www.sqd.ai/", ["Infrastructure", "Indexing"]),
  createDApp("StationX", "https://stationx.network/", ["Infrastructure"]),
  createDApp("Sunscreen", "https://sunscreen.tech/", ["Infrastructure", "Privacy"]),
  createDApp("Thirdweb", "https://thirdweb.com/", ["Infrastructure", "Development"]),
  createDApp("Triton One", "https://triton.one/", ["Infrastructure"]),
  createDApp("Turnkey", "https://www.turnkey.com/", ["Infrastructure", "Custody"]),
  createDApp("Unmarshal", "https://unmarshal.ai/", ["Infrastructure", "Data"]),
  createDApp("Web3Auth", "https://web3auth.io/", ["Infrastructure", "Auth"]),
  createDApp("ZeroDev", "https://zerodev.app/", ["Infrastructure", "Account Abstraction"]),

  // === CROSS-CHAIN & BRIDGES ===
  createDApp("Cycle Network", "https://www.cyclenetwork.io/", ["Cross-chain"]),
  createDApp("Entangle", "https://entangle.fi/", ["Cross-chain"]),
  createDApp("FastLane", "https://www.fastlane.xyz/", ["Cross-chain"]),
  createDApp("Nitro by Router Protocol", "https://app.routernitro.com/swap", ["Cross-chain", "Bridge"]),
  createDApp("T3rn", "https://t3rn.io/", ["Cross-chain"]),
  createDApp("Wormhole", "https://wormhole.com/", ["Cross-chain", "Bridge"]),

  // === LAUNCHPADS & TOOLS ===
  createDApp("ApeBond", "https://ape.bond", ["Launchpad"]),
  createDApp("BlockStreet", "https://blockstreet.money/", ["Launchpad"]),
  createDApp("CPLX", "https://cplx.io", ["Tools"]),
  createDApp("Cyferio", "https://cyferio.com", ["Tools", "ZK"]),
  createDApp("DashX", "https://dashx.xyz", ["Tools"]),
  createDApp("Dialect", "http://www.dialect.to", ["Tools", "Messaging"]),
  createDApp("Doppler", "https://doppler.lol/", ["Tools"]),
  createDApp("Fiamma", "https://fiammalabs.io/", ["Tools"]),
  createDApp("Fizen.io", "https://fizen.io/", ["Tools"]),
  createDApp("Fonbnk", "https://www.fonbnk.com/", ["Tools", "Payments"]),
  createDApp("Gasp", "https://www.gasp.xyz/", ["Tools"]),
  createDApp("Gateway", "https://gateway.tech/", ["Tools"]),
  createDApp("Ghost", "https://tryghost.xyz/", ["Tools"]),
  createDApp("GoPlus", "http://gopluslabs.io/", ["Tools", "Security"]),
  createDApp("Hawk Terminal", "https://hawkterminal.com/", ["Tools", "Trading"]),
  createDApp("Henry Labs", "https://www.henrylabs.xyz/", ["Tools"]),
  createDApp("Jenius", "https://jenius.rndm.io/", ["Tools"]),
  createDApp("Kintsu", "https://kintsu.xyz/", ["Tools"]),
  createDApp("Koywe", "https://www.koywe.com/en/home", ["Tools", "Payments"]),
  createDApp("Kuru", "https://kuru.io/", ["Tools"]),
  createDApp("Mace", "https://www.mace.ag/", ["Tools"]),
  createDApp("Madhouse", "https://madhouse.ag/", ["Tools"]),
  createDApp("Magma", "https://www.magmastaking.xyz/", ["Staking"]),
  createDApp("Mentaport", "https://www.mentaport.com/", ["Tools", "Bridge"]),
  createDApp("Meta Leap", "https://metaleap.io/", ["Tools"]),
  createDApp("Monday Trade", "https://monday.trade/", ["Tools", "Trading"]),
  createDApp("Monorail", "https://monorail.xyz/", ["Tools"]),
  createDApp("Mu Digital", "https://mudigital.net/", ["Tools"]),
  createDApp("Multisynq", "https://multisynq.io/", ["Tools"]),
  createDApp("NXTchain", "https://www.nxtchain.com/", ["Infrastructure"]),
  createDApp("Nunchi", "https://nunchi.trade/", ["Tools", "Trading"]),
  createDApp("OSL Pay", "https://www.osl-pay.com/", ["Tools", "Payments"]),
  createDApp("Omnia", "https://www.omnia.lol/", ["Tools"]),
  createDApp("Orochi Network", "http://www.orochi.network/", ["Infrastructure"]),
  createDApp("Pangea", "https://pangea.foundation/", ["Tools"]),
  createDApp("Para", "https://getpara.com/", ["Tools"]),
  createDApp("Perpl", "https://perpl.xyz/", ["Tools"]),
  createDApp("Plato", "https://m.getplato.app/monad", ["Tools", "Social"]),
  createDApp("PolyFlow", "https://app.polyflow.tech/", ["Tools"]),
  createDApp("Poply", "https://poply.xyz/", ["Tools"]),
  createDApp("Primus", "https://primuslabs.xyz/", ["Tools"]),
  createDApp("Proof-of-Skill", "https://proofofskill.org/", ["Tools"]),
  createDApp("PumpBTC", "https://testnet.pumpbtc.xyz/", ["DeFi", "BTC"]),
  createDApp("Rabble", "https://app.rabble.pro/?utm=MONAD", ["Tools"]),
  createDApp("Rayvo", "https://rayvo.gitbook.io/rayvo", ["Tools"]),
  createDApp("Rumi", "https://rumilabs.io/", ["Tools"]),
  createDApp("Sela Network", "https://www.selanetwork.io/", ["Infrastructure"]),
  createDApp("Tadle", "https://tadle.com/en", ["Tools"]),
  createDApp("Tally", "https://www.tally.xyz/", ["Tools", "Governance"]),
  createDApp("Tarobase", "https://tarobase.com/", ["Tools"]),
  createDApp("Terminal 3", "https://www.terminal3.io/", ["Tools"]),
  createDApp("The Vape Labs", "https://app.thevapelabs.io/", ["Tools"]),
  createDApp("Tread.fi", "http://www.tread.fi/", ["Tools"]),
  createDApp("TypeX", "https://typex.cc/", ["Tools"]),
  createDApp("Yamata", "https://yamata.io/", ["Tools"]),
  createDApp("YieldKingZ", "https://test-monad.yieldkingz.io/", ["DeFi", "Yield"]),
  createDApp("Zapry", "https://www.zapry.net/", ["Tools"]),
  createDApp("Zerion", "https://zerion.io/api", ["Tools", "Portfolio"]),
  createDApp("Zona", "https://www.zona.finance/", ["DeFi"]),

  // === ADDITIONAL FEATURED ===
  createDApp("Amertis", "https://amertis.exchange/", ["DeFi", "DEX"]),
  createDApp("MERV", "https://merv.wtf/", ["Social"]),
];

// Get all unique categories
export function getCategories(): string[] {
  const categories = new Set<string>();
  dappsData.forEach((dapp) => {
    dapp.categories.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories).sort();
}

// Helper functions for filtering
export function getFeaturedDApps(): DApp[] {
  return dappsData.filter((dapp) => dapp.featured);
}

export function getDAppsByCategory(category: string): DApp[] {
  return dappsData.filter((dapp) => dapp.categories.includes(category as any));
}

export function searchDApps(query: string): DApp[] {
  const lowerQuery = query.toLowerCase();
  return dappsData.filter(
    (dapp) =>
      dapp.name.toLowerCase().includes(lowerQuery) ||
      dapp.description.toLowerCase().includes(lowerQuery) ||
      dapp.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getTotalProjects(): number {
  return dappsData.length;
}

export function getCategoryCount(): Record<string, number> {
  const counts: Record<string, number> = {};
  dappsData.forEach((dapp) => {
    dapp.categories.forEach((cat) => {
      counts[cat] = (counts[cat] || 0) + 1;
    });
  });
  return counts;
}
