const { ethers, upgrades } = require("hardhat");

async function main() {
  const StakingSuperPool = await ethers.getContractFactory("StakingSuperPool");
  console.log("Force importing StakingSuperPool...");
  await upgrades.forceImport(
    "0x54b41a74aFbd38A847E3E95e87168ad169d7f943",
    StakingSuperPool
  );
  console.log("StakingSuperPool force imported successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
