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
