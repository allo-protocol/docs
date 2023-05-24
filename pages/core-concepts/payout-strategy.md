---
description: What role does a Payout Strategy play in Allo?
---

# Payout Strategy

### Payout Strategy Introduction

Paying out the grant pool after voting is completed is handled by the Payout Strategy contract.

When a Round closes, the funds need to be distributed to each project depending on how many votes they recweived. The exact amount each group receives and how they receive those funds is determined in the Payout Strategy contract.

Grant programs can choose to use the existing [Merkle Payout](./#merkle-payout-strategy) strategy, or implement a custom strategy. Both options are explored in more detail on the [Getting Started](../voting-strategy/getting-started.md) page.&#x20;

### Payout Strategy Interface

The [interface contract](interface-and-spec.md) provides a set of methods that will need to be defined in any Payout Strategy to handle setting and updating the distribution and actually distributing funds when the round ends.

When a Round is initialized, it will call the `init()` method on the Payout Strategy contract that is set at contract creation for the Round.&#x20;

Rounds have a flag, `isReadyForPayout`, that determines when funds can be paid out. This will be set to false when the Payout Strategy is initalized and can only be set to true when the round has ended. It can be updated once by the `setReadyForPayout` method. This flag should be used in the `payout()` method to actually distribute funds to grantees.

The majority of the functionality for the Payout Strategy comes from the following two methods:

1. `updateDistribution(bytes calldata _encodedDistribution)`
2. `payout(bytes[] calldata _encodedPayoutData)`

Both of these must be implemented and overwritten by the inheriting contract.

The `updateDistribution(bytes calldata _encodedDistribution)` is what sets the distribution of the matching pool. For quadratic funding rounds, this is calculated offline and then set by a round operator before paying out the round.

The `payout(bytes[] calldata _encodedPayoutData)` is what distributes the funds according to the payout distribution. This method should only be callable when `isReadyForPayout` is set to true.&#x20;

### **Merkle Payout Strategy**

Gitcoin uses a [Merkle Payout Strategy](https://github.com/allo-protocol/contracts/blob/main/contracts/payoutStrategy/MerklePayoutStrategy/MerklePayoutStrategyImplementation.sol) for all of its [Rounds](../round.md). If you with to use the same strategy, you must deploy an instance of the Payout Strategy Contract using the Factory (see [Contracts](../../getting-started/contracts.md)) before you create a new Round with the Round Factory (see [Contracts](../../getting-started/contracts.md)).
