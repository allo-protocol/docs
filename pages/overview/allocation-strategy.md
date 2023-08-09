---
description: What role does a Allocation Strategy play in Allo?
---

# Allocation Strategy

Every [ pool ](/overview/pool) in Allo is managed by an allocation strategy,
which determines:

1. Recipients - Who is eligible to receive funding from the pool?
2. Allocation - Who is eligible to decide on how the funds should be allocated, and how will they express their opinion? (grants committee, token voting, SBTs)
3. Payouts - Based on the allocation inputs, how will payouts be determined? (Quadratic funding, direct grant, request for proposal)
4. Distribution (lump-sum, milestone-based payments, stream)

Using the average Gitcoin Quadratic Funding round as an example, you get:

| Phase | Discription |
| ---  | ---  |
| Recipients  | Grantees apply and are approved by the admins  |
| Allocation  | People donate to projects, which casts a vote for how much of the matching pool that project should receive |
| Payouts | Quadratic funding |
| Distribution  | Donations + lump sum: projects receive individual donations as they come, then receive a lump sum payment from the pool |

