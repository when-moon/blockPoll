const assertRevert = require('./helpers/assertRevert')
const expectedException = require('./helpers/expectedException')
const Election = artifacts.require('./Election.sol')

contract('Election', function (accounts){
    let election;
    const _voterIDs = [accounts[0],"0x6Aff82B3AD35925AC14C87f37773CDb56e40d26d","0x14723a09acff6d2a60dcdf7aa4aff308fddc160c"];
    const _weights = [10,5,8];
    const _candidates = ["brandon","kavi","nico"];
    const _isPartial = false;
    const _startingBlock = 0;
    const _endingBlock = 12000;

    

     beforeEach('Contract setup for testing', async function () {
        try {
            election = await Election.new(_voterIDs, _weights,  _candidates, _isPartial,  _startingBlock, _endingBlock);
            contractedDeployed = true;
        }
        catch(err) {
            console.log(err);
        }
       })

    it("Contract can deploy ", async function() {
        assert(election);
    })

    // The block numbers are used to coordinate the timing of when the elections are live

    it("Contract fails to deploy if the endblocknumber is before the startBlockNumber", async function() {        const newEndingBlock = 0;
        var contractedDeploymentFailed = false;
        try {
            election = await Election.new(_voterIDs, _weights,  _candidates, _isPartial,  _startingBlock, newEndingBlock);
        }
        catch(err) {
            contractedDeploymentFailed = true;
        }
        const expected = true;
        assert(contractedDeploymentFailed);
    })
})