SavedRolls = new Mongo.Collection('savedRolls');
SavedCandidates = new Mongo.Collection('savedCandidates');

const ABI_ARRAY = [
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
                "type": "int256"
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
        "inputs": [],
        "name": "deleteElection",
        "outputs": [],
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
    }
];

const BYTE_CODE = "0x6060604052341561000f57600080fd5b604051610ae1380380610ae183398101604052808051820191906020018051820191906020018051820191906020018051906020019091908051906020019091908051906020019091905050600080875111801561006e575085518751145b151561007957600080fd5b6000855111151561008957600080fd5b866002908051906020019061009f929190610243565b5084600590805190602001906100b69291906102cd565b50600280549050600381905550600090505b86518110156101505785818151811015156100df57fe5b906020019060200201516001600089848151811015156100fb57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080806001019150506100c8565b600580549050600681905550600090505b84518110156101ce577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60046000878481518110151561019d57fe5b9060200190602002015160001916600019168152602001908152602001600020819055508080600101915050610161565b826008819055508160098190555083600760006101000a81548160ff02191690831515021790555033600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050610388565b8280548282559060005260206000209081019282156102bc579160200282015b828111156102bb5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610263565b5b5090506102c99190610320565b5090565b82805482825590600052602060002090810192821561030f579160200282015b8281111561030e5782518290600019169055916020019190600101906102ed565b5b50905061031c9190610363565b5090565b61036091905b8082111561035c57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101610326565b5090565b90565b61038591905b80821115610381576000816000905550600101610369565b5090565b90565b61074a806103976000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631a0478d5146100b457806333be940d146100ef57806339418071146101045780637b1f337d146101515780638c279f9f1461017a5780639bcc3361146101a75780639c84bb27146101d05780639ef1204c146101f9578063b09b2d4514610229578063d91c98d314610268578063da58c7d914610291575b600080fd5b34156100bf57600080fd5b6100d96004808035600019169060200190919050506102f4565b6040518082815260200191505060405180910390f35b34156100fa57600080fd5b61010261030c565b005b341561010f57600080fd5b61013b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610381565b6040518082815260200191505060405180910390f35b341561015c57600080fd5b610164610399565b6040518082815260200191505060405180910390f35b341561018557600080fd5b61018d61039f565b604051808215151515815260200191505060405180910390f35b34156101b257600080fd5b6101ba6103b2565b6040518082815260200191505060405180910390f35b34156101db57600080fd5b6101e36103b8565b6040518082815260200191505060405180910390f35b341561020457600080fd5b6102276004808035600019169060200190919080359060200190919050506103be565b005b341561023457600080fd5b61024a60048080359060200190919050506106b5565b60405180826000191660001916815260200191505060405180910390f35b341561027357600080fd5b61027b6106d9565b6040518082815260200191505060405180910390f35b341561029c57600080fd5b6102b260048080359060200190919050506106df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60046020528060005260406000206000915090505481565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036857600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16ff5b60016020528060005260406000206000915090505481565b60095481565b600760009054906101000a900460ff1681565b60035481565b60065481565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205413151561040c57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811315151561045a57600080fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004600084600019166000191681526020019081526020016000205414806104be5750600060046000846000191660001916815260200190815260200160002054135b15156104c957600080fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60046000846000191660001916815260200190815260200160002054141561052e576000600460008460001916600019168152602001908152602001600020819055505b600760009054906101000a900460ff16151561058757600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b8060046000846000191660001916815260200190815260200160002060008282540192505081905550600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054031415610663577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506106b1565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b5050565b6005818154811015156106c457fe5b90600052602060002090016000915090505481565b60085481565b6002818154811015156106ee57fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820b76da6b2c9d6deff7a6eebe6c86db0881f72d6704fc998d900a2e5fe681a6bde0029";

Meteor.setInterval(checkWeb3Status, 1000);

//event Helpers
Template.WalletBallance.helpers({
    walletBallance: function () {
        return Session.get("walletBallance");
    }
});

Template.WalletBallance.helpers({
    Address: function () {
        return Session.get("Address");
    },
    walletValue: function () {
        return Session.get("walletValue");
    },
    connectedNetwork: function () {
        return Session.get("connectedNetwork");
    },
    accountLocked: function () {
        return Session.get("accountLocked");
    },
    blockNumber: function () {
        return Session.get("blockNumber");
    }
});

Template.createElection.helpers({
    newCandidates: function () {
        return Session.get("newCandidates");
    },
    rollMap: function () {
        var result = {};
        if (Session.get("newVoters") != undefined) {
            Session.get("newVoters").forEach((key, i) => result[key] = [Session.get("newVoterWeights")[i], Session.get("newVotersNames")[i]]);
            //Object.assign is used to merge. this is needed in the case that the user selects a template then tries to add
            //their own additions to it. both lists must persist. more over, in the case that the user adds voters to the list
            //then selects a template. both should remain in both cases.
            Session.set("voterRoll", Object.assign(result, Session.get("voterRoll")));

        }
        return Session.get("voterRoll");
    },
    voteRollTemplates: function () {
        return SavedRolls.find().fetch();
    },
    savedCandidates: function () {
        return SavedCandidates.find().fetch();
    }
});

Template.findElection.helpers({
    candidateMap: function () {
        var result = {};
        if (candidates.list().length > 0) {
            candidates.list().forEach((key, i) => result[key] = candidatesCredit.list()[i]);
        }
        $(".candidates").empty();
        $.each(candidates.list(), function (i, p) {
            $('.candidates').append($('<option></option>').val(p).html(p));
        });
        Session.set("candidateMap", result);
        return result;
    },

    voterMap: function () {
        var result = {};
        if (voters.list().length > 0) {
            voters.list().forEach((key, i) => result[key] = votersCredit.list()[i]);
        }
        if (Session.get("Address") in result) {
            Session.set("registeredForElection", true);
            try {
                Session.set("numberOfVotingCredits", result[Session.get("Address")].c);
                if (result[Session.get("Address")].c > 0) {
                    Session.set("canVote", true);
                } else {
                    Session.set("canVote", false);
                }
            }
            catch (err) {
                //throw away the error
            }
        }
        else {
            Session.set("registeredForElection", false);
            Session.set("numberOfVotingCredits", 0);
        }
        return result;
    },
    electionStatus: function () {
        template = Template.instance();
        if (TemplateVar.get(template, "startingBlock") == undefined) {
            Session.set("resultsFetched", false);
            Session.set("preElection", false);
            return "<font color='gray'>Nothing to show...</font>";
        }
        if (Session.get("blockNumber") < TemplateVar.get(template, "startingBlock")) {
            Session.set("electionOver", false);
            Session.set("resultsFetched", true);
            Session.set("preElection", true);
            return "<font color='red'> Election has not started yet</font>";
        }
        if (Session.get("blockNumber") >= TemplateVar.get(template, "endingBlock")) {
            Session.set("preElection", false);
            Session.set("electionOver", true);
            Session.set("resultsFetched", true);
            getOrderedResults();
            return "<font color='green'> Election has Ended</font>";
        }
        if (Session.get("blockNumber") >= TemplateVar.get(template, "startingBlock") && Session.get("blockNumber") < TemplateVar.get(template, "endingBlock")) {
            Session.set("electionOver", false);
            Session.set("resultsFetched", true);
            Session.set("preElection", false);
            getOrderedResults();
            return "<font color='blue'> Election is currently Running</font>";
        }
        Session.set("resultsFetched", false);
        Session.set("preElection", false);

        return "<font color='gray'>Nothing to show...</font>";
    },
    electionOver: function () {
        return Session.get("electionOver");
    },
    finalResults: function () {
        return Session.get("finalResults");
    },
    resultsFetched: function () {
        return Session.get("resultsFetched");
    },
    preElection: function () {
        return Session.get("preElection");
    },
    currentLeader: function () {
        return Session.get("currentLeader");
    },
    currentLeaderVotes: function () {
        return Session.get("currentLeaderVotes");
    }
});

Template.vote.helpers({
    registeredForElection: function () {
        return Session.get("registeredForElection");
    },
    numberOfVotingCredits: function () {
        return Session.get("numberOfVotingCredits");
    },
    canVote: function () {
        return Session.get("canVote");
    },
    resultsFetched: function () {
        return Session.get("resultsFetched");
    },
    electionOver: function () {
        return Session.get("electionOver");
    },
});

Template.WalletBallance.helpers({
    walletAddressWidget: function () {
        return Session.get("Address");
    },
    walletBallanceWidget: function () {
        return Session.get("walletBallance");
    }
});

//event listners
let Address;
Template.findElection.events({
    'submit form': function () {
        let template = Template.instance();
        event.preventDefault();
        let electionAddress = event.target.address.value;
        Session.set("electionAddress", electionAddress);
        getElectionFromBlockchain(electionAddress, template);
    },
    'click .saveElection': function() {
        console.log("save election");
        //This method of exporting the CSV is a hack as it is built up from scratch. The standard meteor CSV export
        // lib documents are down so finding out how to do it that was was not possible so a JS solution was used.
        //A better implementation for this would use https://atmospherejs.com/harrison/papa-parse
        //Rather than building up the CSV in O(n) time and space complexity.
        let positions = [];
        let candidates = [];
        let votes = [];
        for (let i =0;i<Session.get("finalResults").length;i++){
            positions.push(i);
            candidates.push(Session.get("finalResults")[i][0]);
            votes.push(Session.get("finalResults")[i][1]);
        }

        const rows = [["position", "Candidate", "Votes"]];
        for (let i =0;i<Session.get("finalResults").length;i++){
            rows.push([positions[i]+1,candidates[i],votes[i]]);
        }

        let csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach(function(rowArray){
            let row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "ElectionResults.csv");
        document.body.appendChild(link); // Required for FF

        link.click();
    }
});

Template.vote.events({
    'submit form': function () {
        event.preventDefault();
        let candidate = event.target.candidate.value;
        let numberOfCredits = event.target.credits.value;
        voteInElection(candidate, numberOfCredits);
    }
});

let newCandidates = [];
let newVoters = [];
let newVotersWeights = [];
let newVotersNames = [];
let voterRoll = {};
Template.createElection.events({
    'click .addCandidate': function (e) {
        let newCandidateName = $('#candidateName')[0].value;
        if (($.inArray(newCandidateName, newCandidates)) === -1) {
            newCandidates.push(newCandidateName);
            Session.set("newCandidates", Object.assign(newCandidates, Session.get("newCandidates")));
        }
    },
    'click .removeCandidate': function (e) {
        let idToRemove = e.currentTarget.id;
        newCandidates = Session.get("newCandidates");
        newCandidates.splice(newCandidates.indexOf(idToRemove), 1);
        Session.set("newCandidates", newCandidates);
    },
    'click .removeVoter': function (e) {
        let idToRemove = e.currentTarget.id;

        newVoters = Session.get("newVoters");
        newVotersWeights = Session.get("newVoterWeights");
        newVotersNames = Session.get("newVotersNames");
        voterRoll = Session.get("voterRoll");

        delete voterRoll[idToRemove];

        Session.set("voterRoll", voterRoll);

        newVotersWeights.splice(newVoters.indexOf(idToRemove), 1);
        newVotersNames.splice(newVoters.indexOf(idToRemove), 1);
        newVoters.splice(newVoters.indexOf(idToRemove), 1);

        Session.set("newVoters", newVoters);
        Session.set("newVotersNames", newVotersNames);
        Session.set("newVoterWeights", newVotersWeights);
    },
    'click .addVoter': function () {

        let address = $('.voterAddress')[0].value;
        if (($.inArray(address, newVoters)) === -1) {
            newVoters.push(address);
            Session.set("newVoters", newVoters);

            let weight = $('.voterWeight')[0].value;
            newVotersWeights.push(weight);
            Session.set("newVoterWeights", newVotersWeights);

            let name = $('.voterName')[0].value;
            newVotersNames.push(name);
            Session.set("newVotersNames", newVotersNames);
        }
    },
    'click .createElection': function () {
        //basic user input sanitisation. do all logical checks to minimise gas usage on user side
        if (Session.get("newCandidates") === undefined) {
            alert("No candidates specified");
            return;
        }

        if (Object.keys(Session.get("voterRoll")) === undefined) {
            alert("No voters specified");
            return;
        }

        if ($("#startingBlock")[0].value === "") {
            alert("Starting block not specified");
            return;
        }

        if ($("#endingBlock")[0].value === "") {
            alert("Ending block not specified");
            return;
        }

        if ($("#startingBlock")[0].value > $("#endingBlock")[0].value) {
            alert("Starting block cant be bigger than ending block");
            return;
        }
        if (Session.get("blockNumber") > $("#endingBlock")[0].value) {
            alert("Ending block cant be smaller than current block number. Election will never start");
            return;
        }

        createElection().then((resolve, err) => {
            if (resolve) {
                console.log("it resolved!");
                console.log(resolve.address);
                console.log(resolve.txHash);
            }
            if (err) {
                console.log(err);
            }
        });
    },
    'click .saveVoterRol': function () {
        SavedRolls.insert(
            {
                name: $('#saveVoterRollName')[0].value,
                voterRoll: Session.get("voterRoll")
            }
        );
    },
    'change #voterRollTemplates': function (event) {
        templateID = event.target.value;
        if (templateID != "Voter Roll Template") {
            Session.set("voterRoll", Object.assign(SavedRolls.find({_id: templateID}).fetch()[0].voterRoll), Session.get("voterRoll"));
        }
    },
    'click .saveCandidateList': function () {
        SavedCandidates.insert(
            {
                name: $('#savedCandidatesName')[0].value,
                candidateList: Session.get("newCandidates")
            }
        )
    },
    'change #candidatesTemplates': function (event) {
        candidateID = event.target.value;
        if (candidateID != "Candidate Template") {
            Session.set("newCandidates", Object.assign(SavedCandidates.find({_id: candidateID}).fetch()[0].candidateList), Session.get("newCandidates"));
        }
    }
});

function createElection() {
    return new Promise((resolve, error) => {
        //extract all the weights from the voterRoll map. These are the inputed weights. need to use the voterRoll rather
        //then the other session variable as this accounts for voters added through the use of a template; no voter is left behind :)
        var VoterWeights = $.map(Session.get("voterRoll"), function (v) {
            return v[0];
        });
        var VoterWeightsInts = VoterWeights.map(function (x) { //cast voter weights to ints for contract call
            return parseInt(x, 10);
        });
        try {
            let election = web3.eth.contract(ABI_ARRAY);
            let contractInstance = election.new(
                Object.keys(Session.get("voterRoll")),
                VoterWeightsInts,
                Session.get("newCandidates"),
                $('#partial').prop('checked'),
                parseInt($("#startingBlock")[0].value),
                parseInt($("#endingBlock")[0].value),
                {
                    from: Address,
                    data: BYTE_CODE,
                    gas: "4000000"
                },
                function (e, contract) {
                    try {
                        if (typeof contract.address !== "undefined") {
                            try {
                                resolve({address: contract.address, txHash: contract.transactionHash});
                                console.log(contract.address);
                            }
                            catch (err) {
                                error(err);
                            }
                        }
                    } catch (e2) {
                        console.log("It looks like you cancelled the transaction!");
                        error("Error");
                    }
                    if (e) {
                        console.log("Oh-No! The election could not to be mined.");
                        error("Error");
                    }
                }
            );
        }
        catch (err) {
            console.log("Failed to create the certificate.");
            error(err);
        }
    });
}

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

function voteInElection(candidate, credits) {
    let election = getContract(Session.get("electionAddress"));
    election.vote(candidate, credits, function (err, res) {
        console.log(res);
        console.log(err);
    })
}

function getElectionFromBlockchain(electionAddress, template) {
    //remove if searching again
    candidates.clear();
    candidatesCredit.clear();
    voters.clear();
    votersCredit.clear();

    let election = getContract(electionAddress);
    election.numberOfVoters(function (err, res) {
        TemplateVar.set(template, "numberOfVotes", res);
        for (let i = 0; i < res; i++) {
            election.voters.call(i, function (err, res) {
                voters.push(res);
                election.votingRoll(res, function (err, res) {
                    //Hack to fix how javascript views large numbers for uint underflow from smart contract call
                    //if this is not here, when an int of value -1 is returned from the contract, this res underflows.
                    //I'm sure there is a better way to fix this but casting the uint to int returns 1 not -1 so for now
                    //this hack is acceptable as users will be limited to the max credit they can give a voter so this
                    //will result in false reporting
                    if (res > 1000000) {
                        res = -1;
                    }
                    votersCredit.push(res);
                });
            });
        }
    });

    election.numberOfCandidates(function (err, res) {
        TemplateVar.set(template, "numberOfCandidates", res);
        for (let i = 0; i < res; i++) {
            election.votingCandidates.call(i, function (err, res) {
                candidates.push((web3.toAscii(res).replace(/[^ -~]+/g, "")));
                election.candidates.call(res, function (err, res) {
                    candidatesCredit.push(res);
                });
            });
        }
    });
    election.startingBlock(function (err, res) {
        TemplateVar.set(template, "startingBlock", res);
    });

    election.endingBlock(function (err, res) {
        TemplateVar.set(template, "endingBlock", res);
    });

    election.isPartial(function (err, res) {
        TemplateVar.set(template, "isPartial", res);
    });
}

//Functions
function checkWeb3Status() {
    if (!web3.isConnected()) {
        console.log("no web3")
    } else {
        let network;
        web3.version.getNetwork((error, result) => {
            network = getNetwork(result);
            Session.set("connectedNetwork", network);
            if (network !== "Ropsten" && network !== "Unknown") {
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
                            web3.eth.getBlockNumber(function (err, res) {
                                Session.set("blockNumber", res);
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

function getOrderedResults() {

    var result = {};
    if (candidates.list().length > 0) {
        candidates.list().forEach((key, i) => result[key] = candidatesCredit.list()[i]);
    }
    $(".candidates").empty();
    $.each(candidates.list(), function (i, p) {
        $('.candidates').append($('<option></option>').val(p).html(p));
    });
    Session.set("candidateMap", result);


    let finalCandidates = Session.get("candidateMap");
    let sortedResults = [];
    for (var candidate in finalCandidates) {
        //I know this is a hack to maintain the sign on the integer. for now its fine
        let score = finalCandidates[candidate]["c"][0] * finalCandidates[candidate]["s"];
        sortedResults.push([candidate, score]);
    }

    sortedResults.sort(function (a, b) {
        return b[1] - a[1];
    });
    Session.set("finalResults", sortedResults);
    Session.set("currentLeader", sortedResults[0][0]);
    Session.set("currentLeaderVotes", sortedResults[0][1]);
}

//template helpers
Template.registerHelper("objectToPairs", function (object) {
    return _.map(object, function (value, key) {
        return {
            key: key,
            value: value
        };
    });
});

Template.registerHelper('math', function () {
    return {
        mul (a, b) {
            return a * b;
        },
        div (a, b) {
            return b ? a / b : 0;
        },
        sum (a, b) {
            return a + b;
        },
        sub (a, b) {
            return a - b;
        },
    }
});

Template.createElection.onRendered(function () {
    Session.set("electionOver", false);
});

//CSV uploading
Template.upload.onCreated(() => {
    Template.instance().uploading = new ReactiveVar(false);
});

Template.upload.helpers({
    uploading() {
        return Template.instance().uploading.get();
    }
});


Template.upload.events({
    'change [name="uploadCSV"]' ( event, template ) {
        template.uploading.set( true );

        Papa.parse( event.target.files[0], {
            header: true,
            complete( results, file ) {
                sAlert.success('Upload success');
                Session.set("resultData",results.data);
                if($("#csvUpload")[0].value=="Candidate List"){
                    //merge the existing list with the csv list
                    let existingCandidates = Session.get("newCandidates");
                    let csvCandidates = results.data.map(a => a.candidates).filter(function(n){ return n !== "" });
                    let mergedCandidates = csvCandidates.concat(existingCandidates);
                    sAlert.info('Candidate List selected and imported');
                    Session.set("newCandidates",mergedCandidates);
                    template.uploading.set(false);
                    return;
                }
                if($("#csvUpload")[0].value=="Voter Roll"){

                    template.uploading.set(false);
                    Session.set("temp",results.data);
                    let csvData = {};

                    //loop through the csv data, add to object, then write the session variable
                    for (let i =0;i<results.data.length;i++){
                        if(results.data[i].address!=""){
                            csvData[results.data[i].address]=[results.data[i].weight,results.data[i].name];
                        }
                    }
                    sAlert.info('Voter Roll Selected and imported');
                    Session.set("voterRoll",csvData);
                    return;
                }
                template.uploading.set(false);
                sAlert.error('No destination selected for CSV');
            }
        });
    }
});

Meteor.startup(function () {
    sAlert.config({
        effect: 'slide',
        position: 'top-right',
        timeout: 7000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        onClose: _.noop //
    });
});