const { network } = require("hardhat");
const { MIN_DELAY } = require("../helper-hardhat-config");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("Deploying the Timelock...");
    const timelock = await deploy("TimeLock", {
        from: deployer,
        args: [MIN_DELAY, [], []],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("-----------------------------");
};
