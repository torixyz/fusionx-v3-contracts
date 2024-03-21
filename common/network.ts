import type { NetworkUserConfig } from 'hardhat/types'

export const endurance: NetworkUserConfig = {
  url: 'https://endurance2-rpc-partner.archivenode.club/',
  chainId: 648,
  accounts: [process.env.KEY_ENDURANCE!],
  gasPrice:5000000000
}

export const enduranceTestnet: NetworkUserConfig = {
  url: 'https://abcdefg-myrpctestnet.fusionist.io',
  chainId: 6480,
  accounts: [process.env.KEY_ENDURANCE!],
  gasPrice: 5000000000
}
