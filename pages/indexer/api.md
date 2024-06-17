---
description: How to query the Gitcoin Indexer using GraphQL API.
---

## Building a Query
There are many ways to query a GraphQL endpoint depending on your intended
use. Popular choices include the lightweight Node package 
[`graphql-request`](https://github.com/jasonkuhrt/graphql-request)
or the manual [Postman](https://www.postman.com/downloads/).

Point to the provided [GraphQL endpoint](https://grants-stack-indexer-v2.gitcoin.co/graphql)
. Visiting this endpoint in a web browser should yield an error. You
are expected to make `POST` HTTP requests.

**It is recommended to use [GraphiQL](https://grants-stack-indexer-v2.gitcoin.co/graphiql)
in parallel** during development, speeding up model and query exploration.
As mentioned in [Data](/indexer/data), the most common models involve 
`project`, `round`, and `application`.

### IDs
The most common identifying parameters are:
* `chainId` - unique to each blockchain supported by Allo ([Allo list](https://github.com/gitcoinco/gitcoin-chain-data/tree/main/src/data/chains),
  [full list](https://chainlist.org/))
  * E.g. Arbitrum One - `42161`, Optimism - `10`
* `roundId` - unique to each round on a chain
* Application `id` - unique to each application of a round

Tip: if you're able to find a round or application in the
[Gitcoin Explorer](https://explorer.gitcoin.co/#/),
the URL will be of the format `/#/round/chainId/roundId/[application id]`

Not all models will use all three `id` types. For example, the 
`rounds` model only requires a `chainId` and will return rounds on the
provided chain.

### Return data
The return parameters will depend on the model used. Due to the connected
nature of the data types, entire models can
be found nested within others. One could query an individual 
`application`, or find it inside a `round`.

**It is best practice to use the lightest model possible for a 
query**. If the chain, round, and application are all known, then the singular
`application` query would be the fastest.

## Example

The below `applications` query made in Postman will read out the 
application `id`, project name, and the number of unique donors for all
applications to a given round. The round was the 
[`dApps & Apps`](https://explorer.gitcoin.co/#/round/42161/25) round
of GG20. The round URL reveals `roundId: "25"`, and it took place on
Arbitrum (`chainId: 42161`).

![Data Models](https://i.imgur.com/sFoZlnv.png)


