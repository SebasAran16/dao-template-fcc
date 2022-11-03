//SPDX-License-Identifier: MIT

// We want to wait for a new vote to be "executed"
// Give time to users to "get out" if they don't like a governance update

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    /**
     * @param minDelay How long you have to wait before executing
     * @param proposers List of addresses that can propose
     * @param executors Who can execute when a proposal passes
     */
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(minDelay, proposers, executors) {}
}
