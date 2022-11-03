const { network } = require("hardhat");
const {
    VOTING_DELAY,
    VOTING_PERIOD,
    QUORUM_PERCENTAGE,
} = require("../helper-hardhat-config");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts();
    const { deploy, log, get } = deployments;

    const governanceToken = await get("GovernanceToken");
    const timeLock = await get("TimeLock");
    log("Deploying governor...");
    const governor = await deploy("GovernorContract", {
        from: deployer,
        args: [
            governanceToken.address,
            timeLock.address,
            QUORUM_PERCENTAGE,
            VOTING_PERIOD,
            VOTING_DELAY,
        ],
        log: false,
        waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("-----------------------------");
};
