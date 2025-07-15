 # Module 4: SimpleSwap DApp

## Description

This project implements a SimpleSwap in Solidity, with a minimal and functional front-end, and automated tests using Hardhat. It allows you to connect a wallet, check the price, swap ERC20 tokens (A ↔ B), and is deployed on GitHub Pages.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Contracts and Tokens](#contracts-and-tokens)
- [Project Structure](#project-structure)
- [Testing & Coverage](#testing--coverage)
- [Frontend](#frontend)

## Features
- Swap between two ERC20 tokens (A -> B)
- Add/remove liquidity and receive LP tokens
- Price calculation and slippage protection
- Frontend integration with MetaMask
- Automated tests and coverage report

## Requirements
- Node.js >= 16.x
- npm >= 8.x
- Hardhat
- MetaMask (for frontend interaction)

## Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/malon2/ethkipu-modulo4-tp.git
cd ethkipu-modulo4-tp
npm install
```

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
- **SimpleSwap**: [0x0043b851D8a740356c355E05cCf36ec3D422Bc5c](https://sepolia.etherscan.io/address/0x0043b851D8a740356c355E05cCf36ec3D422Bc5c#code)
- **HTokenA**: [0xB5D0840Bc3C0Cd5745a278f4e06045c3e70941cc](https://sepolia.etherscan.io/address/0xB5D0840Bc3C0Cd5745a278f4e06045c3e70941cc)
- **HTokenB**: [0xFB2C7F65Cc5ec3128703CD5116e96dbD32697811](https://sepolia.etherscan.io/address/0xFB2C7F65Cc5ec3128703CD5116e96dbD32697811)

---


## Project Structure

```
contracts/         # Solidity contracts
test/              # Hardhat tests
frontend/          # Frontend code (HTML, JS, CSS)
coverage/          # Coverage reports
demo/              # Demo video
ignition/          # Deployment scripts and info
```

## Testing & Coverage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests and check coverage:
   ```bash
   npx hardhat test
   npx hardhat coverage
   ```

3. Compile contracts:
   ```bash
   npx hardhat compile
   ```
4. Deploy contracts locally or to Sepolia:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   # or
   npx hardhat run scripts/deploy.js --network sepolia
   ```

## FrontEnd
- Frontend deployed with github pages (https://malon2.github.io/ethkipu-modulo4-tp/)

## Demo
- Demo video added (demo/demo.mp4)