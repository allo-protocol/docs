---
description: What functions are available from the IStrategy interface?
---

# Interface and Spec

This documentation covers methods and events in the
[`IBaseStrategy.sol`](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/strategies/IBaseStrategy.sol)
interface. See [Writing a Custom
Strategy](writing-a-custom-strategy.md) for more information on
implementing your own strategies, including how to use the provided
[`BaseStrategy.sol`](https://github.com/allo-protocol/allo-v2.1/blob/dev/contracts/strategies/BaseStrategy.sol)

## Functions

### **initialize**

[`function initialize(uint256 _poolId, bytes memory _data) external`](#user-content-fn-1)

Used when `createPool` is called to set up the strategy.
This function should emit an `Initialized` and a `PoolActive` event.

#### Parameters
| name | type | description |
| --- | --- | --- |
| _poolId | uint256 | poolId assigned by Allo when the pool is created |
| _data | bytes | Any initial data required by the strategy. `BaseStrategy.sol` does not require any data. |

### **registerRecipient**

[`function registerRecipient(bytes memory _data, address _sender) external payable returns (address)`](#user-content-fn-1)

`registerRecipient` is called by `Allo.sol` to add new recipients to the pool.
This function must return a `recipientId` address.
This function should emit a `Registered` event.

#### Parameters
| name | type | description |
| --- | --- | --- |
| _data | bytes | Any data required by the strategy to register the recipient. |
| _sender | address  | Address that made the call to `Allo.sol`. |

### **allocate**

[`function allocate(bytes memory _data, address _sender) external payable`](#user-content-fn-1)

`allocate` is called by `Allo.sol` to make allocations to a recipient.
This function should emit an `Allocated` event.

#### Parameters
| name | type | description |
| --- | --- | --- |
| _data | bytes | Any data required by the strategy to allocate to a recipient. |
| _sender | address  | Address that made the call to `Allo.sol`. |

### **distribute**

[`function distribute(address[] memory _recipientIds, bytes memory _data, address _sender) external`](#user-content-fn-1)

`distribute` is used to distribute tokens to recipients.
This function should emit a `Distributed` event.

#### Parameters
| name | type | description |
| --- | --- | --- |
| _recipientIds | address[] | Array of recipient addresses to distribute tokens to. |
| _data | bytes  | Any data required by the strategy to distribute tokens. |
| _sender | address  | Address that made the call to `Allo.sol`. |

## Views
`IStrategy.sol` exposes the following views:
| name | description |
| --- | --- |
| getAllo() | Returns the address of the Allo contract. |
| getPoolId() | Returns the PoolId for this strategy. |
| getStrategyId() | Returns the id of the strategy. |
| isValidAllocator(address _allocator) | Returns a boolean indicating whether provided address is a valid allocator. |
| isPoolActive() | Returns a boolean indicating whether pool is active. |
| getPoolAmount() | Returns the amount of funding in the pool. |
| getRecipientStatus() | Returns a the status of a recipient. |
| getPayouts(address[] memory _recipientIds, bytes[] memory _data) | Returns a PayoutSummary[] for the provided recipientIds. |

