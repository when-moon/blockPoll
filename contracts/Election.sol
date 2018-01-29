pragma solidity ^ 0.4.19;
contract Election {

    string temp;
    mapping (address => uint) public votingRoll;
    address[] public voters;
    uint public numberOfVoters;
    
    mapping (bytes32 => int) public candidates;
    bytes32[] public votingCandidates;
    uint public numberOfCandidates;
    
    bool public isPartial;
    uint public startingBlock;
    uint public endingBlock;
    address electionOwner;

    function Election(address[] _voterIDs, uint[] _weights, bytes32[] _candidates, bool _isPartial ,uint _startingBlock, uint _endingBlock) public{
        
        require(_voterIDs.length>0 && _voterIDs.length==_weights.length);
        require(_candidates.length>0);
        require(_startingBlock>=block.number);
        require(_endingBlock>=block.number);
        require(_endingBlock>_startingBlock);
        
        voters=_voterIDs;
        votingCandidates=_candidates;
        numberOfVoters=voters.length;
        for(uint i=0; i< _voterIDs.length;i++){
            votingRoll[_voterIDs[i]] = _weights[i];
        }
        
        numberOfCandidates=votingCandidates.length;
        for (i=0;i < _candidates.length; i++){
            candidates[_candidates[i]] = -1; //set candidate to -1 as uninitalised
        }
        
        startingBlock = _startingBlock;
        endingBlock = _endingBlock;        
        isPartial = _isPartial;
        electionOwner=msg.sender;
    }
    
    function vote(bytes32 _candidate, uint _vote) public{
        require(block.number>=startingBlock && block.number<=endingBlock);
        require(votingRoll[msg.sender]>0); //check that the caller is regestered voter
        require(_vote<=votingRoll[msg.sender]); //check that the caller has enough credits to vote
        require(candidates[_candidate]==-1 || candidates[_candidate]>0);
        if (candidates[_candidate]==-1){ //reset the initial vote for the candidiate
            candidates[_candidate]=0;
        }
        
        if(!isPartial){ //non-partial vote(All or nothing)
            _vote=votingRoll[msg.sender]; //set to all the users credits
        }
        
        candidates[_candidate]+=int(_vote);
        votingRoll[msg.sender]-=_vote;
        
    }
    
    function deleteElection() public{
        require(msg.sender==electionOwner);
        require(block.number<startingBlock);
        selfdestruct(this);
    }
    
 function bytes32ToString (bytes32 data) returns (string) {
    bytes memory bytesString = new bytes(32);
    for (uint j=0; j<32; j++) {
        byte char = byte(bytes32(uint(data) * 2 ** (8 * j)));
        if (char != 0) {
            bytesString[j] = char;
        }
    }
    return string(bytesString);
}
}

