const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UniversityName_GroupNameToken", function () {
    let Token, token, owner, addr1, addr2;
    const initialSupply = ethers.parseUnits("2000", 18);

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        Token = await ethers.getContractFactory("UniversityName_GroupNameToken");
        token = await Token.deploy(initialSupply);
        await token.waitForDeployment();
    });

    it("Should deploy with correct initial supply", async function () {
        const totalSupply = await token.totalSupply();
        expect(totalSupply).to.equal(initialSupply);
    });

    it("Should allow transfers", async function () {
        await token.transfer(addr1.address, ethers.parseUnits("500", 18));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.parseUnits("500", 18));
    });

    it("Should correctly reflect balances", async function () {
        expect(await token.balanceOf(owner.address)).to.equal(ethers.parseUnits("2000", 18));
        await token.transfer(addr1.address, ethers.parseUnits("1000", 18));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.parseUnits("1000", 18));
        expect(await token.balanceOf(owner.address)).to.equal(ethers.parseUnits("1000", 18));
    });
});