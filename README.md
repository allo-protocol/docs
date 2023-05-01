---
description: What is the Allo Protocol?
---

# Introduction

Allo Protocol is a set of smart contracts that enable the democratic allocation and distribution of funds through the power of [Quadratic Funding](https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=3243656). It is the former smart contract back-end for cGrants, Gitcoin's public goods funding product ([more background here](https://gov.gitcoin.co/t/introducing-gitcoin-grants-stack-allo-protocol-product-overviews-part-1-of-2/12664#the-story-of-allo-protocol-rebuilding-cgrants-from-the-ground-up-1)).

This new iteration is more flexible and more modular. It powers Gitcoin's three products, [Builder](https://github.com/gitcoinco/grants-round/tree/main/packages/builder), [Explorer](https://github.com/gitcoinco/grants-round/tree/main/packages/grant-explorer), and [Manager](https://github.com/gitcoinco/grants-round/tree/main/packages/round-manager). More importantly, it empowers anyone to build on top of a thriving ecosystem of grants and lets communities everywhere fund their shared needs.

You can learn more about the background of Allo in [Gitcoin's announcement post](https://go.gitcoin.co/blog/announcing-the-decentralized-future-of-gitcoin-grants) or by reading [this summary brief from the governance forum](https://gov.gitcoin.co/t/introducing-gitcoin-grants-stack-allo-protocol-product-overviews-part-1-of-2/12664/1).

### Allo Protocol v Grants Stack

In addition to Allo Protocol, Gitcoin offers a suite of products called the [Grants Stack](https://www.gitcoin.co/grants-stack).

Allo Protocol is for people building applications with novel capital allocation mechanisms, like quadratic funding. The protocol contains a registry of grant recipients ([Project Registry](core-concepts/project-registry.md)) as well as ways to define custom decision making processes for capital allocation ([Voting Strategy](core-concepts/voting-strategy.md)) and ways to pay out those decisions ([Payout Strategy](core-concepts/payout-strategy-coming-soon.md)). Anyone building custom tools for communities to allocate capital or for projects to receive capital should use Allo.

The [Grants Stack](https://www.gitcoin.co/grants-stack) is a self-service suite of products for hosting a grants program. For now, it lets you run Gitcoin-style quadratic funding rounds in your ecosystem, but will expand into other forms of grants over time. The product suite offers everything you'd need to run your grants program without writing any code. So if you just want to run your grants program, the [Grants Stack](https://www.gitcoin.co/grants-stack) is a good fit for you.

### Current Status

The project is currently live on a variety of testnets (see [Contracts](getting-started/contracts.md)), including [Goerli](getting-started/contracts.md#goerli). You can see the live [roadmap on Github](https://github.com/orgs/gitcoinco/projects/8/views/2) and [view the contracts in the repository](https://github.com/allo-protocol/contracts).

At the time of writing (April, 2023), **new development for the contracts is finished and the audit has been completed.** The protocol will be deployed and generally available mid May, 2023.

### Learning More

You can use this documentation to [get an overview of the protocol](core-concepts/conceptual-overview.md). \
If you are interested in building with Allo, check out the [Allo Builders Telegram group](https://t.me/+IExiDL8CTnFhZjcx).\
We also welcome contributions and would love for you to [get involved](extras/getting-involved.md). \
Finally, you can head to [gitcoin.co](https://www.gitcoin.co) to keep up to date with protocol releases.



### Next Steps

<table data-view="cards"><thead><tr><th data-type="content-ref"></th><th></th><th></th></tr></thead><tbody><tr><td><a href="core-concepts/conceptual-overview.md">conceptual-overview.md</a></td><td>Learn about the key components of the system and how they interact with each other.</td><td></td></tr><tr><td><a href="getting-started/contracts.md">contracts.md</a></td><td>Get access to the deployed contracts across a variety of networks.</td><td></td></tr><tr><td><a href="extras/getting-involved.md">getting-involved.md</a></td><td>Help us build a modular and composable system for funding public goods.</td><td></td></tr></tbody></table>
