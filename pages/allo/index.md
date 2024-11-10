# Allo

The Allo core contract ([`Allo.sol`](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/core/Allo.sol))
is the command center for pools. This is where pools are created and funded, assigned
an allocation strategy, and more. It is mostly through `Allo.sol`you will interact
with a strategy too.

There is a wealth of sequence diagrams and developer-oriented information in
the bundled [**Allo.md**](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/core/Allo.md).

## Creating a Pool

One of the key responsibilities of the Allo core contract is to create and
manage pools. Allo provides two ways of doing this:

1. The [`createPool`](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/core/Allo.md#create-pool) method
2. The [`createPoolWithCustomStrategy`](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/core/Allo.md#create-a-pool-with-custom-strategy) method

This first method for creating a pool creates a new pool by
cloning an already deployed one. This makes it simple to make use of existing
on-chain strategies. If you're using a custom or newly developed strategy, then you
would deploy it to chain, and use the second method (`createPoolWithCustomStrategy`).

Once created, a pool and a specific strategy deployment are permanently linked. A strategy
cannot be used for a different pool later, but they are easily cloned. It is best to
only create a pool once you are certain the choice of strategy is final.

## Adding and removing funds

The pool will need funds before you can start allocating them. This
can be done:
1. At pool creation by sending tokens or ETH when you call
`createPool`/`createPoolWithCustomStrategy`
2. After the fact by calling [**`fundPool`**](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/core/Allo.md#fund-pool)

Note that once a pool is funded, the only way to distribute those funds is
through the allocation strategy. You cannot change which allocation strategy is
tied to a particular pool.

## Managing a Pool

Allo creates two roles to help manage every pool:

* Pool admin - the address that created a pool
* Pool managers - optional list of addresses

Managers and admin (may) have authority to update a pool's metadata, and have say in
determining fund allocation (i.e. approving or rejecting applications). The specifics
will vary depending on the strategy.
Pool managers can also be added or removed later, but only by the Admin:

* [`addPoolManager`](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/core/Allo.md#add-pool-managers)
and [`removePoolManager`](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/core/Allo.md#remove-pool-managers)

## Fees

Allo protocol supports a fee structure, but it is not widely used today.

* A base fee applies at pool creation and is the cost of creating and running pool on Allo
* The percentage fee is taking from the pool before it is distributed