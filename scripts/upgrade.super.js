const { ethers, upgrades } = require("hardhat");

async function main() {
  const Super = await ethers.getContractFactory("StakingSuperPool");
  console.log("Deploying Super...");
  const sp = await upgrades.deployProxy(Super, []);

  console.log("Super deployed to:", sp.target);

  const SuperUp = await ethers.getContractFactory("StakingSuperPoolUp");
  const spUp = await upgrades.upgradeProxy(sp.target, SuperUp);

  console.log("Super upgraded to:", spUp.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
