const { network, ethers } = require("hardhat");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("Deploying Governance Token...");
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations,
    });
    log(`Deployed governance token to address ${governanceToken.address}`);

    const governanceTokenAddress = await ethers.getContractAt(
        "GovernanceToken",
        governanceToken.address
    );
    const tx = await governanceTokenAddress.delegate(deployer);
    await tx.wait(1);
    console.log(
        `Checkpoints ${await governanceTokenAddress.numCheckpoints(deployer)}`
    );
    log("-----------------------------");
};

module.exports.tags = ["governorToken", "all"];
