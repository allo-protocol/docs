---
description: What is the allo/grants-stack indexer?
---
# Indexer

The [Allo/Grants-Stack Indexer](https://github.com/gitcoinco/grants-stack-indexer)
is a publicly available API for retrieving information about ongoing and 
historical Allo protocol events. The Indexer monitors activity across all 
[Allo-supported chains](https://github.com/gitcoinco/gitcoin-chain-data/tree/main/src/data/chains)
, building a complete picture of Program Rounds, Project Applications, and more.

Queries to this endpoint are straightforward, fast, and free. All queries are
GraphQL format, and can be made
with:
* [UI GraphiQL](https://grants-stack-indexer-v2.gitcoin.co/graphiql) endpoint,
handy for non-developers
* Embedded [HTTP endpoint](https://grants-stack-indexer-v2.gitcoin.co/graphql), intended
for applications

Read more about Indexer's [data models](/indexer/data), and 
[developer oriented](/indexer/development) specifics.
