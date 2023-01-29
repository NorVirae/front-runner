require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
const ACCOUNT_TEST = process.env.ACCOUNT_TEST
const ACCOUNT_MAIN = process.env.MAIN_TEST

module.exports = {
  solidity: "0.8.17",
  networks:{
    matic: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts:[ACCOUNT_TEST]
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [ACCOUNT_MAIN]
    }
  }
};

