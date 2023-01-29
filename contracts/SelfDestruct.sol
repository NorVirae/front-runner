//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract SelfDestruct {
    constructor(address sendToAddress) payable {
        address payable addr = payable(address(sendToAddress));
        selfdestruct(addr);
    }
}