require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: process.env.ALCHEMY_DEV_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};