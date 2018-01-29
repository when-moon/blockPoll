
const ABI_ARRAY = [{
    "constant": true,
    "inputs": [],
    "name": "numberOfVoters",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "name": "",
        "type": "address"
    }
],
    "name": "votingRoll",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
    "name": "votingCandidates",
    "outputs": [
    {
        "name": "",
        "type": "bytes32"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
    "name": "voters",
    "outputs": [
    {
        "name": "",
        "type": "address"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "name": "",
        "type": "bytes32"
    }
],
    "name": "candidates",
    "outputs": [
    {
        "name": "",
        "type": "int256"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "endingBlock",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "numberOfCandidates",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "isPartial",
    "outputs": [
    {
        "name": "",
        "type": "bool"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "startingBlock",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "name": "data",
        "type": "bytes32"
    }
],
    "name": "bytes32ToString",
    "outputs": [
    {
        "name": "",
        "type": "string"
    }
],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "name": "_candidate",
        "type": "bytes32"
    },
    {
        "name": "_vote",
        "type": "uint256"
    }
],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [],
    "name": "deleteElection",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
    {
        "name": "_voterIDs",
        "type": "address[]"
    },
    {
        "name": "_weights",
        "type": "uint256[]"
    },
    {
        "name": "_candidates",
        "type": "bytes32[]"
    },
    {
        "name": "_isPartial",
        "type": "bool"
    },
    {
        "name": "_startingBlock",
        "type": "uint256"
    },
    {
        "name": "_endingBlock",
        "type": "uint256"
    }
],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}];

const BYTE_CODE = "606060405234156200001057600080fd5b60405162000c2238038062000c2283398101604052808051820191906020018051820191906020018051820191906020018051906020019091908051906020019091908051906020019091905050600080875111801562000072575085518751145b15156200007e57600080fd5b600085511115156200008f57600080fd5b8660029080519060200190620000a792919062000255565b508460059080519060200190620000c0929190620002e4565b50600280549050600381905550600090505b86518110156200015e578581815181101515620000eb57fe5b906020019060200201516001600089848151811015156200010857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050620000d2565b600580549050600681905550600090505b8451811015620001df577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600460008784815181101515620001ad57fe5b90602001906020020151600019166000191681526020019081526020016000208190555080806001019150506200016f565b826008819055508160098190555083600760006101000a81548160ff02191690831515021790555033600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050620003aa565b828054828255906000526020600020908101928215620002d1579160200282015b82811115620002d05782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000276565b5b509050620002e091906200033c565b5090565b82805482825590600052602060002090810192821562000329579160200282015b828111156200032857825182906000191690559160200191906001019062000305565b5b50905062000338919062000382565b5090565b6200037f91905b808211156200037b57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010162000343565b5090565b90565b620003a791905b80821115620003a357600081600090555060010162000389565b5090565b90565b61086880620003ba6000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a0478d5146100bf57806333be940d146100fa578063394180711461010f5780637b1f337d1461015c5780638c279f9f146101855780639201de55146101b25780639bcc3361146102525780639c84bb271461027b5780639ef1204c146102a4578063b09b2d45146102d4578063d91c98d314610313578063da58c7d91461033c575b600080fd5b34156100ca57600080fd5b6100e460048080356000191690602001909190505061039f565b6040518082815260200191505060405180910390f35b341561010557600080fd5b61010d6103b7565b005b341561011a57600080fd5b610146600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061042c565b6040518082815260200191505060405180910390f35b341561016757600080fd5b61016f610444565b6040518082815260200191505060405180910390f35b341561019057600080fd5b61019861044a565b604051808215151515815260200191505060405180910390f35b34156101bd57600080fd5b6101d760048080356000191690602001909190505061045d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102175780820151818401526020810190506101fc565b50505050905090810190601f1680156102445780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561025d57600080fd5b61026561055c565b6040518082815260200191505060405180910390f35b341561028657600080fd5b61028e610562565b6040518082815260200191505060405180910390f35b34156102af57600080fd5b6102d2600480803560001916906020019091908035906020019091905050610568565b005b34156102df57600080fd5b6102f560048080359060200190919050506107ab565b60405180826000191660001916815260200191505060405180910390f35b341561031e57600080fd5b6103266107cf565b6040518082815260200191505060405180910390f35b341561034757600080fd5b61035d60048080359060200190919050506107d5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60046020528060005260406000206000915090505481565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041357600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60016020528060005260406000206000915090505481565b60095481565b600760009054906101000a900460ff1681565b610465610814565b61046d610828565b600080602060405180591061047f5750595b9080825280601f01601f19166020018201604052509250600091505b6020821015610551578160080260020a856001900402600102905060007f010000000000000000000000000000000000000000000000000000000000000002817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415156105445780838381518110151561051357fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b818060010192505061049b565b829350505050919050565b60035481565b60065481565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115156105b657600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115151561060457600080fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600084600019166000191681526020019081526020016000205414806106685750600060046000846000191660001916815260200190815260200160002054135b151561067357600080fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600084600019166000191681526020019081526020016000205414156106d8576000600460008460001916600019168152602001908152602001600020819055505b600760009054906101000a900460ff16151561073157600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b806004600084600019166000191681526020019081526020016000206000828254019250508190555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505050565b6005818154811015156107ba57fe5b90600052602060002090016000915090505481565b60085481565b6002818154811015156107e457fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b602060405190810160405280600081525090565b6020604051908101604052806000815250905600a165627a7a72305820b26977e09fba59e99207e81471bf13264dddc0477693657e73fe4ad3069485550029";

Meteor.setInterval(checkWeb3Status, 1000);

Template.WalletBallance.helpers({
    walletBallance: function () {
        return Session.get("walletBallance");
    }
});

Template.WalletBallance.helpers({
    Address: function(){
        return Session.get("Address");
    },
    walletValue: function(){
        return Session.get("walletValue");
    },
    connectedNetwork: function(){
        return Session.get("connectedNetwork");
    },
    accountLocked: function(){
        return Session.get("accountLocked");
    },
    blockNumber: function(){
        return Session.get("blockNumber");
    }
});

Template.vote.helpers({
    registeredForElection: function(){
        return Session.get("registeredForElection");
    },
    numberOfVotingCredits: function(){
        return Session.get("numberOfVotingCredits");
    },
    canVote: function(){
        return Session.get("canVote");
    }
});

let Address;
Template.findElection.events({
    'submit form': function (){
        let template = Template.instance();
        event.preventDefault();
        let electionAddress = event.target.address.value;
        Session.set("electionAddress",electionAddress);
        getElectionFromBlockchain(electionAddress,template);
    }
});

Template.vote.events({
    'submit form': function(){
        event.preventDefault();
        let candidate = event.target.candidate.value;
        let numberOfCredits = event.target.credits.value;
        voteInElection(candidate,numberOfCredits);
    }
});

function getContract(certificateAddress) {
    try {
        return web3.eth.contract(ABI_ARRAY).at(certificateAddress);
    }
    catch (err) {
        console.log("error failed")
    }
    return null;
}
let candidates = new ReactiveArray();
let candidatesCredit = new ReactiveArray();
let voters = new ReactiveArray();
let votersCredit = new ReactiveArray();

function voteInElection(candidate,credits){
    let election = getContract(Session.get("electionAddress"));
    election.vote(candidate,credits,function(err,res){
        console.log(res);
    })
}

function getElectionFromBlockchain(electionAddress,template){
    //remove if searching again
    candidates.clear();
    candidatesCredit.clear();
    voters.clear();
    votersCredit.clear();

    let election = getContract(electionAddress);
    election.numberOfVoters(function (err, res) {
        TemplateVar.set(template,"numberOfVotes",res);
        for (let i=0;i<res;i++){
            election.voters.call(i,function(err,res){
                voters.push(res);
                election.votingRoll(res,function(err,res){
                    votersCredit.push(res);
                });
            });
        }
    });

    election.numberOfCandidates(function (err, res) {
        TemplateVar.set(template,"numberOfCandidates",res);
        for (let i=0;i<res;i++){
            election.votingCandidates.call(i,function(err,res){
                candidates.push((web3.toAscii(res).replace(/\W/g, '')));
                election.candidates.call(res,function(err,res){
                   candidatesCredit.push(res);
                });
            });
        }
    });
    election.startingBlock(function (err, res) {
        TemplateVar.set(template,"startingBlock",res);
    });

    election.endingBlock(function (err, res) {
        TemplateVar.set(template,"endingBlock",res);
    });

    election.isPartial(function (err, res) {
        TemplateVar.set(template,"isPartial",res);
    });
}

function checkWeb3Status() {
    if (!web3.isConnected()) {
        console.log("no web3")
    } else {
        let network;
        web3.version.getNetwork((error, result) => {
            network = getNetwork(result);
            Session.set("connectedNetwork", network);
            if (network !== "Ropsten") {
                console.log("wrong network")
            } else { // Check whether account is locked
                web3.eth.getAccounts(function (err, res) {
                    if (!err) {
                        Address = res[0];
                        if (Address == undefined) {
                            if (!Session.get("accountLocked")) {
                                console.log("account locked");
                                Session.set("accountLocked", true);
                                Session.set("Address", "0x");
                                Session.set("walletBallance", 0);
                            }
                        } else { // Set all the apropriate variables
                            web3.eth.getBlockNumber(function(err,res){
                               Session.set("blockNumber",res);
                            });
                            Session.set("Address", Address);
                            Session.set("accountLocked", false);
                            web3.eth.getBalance(Address, function (err, res) {
                                let ethBlance = Math.round(web3.fromWei(res, "ether") * 10000) / 10000;
                                Session.set("walletBallance", ethBlance);
                            });
                        }
                    }
                });
            }
        })
        ;
    }
};

function getNetwork(networkId) {
    switch (networkId) {
        case '1':
            return 'Mainnet';
        case '2':
            return 'Morden';
        case '3':
            return 'Ropsten';
        case '4':
            return 'Rinkeby';
        case '42':
            return 'Kovan';
        default:
            return 'Unknown';
    }
}

Template.registerHelper("objectToPairs", function (object) {
    return _.map(object, function (value, key) {
        return {
            key: key,
            value: value
        };
    });
});

Template.findElection.helpers({
    candidateMap: function (){
        var result = {};
        if(candidates.list().length>0){
            candidates.list().forEach((key, i) => result[key] = candidatesCredit.list()[i]);
        }
        $(".candidates").empty();
        $.each(candidates.list(), function(i, p) {
            $('.candidates').append($('<option></option>').val(p).html(p));
        });

        return result;
    },

    voterMap: function (){
        var result = {};
        if(voters.list().length>0){
            voters.list().forEach((key, i) => result[key] = votersCredit.list()[i]);
        }
        if (Session.get("Address") in result){
            Session.set("registeredForElection",true);
                try{
                    Session.set("numberOfVotingCredits", result[Session.get("Address")].c);
                    if (result[Session.get("Address")].c>0){
                        Session.set("canVote",true);
                    } else{
                        Session.set("canVote",false);
                    }
            }
            catch(err){
                    //throw away the error
            }
        }
        else{
            Session.set("registeredForElection",false);
            Session.set("numberOfVotingCredits",0);
        }
        return result;
    },
    electionStatus: function(){
        template = Template.instance();
        if (TemplateVar.get(template,"startingBlock")==undefined){
            return "";
        }
        if (Session.get("blockNumber") < TemplateVar.get(template,"startingBlock")){
            return "Election has not started yet";
        }
        if (Session.get("blockNumber") > TemplateVar.get(template,"endingBlock")){
            return "Election has Ended";
        }
        if (Session.get("blockNumber") > TemplateVar.get(template,"startingBlock") && Session.get("blockNumber") < TemplateVar.get(template,"endingBlock")){
            return "Election is currently Running"
        }
    return "";
    }
});

Template.WalletBallance.helpers({
    walletAddressWidget: function () {
        return Session.get("Address");
    },
    walletBallanceWidget: function () {
        return Session.get("walletBallance");
    }
});
