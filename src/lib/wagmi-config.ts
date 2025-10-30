import { http, createConfig } from 'wagmi'
import { sepolia, mainnet, polygon } from 'wagmi/chains'
import { walletConnect, injected } from 'wagmi/connectors'

// TODO: Replace with your own WalletConnect Project ID
// Get one at: https://cloud.walletconnect.com/
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'd74c207c01281aa5cf0d3a4cf1e54247'

export const config = createConfig({
  chains: [sepolia, mainnet, polygon], // Multiple chains support
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
})
