# Cryptolore
A Decentralized platform for digital writers to trade their literary works in the form of NFTs.

<br/>

![Logo](/src/logo.png?raw=true)

The DApp is deployable on the Polygon Mumbai Testnet.

## Run the DApp

### Requirements

[NodeJS](https://nodejs.org/en/download/)

You will also need an Ethereum wallet like [Metamask](https://www.metamask.io/).

### Clone the repo

```
$ git clone https://github.com/UltimateRoman/Cryptolore
$ cd Cryptolore
```

### Install dependencies

```
$ npm install -g truffle@5.1.44
$ npm install
```

Create a .secret file in the root directory and add the account mnenomics.

### Start the DApp

```
$ truffle migrate --network matic
$ npm start
```

Visit localhost:3000 in your browser and enjoy the Cryptolore experience!
