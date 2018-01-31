var Election = artifacts.require("Election");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(Election, ["0xca35b7d915458ef540ade6068dfe2f44e8fa733c","0x6Aff82B3AD35925AC14C87f37773CDb56e40d26d","0x14723a09acff6d2a60dcdf7aa4aff308fddc160c"],[10,5,8], ["brandon","kavi","nico"], true, 1150000, 1250000);
};