# Distribution

Finally, strategies need to determine how payouts are handled for recipients.

Distribution strategies have a lot of flexibility in terms of how funds get
distributed from a pool. Some commmon ways to distribute funds include:

* Sending the payout as a lump-sum
* Creating a set of milestones for when funds can be requested by recipients
* Turning on a stream with Sablier or Superfluid

Your strategy has a lot of flexibility, but should generally include the
following:

* Calculate payout amounts
* Determine when and how often payouts occur
* Ensure payout eligibility and accuracy
* Manage who can initiate a payout

Regardless of how you decide to do distributions, these payouts will be
implemented by calling the `distribute()` function in `Allo.sol`.

## A Note on Payouts

One of the things that Allo allows for is experimenting with different
mechanisms for distributing pools of capital. This falls under the general
category of Mechanism Design and Quadratic Funding, popularised by Gitcoin
Grants, is one example.

Your allocation strategy is responsible for calculating how much a recipient
should receive (or how much they are allocated). This can sometimes be
non-linear, as in the case of Quadratic Funding: the more donations you receive,
the more of the pool you're entitled to.

## Examples
| Strategy Contract | Payout Calculation | Distribution Mechanic | Who Can Make Distributions | Undistributed Funds | 
| --- | --- | --- | --- | --- |
| [Donation Voting](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/donation-voting) | Payouts are proportional to donations, calculated off chain | Payouts are in a lump sum to any recipients marked `ready` | Only a pool manager can distribute funds | Undistributed funds can be reclaimed by the pool manager 30 days after allocation ends |
| [Direct Grants Simple](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/direct-grants-simple) | Amount set during allocate will be payout amount | Payouts are milestone based  | Only a pool manager can distribute funds | No specific strategy for undistributed funds |
| [RFP Committee](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies/rfp-committee) | Payout amount is specified by recipient in their bid | Distribution is milestone based | Only pool admins can distribute funds | No specific strategy for undistributed funds | 
| [Bounty Allocation](https://github.com/allo-protocol/allo-v2) | tbd | tbd  | tbd | tbd |

