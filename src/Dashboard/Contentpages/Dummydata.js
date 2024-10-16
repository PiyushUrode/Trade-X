// src/data/userData.js

// KYC dummy data
// src/data/userData.js

export const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      createdAt: '2024-01-01',
      action: 'View'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      createdAt: '2024-02-15',
      action: 'View'
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@example.com',
      createdAt: '2024-03-05',
      action: 'View'
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Williams',
      email: 'emily.williams@example.com',
      createdAt: '2024-04-22',
      action: 'View'
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Brown',
      email: 'david.brown@example.com',
      createdAt: '2024-05-30',
      action: 'View'
    },
    {
      id: 6,
      firstName: 'Sophia',
      lastName: 'Taylor',
      email: 'sophia.taylor@example.com',
      createdAt: '2024-06-14',
      action: 'View'
    },
    {
      id: 7,
      firstName: 'James',
      lastName: 'Anderson',
      email: 'james.anderson@example.com',
      createdAt: '2024-07-03',
      action: 'View'
    },
    {
      id: 8,
      firstName: 'Isabella',
      lastName: 'Martinez',
      email: 'isabella.martinez@example.com',
      createdAt: '2024-08-08',
      action: 'View'
    },
    {
      id: 9,
      firstName: 'Alexander',
      lastName: 'Garcia',
      email: 'alexander.garcia@example.com',
      createdAt: '2024-09-12',
      action: 'View'
    },
    {
      id: 10,
      firstName: 'Liam',
      lastName: 'Clark',
      email: 'liam.clark@example.com',
      createdAt: '2024-10-05',
      action: 'View'
    },
    {
      id: 11,
      firstName: 'Olivia',
      lastName: 'Harris',
      email: 'olivia.harris@example.com',
      createdAt: '2024-01-15',
      action: 'View'
    },
    {
      id: 12,
      firstName: 'Daniel',
      lastName: 'Lewis',
      email: 'daniel.lewis@example.com',
      createdAt: '2024-02-20',
      action: 'View'
    },
    {
      id: 13,
      firstName: 'Mia',
      lastName: 'Roberts',
      email: 'mia.roberts@example.com',
      createdAt: '2024-03-10',
      action: 'View'
    },
    {
      id: 14,
      firstName: 'Ethan',
      lastName: 'Walker',
      email: 'ethan.walker@example.com',
      createdAt: '2024-04-18',
      action: 'View'
    },
    {
      id: 15,
      firstName: 'Ava',
      lastName: 'Hall',
      email: 'ava.hall@example.com',
      createdAt: '2024-05-28',
      action: 'View'
    }
  ];
  
  
  // Supported Network dummy data
// src/data/supportedNetworks.js

export const supportedNetworks = [
    {
      id: 1,
      name: 'Ethereum',
      gasLimit: '21000',
      status: 'Enabled'
    },
    {
      id: 2,
      name: 'Binance Smart Chain',
      gasLimit: '100000',
      status: 'Enabled'
    },
    {
      id: 3,
      name: 'Polygon',
      gasLimit: '30000',
      status: 'Enabled'
    },
    {
      id: 4,
      name: 'Avalanche',
      gasLimit: '50000',
      status: 'Disabled'
    },
    {
      id: 5,
      name: 'Solana',
      gasLimit: '45000',
      status: 'Enabled'
    },
    {
      id: 6,
      name: 'Fantom',
      gasLimit: '60000',
      status: 'Enabled'
    },
    {
      id: 7,
      name: 'Tron',
      gasLimit: '15000',
      status: 'Enabled'
    },
    {
      id: 8,
      name: 'Polkadot',
      gasLimit: '20000',
      status: 'Disabled'
    },
    {
      id: 9,
      name: 'Arbitrum',
      gasLimit: '55000',
      status: 'Enabled'
    },
    {
      id: 10,
      name: 'Optimism',
      gasLimit: '65000',
      status: 'Enabled'
    },
    {
      id: 11,
      name: 'Harmony',
      gasLimit: '25000',
      status: 'Disabled'
    },
    {
      id: 12,
      name: 'Near',
      gasLimit: '50000',
      status: 'Enabled'
    },
    {
      id: 13,
      name: 'Celo',
      gasLimit: '55000',
      status: 'Enabled'
    },
    {
      id: 14,
      name: 'Tezos',
      gasLimit: '40000',
      status: 'Disabled'
    },
    {
      id: 15,
      name: 'Algorand',
      gasLimit: '35000',
      status: 'Enabled'
    },

]

//   network :-

export const Networks = [
    {
        id: 1,
        logo: '../src/image/kk/1.png', // Ethereum
        name: 'Ethereum',
        type: 'Mainnet',
        rpcUrl: 'https://mainnet.infura.D',
        exploreUrl: 'https://etherscan.io',
        status: 'Enabled',
    },
    {
        id: 2,
        logo: '../src/image/kk/2.png', // Binance Smart Chain
        name: 'Binance Smart Chain',
        type: 'Mainnet',
        rpcUrl: 'https://bsc-dataseed.binance.org/',
        exploreUrl: 'https://bscscan.com',
        status: 'Enabled',
    },
    {
        id: 3,
        logo: '../src/image/kk/3.png', // Polygon
        name: 'Polygon',
        type: 'Mainnet',
        rpcUrl: 'https://polygon-rpc.com/',
        exploreUrl: 'https://polygonscan.com',
        status: 'Enabled',
    },
    {
        id: 4,
        logo: '../src/image/kk/4.png', // Avalanche
        name: 'Avalanche',
        type: 'Mainnet',
        rpcUrl: 'https://api.avax.network/rpc',
        exploreUrl: 'https://snowtrace.com',
        status: 'Disabled',
    },
    {
        id: 5,
        logo: '../src/image/kk/5.png', // Fantom
        name: 'Fantom',
        type: 'Mainnet',
        rpcUrl: 'https://rpcapi.fantom.network',
        exploreUrl: 'https://ftmscan.com',
        status: 'Enabled',
    },
    {
        id: 6,
        logo: '../src/image/kk/6.png', // Cardano
        name: 'Cardano',
        type: 'Mainnet',
        rpcUrl: 'https://cardano-mainnet.blockfrost.io',
        exploreUrl: 'https://explorer.cardano.org',
        status: 'Enabled',
    },
    {
        id: 7,
        logo: '../src/image/kk/1.png', // Ethereum
        name: 'Ethereum',
        type: 'Mainnet',
        rpcUrl: 'https://mainnet.infura.i',
        exploreUrl: 'https://etherscan.io',
        status: 'Enabled',
    },
    {
        id: 8,
        logo: '../src/image/kk/2.png', // Binance Smart Chain
        name: 'Binance Smart Chain',
        type: 'Mainnet',
        rpcUrl: 'https://bsc-dataseed.binance.org/',
        exploreUrl: 'https://bscscan.com',
        status: 'Enabled',
    },
    {
        id: 9,
        logo: '../src/image/kk/3.png', // Polygon
        name: 'Polygon',
        type: 'Mainnet',
        rpcUrl: 'https://polygon-rpc.com/',
        exploreUrl: 'https://polygonscan.com',
        status: 'Enabled',
    },
    {
        id: 10,
        logo: '../src/image/kk/4.png', // Avalanche
        name: 'Avalanche',
        type: 'Mainnet',
        rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
        exploreUrl: 'https://snowtrace.com',
        status: 'Disabled',
    },
    {
        id: 11,
        logo: '../src/image/kk/5.png', // Fantom
        name: 'Fantom',
        type: 'Mainnet',
        rpcUrl: 'https://rpcapi.fantom.network',
        exploreUrl: 'https://ftmscan.com',
        status: 'Enabled',
    },
    {
        id: 12,
        logo: '../src/image/kk/6.png', // Cardano
        name: 'Cardano',
        type: 'Mainnet',
        rpcUrl: 'https://cardano-mainnet.blockfrost.io',
        exploreUrl: 'https://explorer.cardano.org',
        status: 'Enabled',
    },
    {
        id: 13,
        logo: '../src/image/kk/1.png', // Ethereum
        name: 'Ethereum',
        type: 'Mainnet',
        rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
        exploreUrl: 'https://etherscan.io',
        status: 'Enabled',
    },
    {
        id: 14,
        logo: '../src/image/kk/2.png', // Binance Smart Chain
        name: 'Binance Smart Chain',
        type: 'Mainnet',
        rpcUrl: 'https://bsc-dataseed.binance.org/',
        exploreUrl: 'https://bscscan.com',
        status: 'Enabled',
    },
    {
        id: 15,
        logo: '../src/image/kk/3.png', // Polygon
        name: 'Polygon',
        type: 'Mainnet',
        rpcUrl: 'https://polygon-rpc.com/',
        exploreUrl: 'https://polygonscan.com',
        status: 'Enabled',
    },
];



export const Cryptocurrencydata = [
    {
      id: 1,
      logo: '../src/image/kk/1.png', // Bitcoin
      name: 'Bitcoin',
      type: 'Cryptocurrency',
      code: 'BTC',
      price: '$26,000',
      status: 'Enabled',
      createdAt: '2023-01-01',
    },
    {
      id: 2,
      logo: '../src/image/kk/2.png', // Ethereum
      name: 'Ethereum',
      type: 'Cryptocurrency',
      code: 'ETH',
      price: '$1,600',
      status: 'Enabled',
      createdAt: '2023-01-02',
    },
    {
      id: 3,
      logo: '../src/image/kk/3.png', // Ripple
      name: 'Ripple',
      type: 'Cryptocurrency',
      code: 'XRP',
      price: '$0.50',
      status: 'Enabled',
      createdAt: '2023-01-03',
    },
    {
      id: 4,
      logo: '../src/image/kk/4.png', // Litecoin
      name: 'Litecoin',
      type: 'Cryptocurrency',
      code: 'LTC',
      price: '$100',
      status: 'Enabled',
      createdAt: '2023-01-04',
    },
    {
      id: 5,
      logo: '../src/image/kk/5.png', // Cardano
      name: 'Cardano',
      type: 'Cryptocurrency',
      code: 'ADA',
      price: '$0.30',
      status: 'Enabled',
      createdAt: '2023-01-05',
    },
    {
      id: 6,
      logo: '../src/image/kk/6.png', // Polkadot
      name: 'Polkadot',
      type: 'Cryptocurrency',
      code: 'DOT',
      price: '$6.00',
      status: 'Enabled',
      createdAt: '2023-01-06',
    },
    {
      id: 7,
      logo: '../src/image/kk/1.png', // Bitcoin
      name: 'Bitcoin',
      type: 'Cryptocurrency',
      code: 'BTC',
      price: '$26,000',
      status: 'Enabled',
      createdAt: '2023-01-07',
    },
    {
      id: 8,
      logo: '../src/image/kk/2.png', // Ethereum
      name: 'Ethereum',
      type: 'Cryptocurrency',
      code: 'ETH',
      price: '$1,600',
      status: 'Enabled',
      createdAt: '2023-01-08',
    },
    {
      id: 9,
      logo: '../src/image/kk/3.png', // Ripple
      name: 'Ripple',
      type: 'Cryptocurrency',
      code: 'XRP',
      price: '$0.50',
      status: 'Enabled',
      createdAt: '2023-01-09',
    },
    {
      id: 10,
      logo: '../src/image/kk/4.png', // Litecoin
      name: 'Litecoin',
      type: 'Cryptocurrency',
      code: 'LTC',
      price: '$100',
      status: 'Enabled',
      createdAt: '2023-01-10',
    },
    {
      id: 11,
      logo: '../src/image/kk/5.png', // Cardano
      name: 'Cardano',
      type: 'Cryptocurrency',
      code: 'ADA',
      price: '$0.30',
      status: 'Enabled',
      createdAt: '2023-01-11',
    },
    {
      id: 12,
      logo: '../src/image/kk/6.png', // Polkadot
      name: 'Polkadot',
      type: 'Cryptocurrency',
      code: 'DOT',
      price: '$6.00',
      status: 'Enabled',
      createdAt: '2023-01-12',
    },
    {
      id: 13,
      logo: '../src/image/kk/1.png', // Bitcoin
      name: 'Bitcoin',
      type: 'Cryptocurrency',
      code: 'BTC',
      price: '$26,000',
      status: 'Enabled',
      createdAt: '2023-01-13',
    },
    {
      id: 14,
      logo: '../src/image/kk/2.png', // Ethereum
      name: 'Ethereum',
      type: 'Cryptocurrency',
      code: 'ETH',
      price: '$1,600',
      status: 'Enabled',
      createdAt: '2023-01-14',
    },
    {
      id: 15,
      logo: '../src/image/kk/3.png', // Ripple
      name: 'Ripple',
      type: 'Cryptocurrency',
      code: 'XRP',
      price: '$0.50',
      status: 'Enabled',
      createdAt: '2023-01-15',
    },
];


export const Coinnetworksdata = [
    {
      id: 1,
      logo: '../src/image/kk/1.png',
      currency: 'Bitcoin',
      type: 'Cryptocurrency',
      network: 'Bitcoin Network',
      status: 'Enabled',
      createdAt: '2023-10-10',
      updatedAt: '2023-10-15',
      action: 'Edit/Delete',
    },
    {
      id: 2,
      logo: '../src/image/kk/2.png',
      currency: 'Ethereum',
      type: 'Cryptocurrency',
      network: 'Ethereum Network',
      status: 'Enabled',
      createdAt: '2023-09-22',
      updatedAt: '2023-10-10',
      action: 'Edit/Delete',
    },
    {
      id: 3,
      logo: '../src/image/kk/3.png',
      currency: 'Binance Coin',
      type: 'Cryptocurrency',
      network: 'Binance Smart Chain',
      status: 'Disabled',
      createdAt: '2023-08-15',
      updatedAt: '2023-09-30',
      action: 'Edit/Delete',
    },
    {
      id: 4,
      logo: '../src/image/kk/4.png',
      currency: 'Ripple',
      type: 'Cryptocurrency',
      network: 'Ripple Network',
      status: 'Enabled',
      createdAt: '2023-07-18',
      updatedAt: '2023-08-05',
      action: 'Edit/Delete',
    },
    {
      id: 5,
      logo: '../src/image/kk/5.png',
      currency: 'Cardano',
      type: 'Cryptocurrency',
      network: 'Cardano Network',
      status: 'Enabled',
      createdAt: '2023-05-10',
      updatedAt: '2023-07-25',
      action: 'Edit/Delete',
    },
    {
      id: 6,
      logo: '../src/image/kk/6.png',
      currency: 'Polkadot',
      type: 'Cryptocurrency',
      network: 'Polkadot Network',
      status: 'Disabled',
      createdAt: '2023-06-01',
      updatedAt: '2023-06-20',
      action: 'Edit/Delete',
    },
    {
      id: 7,
      logo: '../src/image/kk/1.png',
      currency: 'Solana',
      type: 'Cryptocurrency',
      network: 'Solana Network',
      status: 'Enabled',
      createdAt: '2023-10-05',
      updatedAt: '2023-10-12',
      action: 'Edit/Delete',
    },
    {
      id: 8,
      logo: '../src/image/kk/2.png',
      currency: 'Litecoin',
      type: 'Cryptocurrency',
      network: 'Litecoin Network',
      status: 'Disabled',
      createdAt: '2023-08-12',
      updatedAt: '2023-09-28',
      action: 'Edit/Delete',
    },
    {
      id: 9,
      logo: '../src/image/kk/3.png',
      currency: 'Chainlink',
      type: 'Cryptocurrency',
      network: 'Chainlink Network',
      status: 'Enabled',
      createdAt: '2023-07-25',
      updatedAt: '2023-08-14',
      action: 'Edit/Delete',
    },
    {
      id: 10,
      logo: '../src/image/kk/4.png',
      currency: 'Avalanche',
      type: 'Cryptocurrency',
      network: 'Avalanche Network',
      status: 'Enabled',
      createdAt: '2023-09-10',
      updatedAt: '2023-09-25',
      action: 'Edit/Delete',
    },
    {
      id: 11,
      logo: '../src/image/kk/5.png',
      currency: 'Dogecoin',
      type: 'Cryptocurrency',
      network: 'Dogecoin Network',
      status: 'Disabled',
      createdAt: '2023-06-18',
      updatedAt: '2023-07-12',
      action: 'Edit/Delete',
    },
    {
      id: 12,
      logo: '../src/image/kk/6.png',
      currency: 'Polygon',
      type: 'Cryptocurrency',
      network: 'Polygon Network',
      status: 'Enabled',
      createdAt: '2023-09-05',
      updatedAt: '2023-09-30',
      action: 'Edit/Delete',
    },
    {
      id: 13,
      logo: '../src/image/kk/1.png',
      currency: 'Tether',
      type: 'Stablecoin',
      network: 'Tether Network',
      status: 'Enabled',
      createdAt: '2023-08-14',
      updatedAt: '2023-09-01',
      action: 'Edit/Delete',
    },
    {
      id: 14,
      logo: '../src/image/kk/2.png',
      currency: 'USD Coin',
      type: 'Stablecoin',
      network: 'USD Coin Network',
      status: 'Enabled',
      createdAt: '2023-07-01',
      updatedAt: '2023-08-10',
      action: 'Edit/Delete',
    },
    {
      id: 15,
      logo: '../src/image/kk/3.png',
      currency: 'Shiba Inu',
      type: 'Cryptocurrency',
      network: 'Shiba Inu Network',
      status: 'Disabled',
      createdAt: '2023-10-01',
      updatedAt: '2023-10-08',
      action: 'Edit/Delete',
    },
  ];

  export const CoinPairsData = [
    {
      id: 1,
      tradecoin: "Bitcoin",
      basecoin: "USDT",
      lastPrice: "47,000",
      activeStatus: "Enabled",
      isDefault: "Enabled",
      botTrading: "Disabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-10-10 14:32:45",
    },
    {
      id: 2,
      tradecoin: "Ethereum",
      basecoin: "USDT",
      lastPrice: "3,200",
      activeStatus: "Enabled",
      isDefault: "Disabled",
      botTrading: "Enabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-10-09 12:15:30",
    },
    {
      id: 3,
      tradecoin: "Cardano",
      basecoin: "USDT",
      lastPrice: "2.30",
      activeStatus: "Enabled",
      isDefault: "Disabled",
      botTrading: "Disabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-10-08 08:45:21",
    },
    {
      id: 4,
      tradecoin: "Solana",
      basecoin: "USDT",
      lastPrice: "150",
      activeStatus: "Disabled",
      isDefault: "Enabled",
      botTrading: "Disabled",
      futureTrading: "Disabled",
      priceAvailable: false,
      createdAt: "2024-10-07 16:52:10",
    },
    {
      id: 5,
      tradecoin: "Polkadot",
      basecoin: "USDT",
      lastPrice: "40",
      activeStatus: "Enabled",
      isDefault: "Disabled",
      botTrading: "Enabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-10-06 18:27:39",
    },
    {
      id: 6,
      tradecoin: "Litecoin",
      basecoin: "USDT",
      lastPrice: "185",
      activeStatus: "Enabled",
      isDefault: "Enabled",
      botTrading: "Disabled",
      futureTrading: "Disabled",
      priceAvailable: false,
      createdAt: "2024-10-05 10:14:12",
    },
    {
      id: 7,
      tradecoin: "XRP",
      basecoin: "USDT",
      lastPrice: "1.10",
      activeStatus: "Disabled",
      isDefault: "Enabled",
      botTrading: "Enabled",
      futureTrading: "Disabled",
      priceAvailable: true,
      createdAt: "2024-10-04 20:35:50",
    },
    {
      id: 8,
      tradecoin: "Chainlink",
      basecoin: "USDT",
      lastPrice: "25",
      activeStatus: "Enabled",
      isDefault: "Disabled",
      botTrading: "Enabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-10-03 13:42:22",
    },
    {
      id: 9,
      tradecoin: "Avalanche",
      basecoin: "USDT",
      lastPrice: "75",
      activeStatus: "Disabled",
      isDefault: "Enabled",
      botTrading: "Disabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-10-02 09:27:43",
    },
    {
      id: 10,
      tradecoin: "Dogecoin",
      basecoin: "USDT",
      lastPrice: "0.25",
      activeStatus: "Enabled",
      isDefault: "Disabled",
      botTrading: "Enabled",
      futureTrading: "Disabled",
      priceAvailable: true,
      createdAt: "2024-10-01 22:59:16",
    },
    {
      id: 11,
      tradecoin: "Binance Coin",
      basecoin: "USDT",
      lastPrice: "500",
      activeStatus: "Enabled",
      isDefault: "Enabled",
      botTrading: "Disabled",
      futureTrading: "Enabled",
      priceAvailable: false,
      createdAt: "2024-09-30 12:04:18",
    },
    {
      id: 12,
      tradecoin: "Shiba Inu",
      basecoin: "USDT",
      lastPrice: "0.000035",
      activeStatus: "Enabled",
      isDefault: "Disabled",
      botTrading: "Enabled",
      futureTrading: "Disabled",
      priceAvailable: true,
      createdAt: "2024-09-29 17:38:45",
    },
    {
      id: 13,
      tradecoin: "Uniswap",
      basecoin: "USDT",
      lastPrice: "30",
      activeStatus: "Disabled",
      isDefault: "Enabled",
      botTrading: "Disabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-09-28 14:12:09",
    },
    {
      id: 14,
      tradecoin: "Stellar",
      basecoin: "USDT",
      lastPrice: "0.35",
      activeStatus: "Enabled",
      isDefault: "Disabled",
      botTrading: "Enabled",
      futureTrading: "Enabled",
      priceAvailable: true,
      createdAt: "2024-09-27 11:59:32",
    },
    {
      id: 15,
      tradecoin: "Terra",
      basecoin: "USDT",
      lastPrice: "55",
      activeStatus: "Disabled",
      isDefault: "Enabled",
      botTrading: "Disabled",
      futureTrading: "Disabled",
      priceAvailable: false,
      createdAt: "2024-09-26 15:22:48",
    }
  ];


 export const ROLEDATA = [
    {
      id: 1,
      title: "Project Alpha Launch",
      activity: "The team successfully launched Project Alpha, a revolutionary application aimed at enhancing productivity and streamlining workflows for users.",
    },
    {
      id: 2,
      title: "User Feedback Analysis",
      activity: "Conducted an extensive analysis of user feedback collected over the past quarter to identify areas for improvement and enhancement.",
    },
    {
      id: 3,
      title: "Quarterly Financial Review",
      activity: "The quarterly financial review revealed significant growth in revenue, and we are optimistic about meeting our annual financial goals.",
    },
    {
      id: 4,
      title: "New Marketing Strategy",
      activity: "Implemented a new marketing strategy focused on digital outreach and social media engagement to increase brand awareness and customer reach.",
    },
    {
      id: 5,
      title: "Product Development Update",
      activity: "The product development team provided updates on the current projects, highlighting key milestones and anticipated completion dates for each initiative.",
    },
    {
      id: 6,
      title: "Customer Satisfaction Survey",
      activity: "Conducted a comprehensive customer satisfaction survey to gather insights about user experience, product quality, and service effectiveness.",
    },
    {
      id: 7,
      title: "Sales Team Training",
      activity: "Organized a training session for the sales team focusing on new product features, sales techniques, and improving customer engagement strategies.",
    },
    {
      id: 8,
      title: "Website Redesign Project",
      activity: "Launched a website redesign project aimed at improving user experience, enhancing site navigation, and updating the visual branding.",
    },
    {
      id: 9,
      title: "Annual Company Retreat",
      activity: "Planned an annual company retreat to foster team building, encourage collaboration, and discuss the vision and goals for the upcoming year.",
    },
    {
      id: 10,
      title: "Social Media Campaign",
      activity: "Launched a new social media campaign focusing on customer engagement, promoting recent product launches, and increasing brand visibility across platforms.",
    },
    {
      id: 11,
      title: "Supply Chain Optimization",
      activity: "Initiated a supply chain optimization project to improve efficiency, reduce costs, and enhance product delivery timelines for our customers.",
    },
    {
      id: 12,
      title: "Data Security Upgrade",
      activity: "Implemented a data security upgrade to protect sensitive information, enhance system defenses, and comply with industry regulations and standards.",
    },
    {
      id: 13,
      title: "Community Engagement Initiative",
      activity: "Launched a community engagement initiative to strengthen relationships with local organizations, support social causes, and enhance corporate social responsibility.",
    },
    {
      id: 14,
      title: "Employee Wellness Program",
      activity: "Developed an employee wellness program focusing on mental health, physical fitness, and work-life balance to promote overall well-being.",
    },
    {
      id: 15,
      title: "Product Launch Event",
      activity: "Organized a product launch event to showcase our latest innovations, attract media attention, and generate excitement among potential customers.",
    },
  ];


  export const AdminBanksdata = [
    {
      id: 1,
      logo: '../src/image/kk/1.png', // Example logo path
      accountHolder: 'John Doe',
      bankName: 'Global Bank',
      country: 'USA',
      swiftCode: 'GBUS1234',
      status: 'Enabled',
    },
    {
      id: 2,
      logo: '../src/image/kk/2.png',
      accountHolder: 'Jane Smith',
      bankName: 'International Bank',
      country: 'UK',
      swiftCode: 'IBUK5678',
      status: 'Disabled',
    },
    {
      id: 3,
      logo: '../src/image/kk/3.png',
      accountHolder: 'Alice Johnson',
      bankName: 'Local Bank',
      country: 'Canada',
      swiftCode: 'LCAN9101',
      status: 'Enabled',
    },
    {
      id: 4,
      logo: '../src/image/kk/4.png',
      accountHolder: 'Bob Brown',
      bankName: 'National Bank',
      country: 'Australia',
      swiftCode: 'NAUS1122',
      status: 'Enabled',
    },
    {
      id: 5,
      logo: '../src/image/kk/5.png',
      accountHolder: 'Charlie Davis',
      bankName: 'Regional Bank',
      country: 'India',
      swiftCode: 'RIND3344',
      status: 'Disabled',
    },
    {
      id: 6,
      logo: '../src/image/kk/6.png',
      accountHolder: 'Emma Wilson',
      bankName: 'City Bank',
      country: 'Germany',
      swiftCode: 'CGER5566',
      status: 'Enabled',
    },
    {
      id: 7,
      logo: '../src/image/kk/1.png',
      accountHolder: 'David Smith',
      bankName: 'Metro Bank',
      country: 'France',
      swiftCode: 'MFRA1234',
      status: 'Enabled',
    },
    {
      id: 8,
      logo: '../src/image/kk/2.png',
      accountHolder: 'Sophia Taylor',
      bankName: 'Trust Bank',
      country: 'Italy',
      swiftCode: 'IITA5678',
      status: 'Enabled',
    },
    {
      id: 9,
      logo: '../src/image/kk/3.png',
      accountHolder: 'James Johnson',
      bankName: 'Union Bank',
      country: 'Japan',
      swiftCode: 'UJPN9101',
      status: 'Disabled',
    },
    {
      id: 10,
      logo: '../src/image/kk/4.png',
      accountHolder: 'Olivia Brown',
      bankName: 'National Commercial Bank',
      country: 'Brazil',
      swiftCode: 'BBRA1122',
      status: 'Enabled',
    },
    {
      id: 11,
      logo: '../src/image/kk/5.png',
      accountHolder: 'Michael Garcia',
      bankName: 'Bank of America',
      country: 'USA',
      swiftCode: 'BOA3344',
      status: 'Enabled',
    },
    {
      id: 12,
      logo: '../src/image/kk/6.png',
      accountHolder: 'Isabella Martinez',
      bankName: 'Wells Fargo',
      country: 'USA',
      swiftCode: 'WEL5566',
      status: 'Disabled',
    },
    {
      id: 13,
      logo: '../src/image/kk/1.png',
      accountHolder: 'William Lee',
      bankName: 'Chase Bank',
      country: 'USA',
      swiftCode: 'CHA7890',
      status: 'Enabled',
    },
    {
      id: 14,
      logo: '../src/image/kk/2.png',
      accountHolder: 'Ava Wilson',
      bankName: 'Citibank',
      country: 'USA',
      swiftCode: 'CITI1234',
      status: 'Enabled',
    },
    {
      id: 15,
      logo: '../src/image/kk/3.png',
      accountHolder: 'Liam Kim',
      bankName: 'HSBC',
      country: 'South Korea',
      swiftCode: 'HSBK5678',
      status: 'Disabled',
    },
    // Add more entries as needed
  ];
  
  
  
  

  