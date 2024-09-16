# Project

A project reflects a team or organization. If the organization intends
to create and sponsor rounds, they are called a "program" and this
can be found reflected in a project's `tags`.

Copy and paste this query to list the name, unique project `id`, and
admin/member accounts associated with programs on Optimism chain.
```
query MyQuery {
  projects(
    condition: {tags: ["allo-v2", "program"], chainId: 10, projectType: CANONICAL}
  ) {
    name
    id
    roles {
      role
      address
    }
  }
}

```