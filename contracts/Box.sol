//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 public number;

    event ChangeNumber(
        uint256 indexed previousNumber,
        uint256 indexed newNumber
    );

    //Change the number to de DAO
    function changeNumber(uint256 newNumber) public onlyOwner {
        uint256 oldNumber = number;
        number = newNumber;
        emit ChangeNumber(oldNumber, number);
    }

    //Retrieves the last changed numeber
    function getNumber() public view returns (uint256) {
        return number;
    }
}
