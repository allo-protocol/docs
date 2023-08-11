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

| Strategy Contract | Eligibility Requirements | Identification Method | Who Can Use `registerRecipient` |Registration Process 
| --- | --- | --- | --- | ---|
| [Donation Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/donation-voting) | Pool manager may required recipients to be registred on Allo | Identified by Allo `anchorId` or wallet address | Prospective recipients use `registerRecipient` to complete an application | Pool managers review eligible applications and manually add them to the pool |
| [Direct Grants Simple](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/direct-grants-simple) | Pool manager may required recipients to be registred on Allo, may require additional information when applying | Identified by Allo `anchorId` or wallet address  | Recipients use `registerRecipient` to be added to the pool | All eligible registrations are automatically added to the pool |
| [RFP Committee](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/rfp-committee) | Pool manager may required recipients to be registred on Allo, may require additional information when applying | Identified by Allo `anchorId` or wallet address | Prospective recipients use `registerRecipient` to register for the pool | All eligible registrations are automatically added to the pool |
| [Bounty Allocation](https://github.com/allo-protocol/allo-v2) | tbd | tbd  | tbd | tbd |
