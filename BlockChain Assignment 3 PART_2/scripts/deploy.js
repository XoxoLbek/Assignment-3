const { ethers } = require("hardhat");

async function main() {
    const Token = await ethers.getContractFactory("UniversityName_GroupNameToken");
    const token = await Token.deploy(); // Убираем .deployed()
    
    console.log(`Contract deployed to: ${await token.getAddress()}`); // Новый метод получения адреса
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
