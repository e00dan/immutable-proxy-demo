import { ethers } from 'hardhat';

async function main() {
  const LendingPoolFactory = await ethers.getContractFactory("LendingPool");
  const lendingPoolImplementation = await LendingPoolFactory.deploy();
  console.log(`"lendingPoolImplementation" deployed to ${lendingPoolImplementation.address}`);

  const AddressesProviderFactory = await ethers.getContractFactory("LendingPoolAddressesProvider");
  const addressesProvider = await AddressesProviderFactory.deploy();

  await addressesProvider.deployed();

  console.log(`"addressesProvider" deployed to ${addressesProvider.address}`);

  const setImplementationTx = await addressesProvider.setLendingPoolImpl(lendingPoolImplementation.address);
  await setImplementationTx.wait();

  const lendingPoolAddressFromContract = await addressesProvider.getLendingPool();
  console.log(`Lending pool PROXY address: ${lendingPoolAddressFromContract}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});