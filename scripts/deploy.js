// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 

  const SelfDestructFactory = await hre.ethers.getContractFactory("SelfDestruct");
  const SelfDestruct = await SelfDestructFactory.deploy("0xBC5B9D64284fA4B723d085Acbe543C01721E75B4", {value: ethers.utils.parseEther('0.1')});

  await SelfDestruct.deployed();
  console.log("Contract has been deployed! ", SelfDestruct.address)

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
