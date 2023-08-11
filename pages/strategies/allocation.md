# Allocation

Allocation logic determines how and when allocators can express opinions about
distributing the pool's funds to recipients. Allocators are wallet addresses
that are able to utilize the `allocate` function. Each strategy will need to
determine what makes a wallet eligible to be an allocator. Allocation can be as
complex or simple as needed for a given strategy. 

Some common considerations include:

* Is there a certain time period allocation can occur during?
* Can an allocator allocate multiple times?
* Does allocation require funds to be sent, and if so where are they stored?

The `DonationVotingStrategy.sol` contract marks all addresses as eligible
and they may allocate multiple times. Allocation involves donating pre-approved
tokens to the recipient. Allocation can only occur during a specified allocation
window.

## Examples

| Strategy Contract | Description | Eligibility | Allocation Window | Multiple Allocations | Funds Transferred? |
| --- | --- | --- | --- | --- | --- |
| [Donation Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/donation-voting) | Allocators donate to their chosen recipient | All addresses eligible | Pool manager sets window | Multiple allocations allowed | Yes, must be from token allowlist. Funds stored on strategy contract. |
| [Direct Grants Simple](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/direct-grants-simple) | Pool managers allocate grant money to accepted recipients | Only pool managers are eligible  | No set allocation window | Multiple allocations allowed | Funds are not transferred on allocate |
| [RFP Committee](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/rfp-committee) | Committee members use allocate to vote on a recipient, one recipient wins by majority | Only committee members are eligible | No set allocation window | Only one allocation allowed per member, but they can change their vote | Funds are not transferred on allocate |
| [Bounty Allocation](https://github.com/allo-protocol/allo-v2) | tbd | tbd  | tbd | tbd | tbd |
