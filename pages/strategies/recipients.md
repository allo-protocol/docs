# Recipients
Recipients are people or groups who can receive funding in a pool. Recipients 
will need to register with the pool using the `Allo.sol` `registerRecipient()`
function which will pass the data to the pool strategy to determine 
eligibility. 

## Recipient Registration
The details of who is eligible to be a recipient and how they are registered
will be determined in the pool strategy, and therefore are highly customizable.
Each strategy must contain a `registerRecipient` function for `Allo.sol` to 
call, but additional functions can be created depending on the strategy needs.

It is important to carefully design how the recipient process will work.
Some key things to think through when designing recipient eligibility are:

* What data is needed to determine recipient eligibility and identify
the recipient?

* What are the eligibility requirements, and how will it be determined that 
they are being met or not?

* What does the registration process look like? 

The examples in the next section show a few different ways of designing the 
recipient eligibility process. 

### Recipient Examples
#### [Donation Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/donation-voting)
* Recipients must provide an address where they can receive funds. 
* If a recipient is registered on the Allo registry, they may choose to use 
their `anchorId` as their recipientId.
* The pool manager can choose to require recipients to be registered on Allo or
to have the recipients complete a questionnaire when they register. 
* `registerRecipient` is used by prospective recipients to submit an
application during the application window.
* If the application meets the eligibility requirements, it will be given a 
pending status. Otherwise, the application is reverted.
* The pool manager will manually accept pending applications into the round.
* Recipients can only register once

#### [Proportional Payout](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/proportional-payout)
* `registerRecipient` is used only by the pool manager to add or remove
recipients.
* `registerRecipient` requires 3 parameters: an address to act as a 
recipientId, offchaing metadata for the project, and a boolean that denotes 
whether the recipient is being added or removed.

#### [Wrapped Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/wrapped-voting-nftmint)
* Recipients are eligible if they create an NFT using the protocol's factory
contract.
* Recipients do not need to apply. They are added to the pool the first time
their NFT is voted for.
* Recipients are represented by the address of the NFT that was voted for.

