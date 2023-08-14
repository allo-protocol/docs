---
description: What do I need to know about strategies?
---

# Introduction 

Allo uses a single strategy contract to handle all logic around recipient
eligibility, allocation, and token distribution. Every pool needs a pre-deployed
strategy before it can be created. Developers can choose to create a custom
strategy or use an existing one. You can read more on the [Cloneable
Strategies](http://localhost:3000/allo/cloneable-strategies) page.

If you're writing a custom strategy, we provide
a [`BaseStrategy.sol`](https://github.com/allo-protocol/allo-v2/blob/main/contracts/strategies/BaseStrategy.sol)
that all strategies should inherit from. For more information, see the [Writing
a Custom Strategy](/strategies/writing-a-custom-strategy) page. Strategies must
be deployed prior to creating a new pool.

## Allocation Strategies

Allocation strategies are responsible for three things:

1. [Recipient Eligibility](/strategies/recipients): Who is eligible to receive
   funding from a pool? How is that eligibility determined?
2. [Allocation](/strategies/allocation): How does your strategy allocate from
   the pool? You can have token-holders vote, pool managers give approval, or
   something else entirely.
3. [Distribution](/strategies/distribution): Once funds have been allocated,
   how are they distributed? In a lump-sum, in milestone-based payments, as
   a stream, or something else?

Allo provides a standard set of functions for implementing these, but what they
mean and how you'll use them depend a lot on what you're building. Explore each
of these core concepts for more details, including examples of how they can be
used to meet different requirements.

## Strategy Library

The [Strategy
Library](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies)
includes a variety of strategy contracts. These contracts can be used as is or
as a starting point for a custom strategy.

Please note that these strategies are presented as-is and many of them have not been
audited.
