# Building on Allo

## Introduction

This page walks through the core methods in `Allo.sol` and how to interact with
them. If you're building an application or product on top of Allo protocol, most
of the interactions your application has with Allo will be through this
contract. Ideally, `Allo.sol` is the *only* contract you have to interact with,
but that will depend on your allocation strategy and there are cases where
additional helper methods and functionality may be necessary for a particular
allocation strategy to function.

In addition to this document, you should review the
[Contracts](/overview/contracts) page and the [Indexers](/overview/indexers)
page. Combined, the three documents should give you a good idea of the code
you'll need to write to integrate your application with Allo. If you are also
interacting with the Registry, then also review [Integrating with the Project
Registery](/project-registry/integrating-with-the-project-registry).

## How to use this page

This document serves as a companion to the [Flow of Funds](/allo/flow-of-funds)
page, which walks through the life cycle of a pool in Allo. Whereas that page
gives a high level overview, this one provides more in-depth technical
information and is aimed at developers building on the protocol.

Our aim is that Allo is a general purpose protocol for allocating resources
onchain. That means that Allo implements a set of general-purpose methods that
are quite abstract. How you end up using them in your application will depend
a lot on what you're building. This page should help you understand the Allo
core contract (`Allo.sol`) enough to build your own application on top of it. To
aid in that understanding, this page seeks to do two things:

1. Generally describe each of the core methods and how to use them
2. Specifically walk through how each method would get used in an example
   application

## Creating a Pool

There are two methods for creating a pool on Allo, `createPool` and
`createPoolWithCustomStrategy`, which have the following signatures:

```solidity
function createPool(
    bytes32 _profileId,
    address _strategy,
    bytes memory _initStrategyData,
    address _token,
    uint256 _amount,
    Metadata memory _metadata,
    address[] memory _managers
) external payable returns (uint256 poolId)
```

```solidity
function createPoolWithCustomStrategy(
    bytes32 _profileId,
    address _strategy,
    bytes memory _initStrategyData,
    address _token,
    uint256 _amount,
    Metadata memory _metadata,
    address[] memory _managers
) external payable returns (uint256 poolId)
```

The difference between these two methods is that `createPool` assumes the
allocation strategy you're using is one of the strategies built and maintained
by the Allo protocol team, whereas `createPoolWithCustomStrategy` assumes you're
providing your own, custom strategy. If you review how they're implemented,
you'll see that `createPool` clones one of the deployed strategies, maintained
by the Allo protocol team. This both saves gas and makes integrating easier for
applications that are deploying the same strategy over and over again for
different pools, like Grants Stack does.

You can see the list of deployed strategies on the
[Contracts](/overview/contracts) page.

A couple of other technical notes about creating a pool:

1. Both methods assume that `msg.sender` is a member of or the owner of the
   `_profileId` provided. The `_profileId` is a unique ID provided by the
   [Registry](/project-registry). This means that a pool has to be created by
   someone who is a part of a project profile.
2. Pools can be created with a starting balance of 0, and then funded later with
   `fundPool` (described below). If you're building an application on Allo, this
   is something you should account for as it is common in resource allocation to
   not have all your funds together at the time you start soliciting recipients
   and grantees.

<details>
  <summary>How you might use this method:</summary>

  **Direct Grants Application**

  Let's say you're building an application that would allow a grants committee to
  distribute pools of funding from their community's treasury. In this example,
  you'd need to write a custom strategy and deploy it for each grants committee
  created in your application. When the committee "signs up" for your application,
  they'd create a profile in the [Registry](/project-registry) for their grants
  committee. You'd then implement a process for them to create a pool using
  `createPoolWithCustomStrategy`. Their community's governance system would fund
  the pool by passing a proposal that cases `fundPool`.
</details>

## Funding a Pool

A pool can be funded at the same time that it is created and/or it can be funded
later. If funding a pool separately, either because you're adding funds for the
first time or adding additional funds to the pool, you'll call the `fundPool`
method on `Allo.sol`, which has the following function signature:

```solidity
function fundPool(uint256 _poolId, uint256 _amount) external payable
```
| Parameter | Meaning |
| --- | --- |
| `_poolId`  | The ID of the pool, returned by either `createPool` or `createPoolWithCustomStrategy` |
| `_amount` | The amount that the caller would like to add to the pool balance |

A couple of other technical notes about funding a pool:

1. While only a member or owner of a profile can create a pool associated with
   that profile, anyone can fund the pool once it's created
2. Some pools will be created and funded in a single transaction, created and
   then funded later, or both (created and initially funded, then funded more
   later)

## Registering a Recipient

After a pool is created, but before allocation can begin, the allocation
strategy needs a list of recipients.

In Allo terms, recipients are people who receive funding from a pool. The
nearest approximate term will depend on the use case you're building against:
For Grants Stack, a product suite for running a Quadratic Funding grants
program, the recipient is a grantee. For someone building an application for
creating and distributing bounties, the recipients might be bounty hunters or
hackers. Recipient is meant as a general term for anyone receiving funding from
a pool.

Recipients need to be added to an allocation strategy, which is then responsible
for determining their eligibility. `Allo.sol` is not concerned with eligibility.

There are two methods for adding recipients, `registerRecipient` and
`batchRegisterRecipient`, which have the following function signatures:

```solidity
function registerRecipient(uint256 _poolId, bytes memory _data) external payable returns (address)
```
```solidity
function batchRegisterRecipient(
   uint256[] memory _poolIds,
   bytes[] memory _data
) external returns (address[] memory)
```

**Registering with a Pool's Allocation Strategy**

Both methods above accept pool IDs to determine where to register the recipient.
Both methods retrieve the pool associated with the given `poolId`, then call
`registerRecipient` on the pool's allocation strategy, passing in the data
provided (`_data`) and the caller (`msg.sender`). The allocation strategy is
then in charge of how to handle these parameters.

**What Data to Provide**

Both methods accept arbitrary data, which is then sent to the corresponding
allocation strategy. What data is encoded in these bytes strings is determined
by the allocation strategy and any mismatches between the data provided by the
caller and the data expected by the allocation strategy contract should cause
the transaction to revert.

## Allocating

Allo uses the concept of "allocating" as a generalized term for deciding who
should get funding from the pool. You can use the two allocate methods in
`Allo.sol` in a variety of ways, depending on what you're building, including
but not limited to:

1. Voting with a token for who should receive funding
2. Donating to a recipient (for example, in Quadratic Funding)
3. Approving a grant with a fixed-amount to be distributed
4. Rewarding a bounty to a bounty hunter

As you can tell from these examples, the allocate method is quite abstract,
pushing the meaning of allocating to your front end and particular allocation
strategy. This means your front end could:

1. Have a "donate" button that calls `allocate()`
2. Have a "vote" button that calls `allocate()`
3. Have a "grant" or "award" button that calls `allocate()`

Check out the [Strategy Library](/strategies/library) for some of the ways the
allocate method is used.

Regardless of what allocating means in the context of your application, you'll
do this by calling one of the two allocate methods, `allocate` and
`batchAllocate`, which have the following function signatures:

```solidity
function allocate(uint256 _poolId, bytes memory _data) external payable
```
```solidity
function batchAllocate(uint256[] calldata _poolIds, bytes[] memory _datas) external
```

## Distributing

Once you've allocated tokens, you can distribute them using them to their
recipients. Here, again, the functionality is part of the strategy, which is
responsible for:

* How much has been distributed
* Which recipients have been allocated to but not distributed to
* How much is left to distribute

There is only one `distribute()` method, which has the following signature:

```solidity
function distribute(uint256 _poolId, address[] memory _recipientIds, bytes memory _data) external
```

| Parameter | Definition |
| ---  | ---  |
| `_poolId`  | The ID of the pool from which you'd like to distribute  |
| `_recipientIds`  | List of recipient IDs to which you'd like to distribute tokens  |
| `_data`  | Bytes encoded data to accompany the distribution, the structure of which is determiend by the allocation strategy |

One technical thing to note:

The Allo core contract (`Allo.sol`) does not track the amount distributed from
a pool and so doesn't account for things like double-spending or over-spending.
Your allocation strategy is responsible for these things.
