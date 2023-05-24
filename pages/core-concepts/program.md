---
description: What role does a Program play in Allo?
---

# Program

A program is how an organization, like a DAO, would manage and connect all the [rounds](round.md) they might run. As an example, [Gitcoin](https://gitcoin.co/) would create a program to connect the quarterly rounds that they run.

On-chain, a program is a set of metadata stored on IPFS about an organization and a list of addresses that are able to update that metadata (what the protocol calls a Program Operator).

<figure><img src="../.gitbook/assets/Program.png" alt=""><figcaption></figcaption></figure>

### Creating a New Program

Every new program should be created through the [Factory contract](https://etherscan.io/address/0xe0281a20dFaCb0E179E6581c33542bC533DdC4AB#code) (see [Contracts](../getting-started/contracts.md)). When a new program is created, events are emitted by the Factory, which are then indexed so the data on a new is accessible. Deploying a program outside of the Factory will cost more gas and mean the new program isn't indexed and part of the data available through the protocol's [subgraphs](../getting-started/subgraph.md).

### Program Metadata

The metadata is made up of a protocol id (i.e. `1` for IPFS) and a pointer to data off-chain (i.e. [bafkreigda2vbuqipts6ttwmveqjmpjo35xyoqvxqrzh3pneb4zvcxqzta4](https://cloudflare-ipfs.com/ipfs/bafkreigda2vbuqipts6ttwmveqjmpjo35xyoqvxqrzh3pneb4zvcxqzta4)). This metadata can be updated by any of the program operators using the `updateMetaPtr(MetaPtr)` method of the `ProgramImplementation` contract.

### Program Operator

An initial list of program operators should be provided to the factory when a new program is created. The role system is based on OpenZeppelin's `AccessControlEnumerable` and so exposes methods like `grantRole(bytes32,address)` for adding new Program Operators.

### Programs and Rounds

New rounds are created through the separate, Round Factory contract (see [Contracts](../getting-started/contracts.md)), which expects the address of the program that will "own" the round. Round ownership signifies that the rounds are connected to the program in the data that gets indexed by the protocols subgraphs. The program contract is not granted a role on the round contract.
