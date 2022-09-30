import { HardhatUserConfig } from 'hardhat/types';

import 'hardhat-deploy';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';

const builderConfig: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: 'istanbul',
    },
  },
  typechain: {
    outDir: 'src/contracts',
    target: 'ethers-v5',
  },
  namedAccounts: {
    deployer: {
      default: 0,
      godwoken: 0,
    },
  },
  networks: {
    godwoken: {
      accounts: [
        'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
      ],
      chainId: 71401,
      url: 'https://godwoken-testnet-v1.ckbapp.dev',
      throwOnCallFailures: true,
    },
  },
};

export default builderConfig;
