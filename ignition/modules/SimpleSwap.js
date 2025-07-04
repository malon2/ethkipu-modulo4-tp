const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SimpleSwapModule = buildModule("SimpleSwapModule", (m) => {
  const SimpleSwap = m.contract("SimpleSwap");

  return { SimpleSwap };
});

module.exports = SimpleSwapModule;