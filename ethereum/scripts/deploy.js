const {ethers} = require("hardhat");

async function main() {
    const TestFT = await ethers.getContractFactory("TestFT");
    const testFT = await TestFT.deploy();

    console.log("TestFT deployed:", testFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });