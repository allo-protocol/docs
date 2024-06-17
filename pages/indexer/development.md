## Deployment
[Indexer](https://github.com/gitcoinco/grants-stack-indexer) is free 
open-source, and deployable to a variety of environments:
* Fly.io, cloud-hosted - see 
  [GitHub guide](https://github.com/gitcoinco/grants-stack-indexer/blob/main/docs/deploy-to-fly.md)
  for deployment details
* Docker, self-hosted - 
  [dockerfile](https://github.com/gitcoinco/grants-stack-indexer/blob/main/Dockerfile)
  and [compose](https://github.com/gitcoinco/grants-stack-indexer/blob/main/docker-compose.yml) 
  provided

## Considerations
The Indexer can be a resource-intensive application to maintain.

Indexer requires knowledge of chain events, market prices, and 
IPFS-stored content. These are all fetched over various 
RPCs/APIs/gateways, which can be intensive to configure (see 
[`.env.example`](https://github.com/gitcoinco/grants-stack-indexer/blob/main/.env.example)
). Additionally, these can take up substantial space on disk, and
be slow to build an initial index of events.

For these reasons, consider using the freely available hosted
endpoint. Additionally, submit an 
[Issue ticket](https://github.com/gitcoinco/grants-stack-indexer/issues)
or reach out to us on [Discord](discord.gg/gitcoin) for specific
development questions or difficulties.
