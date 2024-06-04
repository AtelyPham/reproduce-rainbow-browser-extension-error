import { mainnet, sepolia, goerli } from 'wagmi/chains'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'

const config = createConfig({
  chains: [mainnet, sepolia, goerli],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [goerli.id]: http(),
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})

export default config

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
