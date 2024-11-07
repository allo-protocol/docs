# Profile

Profiles contain details about Allo participants. An Allo registry profile is
required to create a pool. It is also recommended that strategies use Allo
profiles for their recipients, but it is not required. 

## Profile Structure

```solidity
struct Profile {
    uint256 nonce;
    string name;
    Metadata metadata;
    address owner;
    address anchor;
}
```
| Field | Data Type | Notes |
| --- | --- | --- |
| nonce | uint256 | A unique uint (any value not already used) | 
| name | string | The profile name. | 
| metadata | Metadata | See the metadata section below for more details.|
| owner | address | The wallet address of the profile owner. |
| anchor | address | The unique id assigned to the profile when it is created. |

### Metadata

Offchain metadata can be stored in the project registry using the Metadata
struct.

```solidity
struct Metadata {
    uint256 protocol;
    string pointer;
}
```

| Field | Data Type | Notes |
| --- | --- | --- |
| protocol | uint256 | An id from the list of available protocols. | 
| pointer | string | The pointer to the off chain data. | 

Currently, the only protocol id available is '1' for IPFS. Others may be added later.

