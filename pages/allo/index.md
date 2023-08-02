# Allo

The Allo core contract (`Allo.sol`) plays a couple of key roles. This is where
you create and fund pools, assign them an allocation strategy, and manage them.
`Allo.sol` is primarily how you'll interact with an allocation strategy too.

If you're building a front end application on top of the protocol, you should
only have to integrate with the core contract.

## Creating a Pool

One of the key responsibilities of the Allo core contract is to create and
manage pools of tokens that can be allocated using a strategy. Allo provides two
ways of doing this:

1. The `createPool` method
2. The `createPoolWithCustomStrategy` method

The first method for creating a pool (`createPool`) creates a new pool by
cloning a strategy provided as part of Allo. This saves gas and makes it easier
to deploy a pool from the front end. If you're using your own strategy, then
you'll use the second method (`createPoolWithCustomStrategy`).

<!-- Further reading:

* [Working with Pools](/allo/working-with-pools)
* [Building on Allo](/allo/building-on-allo) -->

## Adding and removing funds

At some point, you need to fund the pool before you can start allocating it. You
can do this at pool creation, by sending tokens or Eth when you call
`createPool` or `createPoolWithCustomStrategy`. Or you can do this after the
fact by calling the `fundPool` method on Allo.

If you're building an application on Allo or writing an allocation strategy,
this is a useful thing to consider. Depending on what you're building and what
you want to solve for, it might not be the case that the funds someone want to
allocate are secured when they create the pool - they could need to fundraise
for a while first. That's why we've separated creating and funding a pool. Your
allocation strategy and/or front end application should take this into account
too.

Also note that once a pool is funded, the only way to distribute those funds is
through the allocation strategy. You cannot change which allocation strategy is
tied to a particular pool.

<!-- Further reading:

* [Working with Pools](/allo/working-with-pools)
* [Building on Allo](/allo/building-on-allo) -->

## Managing a Pool

Allo creates two roles for every pool:

1. The pool admin
2. The pool managers

The admin will be the value of `msg.sender` when `createPool` or
`createPoolWithCustomStrategy` is called (i.e. the address creating the pool is
the admin).

When a pool is created, you can pass a list of addresses that will be given the
manager role. There are also two methods for managing the pool managers:

1. `addPoolManager`, for adding an address as a pool manager
2. `removePoolManager`, for removing an address as a pool manager

Only the pool admin can call `addPoolManager` or `removePoolManager`.

The reason for this role system is two fold:

1. To determine which addresses can update data about the pool
2. Optionally, for use in an allocation strategy when determining which addresses can allocate from a pool

<!-- Further reading:

* [Pool Roles](/allo/pool-roles) -->

## Fees

Allo protocol has two methods for taking fees on pools: a percentage fee and
a base fee. The base fee applies at pool creation and is the cost of creating
and running pool on Allo. The percentage fee is taking from the pool before it
is distributed. Only the percentage fee is implemented, at the time of writing.

At the time of writing, the protocol fee is set to 2.5% of matching funds. If
you're using an allocation strategy like
[`DonationVotingStrategy`](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/donation-voting),
the fee is not taken from donations. The fee only applies to the pool managed by
Allo and not funds that pass through `allocate()`.

The fee is determined through [Gitcoin's
governance](https://gov.gitcoin.co/t/gitcoin-dao-governance-process-v3/10358)
process and uses GTC as the voting token.

<!-- Further reading:

* [Fees](/allo/fees) -->
