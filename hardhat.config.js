require('@nomiclabs/hardhat-waffle');

module.exports = {
  defaultNetwork: "hardhat",
  solidity: '0.8.0',
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true
    },
    rinkeby: {
      url: 'YOUR_ALCHEMY_URL_HERE',
      accounts: ['YOUR_PRIVATE_KEY_HERE'],
    },
  },
};