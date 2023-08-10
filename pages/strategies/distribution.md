# Distribution

Finally, strategies need to determine how payouts are handled for recipients.

Allocation strategies have a lot of flexibility in terms of how funds get
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

The `DonationVotingStrategy.sol` contract allows anyone to distribute funds,
as long as a pool manager has determined the funds are ready for payout. It also
includes the capability to reclaim undistributed funds 30 days after allocation
has ended. 

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

