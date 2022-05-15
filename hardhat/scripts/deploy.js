const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  await deployedWhitelistContract;

  console.log(
    "whitelist contact address ==>",
    deployedWhitelistContract.address
  );
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.log("error", error);
    process.exit(1);
  });
