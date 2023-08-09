---
title: "Introducing Allo v2, the Next Phase of Community Resource Allocation Tooling"
date: 2023-07-14
description: "Allo Summer is going strong, and we’re excited to announce the next phase of Allo’s development: Allo v2."
---
# Introducing Allo v2, the Next Phase of Community Resource Allocation Tooling

Allo Summer is going strong, and we’re excited to announce the next phase of
Allo’s development; Allo v2. This marks the latest step in our mission to build
resource allocation technologies that enable communities to efficiently deploy
their shared funds. Last week the team was on the ground in Paris for the
Funding the Commons and EthCC conferences, where we had the opportunity to
preview what’s to come. Here we’ll share more about the evolution of the
protocol and why we’re excited for this next stage.

## First, a quick recap for those who missed the Allo v1 announcement 

Allo is an open-source, blockchain-based protocol that empowers groups to
efficiently and transparently allocate pooled capital. It’s a vital part of
a healthy ecology of capital.

The development of Allo was directly inspired by what we’ve learned over
eighteen seasons of Gitcoin Grants: (1), grants programs are a powerful tool for
building ecosystems and (2), there isn’t a one-size-fits-all method for
distributing funding — there’s a wide range of mechanisms, and it’s good to have
them all in an arsenal.

As we put the finishing touches on Allo v1 we realized that the opportunity for
a resource allocation protocol is bigger than grants programs — this type of
decision-making system is core to thriving digital communities, regardless of
whether or not they run a grants program. We laid a new foundation with Allo v2
because we think that a resource allocation protocol is crucial to unlocking the
modern community’s ability to invest in itself. 

Tokenization technology has enabled values-aligned groups to accumulate
unprecedented amounts of capital and treasury tools (like Governor Bravo, Gnosis
Safes, etc.) have given them the means to safeguard it, but there hasn’t been
a sophisticated system for agreeing on how to use and deploy accumulated funds.
Allo is the solution. 

Allo empowers communities to develop a resource allocation system that deploys
their shared capital transparently (onchain, easily audited) and efficiently
(via plug and play mechanisms for earmarking capital, decision making and
managing project reputation). 

## Next, let’s talk about Allo v2 

There are **three main components of Allo v2**. They are (1) the allocation strategy
(with a library of strategies to choose from) (2) the pool manager, and (3) the
project registry. 

The atomic unit is the *allocation strategy*, which is a custom contract
specifying how a community will distribute a distinct pool of funds — how
recipients are added, how pooled funds are allocated, and how payouts are
executed. This modular design enables communities to tailor rules to fit their
exact use case. We’ve provided both an off-the-shelf set of common strategies
and a component library for easy customizability. Some possibilities include:

* Allocation: Manual allocation approvals, programmatic allocation approvals based on on-chain attestations, or automatic allocation approvals based on NFT gating
* Voting: Unilateral decision maker rights, committee decision maker rights, or token-gated community decision making rights
* Payout: Lump sum distribution, milestone distribution, programmatic streaming distribution

![](/posts/allo-v2-announcement/allocation-strategy.jpeg)

These examples only scratch the surface of what’s possible with Allo. The
protocol is intended to be a place for mechanism experimentation and innovation,
enabling communities to easily leverage cutting edge strategies for deploying
capital. 

All of this flexibility is orchestrated by a core *Allo contract that serves as
a pool manager*, which maintains the interfaces and interacts with the pools.
Through this contract we’ve provided generalized functions for three core
actions: registering recipients, allocating funds, and distributing funds. These
common functions allow you to turn virtually any on-chain action into a key part
of your allocation strategy. You can create direct vote-style actions, or use
something like an NFT mint or protocol interaction to allow your community to
engage with your pool.

![](/posts/allo-v2-announcement/pool-manager.jpeg)

The final piece of the protocol is a *universal project registry*, designed to
help build trust within the Allo ecosystem. Within the registry, identities are
assigned unique addresses based upon their name and creators — this simple
structure allows identities to do virtually anything that an address can do. An
identity can hold NFTs, give and receive EAS attestations, and more. With this
framework you can use Allo identities to hold official project information,
accrue reputation, validate sub-projects and spinoffs, and more.

![](/posts/allo-v2-announcement/project-registry.jpeg)

Learn more about these core components by watching Zakk Fleischmann’s EthCC talk
[here](https://www.youtube.com/watch?v=dvVG-2ZgY7w&list=PLm6V2qdPAeaUBG-qBewmpopLdgVtpqaXM&index=39).
For added inspiration, check out [this
talk](https://twitter.com/owocki/status/1680876641420029953) by Kevin Owocki
about public goods funding and social media, which features the Quadratic
Lenster app built using Allo v1.

## So, what’s next? 

Look out for a formal announcement of testnet deployment in early August,
followed by mainnets in early September. 

We’re also planning some exciting builder activities in between. If you’re
interested in joining our developer community, take a minute to fill out [ this
form ](https://forms.gle/6kHjAtcfZtRPzmsZ9). We look forward to seeing what we
can build together!
