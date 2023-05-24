# Interface and Spec

This documentation covers methods and events in the IPayoutStrategy interface. See [Writing a Custom Payout Strategy](writing-a-custom-payout-strategy.md) for more information on implementing a voting strategy.

The Allo IPayoutStrategy interface can be found here: [https://github.com/allo-protocol/contracts/blob/main/contracts/payoutStrategy/IPayoutStrategy.sol](https://github.com/allo-protocol/contracts/blob/main/contracts/payoutStrategy/IPayoutStrategy.sol)

## Functions

### **init**

[`function init() external`](#user-content-fn-1)[^1]

The init function needs to be called by a RoundImplementation.

#### Behaviors&#x20;

| Status  | Response                         | Notes                                                                                              |
| ------- | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| Success |                                  | <p>roundAddress is set to msg.sender<br><br>tokenAddress is set to the token used by the round</p> |
| Error   | "init: roundAddress already set" | Will be returned if this instance of the voting contract has already been initialized              |

### updateDistribution

`function updateDistribution(bytes calldata _encodedDistribution) external virtual;`

Must be overwritten by inheriting contract.

**Parameters**&#x20;

| name                | type     | description                                                                                                                                                                                       |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| encodedDistribution | bytes\[] | encoded distribution information. The encoded data is a MetaPtr. For more information see the definition of MetaPtr on the [Project Registry](../project-registry.md#registering-a-project) page. |

### isDistributionSet

`function isDistributionSet() public virtual view returns (bool);`

Returns a boolean value describing whether the distribution is set or not.

### setReadyForPayout

`function setReadyForPayout() external payable isRoundContract roundHasEnded`

This function is called by the RoundImplementation when the round has ended.

#### Behaviors&#x20;

| Status  | Response                       | Notes                                                   |
| ------- | ------------------------------ | ------------------------------------------------------- |
| Success |                                | <p>readyForPayout set to 'true'<br>Event is emitted</p> |
| Error   | "isReadyForPayout already set" | Returned when readyForPayout is already true            |
| Error   | "distribution not set"         | Returned when the distribution is not yet set.          |

### withdrawFunds

`function withdrawFunds(address payable withdrawAddress) external payable virtual isRoundOperator roundHasEnded`

Only a round operator can call this function. The round must be over before calling.

**Parameters**

| name            | type    | description                        |
| --------------- | ------- | ---------------------------------- |
| withdrawAddress | address | address to send funds to on payout |

#### Behaviors&#x20;

| Status  | Response | Notes                                  |
| ------- | -------- | -------------------------------------- |
| Success |          | Funds are sent to the provided address |

[^1]: 
