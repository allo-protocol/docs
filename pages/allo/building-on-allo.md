# Building on Allo

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
Register](/project-registry/integrating-with-the-project-registry).

Finally, this document also serves as a companion to the [Flow of
Funds](/allo/flow-of-funds) page, which walks through the life cycle of a pool
in Allo. Whereas that page gives a high level overview, this one provides more
in-depth technical information and is aimed at developers building on the
protocol.

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

One couple of other technical notes about creating a pool:

While only a member or owner of a profile can create a pool associated with that
profile, anyone can fund the pool once it's created.

## Registering a Recipient

After a pool is created, but before allocation can begin, the allocation
strategy needs a list of recipients.

In Allo terms, recipients are people who receive funding from a pool on Allo.
The nearest approximate term will depend on the use case you're building
against: For Grants Stack, a product suite for running a Quadratic Funding
grants program, the recipient is a grantee. For someone building an application
for creating an distributing bounties, the recipients might be bounty hunters or
hackers. Recipient is meant as a general term for anyone receiving funding from
a pool.

Recipients need to be added to an allocation strategy, which is then responsible
for determining their eligibility. `Allo.sol` is not concerned with eligibility.

There are two methods for adding recipients, `registerRecipient` and
`batchRegisterRecipient`, which have the following function signatures:

```solidity
function registerRecipient(uint256 _poolId, bytes memory _data) external payable returns (address)

function batchRegisterRecipient(uint256[] memory _poolIds, bytes[] memory _data) external returns (address[] memory)
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
  - allocate / batchAllocate

## Distributing
  - distribute
