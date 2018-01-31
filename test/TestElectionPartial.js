//import assertRevert from './helpers/assertRevert';

const assertRevert = require('./helpers/assertRevert')
const Election = artifacts.require('./Election.sol')

contract('Election', function (accounts){
    let election;
    const _voterIDs = [accounts[0],"0x6Aff82B3AD35925AC14C87f37773CDb56e40d26d","0x14723a09acff6d2a60dcdf7aa4aff308fddc160c"];
    const _weights = [10,5,8];
    const _candidates = ["brandon","kavi","nico"];
    const _isPartial = true;
    const _startingBlock = 0;
    const _endingBlock = 12000;

    beforeEach('Contract setup for testing', async function () {
        election = await Election.new(_voterIDs, _weights,  _candidates, _isPartial,  _startingBlock, _endingBlock);
    })

    it("Contract can deploy", async function() {
        assert(election);
    })

    it('Partial voting election is selected', async function (){
        const electionType = await election.isPartial();
        const expected = true;
        assert.equal(electionType, expected);

    })

    it('Number of voters are set to 3', async function (){
        const numberOfVoters = await election.numberOfVoters();
        const expected = 3;
        assert.equal(numberOfVoters, expected);

    })

    it('Voter has correct weighting assosciated with it', async function (){
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

    it('Voting uses up specified credits in partial', async function (){
        // Partial voting allows for the some votes to be allocated to different candidates
        await election.vote("brandon", 1);
        const expectedCredits = 9;
        const voterCredits = await election.votingRoll(_voterIDs[0]);
        assert.equal(voterCredits.valueOf(),expectedCredits);
    })

    it('Using up all credits defaults credits balance to -1', async function (){
        // Once all credits for a voter have been used up, the credits balance for the associated voter is supposed to be set to -1
        await election.vote("brandon", 10);
        const expectedCredits = -1;
        const voterCredits = await election.votingRoll(_voterIDs[0]);
        assert.equal(voterCredits.valueOf(),expectedCredits);
    })

    it('Voting allocates the specified credits in a partial election', async function (){
        await election.vote("kavi", 1);    
        const voteCandidate = await election.candidates(_candidates[1]);
        const expectedVotes = 1;
        assert.equal(voteCandidate.valueOf(), expectedVotes); 
    })  

    it('Voter can split their credits among candidates and credits are docked', async function (){
        await election.vote("brandon", 5); 
        await election.vote("kavi", 2);   
        await election.vote("nico", 3);  

         // Once all credits for a voter have been used up, the credits balance for the associated voter is supposed to be set to -1
        const expectedCredits = -1;
        const voterCredits = await election.votingRoll(_voterIDs[0]);
        assert.equal(voterCredits.valueOf(),expectedCredits);
    })  

    it('Voter can split their credits among candidates and votes are allocated succesfully', async function (){
        await election.vote("brandon", 5); 
        await election.vote("kavi", 2);   
        await election.vote("nico", 3);  

        // Checking each candidate has received the allocated votes

        const voteCandidate1 = await election.candidates(_candidates[0]);
        const expectedVotes1 = 5;
        assert.equal(voteCandidate1.valueOf(), expectedVotes1); 

        const voteCandidate2 = await election.candidates(_candidates[1]);
        const expectedVotes2 = 2;
        assert.equal(voteCandidate2.valueOf(), expectedVotes2); 

        const voteCandidate3 = await election.candidates(_candidates[2]);
        const expectedVotes3 = 3;
        assert.equal(voteCandidate3.valueOf(), expectedVotes3); 
    })  

    it("Cannot vote with 0 credits for candidate and candidates do not receive the votes", async function() {
        try {
            await election.vote("kavi", 0);
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

    it("Cannot vote with 0 credits for candidate and original credits are still have retained", async function() {
        try {
            await election.vote("kavi", 0);
        }
        catch(err) {
            console.log(err);
        }
        
        // Ensure that the credits have not been docked from the voter
        const expectedCredits = 10;
        const credits = await election.votingRoll(_voterIDs[0]);
        assert.equal(credits,expectedCredits);
    })
  
})