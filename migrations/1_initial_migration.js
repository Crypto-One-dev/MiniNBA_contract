const MiniNBA = artifacts.require("MiniNBA");
const IterableMapping = artifacts.require("IterableMapping");

module.exports = async function(deployer) {
  try {
    await deployer.deploy(IterableMapping);
    await deployer.link(IterableMapping, MiniNBA);
    // await deployer.link(IterableMapping, MiniNBADividendTracker);
    // await deployer.deploy(MiniNBADividendTracker);
    await deployer.deploy(MiniNBA);
  } catch (error) {
    console.log(error);
  }
};
