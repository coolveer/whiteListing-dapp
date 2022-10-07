// SPDX-License-Indentifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistedAddress;
    uint8 public numAddressWhitelisted;

    mapping (address => bool) whitelistedAddresses;

    constructor(uint8 _maxWhitelistedAddress){
        maxWhitelistedAddress = _maxWhitelistedAddress;
    }

    function addAddressToWhiteList() public {
        require(!whitelistedAddresses[msg.sender],"sender already in whitelist");
        require(numAddressWhitelisted < maxWhitelistedAddress,"max whitelist address reached");
        whitelistedAddresses[msg.sender] = true;
        numAddressWhitelisted =  numAddressWhitelisted + 1 ;
    }
}
