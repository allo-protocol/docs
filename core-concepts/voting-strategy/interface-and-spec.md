---
description: What functions are available from the IVotingStrategy interface?
---

# Interface and Spec

This documentation covers methods and events in the IVotingStrategy interface. See [Writing a Custom Voting Strategy](writing-a-custom-voting-strategy.md) for more information on implementing a voting strategy.

The Allo `IVotingStrategy` interface can be found here: [https://github.com/allo-protocol/contracts/blob/main/contracts/votingStrategy/IVotingStrategy.sol](https://github.com/allo-protocol/contracts/blob/main/contracts/votingStrategy/IVotingStrategy.sol)&#x20;

### Functions

#### **init**

[`function init() external`](#user-content-fn-1)[^1]

The init function needs to be called by a `RoundImplementation` before voting can begin.

#### Behaviors&#x20;

| Status  | Response                         | Notes                                                                                 |
| ------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| Success |                                  | `roundAddress` is set to `msg.sender`                                                 |
| Error   | "init: roundAddress already set" | Will be returned if this instance of the voting contract has already been initialized |

#### **vote**

`function vote(bytes[] calldata _encodedVotes, address _voterAddress) external virtual payable`

The vote function should be called by the roundAddress that was stored when contract was initialized. \
The vote function body is blank in the interface.&#x20;

#### Parameters&#x20;

| name         | type     | description                                                                                |
| ------------ | -------- | ------------------------------------------------------------------------------------------ |
| encodedVotes | bytes\[] | encoded vote information. Specific information required will depend on the implementation. |
| voterAddress | address  | address of the voter                                                                       |



[^1]: 
