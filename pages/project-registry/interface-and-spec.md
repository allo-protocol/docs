---
description: What can I do with the Project Registry?
---

# Interface and Spec

This documentation covers methods and events available through the Project Registry implementation. See [Getting Started](getting-started.md) for more information on interacting with the Project Registry.

## Functions

### getProjectOwners

`function getProjectOwners(uint256 projectID) external view returns (address[])`

#### Behaviors&#x20;

<table><thead><tr><th width="224">Status</th><th>Response</th><th>Notes</th></tr></thead><tbody><tr><td>Success</td><td>returns a list of project owners for the given project id</td><td></td></tr></tbody></table>

### projectOwnersCount

```
function projectOwnersCount(uint256 projectID) external view returns(uint256)
```

#### Behaviors&#x20;

<table><thead><tr><th width="224">Status</th><th>Response</th><th>Notes</th></tr></thead><tbody><tr><td>Success</td><td>returns an int with the number of project owners for the given id</td><td></td></tr></tbody></table>

### removeProjectOwner

```
function removeProjectOwner(uint256 projectID, address prevOwner, address owner)
```

#### Behaviors&#x20;

<table><thead><tr><th width="224">Status</th><th>Response</th><th>Notes</th></tr></thead><tbody><tr><td>Success</td><td>replaces the prevOwner with the owner in the project owner list for the given project</td><td></td></tr><tr><td>Error</td><td>"PR000"</td><td>Returned if function caller is not a project owner</td></tr><tr><td>Error</td><td>"PR001"</td><td>Returned if 'owner' is the zero-address</td></tr><tr><td>Error</td><td>"PR003"</td><td>Returned when 'prevOwner' is the same as 'owner'</td></tr><tr><td>Error</td><td>"PR004"</td><td>Returned if the project only has a single owner</td></tr></tbody></table>

### createProject

```
function createProject(MetaPtr calldata metadata)
```

#### Behaviors&#x20;

<table><thead><tr><th width="224">Status</th><th>Response</th><th>Notes</th></tr></thead><tbody><tr><td>Success</td><td>Project is added to project registry.<br>Project ID is created.<br>Project owner is set to msg.sender</td><td>2 events are emitted containing the project id, project owner, and project metadata.</td></tr></tbody></table>

### updateProjectMetadata

```
function updateProjectMetadata(uint256 projectID, MetaPtr calldata metadata)
```

#### Behaviors&#x20;

<table><thead><tr><th width="224">Status</th><th>Response</th><th>Notes</th></tr></thead><tbody><tr><td>Success</td><td>Metadata is updated. </td><td></td></tr><tr><td>Error</td><td>"PR000"</td><td>Returned if function caller is not a project owner</td></tr></tbody></table>

### addProjectOwner

```
function addProjectOwner(uint256 projectID, address newOwner)
```

#### Behaviors&#x20;

<table><thead><tr><th width="224">Status</th><th>Response</th><th>Notes</th></tr></thead><tbody><tr><td>Success</td><td>'newOwner' is added to the list of project owners for the given project Id.</td><td></td></tr><tr><td>Error</td><td>"PR000"</td><td>Returned if function caller is not a project owner</td></tr><tr><td>Error</td><td>"PR001"</td><td>Returned if the 'newOwner' is the zero-address</td></tr><tr><td>Error</td><td>"PR002"</td><td>Returned if 'newOwner' is already in the owner list.</td></tr></tbody></table>
