
require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "polygon",
  networks:{
    hardhat:{},
    polygon :{
      url : "https://polygon-mumbai.infura.io/v3/95688893704a4d5bac083296c3547383",
      accounts: ["4b37e644ab78c477cf92ed880dd52d5b0d50bfe36056696d1e05ba480d5abaa3"]
    }
  }
};