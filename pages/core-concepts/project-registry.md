---
description: What role does the Project Registry play in Allo?
---

# Project Registry

Any builder or group who wishes to be considered for a grant will need to create a profile in the Project Registry. The Project Registry is a universal, on-chain registry of grant seekers. Once a project has a profile in the Project Registry, they are able to apply for any funding [**Round**](round.md) of any grants program built with the Allo Protocol.

The Project Registry helps grant seeking projects and grant programs by reducing effort for both parties. Projects will be able to complete a single profile to be used in many grant programs, and grant programs will be able to see a project's history in the Allo ecosystem to help decide if they will be included in the round.&#x20;

In the Project Registry, profiles are given a unique ID that maps to their off-chain metadata. The off-chain metadata can contain information such as the project description.

<figure><img src="../.gitbook/assets/Project Registry.png" alt=""><figcaption></figcaption></figure>

### Representing a Project

Every project in the registry contains three main pieces of information:

1. &#x20;A unique ID - assigned by the registry when the project is created
2. Project metadata - made up of a protocol id (i.e. `1` for IPFS) and a pointer to off-chain data (i.e. [`QmPMERYmqZtbHmqd2UzRhX9F4cixnMQU2GFa2hYAsQ6J3D`](https://cloudflare-ipfs.com/ipfs/QmPMERYmqZtbHmqd2UzRhX9F4cixnMQU2GFa2hYAsQ6J3D)).
3. A list of project owners - addresses that have the ability to update the project information



### Registering a Project

A group that wishes to receive grant funding from any round on the Allo protocol must first register their project in the Project Registry.

To register, groups can use the Project Registry `createProject(MetaPtr)` method, where `MetaPtr` is the below struct:

```solidity
struct MetaPtr {
    /// @notice Protocol ID corresponding to a specific protocol.
    /// More info at https://github.com/allo-protocol/contracts/blob/main/docs/MetaPtrProtocol.md
    uint256 protocol;
    /// @notice Pointer to fetch metadata for the specified protocol
    string pointer;
}
```

| MetaPtr Variable | Description                                                  | Example Value                                                                                                                       | Notes                                                  |
| ---------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| protocol         | A protocol id that corresponds to an off-chain data location | 1                                                                                                                                   | Currently IPFS (id =1) is the only available protocol. |
| pointer          | Pointer to the metadata in the provided protocol             | [`QmPMERYmqZtbHmqd2UzRhX9F4cixnMQU2GFa2hYAsQ6J3D`](https://cloudflare-ipfs.com/ipfs/QmPMERYmqZtbHmqd2UzRhX9F4cixnMQU2GFa2hYAsQ6J3D) |                                                        |

You can learn more about the metadata and protocol IDs [here](https://github.com/allo-protocol/contracts/blob/main/docs/MetaPtrProtocol.md). \
For more information on storing and retrieving data through IPFS, check out the [IPFS Docs](https://docs.ipfs.tech/concepts/file-systems/#mutable-file-system-mfs).

When a project is successfully created the following will occur:

* The unique projectID will be assigned&#x20;
* The project owner will be set to the address that called the createProject method
* The project metadata will be updated
* Two events will be emitted &#x20;

### Managing a Project

#### Updating Project Metadata

Metadata can be updated using

* `updateProjectMetadata(uint256 projectId,MetaPtr metadata)` - overwrites the existing metadata information for the project.

\
An event will be emitted when the metadata is successfully updated.\
Only a project owner can update the metadata.

#### Updating Project Owners

The project owner list can only be updated by an existing project owner. The initial owner is set to the address that called the `createProject` method.

There are two methods for updating the project owners:

* `addProjectOwner(uint256 projectId,address newOwner)` - adds the newOwner address to the list of project owners for the given projectID
* `removeProjectOwner(uint256 projectId,address prevOwner,address owner)` - removes prevOwner address from the list of owners and replaces it with the owner address

An event will be submitted when either function is successful.

### Getting Project Data

Data on projects, like when they register and when they update their metadata, is exposed via events and indexed in a [subgraph](../getting-started/subgraph.md#project-registry). If you want to build something that leverages the data in the Project Registry, we recommend using this subgraph.

&#x20;