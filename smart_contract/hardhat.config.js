// https://eth-ropsten.alchemyapi.io/v2/agMN9vQBacXhuVG7geFipOPdLKP3bM08

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/agMN9vQBacXhuVG7geFipOPdLKP3bM08",
      accounts: [ "93aad59c69dce5a2c59c409a6cb9aed869ee9a05ce0cf7b1de9efda439c09b2d" ]
    }
  }
}