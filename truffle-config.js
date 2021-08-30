require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
mnemonic = process.env.MNEMONIC;
module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.RINKEBY_APIKEY,
    bscscan: process.env.BSC_APIKEY,
    kovanscan: process.env.KOVAN_APIKEY,
    ropsten: process.env.KOVAN_APIKEY
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      networkCheckTimeout: 1000000
    },
    development1: {
      network_id: '*',
      host: 'localhost',
      port: process.env.PORT
    },
    main: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          process.env.MNEMONIC,
          //url to ethereum node
          process.env.WEB3_PROVIDER_ADDRESS
        )
      },
      network_id: 1,
      gas: 4000000,
      gasPrice: 200000000000,
      confirmations: 2,
      websockets: true
    },
    kovantestnet: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          process.env.MNEMONIC,
          //url to ethereum node
          process.env.WEB3_PROVIDER_ADDRESS
        )
      },
      network_id: 42,
      gas: 12450000,
      gasPrice: 20000000000,
      confirmations: 2,
      websockets: true
    },
    kovan: {
      provider: () => {
      return new HDWalletProvider(mnemonic,`wss://kovan.infura.io/ws/v3`);
      },
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 100000,
      network_id: "42",
    },
    ropsten: {
      provider: () =>new HDWalletProvider(mnemonic,`https://ropsten.infura.io/v3/d7c9a395148445d3b1d9b0d28ce5a8c8`),
      network_id: '3',
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },
    bsctestnet: {
      // provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      gas: 20000000,
      confirmations: 10,
      timeoutBlocks: 2000,
      networkCheckTimeout: 10000000,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      gas: 20000000,
      confirmations: 10,
      timeoutBlocks: 2000,
      networkCheckTimeout: 10000000,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
      // version: "0.4.23"
    }
  }
};