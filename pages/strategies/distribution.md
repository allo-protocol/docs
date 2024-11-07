# Distribution

Finally, strategies need to determine how payouts are handled for recipients.
In general, a strategy is resposible for:

* Calculating payout amounts
* Determining when and how often payouts occur
* Ensuring payout eligibility and accuracy
* Managing who can initiate a payout

## Implementing Distribution

Distribution strategies have a lot of flexibility in terms of how funds get
distributed from a pool. Some common ways to distribute funds include:

* Sending the payout as a lump-sum
* Creating a set of milestones for when funds can be requested by recipients
* Using continuous streaming like Sablier or Superfluid

Regardless of how you decide to do distributions, these payouts will be
implemented by calling the `distribute` method in `Allo.sol`.

## Examples
| Strategy Contract | Payout Calculation | Distribution Mechanic | Who Can Make Distributions | Undistributed Funds | 
| --- | --- | --- | --- | --- |
| [Donation Voting](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/examples/donation-voting) | Payouts are proportional to donations, calculated off chain | Payouts are in a lump sum to any recipients marked `ready` | Only a pool manager can distribute funds | Undistributed funds can be reclaimed by the pool manager 30 days after allocation ends |
| [Direct Grants](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/examples/direct-allocation) | Amount set during allocate will be payout amount | Payouts are milestone based  | Only a pool manager can distribute funds | No specific strategy for undistributed funds |
| [RFP](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/examples/rfp) | Payout amount is specified by recipient in their bid | Distribution is milestone based | Only pool admins can distribute funds | No specific strategy for undistributed funds | 


