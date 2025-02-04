const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniversityName_GroupNameToken - Modified", function () {
    let Token, token, owner, addr1, addr2;
    const initialSupply = ethers.parseUnits("5000", 18); // Исправлено

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        Token = await ethers.getContractFactory("UniversityName_GroupNameToken");
        token = await Token.deploy(initialSupply);
        await token.waitForDeployment(); // Исправлено
    });

    it("Should deploy with correct initial supply", async function () {
        const totalSupply = await token.totalSupply();
        expect(totalSupply).to.equal(initialSupply);
    });

    it("Should assign initial supply to deployer", async function () {
        const ownerBalance = await token.balanceOf(owner.address);
        expect(ownerBalance).to.equal(initialSupply);
    });

    it("Should return correct transaction details", async function () {
        const senderBalance = await token.balanceOf(owner.address);
        const receiverBalance = await token.balanceOf(addr1.address);
        expect(await token.getTransactionDetails(owner.address, addr1.address)).to.deep.equal([senderBalance, receiverBalance]);
    });

    it("Should return latest transaction timestamp", async function () {
        const timestamp = await token.getLatestTransactionTimestamp();
        expect(timestamp).to.be.a("string");
    });
});