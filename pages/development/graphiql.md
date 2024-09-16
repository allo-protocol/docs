---
description: How to query the Gitcoin Indexer using GraphiQL.
---

## Building a Query

Begin on the provided [GraphiQL endpoint.](https://grants-stack-indexer-v2.gitcoin.co/graphiql)

Along the left side are all the available models for query. As mentioned in
[Data](/indexer/data), the most common models involve `project`, `round`,
and `application`.

### IDs
The identifying information for a query is typically in purple and near the
top. The most important parameters are:
* `chainId` - unique to each blockchain supported by Allo 
  ([Allo supported](https://github.com/gitcoinco/gitcoin-chain-data/tree/main/src/data/chains),
  [full list](https://chainlist.org/))
  * E.g. Arbitrum One - `42161`, Optimism - `10`
* `roundId` - unique to each round of a chain
* Application `id` - unique to each application of a round

Tip: if you're able to find a round or application in the
[Gitcoin Explorer](https://explorer.gitcoin.co/#/),
the URL will be of the format `/#/round/chainId/roundId/[application id]`

Not all models will use all three `id` types. For example, the 
`rounds` model only requires a `chainId` and will return rounds on the
provided chain.

### Return data
The return section (typically coloured blue) will depend on the model
used. Due to the connected nature of the data types, entire models can
be found nested within others. One could query an individual 
`application`, or find it inside a `round`.

**It is best practice to use the lightest model possible for a 
query**. If the chain, round, and application are all known, then the singular
`application` query would be the fastest.

## Example

The below `applications` query will read out the application `id`, 
project name, and the number of unique donors for all applications
to a given round. The round was the 
[`dApps & Apps`](https://explorer.gitcoin.co/#/round/42161/25) round
of GG20. The round URL reveals `roundId: "25"`, and it took place on
Arbitrum (`chainId: 42161`).



![Data Models](https://i.imgur.com/AJ2Vd7W.png)


