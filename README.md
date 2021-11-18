# 🎨 Ohm Fork Monorepo 

https://docs.olympusdao.finance/main/contracts/bonds


Policy and Dao contracts are upgradeable proxy Gnosis-safes [ https://etherscan.io/tx/0x19aafcba14e4300a17b6eee5288049f23260274f4e4b385ec4c8a0f9617a2a85 ] 


 
# 🏄‍♂️ Quick Start (contracts)

Create the .env file in /packages/hardhat according to .env.template

```bash
yarn install 

cd packages/hardhat 

yarn build 
yarn test mainnet
```

 
## How to Deploy to Rinkeby

```
cd packages/hardhat 

yarn generate  (this generates a new account. It will make two files. One named mnemonic.txt and one with a public address. You need to set Rinkeby ETH to that public address)

yarn deploy --network rinkeby 

yarn verify --network rinkeby --license MIT 
```

## How to Deploy to Mainnet
```
cd packages/hardhat 

yarn generate  (this generates a new account. It will make two files. One named mnemonic.txt and one with a public address. You need to set Mainnet ETH to that public address)

yarn deploy --network mainnet 

yarn verify --network mainnet --license MIT 
```

## How to Run Frontend 

```
cd packages/hardhat 

yarn deploy 

yarn chain 
```

#### In a separate terminal

```
cd packages/react-app

yarn build 

yarn start 
```
 

🔏 Edit your smart contract `*.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app
