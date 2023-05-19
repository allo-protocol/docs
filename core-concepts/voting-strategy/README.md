---
description: What role does a Voting Strategy play in Allo?
---

# Voting Strategy

### Voting Strategy Introduction

The Voting Strategy contract is used to determine which projects in a round should receive funding.&#x20;

When a funding Round begins, voting will be opened. Voters will then vote on which projects they want to receive funding. The specifics of who can cast votes, how those votes are counted, and how much a project receives from votes will depend on the specifics of your unique Voting Strategy.&#x20;

Grant programs can choose to use the existing [Quadratic Funding](./#quad-funding-vs) voting strategy, or implement a custom strategy. There are many design considerations to account for when creating a custom Voting Strategy including who can vote and how those votes are counted. These are explored in more detail on the [Getting Started](getting-started.md) page.&#x20;

### Voting Strategy Interface

While voting takes place on the [Round](../round.md) contract, the logic for how a round handles voting is implemented in a Voting Strategy contract that adheres to the [`IVotingStrategy` interface](https://github.com/allo-protocol/contracts/blob/main/contracts/votingStrategy/IVotingStrategy.sol).

The interface contract provides a few methods and modifiers to help you implement a custom Voting Strategy. See the [Interface and Spec](interface-and-spec.md) page for more details.

A Round contract will call the `init()` method of a Voting Strategy when the Round is itself initialized. This will set the value for the `roundAddress` state variable, which serves two purposes: one preventing reinitialization and adding authorization to certain methods that should only be called by the Round contract.

Your implementation of the `IVotingStrategy` interface should implement a `vote(bytes[],address)` method. This is where your custom vote-counting logic should live.

### **Quadratic Funding Voting Strategy** <a href="#quad-funding-vs" id="quad-funding-vs"></a>

Gitcoin uses a [Quadratic Funding Voting Strategy](https://github.com/allo-protocol/contracts/blob/main/contracts/votingStrategy/QuadraticFundingStrategy/QuadraticFundingVotingStrategyImplementation.sol) for all of its [Rounds](../round.md). If you wish to use the same strategy, you must deploy an instance of the Voting Strategy contract using the Factory (see [Contracts](../../getting-started/contracts.md)) before you create a new Round with the Round Factory (see [Contracts](../../getting-started/contracts.md)).
