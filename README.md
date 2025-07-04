# Module 4: SimpleSwap DApp

## Description

This project implements a SimpleSwap in Solidity, with a minimal and functional front-end, and automated tests using Hardhat. It allows you to connect a wallet, check the price, swap ERC20 tokens (A ↔ B), and is deployed on GitHub Pages.

---

### Contract Interaction
- The front-end allows you to connect MetaMask, check the price, and swap between Token A and Token B.

### Development Environment and Testing
- Project based on Hardhat.
- Tests in `/test/SimpleSwap.js` with coverage > 50% (`npx hardhat coverage`).

### Tools Used
- Contract: Solidity + OpenZeppelin.
- Testing: Hardhat, Chai.
- Frontend: HTML, CSS, JavaScript (ethers.js), compatible with GitHub Pages.

---

## Contracts and Tokens
- **SimpleSwap**: [0x21B18A990343C71347543CE8FC6BDC61C40bf4b7](https://sepolia.etherscan.io/address/0x21B18A990343C71347543CE8FC6BDC61C40bf4b7)
- **HTokenA**: [0xB5D0840Bc3C0Cd5745a278f4e06045c3e70941cc](https://sepolia.etherscan.io/address/0xB5D0840Bc3C0Cd5745a278f4e06045c3e70941cc)
- **HTokenB**: [0xFB2C7F65Cc5ec3128703CD5116e96dbD32697811](https://sepolia.etherscan.io/address/0xFB2C7F65Cc5ec3128703CD5116e96dbD32697811)

---

## Usage Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests and check coverage:
   ```bash
   npx hardhat test
   npx hardhat coverage
   ```

## FrontEnd
- Frontend deployed with github pages (https://malon2.github.io/ethkipu-modulo4-tp/)