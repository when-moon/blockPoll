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
            election = await Election.new(_voterIDs, _weights,  _candidates, _isPartial,  _startingBlock, _endingBlock);
       })

    it("Contract deploys", async function() {
        assert(election);
    })

    it('Non-Partial voting election is set', async function (){
        const electionType = await election.isPartial();
        const expected = false;
        assert.equal(electionType, expected);

    })

    it('Number of voters are set to 3', async function (){
        const numberOfVoters = await election.numberOfVoters();
        const expected = 3;
        assert.equal(numberOfVoters, expected);

    })

    it('Voter has correct credits amount', async function (){
        const expectedCredits = 10;
        const credits = await election.votingRoll(_voterIDs[0]);
        assert.equal(credits,expectedCredits);
    })

    it('Candidates have votes set to -1 as default', async function (){
        // The smart contract initializes all the candidate votes to -1 if they have not been voted for yet.
        // This for loop iterates through all candidates and checks that all of the values are set tto -1
        var constractCandidatesUntampered = true;
        for (var i = 0; i < _candidates.length; i++){
            if (await election.candidates(_candidates[i]) != -1){
                constractCandidatesUntampered = false;
            }
        }
        assert(constractCandidatesUntampered);
    })

    it('Voting uses up specified credits in non-partial', async function (){
        // When a voter partakes in a non-partial Election, all their credits are used up when voting for a legitimate candidate, even if they vote with a portion of their credits.
        // Once all a voters credits are used in a vote, their credit value is set to -1 and is checked in this test.
        await election.vote("brandon", 1);
        const expectedCredits = -1;
        const voterCredits = await election.votingRoll(_voterIDs[0]);
        assert.equal(voterCredits.valueOf(),expectedCredits);
    })

    it('Voting gives away specified credits in non-partial', async function (){
        // This non-partial vote allocates all the voters credit when voting for a candidate
        // We are checking that that all 10 votes associated with the registered voter gets allocated
        await election.vote("kavi", 1);   
        const voteCandidate = await election.candidates(_candidates[1]);
        const expectedVotes = 10;
        assert.equal(voteCandidate.valueOf(), expectedVotes); 
    })


    it("Allocating more votes than credits does not execute and original credits are still have retained", async function() {
        // This test attacks the smart contract by trying to vote with more credits than the voter has
        // We test that the smart contract's state is unaltered by checking that the credits have not been deducted from the user.
        try {
            await election.vote("brandon", 20);
        }
        catch(err) {
            console.log(err);
        }
    
        // Ensure that the credits have not been docked from the voter
        const expectedCredits = 10;
        const credits = await election.votingRoll(_voterIDs[0]);
        assert.equal(credits,expectedCredits);
    })

    it("Allocating more votes than credits does not execute and candidates do not receive the votes", async function() {
        // This test attacks the smart contract by trying to vote with more credits than the voter has
        // We test that the smart contract's state is unaltered by checking that no candidate has received any votes
        try {
            await election.vote("brandon", 20);
        }
        catch(err) {
            console.log(err);
        }

        // Ensure that no candidates have received a vote 
        var constractCandidatesUntampered = true;
        for (var i = 0; i < _candidates.length; i++){
            if (await election.candidates(_candidates[i]) != -1){
                constractCandidatesUntampered = false;
            }
        }
        assert(constractCandidatesUntampered);
    })


    it("Voting for non-existent candidate does not execute and original credits are still have retained", async function() {
        try {
            await election.vote("Iordan", 1);
        }
        catch(err) {
            console.log(err);
        }
    
        // Ensure that the credits have not been docked from the voter
        const expectedCredits = 10;
        const credits = await election.votingRoll(_voterIDs[0]);
        assert.equal(credits,expectedCredits);
    })

    it("Voting for non-existent candidate does not execute and candidates do not receive the votes", async function() {
        try {
            await election.vote("Iordan", 1);
        }
        catch(err) {
            console.log(err);
        }

        // Ensure that no candidates have received a vote 
        var constractCandidatesUntampered = true; 
        for (var i = 0; i < _candidates.length; i++){
            if (await election.candidates(_candidates[i]) != -1){
             constractCandidatesUntampered = false;
            }
        }
        assert(constractCandidatesUntampered);
    })

})