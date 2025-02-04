// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UniversityName_GroupNameToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("UniversityName_GroupNameToken", "UNGT") {
    _mint(msg.sender, initialSupply);
    }

    // Function to retrieve and display transaction information (20 points)
    function getTransactionDetails(address sender, address receiver) public view returns (uint256, uint256) {
        uint256 senderBalance = balanceOf(sender);
        uint256 receiverBalance = balanceOf(receiver);
        return (senderBalance, receiverBalance);
    }

    // Function to return the block timestamp of the latest transaction in a human-readable format (10 points)
    function getLatestTransactionTimestamp() public view returns (string memory) {
        return _timestampToString(block.timestamp);
    }

    // Helper function to convert timestamp to human-readable format (internal)
    function _timestampToString(uint256 timestamp) internal pure returns (string memory) {
        uint256 secondsPart = timestamp % 60;
        uint256 minutesPart = (timestamp / 60) % 60;
        uint256 hoursPart = (timestamp / 3600) % 24;
        uint256 day = (timestamp / 86400) % 30;
        uint256 month = (timestamp / 2592000) % 12;
        uint256 year = timestamp / 31536000;

        return string(abi.encodePacked(
            uint2str(year), "-", uint2str(month), "-", uint2str(day),
            " ", uint2str(hoursPart), ":", uint2str(minutesPart), ":", uint2str(secondsPart)
        ));
    }

    // Function to retrieve the address of the transaction sender (10 points)
    function getSenderAddress() public view returns (address) {
        return msg.sender;
    }

    // Function to retrieve the address of the transaction receiver (10 points)
    function getReceiverAddress() public view returns (address) {
        return address(this); // In a typical contract, the receiver is a different address
    }

    // Helper function to convert uint to string (internal)
    function uint2str(uint256 _i) internal pure returns (string memory _uintAsString) {
    unchecked { // Добавляем unchecked для предотвращения переполнения
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
}
}