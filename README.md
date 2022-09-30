Create Immutable proxy to Godwoken Testnet:
```
yarn
yarn build
yarn hardhat run --network godwoken scripts/deploy/addressProvider.ts
```

Example output from Godwoken Testnet:
```
➜ ✗ yarn hardhat run --network godwoken scripts/deploy/addressProvider.ts
...
"lendingPoolImplementation" deployed to 0xfD373C524601F405b4403fDA0CBd947C9c82Af3F
"addressesProvider" deployed to 0xeAC53aC47Fd20500AAd301a6f8071d2e2E5aD917
Lending pool PROXY address: 0xb34030df3686f08603792443696A2675a0dACF21
✨  Done in 11.29s.
```