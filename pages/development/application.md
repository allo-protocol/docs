# Application

An individual application requires the `chainId`, `roundId`, 
application `id` to be known. Given these, information on the
`status` (APPROVED/REJECTED), donations, project, and more
are all straightforward to access.

Copy and paste this query to produce a long output outlining
the described parameters.
```
query MyQuery {
  application(chainId: 42161, id: "0", roundId: "25") {
    id
    project {
      name
    }
    status
    uniqueDonorsCount
    totalAmountDonatedInUsd
    donations {
      amountInUsd
    }
  }
}
```
Recall that all applications belong to a round, but a round
can have many applications. Find more on querying rounds on the
[following page](/indexer/round).