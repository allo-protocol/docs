---
description: What do I need to know about strategies?
---

The command center [`Allo.sol`](/allo) calls to strategy contracts to determine logic around recipient
eligibility, allocation, and token distribution. Every pool is created with a strategy, which it is
tied to. You may choose to create a custom strategy, or clone an existing one.

All strategies, including custom ones, inherit a 
[`BaseStrategy.sol`](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies)
that defines the common interface. This interface is how the strategy is able to be
used even when calling from `Allo.sol`.

There is a wealth of developer-oriented information in the bundled Strategy
[ReadMe.md](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/strategies/README.md).

## Strategies

Strategies are responsible for three general concepts:

1. [Recipient Eligibility](/strategies/recipients): Who is eligible to receive
   funding from a pool? How is that eligibility determined?
2. [Allocation](/strategies/allocation): How does your strategy allocate from
   the pool? You can have token-holders vote, pool managers give approval, or
   something else entirely.
3. [Distribution](/strategies/distribution): Once funds have been allocated,
   how are they distributed? In a lump-sum, in milestone-based payments, as
   a stream, or something else?

Allo provides a standard pattern for implementing these, but what they do is entirely
up to you. You're encouraged to look over [existing examples](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/examples),
 [allo.expert](https://allo.expert/), and beyond for inspiration.

## Strategy Library

The [Strategy Library](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies)
includes a variety of useful components. 
* [Example contracts](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/examples),
 to be used out of the box or as reference
* [Extensions](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/extensions)/
[Libraries](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/libraries)
to provide readily reusable components, taking grunt work out of custom development
* [BaseStrategy.sol](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/strategies/BaseStrategy.sol)
 to provide a common pattern for calling of strategy methods

Please note that these strategies are presented as-is, and some components
may not be audited.