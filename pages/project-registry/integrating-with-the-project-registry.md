description: How can I query Project Registry data?

# Integrating with the Project Registry

This page covers:

*   [Subgraph details](integrating-with-the-project-registry.md#project-registry-subgraphs)
*   [How to access subgraph data](integrating-with-the-project-registry.md#accessing-project-registry-data)
*   [Data examples](integrating-with-the-project-registry.md#sample-data)
*   [Data object definitions](integrating-with-the-project-registry.md#object-definition-tables)
*   [Query examples](integrating-with-the-project-registry.md#query-structure)

## Project Registry Subgraphs

Project registry data is publicly available through The Graph. Each network the
Project Registry is deployed to has its own subgraph. Use the Playground url
provided in the table to begin exploring the data available

<table><thead><tr><th width="194">Network</th><th
width="364">GITHUB_USER/SUBGRAPH_NAME</th><th width="452">Playground</th><th
width="623">Query URL</th><th width="481">Subgraph
ID</th><th></th></tr></thead><tbody><tr><td>mainnet</td><td>grants-round-mainnet</td><td>https://thegraph.com/explorer/subgraphs/BQXTJRLZi7NWGq5AXzQQxvYNa5i1HmqALEJwy3gGJHCr?view=Playground</td><td>https://gateway.thegraph.com/api/[api-key]/subgraphs/id/BQXTJRLZi7NWGq5AXzQQxvYNa5i1HmqALEJwy3gGJHCr</td><td>BQXTJRLZi7NWGq5AXzQQxvYNa5i1HmqALEJwy3gGJHCr</td><td></td></tr><tr><td>goerli</td><td>gitcoinco/grants-round-goerli-testnet</td><td>https://thegraph.com/hosted-service/subgraph/gitcoinco/grants-round-goerli-testnet</td><td>https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-goerli-testnet</td><td>QmSejgNuESLAfwi7ADVCLBDTyi963mSE5ST1FfQFJnqPnq</td><td></td></tr><tr><td>fantom</td><td>gitcoinco/grants-round-fantom-mainnet</td><td>https://thegraph.com/hosted-service/subgraph/gitcoinco/grants-round-fantom-mainnet</td><td>https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-fantom-mainnet</td><td>Qmdnp1Yeddp7fPf5jE5pejS8C1nJKU9HpBGQuibBsyMebP</td><td></td></tr><tr><td>fantom-testnet</td><td>gitcoinco/grants-round-fantom-testnet</td><td>https://thegraph.com/hosted-service/subgraph/gitcoinco/grants-round-fantom-testnet</td><td>https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-fantom-testnet</td><td>QmdJVtt4R4zdAJB4gCGtpKMPJxCwEwUnQx1J3Tdt5BALxp</td><td></td></tr><tr><td>optimism</td><td>gitcoinco/grants-round-optimism-mainnet</td><td>https://thegraph.com/hosted-service/subgraph/gitcoinco/grants-round-optimism-mainnet</td><td>https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-optimism-mainnet</td><td>QmZwiu7dmCTyNh9jEJ4sHq7bUhyazNSHPRB5jAyHKCuGJu</td><td></td></tr></tbody></table>

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
data objects available,  the object definition tables.

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

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data
Type</th><th>Sample
Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td>"0x0067d80a449812df249712d8bfffcc41b0efc3a02f6494fab80b685044206001-0xd95a1969c41112cee9a2c931e849bcef36a16f4c"</td></tr><tr><td>protocol</td><td>Int</td><td>1
</td></tr><tr><td>pointer</td><td>String</td><td>"bafkreifknenozxxoil4d4v7i2x5kou7b67stcujjvwdqm7exofdqjuzjqq"</td></tr></tbody></table>

#### Program

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data
Type</th><th>Sample
Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td>"0x0515c873d9afc5fc8523c9eb148e8b9cab5125da"</td></tr><tr><td>roles</td><td>Array
of <a href="integrating-with-the-project-registry.md#programrole">ProgramRole
</a></td><td></td></tr><tr><td>accounts</td><td>Array of <a
href="integrating-with-the-project-registry.md#programaccount">ProgramAccount</a></td><td></td></tr><tr><td>rounds</td><td>Array
of <a href="integrating-with-the-project-registry.md#round">Round
</a></td><td></td></tr><tr><td>metaPtr</td><td><a
href="integrating-with-the-project-registry.md#metaptr">MetaPtr</a></td><td></td></tr><tr><td>createdAt</td><td>BigInt</td><td>"1680284639"</td></tr><tr><td>updatedAt</td><td>BigInt</td><td>"1680284639"</td></tr></tbody></table>

#### ProgramRole

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data
Type</th><th>Sample
Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td>"0x0515c873d9afc5fc8523c9eb148e8b9cab5125da-0x0000000000000000000000000000000000000000000000000000000000000000"</td></tr><tr><td>role</td><td>String</td><td>"0x0000000000000000000000000000000000000000000000000000000000000000"</td></tr><tr><td>accounts</td><td>Array
of <a
href="integrating-with-the-project-registry.md#programaccount">ProgramAccount</a></td><td></td></tr><tr><td>program</td><td><a
href="integrating-with-the-project-registry.md#program">Program</a></td><td></td></tr></tbody></table>

#### ProgramAccount

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data
Type</th><th>Sample
Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td>"52GswSdosCpDYHmc6a1qACmzk65WwFDDApEE4KqckNjr"</td></tr><tr><td>address</td><td>String</td><td>"0x0000008735754eda8db6b50aeb93463045fc5c55"</td></tr><tr><td>role</td><td><a
href="integrating-with-the-project-registry.md#programrole">ProgramRole</a></td><td></td></tr><tr><td>program</td><td><a
href="integrating-with-the-project-registry.md#program">Program</a></td><td></td></tr></tbody></table>

#### Round

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data
Type</th><th>Sample
Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td>"52GswSdosCpDYHmc6a1qACmzk65WwFDDApEE4KqckHgi"</td></tr><tr><td>program</td><td><a
href="integrating-with-the-project-registry.md#program">Program</a></td><td></td></tr><tr><td>roles</td><td>Array
of <a
href="integrating-with-the-project-registry.md#roundrole">RoundRole</a></td><td></td></tr><tr><td>accounts</td><td>Array
of <a
href="integrating-with-the-project-registry.md#roundaccount">RoundAccount</a></td><td></td></tr><tr><td>projects</td><td>Array
of <a
href="integrating-with-the-project-registry.md#roundproject">RoundProject</a></td><td></td></tr><tr><td>votingStrategy</td><td><a
href="integrating-with-the-project-registry.md#votingstrategy">VotingStrategy</a></td><td></td></tr><tr><td>payoutStrategy</td><td>String</td><td></td></tr><tr><td>applicationsStartTime</td><td>String</td><td>"1680284639"</td></tr><tr><td>applicationsEndTime</td><td>String</td><td>"1680284639"</td></tr><tr><td>roundStartTime</td><td>String</td><td>"1680284639"</td></tr><tr><td>roundEndTime</td><td>String</td><td>"1680284639"</td></tr><tr><td>token</td><td>String</td><td></td></tr><tr><td>roundMetaPtr</td><td><a
href="integrating-with-the-project-registry.md#metaptr">MetaPtr</a></td><td></td></tr><tr><td>applicationMetaPtr</td><td><a
href="integrating-with-the-project-registry.md#metaptr">MetaPtr</a></td><td></td></tr><tr><td>projectsMetaPtr</td><td><a
href="integrating-with-the-project-registry.md#metaptr">MetaPtr</a></td><td></td></tr><tr><td>createdAt</td><td>BigInt</td><td>"1680284639"</td></tr><tr><td>updatedAt</td><td>BigInt</td><td>"1680284639"</td></tr></tbody></table>

#### RoundRole

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data
Type</th><th>Sample
Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td>"0x0515c873d9afc5fc8523c9eb148e8b9cab5125da-0x0000000000000000000000000000000000000000000000000000000000000000"</td></tr><tr><td>role</td><td>String</td><td>"0x0000000000000000000000000000000000000000000000000000000000000000"</td></tr><tr><td>accounts</td><td>Array
of <a
href="integrating-with-the-project-registry.md#roundaccount">RoundAccount</a></td><td></td></tr><tr><td>round</td><td><a
href="integrating-with-the-project-registry.md#round">Round</a></td><td></td></tr></tbody></table>

#### RoundAccount

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data
Type</th><th>Sample
Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td>"52GswSdosCpDYHmc6a1qACmzk65WwFDDApEE4KqckNjr"</td></tr><tr><td>address</td><td>String</td><td>"0x0000008735754eda8db6b50aeb93463045fc5c55"</td></tr><tr><td>role</td><td><a
href="integrating-with-the-project-registry.md#roundrole">RoundRole</a></td><td></td></tr><tr><td>round</td><td><a
href="integrating-with-the-project-registry.md#round">Round</a></td><td></td></tr></tbody></table>

#### RoundProject

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data Type</th><th>Sample Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td></td></tr><tr><td>project</td><td>String</td><td></td></tr><tr><td>status</td><td>String</td><td></td></tr><tr><td>metaPtr</td><td><a href="integrating-with-the-project-registry.md#metaptr">MetaPtr</a></td><td></td></tr><tr><td>round</td><td><a href="integrating-with-the-project-registry.md#round">Round</a></td><td></td></tr><tr><td>payoutAddress</td><td>String</td><td></td></tr><tr><td>createdAt</td><td>BigInt</td><td></td></tr><tr><td>updatedAt</td><td>BigInt</td><td></td></tr></tbody></table>

#### VotingStrategy

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data Type</th><th>Sample Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td></td></tr><tr><td>strategyName</td><td>String</td><td></td></tr><tr><td>StrategyAddress</td><td>String</td><td></td></tr><tr><td>round</td><td><a href="integrating-with-the-project-registry.md#round">Round</a></td><td></td></tr><tr><td>votes</td><td><a href="integrating-with-the-project-registry.md#qfvote">QFVote</a></td><td></td></tr><tr><td>version</td><td>String</td><td></td></tr></tbody></table>

#### QFVote

<table><thead><tr><th width="226.33333333333331">Field</th><th>Data Type</th><th>Sample Value</th></tr></thead><tbody><tr><td>id</td><td>ID</td><td></td></tr><tr><td>votingStrategy</td><td><a href="integrating-with-the-project-registry.md#votingstrategy">VotingStrategy</a></td><td></td></tr><tr><td>token</td><td>String</td><td></td></tr><tr><td>amount</td><td>BigInt</td><td></td></tr><tr><td>from</td><td>String</td><td></td></tr><tr><td>to</td><td>String</td><td></td></tr><tr><td>projectId</td><td>String</td><td></td></tr><tr><td>version</td><td>String</td><td></td></tr><tr><td>createdAt</td><td>BigInt</td><td></td></tr></tbody></table>

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
