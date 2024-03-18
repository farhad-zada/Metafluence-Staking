const { ethers, upgrades } = require("hardhat");

async function main() {
  const spTarget = "0x54b41a74aFbd38A847E3E95e87168ad169d7f943";

  const SuperUp = await ethers.getContractFactory("StakingSuperPoolUp");
  const spUp = await upgrades.upgradeProxy(spTarget, SuperUp);

  console.log("Super upgraded to:", spUp.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
