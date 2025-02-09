# **Assignment 3 - Part 2: Smart Contract Testing**

**DIAS ABDYKHALYK**

## **Introduction**
This project is the second part of Assignment 3, focusing on the **unit testing of a smart contract** developed in Part 1. The primary goal is to ensure that the contract functions correctly under various conditions. The tests are implemented using **Hardhat, Chai, and Ethers.js** to verify both the **initial version** of the contract and the **modified version** with an updated constructor.

## **Objectives**
- **Develop test cases for the initial version** of the smart contract.
- **Modify the constructor** to accept an input parameter and ensure it is used meaningfully.
- **Write test cases for the modified version** to verify its correctness.

## **Project Overview**
The project consists of:
1. **Testing the Initial Version**
   - Deploying the contract with a predefined initial supply.
   - Checking the balance of the owner.
   - Ensuring token transfers function correctly.

2. **Testing the Modified Version**
   - Updating the constructor to accept an `initialSupply` parameter.
   - Ensuring the correct assignment of the initial supply.
   - Verifying the contract maintains ERC20 compliance.

## **Prerequisites**
Before running the tests, ensure you have:
- **Node.js and npm installed**
- **Hardhat set up in your project**
- Dependencies installed by running:
  ```sh
  npm install
  ```

## **Running the Tests**
To execute the test cases, use the following commands:

- **Run all tests:**
  ```sh
  npx hardhat test
  ```
- **Run specific test files:**
  ```sh
  npx hardhat test test/Init_test.js
  npx hardhat test test/mod_contract.js
  ```

## **Expected Test Cases**
The tests cover:
- **Initial Contract Version:**
  - Deployment with correct initial supply.
  - Token transfer functionality.
  - Balance verification.
- **Modified Contract Version:**
  - Deployment with a dynamic `initialSupply`.
  - Ensuring `msg.sender` receives the correct amount.
  - Basic transaction functions operate as expected.

## **Results Verification**
![image](https://github.com/user-attachments/assets/d6f93fc7-8f10-479e-959c-0601e6c65916)


## **Conclusion**
This project successfully implements unit testing for an ERC20-based smart contract. It ensures that the contract functions as expected in both its initial and modified forms. By using **Hardhat and Chai**, we validate the integrity of fundamental ERC20 operations.
