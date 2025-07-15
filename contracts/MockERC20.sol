// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title MockERC20
/// @notice Simple ERC20 token for testing purposes.
/// @dev Inherits from OpenZeppelin ERC20 implementation and mints initial supply to deployer.
contract MockERC20 is ERC20 {
    /// @notice Deploys the mock token and mints initial supply to the deployer.
    /// @param name The name of the token.
    /// @param symbol The symbol of the token.
    /// @param initialSupply The initial supply to mint.
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }
}
