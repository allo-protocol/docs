description: How can I query Project Registry data?

# Integrating with the Project Registry

This page covers:

- [Subgraph details](integrating-with-the-project-registry.md#project-registry-subgraphs)
- [How to access subgraph data](integrating-with-the-project-registry.md#accessing-project-registry-data)
- [Data examples](integrating-with-the-project-registry.md#sample-data)
- [Data object definitions](integrating-with-the-project-registry.md#object-definition-tables)
- [Query examples](integrating-with-the-project-registry.md#query-structure)

## Project Registry Subgraphs

Project registry data is publicly available through The Graph. See the
[Indexing](/overview/indexers) page for access details.

## Accessing Project Registry Data

Subgraph data can be accessed either manually through the subgraph Playground,
or programmatically through The Graph API. For more information about how to set
up these methods, please see the [Querying the
Graph](https://thegraph.com/docs/en/querying/querying-the-graph/) page in The
Graph documentation.

If you would like to display Project Registry data in another app, see The Graph
article on [Querying from an
Application](https://thegraph.com/docs/en/querying/querying-from-an-application/).

## Sample Data

An example of the data returned from a graph query is below. For details on the
data objects available, the object definition tables.

    {
      "data": {
        "metaPtrs": [
          {
            "id": "0x0067d80a449812df249712d8bfffcc41b0efc3a02f6494fab80b685044206001-0xd95a1969c41112cee9a2c931e849bcef36a16f4c",
            "protocol": 1,
            "pointer": "bafkreifknenozxxoil4d4v7i2x5kou7b67stcujjvwdqm7exofdqjuzjqq"
          }
        ],
        "programs": [
          {
            "id": "0x0515c873d9afc5fc8523c9eb148e8b9cab5125da",
            "roles": [
              {
                "id": "0x0515c873d9afc5fc8523c9eb148e8b9cab5125da-0x0000000000000000000000000000000000000000000000000000000000000000",
                "role": "0x0000000000000000000000000000000000000000000000000000000000000000"
              }
            ],
            "accounts": [
              {
                "address": "0x0000008735754eda8db6b50aeb93463045fc5c55",
                "id": "52GswSdosCpDYHmc6a1qACmzk65WwFDDApEE4KqckNjr"
              }
            ],
            "rounds": [],
            "metaPtr": {
              "id": "metaPtr-0x0515c873d9afc5fc8523c9eb148e8b9cab5125da",
              "pointer": "bafkreicgmns6gruzl4apju6wy3a6spywdtni6dvbwwpet3n5m226juio2a",
              "protocol": 1
            },
            "updatedAt": "1680284639",
            "createdAt": "1680284639"
          }
        ]
      }
    }

## Object Definition Tables

#### MetaPtr

| Field    | Data Type | Sample Value                                                                                                    |
| -------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| id       | ID        | "0x0067d80a449812df249712d8bfffcc41b0efc3a02f6494fab80b685044206001-0xd95a1969c41112cee9a2c931e849bcef36a16f4c" |
| protocol | Int       | 1                                                                                                               |
| pointer  | String    | "bafkreifknenozxxoil4d4v7i2x5kou7b67stcujjvwdqm7exofdqjuzjqq"                                                   |

#### Program

| Field     | Data Type                                                                          | Sample Value                                 |
| --------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| id        | ID                                                                                 | "0x0515c873d9afc5fc8523c9eb148e8b9cab5125da" |
| roles     | Array of [ProgramRole](integrating-with-the-project-registry.md#programrole)       |                                              |
| accounts  | Array of [ProgramAccount](integrating-with-the-project-registry.md#programaccount) |                                              |
| rounds    | Array of [Round](integrating-with-the-project-registry.md#round)                   |                                              |
| metaPtr   | [MetaPtr](integrating-with-the-project-registry.md#metaptr)                        |                                              |
| createdAt | BigInt                                                                             | "1680284639"                                 |
| updatedAt | BigInt                                                                             | "1680284639"                                 |

#### ProgramRole

| Field    | Data Type                                                                          | Sample Value                                                                                                    |
| -------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| id       | ID                                                                                 | "0x0515c873d9afc5fc8523c9eb148e8b9cab5125da-0x0000000000000000000000000000000000000000000000000000000000000000" |
| role     | String                                                                             | "0x0000000000000000000000000000000000000000000000000000000000000000"                                            |
| accounts | Array of [ProgramAccount](integrating-with-the-project-registry.md#programaccount) |                                                                                                                 |
| program  | [Program](integrating-with-the-project-registry.md#program)                        |                                                                                                                 |

#### ProgramAccount

| Field   | Data Type                                                           | Sample Value                                   |
| ------- | ------------------------------------------------------------------- | ---------------------------------------------- |
| id      | ID                                                                  | "52GswSdosCpDYHmc6a1qACmzk65WwFDDApEE4KqckNjr" |
| address | String                                                              | "0x0000008735754eda8db6b50aeb93463045fc5c55"   |
| role    | [ProgramRole](integrating-with-the-project-registry.md#programrole) |                                                |
| program | [Program](integrating-with-the-project-registry.md#program)         |                                                |

#### Round

| Field                 | Data Type                                                                      | Sample Value                                   |
| --------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- |
| id                    | ID                                                                             | "52GswSdosCpDYHmc6a1qACmzk65WwFDDApEE4KqckHgi" |
| program               | [Program](integrating-with-the-project-registry.md#program)                    |                                                |
| roles                 | Array of [RoundRole](integrating-with-the-project-registry.md#roundrole)       |                                                |
| accounts              | Array of [RoundAccount](integrating-with-the-project-registry.md#roundaccount) |                                                |
| projects              | Array of [RoundProject](integrating-with-the-project-registry.md#roundproject) |                                                |
| votingStrategy        | [VotingStrategy](integrating-with-the-project-registry.md#votingstrategy)      |                                                |
| payoutStrategy        | String                                                                         |                                                |
| applicationsStartTime | String                                                                         | "1680284639"                                   |
| applicationsEndTime   | String                                                                         | "1680284639"                                   |
| roundStartTime        | String                                                                         | "1680284639"                                   |
| roundEndTime          | String                                                                         | "1680284639"                                   |
| token                 | String                                                                         |                                                |
| roundMetaPtr          | [MetaPtr](integrating-with-the-project-registry.md#metaptr)                    |                                                |
| applicationMetaPtr    | [MetaPtr](integrating-with-the-project-registry.md#metaptr)                    |                                                |
| projectsMetaPtr       | [MetaPtr](integrating-with-the-project-registry.md#metaptr)                    |                                                |
| createdAt             | BigInt                                                                         | "1680284639"                                   |
| updatedAt             | BigInt                                                                         | "1680284639"                                   |

#### RoundRole

| Field    | Data Type                                                                      | Sample Value                                                                                                    |
| -------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| id       | ID                                                                             | "0x0515c873d9afc5fc8523c9eb148e8b9cab5125da-0x0000000000000000000000000000000000000000000000000000000000000000" |
| role     | String                                                                         | "0x0000000000000000000000000000000000000000000000000000000000000000"                                            |
| accounts | Array of [RoundAccount](integrating-with-the-project-registry.md#roundaccount) |                                                                                                                 |
| round    | [Round](integrating-with-the-project-registry.md#round)                        |                                                                                                                 |

#### RoundAccount

| Field   | Data Type                                                       | Sample Value                                   |
| ------- | --------------------------------------------------------------- | ---------------------------------------------- |
| id      | ID                                                              | "52GswSdosCpDYHmc6a1qACmzk65WwFDDApEE4KqckNjr" |
| address | String                                                          | "0x0000008735754eda8db6b50aeb93463045fc5c55"   |
| role    | [RoundRole](integrating-with-the-project-registry.md#roundrole) |                                                |
| round   | [Round](integrating-with-the-project-registry.md#round)         |                                                |

#### RoundProject

| Field         | Data Type                                                   | Sample Value |
| ------------- | ----------------------------------------------------------- | ------------ |
| id            | ID                                                          |              |
| project       | String                                                      |              |
| status        | String                                                      |              |
| metaPtr       | [MetaPtr](integrating-with-the-project-registry.md#metaptr) |              |
| round         | [Round](integrating-with-the-project-registry.md#round)     |              |
| payoutAddress | String                                                      |              |
| createdAt     | BigInt                                                      |              |
| updatedAt     | BigInt                                                      |              |

#### VotingStrategy

| Field           | Data Type                                                 | Sample Value |
| --------------- | --------------------------------------------------------- | ------------ |
| id              | ID                                                        |              |
| strategyName    | String                                                    |              |
| StrategyAddress | String                                                    |              |
| round           | [Round](integrating-with-the-project-registry.md#round)   |              |
| votes           | [QFVote](integrating-with-the-project-registry.md#qfvote) |              |
| version         | String                                                    |              |

#### QFVote

| Field          | Data Type                                                                 | Sample Value |
| -------------- | ------------------------------------------------------------------------- | ------------ |
| id             | ID                                                                        |              |
| votingStrategy | [VotingStrategy](integrating-with-the-project-registry.md#votingstrategy) |              |
| token          | String                                                                    |              |
| amount         | BigInt                                                                    |              |
| from           | String                                                                    |              |
| to             | String                                                                    |              |
| projectId      | String                                                                    |              |
| version        | String                                                                    |              |
| createdAt      | BigInt                                                                    |              |

## Query Structure

Below is a JSON structure of available query fields for the Allo Project
Registry.

Queries can be built through The Graph playground for&#x20;

```json
metaPtr(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): MetaPtr

metaPtrs(
    block: Block_height
    first: Int = 100
    orderBy: MetaPtr_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: MetaPtr_filter
): [MetaPtr!]!

program(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): Program

programs(
    block: Block_height
    first: Int = 100
    orderBy: Program_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: Program_filter
): [Program!]!

programRole(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): ProgramRole

programRoles(
    block: Block_height
    first: Int = 100
    orderBy: ProgramRole_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: ProgramRole_filter
): [ProgramRole!]!

programAccount(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): ProgramAccount

programAccounts(
    block: Block_height
    first: Int = 100
    orderBy: ProgramAccount_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: ProgramAccount_filter
): [ProgramAccount!]!

round(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): Round

rounds(
    block: Block_height
    first: Int = 100
    orderBy: Round_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: Round_filter
): [Round!]!

roundRole(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): RoundRole

roundRoles(
    block: Block_height
    first: Int = 100
    orderBy: RoundRole_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: RoundRole_filter
): [RoundRole!]!

roundAccount(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): RoundAccount

roundAccounts(
    block: Block_height
    first: Int = 100
    orderBy: RoundAccount_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: RoundAccount_filter
): [RoundAccount!]!

roundProject(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): RoundProject

roundProjects(
    block: Block_height
    first: Int = 100
    orderBy: RoundProject_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: RoundProject_filter
): [RoundProject!]!

votingStrategy(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): VotingStrategy

votingStrategies(
    block: Block_height
    first: Int = 100
    orderBy: VotingStrategy_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: VotingStrategy_filter
): [VotingStrategy!]!

qfvote(
    block: Block_height
    id: ID!
    subgraphError: _SubgraphErrorPolicy_! = deny
): QFVote

qfvotes(
    block: Block_height
    first: Int = 100
    orderBy: QFVote_orderBy
    orderDirection: OrderDirection
    skip: Int = 0
    subgraphError: _SubgraphErrorPolicy_! = deny
    where: QFVote_filter
): [QFVote!]!

_meta(block: Block_height): _Meta_
```
