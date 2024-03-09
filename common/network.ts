import type { NetworkUserConfig } from 'hardhat/types'

export const endurance: NetworkUserConfig = {
  url: 'https://rpc-endurance.fusionist.io',
  chainId: 648,
  accounts: [process.env.KEY_ENDURANCE!],
}

