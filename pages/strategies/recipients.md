# Recipients

A recipient is a group or individual who can receive funding from the pool. At
a minimum, the recipient logic in an allocation strategy should consider:

* How recipient eligibility is determined
* What statuses a recipient may need to go through when registering
* How recipients will be identified
* Any additional data that is required for a recipient to be registered and eventually receive funds

The `registerRecipient()` function is inherited from `BaseStrategy.sol` and
needs to be implemented in a custom strategy.

It is important to carefully design how the recipient process will work. Some
key things to think through when designing recipient eligibility are:

* What data is needed to determine recipient eligibility and identify
  the recipient?
* What are the eligibility requirements, and how will it be determined that 
  they are being met or not?
* What does the registration process look like? 

The examples in the next section show a few different ways of designing the
recipient eligibility process. But generally the process is very flexible.
A couple of things you can implement are:

* Application and review: recipients must apply, have their application
    reviewed, and be approved by a pool manager
* Token requirements: your implementation of `registerRecipient()` can check for
    the balance of a particular token (ERC20, ERC721, soul-bound token, etc)
* Automated eligibility checks: programmatically check that a recipient holds
    a token, is listed in a curated registry of projects, holds a [Hypercert](https://hypercerts.org/), has a particular [attestation](https://attest.sh/), etc.

## Examples

### [Donation Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/donation-voting)

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

### [Proportional Payout](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/proportional-payout)

* `registerRecipient` is used only by the pool manager to add or remove
recipients.
* `registerRecipient` requires 3 parameters: an address to act as a 
recipientId, offchaing metadata for the project, and a boolean that denotes 
whether the recipient is being added or removed.

### [Wrapped Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/wrapped-voting-nftmint)

* Recipients are eligible if they create an NFT using the protocol's factory
contract.
* Recipients do not need to apply. They are added to the pool the first time
their NFT is voted for.
* Recipients are represented by the address of the NFT that was voted for.

