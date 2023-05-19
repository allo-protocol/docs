---
description: How do I begin creating a Voting Strategy?
---

# Getting Started

{% hint style="info" %}
The voting strategy contract must be deployed prior to the round implementation that will call it.&#x20;
{% endhint %}

### Getting Started with Quadratic Funding

For grant programs who wish to use quadratic funding, steps for deploying the quadratic funding voting strategy are available in the [github documentation](https://github.com/Allo-Protocol/contracts/blob/main/docs/DEPLOY\_STEPS.md#votingstrategy-setup).

### Getting Started with a Custom Strategy

The Allo protocol voting strategy is designed to be highly customizable.  Allo provides a basic interface that all voting contracts must inherit from where the vote function is intentionally left blank. This guide will help you to plan and execute the voting strategy for your program.

#### Planning Your Voting Strategy

Voting strategies can be built to meet any program requirements. Some common considerations and examples of solutions are outlined below.&#x20;

* Voting eligibility&#x20;
  * Who is allowed to vote? Voting can be limited to holders of an NFT or token, specific wallet addresses, or open to anyone.
* Voting frequency
  * How many times can a single address vote? This can be role based, dependent on how many tokens are held, or limited to a single vote.
  * It is also worth considering whether votes can happen in bulk or one at a time
* Weighted voting
  * Do some votes have more value than others? Holders of specific NFTs may have more voting power than others.
  * In quadratic funding, the voting weight is dependent on the total number of contributors to that project, the moree contributors the higher the weight.
* Architecture
  * Will all functionality be contained in the voting strategy contract? Some implementations use the vote function as a pass through to other smart contracts. This can be useful if your platform allows an action, such as minting an NFT, and you want to incorporate that into the vote.
* Rounds
  * Keep in mind that your voting strategy contract should not be called directly. Instead, voting will call the Round contract vote function which will then call the voting strategy contract.
  * Each voting strategy implementation is unique to a round. If your program will have multiple rounds, keep in mind how contracts for future rounds will be deployed.
  * Because the voting strategy contract is initialized by a RoundImplementation, voting strategy should be deployed first.&#x20;
* Security
  * Security is crucial to any smart contract. See the [Security Considerations](security-considerations.md) page for more details.

### Next Steps

Check out these pages

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td><a href="interface-and-spec.md"><strong>Interface and Spec</strong></a><br>to learn more about the IVotingStrategy interface</td><td></td></tr><tr><td></td><td><a href="writing-a-custom-voting-strategy.md"><strong>Writing a Custom Voting Strategy</strong></a></td><td>to start building</td></tr><tr><td></td><td><a href="security-considerations.md"><strong>Security Considerations</strong></a></td><td>to keep planning your contract</td></tr></tbody></table>



