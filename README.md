# [blockPoll](https://github.com/when-moon/blockPoll.git)

<p align="center">
   <img src="https://i.imgur.com/w2gttpf.png" width="300" height="300">
</p>

**blockPoll** is a pseudo-anonymous, online, blockchain-based voting tool, used to facilitate organizational-based proxy voting and polling mechanisms for a wide array of uses.

## Table of Contents
1. [What is it](#What-is-it)
2. [How it works](#How-it-works)
3. [Why it works](#Why-it-works)
   1. [Current voting mechanisms](#Current-voting-mechanisms)
   2. [How does blockPoll improve on these mechanisms?](#How-does-blockPoll-improve-on-these-mechanisms?)
4. [Features](#Features)
5. [How to use](#How-to-use)
   1. [Administrator](#Administrator)
   2. [Voter](#Voter)
   3. [Viewer](#Viewer)
   4. [Running on your local machine](#Running-on-your-local-machine)
6. [Suggested use cases](#Suggested-use-cases)
7. [Current limitations and future considerations](#Current-limitations-and-future-considerations)

## What is it <a name="What-is-it"></a>

By leveraging the power of the Ethereum blockchain, coupled with an easy to use web API, **blockPoll** provides a mechanism whereby both corporate and non-corporate organisations can conduct voting or poll-like events in a decentralised manner. During the voting process, all participants (voters and candidates) are able to see in real-time the progress results of the undertaken vote without anyone other than the registrar(s) being able to see which voter chose which candidate. 

The final tallied outcome of the vote is also publicly accessible to all members, with the same level of anonymity discussed above. The creator of the vote is able to specify the type of proxy voting procedure (partial, non-partial) as well as user specified input arguments decided upon during contract creation.
.

## How it works <a name="How-it-works"></a>

Given a list of potential candidates, as well as the those who are eligible within the organization to vote for said candidates (Decided upon by a central authorizing committee within the organization), the tool allows a user to create both partial or non-partial proxy voting schemes. By uploading a CSV file of the voters and their associated “voting power” the admistrator can register voters for the election. The ID of each voter and the numerical representation of their voting power is made publically available, but the ID-voter pair is known only by the administrator/registrar and the voter itself.

By displaying the ID of each voter, as well those that the ID voted for, the current progress of the voting process can be displayed to each voter and candidate. This means that the voter is able to verify that his/her vote has been logged correctly while still preserving the anonymity of the voter. An Ethereum smart contract manages the creation and tallying of votes. This allows for complete immutability of all results, and prevents those with malicious intent from interfering with the voting process. Additionally, after creation, as long as the voting process has not yet begun (Start and end date/time decided upon by administrator of the contract by specifying block numbers), the administrator is able to delete the contract in the event of a miscreated poll. However, once the specified begin block has been mined, the contract cannot be deleted, preserving its immutability and transparency for the benefit of both those who are voting and the candidates being voted for.

## Why it works <a name="Why-it-works"></a>


### Current voting mechanisms <a name="Current-voting-mechanisms"></a>
In a corporate business context, proxy voting allows for a ballot to be cast by one person on behalf of a shareholder of a corporation. This allows for the vote to be conveniently cast without the shareholder having to attend a shareholders meeting. These shareholders receive a ballot - either by mail, internet or, in some cases, over the phone - along with an information booklet called a proxy statement. This statement outlines the circumstances surrounding the vote including new board electives, merger or acquisition approval, stock compensation, inter-office policies etc. Additionally, the proxy statement asserts whether the vote  is:

* **Non-Partial** -- The vote is carried out in a binary type manner, ie: YES, NO or - in some cases - ABSTAIN. In circumstances where a specific candidate or event is being voted for, the voter is only allowed to vote for one candidate. Here the voter is forced to assign the full weight of their shareholding power behind their vote meaning that they are only allowed to vote for one candidate (event) and they are only allowed to vote once. 
* **Partial** -- Depending on the voting circumstances, the voter is able to assign all or only part of their voting power to a candidate (event). This means that the voter is able to vote more than once for multiple different candidates (events), splitting their voting power between candidates in whatever incremental portion they choose. The voter is able to do this until all of his/her weighting power has been assigned to their chosen voting candidate(s). 

Once the vote is cast, a central tallying authority is responsible for ensuring that the voting process was conducted fairly and - depending on the type of system used - the votes have been recorded and tallied correctly ensuring the validity of the winning candidate.

### How does blockPoll improve on these mechanisms? <a name="How-does-blockPoll-improve-on-these-mechanisms?"></a>

#### Immutability
The [Proof of Work (PoW)](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ) consensus protocol used by the Ethereum network ensures that once all nodes have agreed on its state, no one node has the power to falsify the data or to censor changes. As such, once the contract has been deployed and the start block has been mined, no individual can alter the state of the contract and in such disrupt the validity of the vote and subsequently the results of the election. 

Any change to the contract would result in a disagreement between the nodes. This gives both voters and voting candidates the peace of mind that the result of the vote has not been altered or tampered with during its life cycle. This relegates the voters and candidates from the need of a central tallying authority and removes the need to trust in these entities.

#### Auditability and Transparency

Because a blockchain requires that there exist a ledger containing the sequential time-stamped trial of transactions, and these transactions are stored in a sequential array of blocks containing reference to their predecessors, an audible trial of transactions is created which can be publicly viewed.

**blockPoll** leverages this, allowing voters to validate that their vote has been captured correctly, without revealing to other voters or candidates their identity. This also allows **blockPoll** to display in real-time (if chosen by the organization) to make public the progress of the election. The API provides a dashboard upon which the progress can be viewed, as well as providing visual metrics should the organization choose to make public the voting progress.

#### Persistence of results

Once created and deployed on the public chain, the contract cannot be destroyed. The data stored by the contact is forever accessible and allows users to see the outcome of an event in the past. This increases both its auditability and immutability as it prevents those with malicious intent to delete the contract in the hope of nullifying the vote.

#### Scalability

**blockPoll** does not make use of centralized servers to coduct the voting process. As the Ethereum network scales, so too the smart contract ability to handle more votes per second. These scaling solutions include sharding etc.

#### Cost

Other than the small transaction fee associated with deploying the contract to the network, as well as the almost negligible fee for each voter, the absence of a centralized server alleviates the financial weight of running a proxy (or any other) vote on **blockPoll**. **blockPoll** is free to use and open source, and exists therefore only to provide a user friendly blockchain based voting mechanism for the benefit of its own organization. Its open source nature means that any security faults found through testing on the test-net can be resolved timeously to provide a fail-proof robust solution for its users. 

Keeping **blockPoll** open source and free to use is key in ensuring a growing and sustainable user base. This also provides it with a competetive edge over other online based proxy voting tools. As the network evolves, transaction fees and gas prices will decrease, allowing **blockPoll** to continue to work without large financial burden to its users. 

#### Future Proof

Blockchain technology and smart contracts in general are still in the early adoption phase of its life cycle. The entire ecosystem has the potential to grow into one which spans every facet of our lives from how we deal with finance to what goes on in our homes. Being a blockchain based Dapp, **blockPoll** strives to make use of this evolving technology in a manner that increases efficiency and ease of use in a voting context. Increased development in the field will bring with it more functionality that **blockPoll** hopes to employ in the future, should there be a market for it. It’s our hope that **blockPoll** can be used in much larger, more decentralized applications through which any electoral-based projects can make use of the power of **blockPoll**.  

#### Decentralized

The decentralized nature of the blockchain provides **blockPoll** with advantages over and above those that exist already. As all transactions occur with the smart contract and not with a centralized tallying authority, it reduces the burden on to carry out a seemingly mundane task of counting and verifying votes. The concern of how the voting procedure is run is hard-coded into the contract, and as such made publicly available to all concerning parties. 

This allows for proper control and supervision of the voting process and increases voter and candidate satisfaction in the fact that their votes are being accounted for correctly. Once finished, disputing the outcome of the election is prevented as there is no central issuing authority who can take responsibility for the outcome. Its decentralized nature ensures shared control between all the nodes on the network, and the consensus between these nodes aids in the auditability and transparency of the entire electoral procedure.  

## Features <a name="Features"></a>

* Ability for **administrative user** to upload a **CSV file** containing a list of voters and their associated voting power. 
* Ability for **administrative user** to upload a **CSV file** containing a list of possible candidates.
* Ability for **administrative user** to manually insert a list of voters and their associated voting power.
* Ability for **administrative user** to manually insert a list of possible candidates.
* Ability for **administrative user** to manually insert a list of voters or candidates from a stored database of past voters/candidates.
* Registrar assigns a **unique Id** - or more simply - their **public key** to each voter known only by the voter and the registrar, allowing for them to see that their vote has been captured correctly in a pseudo-anonymous way. 
* Ability for **administrative user** to specify the block number on which they would like the election to begin. If the starting block number is less than the current block, the election will begin as soon as the contract has been deployed.
* Ability for **administrative user** to specify the block number on which they would like the election to end.
* Ability for **administrative user** to specify whether the voting mechanism is **partial** or **non-partial**.
* Upon completion of election, both voters and candidates are able to download a CSV file containing all candidates, where each candidate placed during the election and the total amount of votes each voter tallied. 
* The Dapp dynamically pulls the current gas price from [ETH Gas Station](https://ethgasstation.info/) to make it as cheap as possible for the user. This ensures that each transaction is executed with the currently decided upon minimum amount of gas possible that will still allow the transaction to go through successfully in a reasonable amount of time. This provides a good balance between performance and cost. 
* The **web API** provides a wrapper for the contract whereby external third party companies and applications can build around to display current electoral progress and statistics in a more visually appealing way. This allows companies like **CNN** and the like to pull from information in the API and integrate it into their websites and applications in the manner they see fit. 

## How to use <a name="How-to-use"></a>
**blockPoll** is intended to be used for the creation, interaction and viewing of a fully fledged electoral system on a decentralized blockchain. The way in which **blockPoll** is used depends on the type of user, as well as thier level of administration. 

### Administrator <a name="Administrator"></a>	
An administrator is in charge of creating the voting contract and deploying it on the blockchain. The administrator also acts as a registrar in the sense that they are responsible for inserting both the candidates, voters and the voters weighting credits into the database. The administrator has knowledge of both the name of the voter and his/her private ID key. The administrator should be someone who is not involved in the voting procedure and must not share publicly the associated voter with their public key. This is a slight flaw as it allows for a tampering.

After the vote has been completed, any person (voter of candidate) can download a CSV file containing the list of cadidates that were being voted for in the election, where each candidate placed in relation to each other candidate, and the total number of votes each candidate recieved during the election.

#### Instructions
1. The administrator must have access to a list of all voting candidates, as well as a list of voters and their public keys.
2. Navigate to [http://whenmoon.pangoproject.com](http://whenmoon.pangoproject.com/)
3. Login to [metaMask](https://metamask.io/). 
4. Select whether or not the election will be run as a **partial** or **non-partial** vote.
5. Select the begin and end block number based on the current block number displayed. If the starting block selected is below the current block number, the election will begin the instant the contract has been created and deployed. Depending on how far in the future you wish to start the election, the time between blocks can be calculated [here](https://etherscan.io/chart/blocktime): 
6. The registrar must then insert both the voters and candidates. This can be done in one of 3 ways:
   * The registrar manually inputs each voter and candidate by typing them into the selected input fields. The registrar also has the option to delete each entry individually if needed.
   * The registrar uploads 2 separate CSV files containing the voters and voting candidates.
   * Because the database stores the names of past input voters and candidates, given that the election has been run before with all or part of the same participants, the registrar is able to select names from a drop-down field of past voters or candidates. If the registrar chooses to input the voters from the database, the original voter-id pair (name and pubic key) is not retrievable to maintain pseudo-anonymity for voters.
7. Click on `create election`.
8. Follow [metaMask](https://metamask.io/) prompts.
9. Share the link with the voters and voting candidates so that they are able to veiw the progress of the election in real-time once its begun.


### Voter <a name="Voter"></a>	
Depending on the type of vote taking place (**partial** or **non-partial**), a voter has the ability to cast his/her vote. In a **non-partial** vote, the voter will only be able to cast his vote once, and regardless of how much weight they put behind their vote, the contract will ensure that the full voting power they have is allocated to the candidate. Under **partial** voting conditions, the voter is able to vote more than once but cannot vote for multiple candidates during a single transaction. In such an event, the voter must re-vote and assign as many voting credits as they wish to each candidate. They can continue to do this for as many candidates as they please until all of their voting credits have been assigned to candidates.

#### Instructions

1. Navigate to [http://whenmoon.pangoproject.com](http://whenmoon.pangoproject.com/). Here the voter is able to view the current status of the election.
2. Select candidate from a drop down list of options.
4. Enter the number of credits intended for the recipient.
3. Click `vote`.
4. Follow [metaMask](https://metamask.io/) prompts.

### Viewer <a name="Viewer"></a>
Because the voting process is executed by, and stored on a public blockchain, both voters and candidates alike can view the current progress of the election. 

#### instructions
1. Navigate to [http://whenmoon.pangoproject.com](http://whenmoon.pangoproject.com/).
2. Search for the public address of the contract through the interface.
3. If necessary, view the transactional history of the contract on the public blockchain.

### Running on your local machine <a name="Running-on-your-local-machine"></a>

If you wish to run **blockPoll** on your local machine for testing purposes you may do the following:

#### Prerequisites
* [npm](https://www.npmjs.com/)
* [meteor](https://www.meteor.com/)
* [nodeJS](https://nodejs.org/en/)
* [Truffle](http://truffleframework.com/)
* [Ganache](http://truffleframework.com/ganache/)

#### Installation instructions

In a terminal:

```bash
# Clone the Repo
git clone https://github.com/when-moon/blockPoll.git
```

Or download from [here]( https://github.com/when-moon/blockPoll.git)
```bash
# cd into correct folders
cd blockPoll
cd dapp

# Install dependencies
npm install

# Run meteor
meteor
```
![Meteor tut](https://i.imgur.com/JG1tKnJ.gif)
If you wish to run the tests:
Open and run Ganache, and then in terminal:
```bash
cd blockPoll

# install dependencies
npm install

# compile and run tests
truffle compile && truffle test
```

If run successfully, you should see 28 passing tests.
![Tests Passing](https://i.imgur.com/onLubY9.gif)


## Suggested use cases  <a name="Suggested-use-cases"></a>

* Proxy Voting 
  * Partial
  * non-Partial
* Statutory Voting
* Dupicate Proxy (If set up correctly)
* Board member elections
* Inter-office policies
* Tender Proposals
* Grant proposals
* University SRC elections
* Provinsial or National elections (After implimentation of full system)
* Orginization defined Motions
* Orginization defined ballot questions
* Absenee balloting 
* Approval voting 
* Caridnal or ranked voting (If set up correctly)
* Referendums
* Disapproval voting 

## Current limitations and future considerations  <a name="Current-limitations-and-future-considerations"></a>
Currently, **blockPoll** has been built as a proof of concept **(PoC)** and is still just a Minimum Viable Product **(MVP)**. It is currently running on the Ropstan testnet network and still subject iteration and rapid prototyping. Because of this, there are inherent problems associated with **blockPoll** in its current form: 
* The most obvious problem is that **blockPoll** is pseudo-anonymous. For mass adoption and use in large-scale sensitive type voting schemes (such as national or provincial elections) **blockPoll** would need to be entirely anonymous. In theory, to run **blockPoll** on the main network, this would include the implementation of some sort of [Zero Knowledge Proof (ZKP)](https://en.wikipedia.org/wiki/Non-interactive_zero-knowledge_proof). A [zk-SNARK](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/) would provide the anonymity necessary in creating such an application, but does not change how the voting mechanism works. 

  Another consideration was to have **blockPoll** run on a private chain, such as [Quorum](https://www.jpmorgan.com/global/Quorum) instead. [Quorum](https://www.jpmorgan.com/global/Quorum) preserves anonymity between private transactions between a permissioned group of participants. By specifying who is privy to the transaction, [Quorum's](https://www.jpmorgan.com/global/Quorum)’s `privatefor` function provides the mechanism necessary to secure the needed anonymity. As such, an Azure instance was instantiated and 7 [Quorum](https://www.jpmorgan.com/global/Quorum) nodes were set up to run **blockPoll** on.After successfully running **blockPoll** on [Quorum's](https://www.jpmorgan.com/global/Quorum) private network, however, thought was given as to how we had initially intended **blockPoll** to run. Over and above the fact that now each voting event could be done in complete anonymity, another advantage was that because [Quorum](https://www.jpmorgan.com/global/Quorum) is free. This means that deploying the contract, instantiating any votes becomes free for both voters and organization. This increases **blockPoll's** marketability, and makes the system more appealing in the eyes of organizations who do not want to spend money to use  a free open source tool. Additionally, because you are able to control contract managing parameters such the block time etc, the entire solution becomes more scalable. Transaction times are instantaneous and there is no fear of attackers flooding the network. 
  
  However, after taking this into consideration it became apparent that it came with a host of disadvantages as well. Because it is a private chain, voters have no way of knowing that their vote had been captured correctly. Transparency and auditability was a key design decision and a fundamental building block in realising use cases for **blockPoll** before building began. Running **blockPoll** on such a network destroys that transparency and forces voters to trust that their votes were captured correctly. **blockPoll** was designed to provide an alternate mechanism for voting whereby no trust was required. As such, it was decided that **blockPoll** would remain on a public chain until a ZKP could be introduced. However, if used correctly, this  pseudo-anonymity will almost always preserve the identity of each voter and who that voter votes for.
  
  Just like Bitcoin, unless the public address used to vote for a candidate is used to conduct another transaction over the network, the only other way for the true identity of the voter to be revealed is by an attacker connecting multiple nodes and combining the information those nodes contain to find where the transaction originated from. More information on this can be found [here](https://bitcoinmagazine.com/articles/is-bitcoin-anonymous-a-complete-beginner-s-guide-1447875283/). 

* As it stands, there is no registration mechanism whereby voters can add themselves to the system. Currently, a voter must have an ethereum address and must communicate this address with the registrar to be input into the system. To correct this there are a number of simple future additions that can be made: 
   1. A pre-registration link can be sent out to all voters. Here the voters can register to vote and their public keys can be distributed to the registrar.
   2. The registrar can create a number of ethereum addresses for the voters. From here each address can be sent to a voter along with their recovery seed and portion of ether allocated to each account. By recovering the wallet, each voter will be able to vote without needing to communicate back their public keys to the registrar.
That being said however, if the institution or registrar sends each voter their own public key, there is no way in which voters are able to link a public key to a specific voter. In this implementation, the administrator would pre-generate and distribute public-private key pairs to the voters. This distribution could be done by sending the voter a recovery seed via email, ensuring that each voter has a new and unique public key to vote with. Because the voter himself has not generated the address, there is no way to link him with his public key unless he or the registrar shares the key with another voter, or if he conducts a transaction of any type with that key. For best use, we suggest that each vote be conducted in this way.
* In future it would be ideal for a monitoring dashboard to be built around the API that can display and monitor the state of an election. This would add to the user experience and increase its marketability.

## Designers

**blockPoll** is a calaborative project by team **_WhenMoon?_**.

<p align="center">
   <img src="https://i.imgur.com/TG9sgAm.png" height="100">
</p>
