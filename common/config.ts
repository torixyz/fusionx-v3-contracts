export const configs = {
  endurance: {
    WNATIVE: '0x85119527CF38f6cCf7b1b8f8FAD05145358Aaa81',
    nativeCurrencyLabel: 'ACE',
    v2Factory: '0x0000000000000000000000000000000000000000',
    stableFactory: '0x0000000000000000000000000000000000000000',
    stableInfo: '0x0000000000000000000000000000000000000000',
    cake: '',
    smartRouterHelper: '',
  },
  eth: {
    WNATIVE: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    nativeCurrencyLabel: 'ETH',
    v2Factory: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
    stableFactory: '0x0000000000000000000000000000000000000000',
    stableInfo: '0x0000000000000000000000000000000000000000',
    cake: '0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898',
    smartRouterHelper: '0xdAecee3C08e953Bd5f89A5Cc90ac560413d709E3',
  },
  goerli: {
    WNATIVE: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    nativeCurrencyLabel: 'GOR',
    v2Factory: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362',
    stableFactory: '0x0000000000000000000000000000000000000000',
    stableInfo: '0x0000000000000000000000000000000000000000',
    cake: '0xc2C3eAbE0368a2Ea97f485b03D1098cdD7d0c081',
    smartRouterHelper: '0xdAecee3C08e953Bd5f89A5Cc90ac560413d709E3',
  },
  bscMainnet: {
    WNATIVE: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    nativeCurrencyLabel: 'BNB',
    v2Factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    stableFactory: '0x25a55f9f2279a54951133d503490342b50e5cd15',
    stableInfo: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    cake: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    smartRouterHelper: '0xdAecee3C08e953Bd5f89A5Cc90ac560413d709E3',
  },
  bscTestnet: {
    WNATIVE: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    nativeCurrencyLabel: 'tBNB',
    v2Factory: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
    stableFactory: '0xe6A00f8b819244e8Ab9Ea930e46449C2F20B6609',
    stableInfo: '0x0A548d59D04096Bc01206D58C3D63c478e1e06dB',
    cake: '0x8d008B313C1d6C7fE2982F62d32Da7507cF43551',
    smartRouterHelper: '0xdAecee3C08e953Bd5f89A5Cc90ac560413d709E3',
  },
  hardhat: {
    WNATIVE: '0x0000000000000000000000000000000000000000',
    nativeCurrencyLabel: 'BNB',
    v2Factory: '0x0000000000000000000000000000000000000000',
    stableFactory: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
    stableInfo: '0x0a4922aD4400c920144adec825B8d4D814C48303',
    cake: '0x0000000000000000000000000000000000000000',
    smartRouterHelper: '0xdAecee3C08e953Bd5f89A5Cc90ac560413d709E3',
  },
} as const
