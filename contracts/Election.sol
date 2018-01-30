pragma solidity ^ 0.4.19;
contract Election {

    string temp;
    mapping (address => int) public votingRoll;
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
        // require(_startingBlock>=block.number);
        // require(_endingBlock>=block.number);
        // require(_endingBlock>_startingBlock);
        
        voters=_voterIDs;
        votingCandidates=_candidates;
        numberOfVoters=voters.length;
        for(uint i=0; i< _voterIDs.length;i++){
            votingRoll[_voterIDs[i]] = int(_weights[i]);
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
        // require(block.number>=startingBlock && block.number<=endingBlock);
        require(votingRoll[msg.sender]>0); //check that the caller is regestered voter
        require(int(_vote)<=votingRoll[msg.sender]); //check that the caller has enough credits to vote
        require(candidates[_candidate]==-1 || candidates[_candidate]>0); //check that candidate is registered
        if (candidates[_candidate]==-1){ //reset the initial vote for the candidiate
            candidates[_candidate]=0;
        }
        
        if(!isPartial){ //non-partial vote(All or nothing)
            _vote=uint(votingRoll[msg.sender]); //set to all the users credits
        }
        
        candidates[_candidate]+=int(_vote);
        if (votingRoll[msg.sender]-int(_vote)==0){
            votingRoll[msg.sender]=int(-1);
        }
        else{
            votingRoll[msg.sender]-=int(_vote);    
        }
    }
    
    function deleteElection() public{
        require(msg.sender==electionOwner);
        // require(block.number<startingBlock);
        selfdestruct(this);
    }
}

