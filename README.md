# Blockchain-Based-Voting

Using blockchain, voting process can be made more secure, transparent, immutable, and reliable


## Tech stacks

1.Install these prerequisites

2.NPM: https://nodejs.org

3.Truffle: https://github.com/trufflesuite/truffle

4.Ganache: http://truffleframework.com/ganache/

5.Metamask: https://metamask.io/

## Step 1. Clone the project
`
git clone https://github.com/mk070/blockchain-voting`

## Step 2. Install dependencies
```
$ cd blockchain-voting
$ npm install
```
> **if any error occurs delete package.json file and run `$npm init--` and install the dependencies**

## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance. See free video tutorial for full explanation.

## Step 4. Compile & Deploy Election Smart Contract
`$ truffle migrate --reset` You must migrate the election smart contract each time your restart ganache.

## Step 5. Configure Metamask

 > **this is important step. make sure that the metamask is connected to site--**
 
Unlock Metamask

Connect metamask to your local Etherum blockchain provided by Ganache.

Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ npm run dev 
`
Visit this URL in your browser: http://localhost:3000


