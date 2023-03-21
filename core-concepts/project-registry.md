---
description: What role does the Project Registry play in Allo?
---

# Project Registry

The Project Registry is a universal, on-chain registry of projects that can apply for any [**Round**](round.md) on the Allo Protocol.

A project is any group that wishes to apply and receive funding. They are identified by an on-chain address (usually a multi-sig) and given a unique ID in the registry that maps to their off-chain metadata.&#x20;

<figure><img src="../.gitbook/assets/Project Registry.png" alt=""><figcaption></figcaption></figure>

### Representing a Project

Every project in the registry is represented with a unique ID and some meta data. The metadata is made up of a protocol id (i.e. `1` for IPFS) and a pointer to data off-chain (i.e. [`QmPMERYmqZtbHmqd2UzRhX9F4cixnMQU2GFa2hYAsQ6J3D`](https://cloudflare-ipfs.com/ipfs/QmPMERYmqZtbHmqd2UzRhX9F4cixnMQU2GFa2hYAsQ6J3D)).

You can read more about the metadata and protocol IDs [here](https://github.com/allo-protocol/contracts/blob/main/docs/MetaPtrProtocol.md).&#x20;

### Registering a Project

The Project Registry has a method for adding a project to the registry, the signature for which is: `createProject(MetaPtr)`, where `MetaPtr` is the following struct:

```solidity
struct MetaPtr {
    /// @notice Protocol ID corresponding to a specific protocol.
    /// More info at https://github.com/gitcoinco/grants-round/tree/main/packages/contracts/docs/MetaPtrProtocol.md
    uint256 protocol;
    /// @notice Pointer to fetch metadata for the specified protocol
    string pointer;
}
```

A group that wishes to receive grant funding from any round on the Allo protocol must first register their project in the Project Registry.

### Managing a Project

The Project Registry exposes a method for updating the metadata for a project in the registry (`updateProjectMetadata(uint256,MetaPtr)`).

A project can only be updated by one of its owners. Owners can be added and removed through the `addProjectOwner(uint256,address)` and `removeProjectOwner(uint256,address,address)` methods, respectively.

### Getting Project Data

Data on projects, like when they register and when they update their metadata, is exposed via events and indexed in a [subgraph](../getting-started/subgraph.md#project-registry). If you want to build something that leverages the data in the Project Registry, we recommend using this subgraph.

&#x20;
