## Data Models

Indexer contains many models, the most pertinent related to
 `project`, `round`, and `application`:
* A Project can be a funds-seeking team, or a funds-providing
  organization (typically called a "program"). Both can have multiple 
  applications or rounds.
* A Round is a specific time-dependent funding initiative sponsored
  by a program. Teams fill out applications to rounds they qualify for.
* An Application is a form filled out by a team seeking funding.
  Applications are specific to a round.

All rounds and applications are memorialized on an EVM-compatible
blockchain. These chains are identified by a unique
[`chainId`](https://chainlist.org/), often used as a top-level property for
queries. 

**You can remember each chain has many rounds, and each round has
many applications.**

In the below sample, `chainId: 42161` reflects the 
[Arbitrum mainnet](https://chainlist.org/?search=arbitrum), with
`roundId: "25"` being the
[`dApps & Apps`](https://explorer.gitcoin.co/#/round/42161/25) round run 
April 23 - May 8, 2024.

Specific guides on querying using [GraphiQL](/indexer/graphiql) and the 
[API](/indexer/api) also exist further in the docs.

![Data Models](https://i.imgur.com/AJ2Vd7W.png)


