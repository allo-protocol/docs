# Getting Started

### Getting Started with Quadratic Funding

For grant programs who wish to use quadratic funding, steps for deploying the quadratic funding voting strategy are available in the [github documentation](https://github.com/Allo-Protocol/contracts/blob/main/docs/DEPLOY\_STEPS.md#payoutstrategy-setup).

### Getting Started with a Custom Strategy

The payout strategy in the Allo protocol can be updated to meet any program needs. Allo provides many helper methods in the payout strategy interface, but custom solutions should write their own updateDistribution and payout functions.

The payout strategy contract should ideally be deployed prior to the round implementation that will call it.&#x20;

#### Planning Your Payout Strategy

Some common payout strategy considerations and examples of solutions are outlined below.&#x20;

* Batch or Single Payout
  * Will data for one or multiple payouts need to be sent to the payout function?
* Calculating payout
  * Will this take place in a helper function, in a separate contract, or some other solution?
* Architecture
  * Will all functionality be contained in the payout strategy contract? Some implementations use the payout function as a pass through to other smart contracts.&#x20;
* Rounds
  * Each payout strategy implementation is unique to a round. If your program will have multiple rounds, keep in mind how contracts for future rounds will be deployed.
  * Because the payout strategy contract is initialized by a RoundImplementation, payout strategy should be deployed first.&#x20;
* Security
  * Security is crucial to any smart contract, but especially to the payout strategy as tokens will be distributed. See the [Security Considerations](../voting-strategy/security-considerations.md) page for more details.

### Next Steps

Check out these pages

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td><a href="interface-and-spec.md"><strong>Interface and Spec</strong></a><br>to learn more about the IPayoutStrategy interface</td><td></td></tr><tr><td></td><td><a href="writing-a-custom-payout-strategy.md"><strong>Writing a Custom Payout Strategy</strong></a></td><td>to start building</td></tr><tr><td></td><td><a href="security-considerations.md"><strong>Security Considerations</strong></a></td><td>to keep planning your contract</td></tr></tbody></table>


