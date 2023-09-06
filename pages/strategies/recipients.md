# Recipients

A recipient is a group or individual who is eligible to receive allocations
from a pool. The specifics of recipient management are determined by the 
strategy contract, and therefore completely customizable. 

For example, your recipient strategy might include:

* Application and review: recipients must apply, have their application
    reviewed, and be approved by a pool manager
* Token requirements: your implementation of `registerRecipient()` can check for
    the balance of a particular token (ERC20, ERC721, soul-bound token, etc)
* Automated eligibility checks: programmatically check that a recipient holds
    a token, is listed in a curated registry of projects, holds a [Hypercert](https://hypercerts.org/), has a particular [attestation](https://attest.sh/), etc.

## Implementing Recipients

The `Allo.sol` function for handling recipients is `registerRecipient()`, which must be
implemented in your strategy. You may also add any helper methods your strategy needs.

It is important to carefully design how the recipient process will work. Some
key things to think through when designing recipient eligibility are:

* What data is needed to determine recipient eligibility and identify
  the recipient?
* What are the eligibility requirements, and how will it be determined that 
  they are being met or not?
* What does the registration process look like? Are statuses a recipient would go through?

The examples in the next section show a few ways the recipient eligibility 
process has been implemented to date, but generally the process is very flexible.

## Examples

| Strategy Contract | Eligibility Requirements | Identification Method | Who Can Use `registerRecipient` | Registration Process 
| --- | --- | --- | --- | ---|
| [Donation Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/donation-voting) | Pool manager may require recipients to be registred on Allo | Identified by Allo `anchorId` or wallet address | Prospective recipients use `registerRecipient` to complete an application | Pool managers review eligible applications and manually add them to the pool |
| [Direct Grants Simple](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/direct-grants-simple) | Pool manager may required recipients to be registred on Allo, may require additional information when applying | Identified by Allo `anchorId` or wallet address  | Recipients use `registerRecipient` to be added to the pool | All eligible registrations are automatically added to the pool |
| [RFP Committee](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/rfp-committee) | Pool manager may required recipients to be registred on Allo, may require additional information when applying | Identified by Allo `anchorId` or wallet address | Prospective recipients use `registerRecipient` to register for the pool | All eligible registrations are automatically added to the pool |
