---
description: What role does a Voting Strategy play in Allo?
---

# Voting Strategy

While voting takes place on the [Round](round.md) contract, the logic for how a round handles voting should be implemented in a Voting Strategy contract that adheres to the [`IVotingStrategy` interface](https://github.com/gitcoinco/grants-round/blob/main/packages/contracts/contracts/votingStrategy/IVotingStrategy.sol).

### Voting Strategy Interface

The [interface contract](https://github.com/gitcoinco/grants-round/blob/main/packages/contracts/contracts/votingStrategy/IVotingStrategy.sol) provides a few methods and modifiers to help you implement a custom Voting Strategy.

A Round contract will call the `init()` method of a Voting Strategy when the Round is itself initialized. This will set the value for the `roundAddress` state variable, which serves two purposes: one preventing reinitialization and adding authorization to certain methods that should only be called by the Round contract.

Your implementation of the `IVotingStrategy` interface should implement a `vote(bytes[],address)` method method. This is where your custom vote-counting logic should live.

### **Quadratic Funding Voting Strategy**

Gitcoin uses a [Quadratic Funding Voting Strategy](https://github.com/gitcoinco/grants-round/blob/main/packages/contracts/contracts/votingStrategy/QuadraticFundingStrategy/QuadraticFundingVotingStrategyImplementation.sol) for all of its [Rounds](round.md). If you wish to use the same strategy, you must deploy an instance of the Voting Strategy contract using the Factory (see [Contracts](../getting-started/contracts.md)) before you create a new Round with the Round Factory (see [Contracts](../getting-started/contracts.md)).
