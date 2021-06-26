# Cryptolore
A Decentralized platform for digital writers to trade their literary works in the form of NFTs.

<br/>

![Logo](/src/logo.png?raw=true)

## Problem statement

Digital writers these days have to rely on centralized digital services to publish and showcase their work. By doing so, a significant portion of their revenue is lost to such platforms. The content ownership rights does not fully rest with the original writer and they have feeble control over their work.

## How Cryptolore comes into the picture

Cryptolore mitigates these problems by providing a decentralized platform to mint Non-Fungible Tokens or NFTs out of these literary works. These literary works can now be sold and purchased in the form of crypto-collectible assets, using cryptocurrency.

A user can post their literary work, which includes poems, short stories, essays etc on the platform and mention the price(in MATIC) that they are expecting from the sale. These works can then be viewed by collectors and they can purchase these NFTs. The ownership of these NFTs are cryptographically verifiable on the blockchain and these records are also non-tamperable. The amount pertaining to the purchase is paid in MATIC to the writer/creator. This significantly boosts their revenue due to the uniqueness or rare factor of NFTs and also the absence of third-parties in these transactions.

It is also assured that the NFT is valid, since forging a decentralized and permanent record is impossible. These NFT literary are indestructible as they are managed and operated using Blockchain which increases the level of security for them. This determines that these NFTs cannot be removed or destroyed, at all. They are also easily transferable, but only upon approval by its owner.

The DApp is deployable on the Polygon Mumbai Testnet, thereby providing faster transaction speeds and low gas fees.

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
