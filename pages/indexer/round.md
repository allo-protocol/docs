# Round

A round requires a known `chainId` and `roundId`. Given 
these, it is easy to access information on the applications of
a round, the project sponsoring a round, the matching token,
[Strategy](/strategies), and more.

Copy and paste this query to produce a long output outlining
some of the described parameters.
```
query MyQuery {
  round(id: "25", chainId: 42161) {
    project {
      name
    }
    strategyName
    matchTokenAddress
    applications {
      id
      project {
        name
      }
      status
    }
  }
}
```
Recall that all rounds are sponsored by a project (program).
Find more on querying projects on the [following page](/indexer/project).