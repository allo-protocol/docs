# Allo Protocol Documentation

This repository contains the documentation website for Allo Protocol. The
contracts for the current version of Allo can be found
[here](https://github.com/allo-protocol/allo-v2). Read on if you're interested
in contributing to the documentation.

## Overview

This project uses [Nextra](https://nextra.site/), a framework based on Next.js
for building documentation sites. If you're familiar with Next.js, the learning
curve to contributing to the docs is pretty small.

Follow through the rest of this repository to get set up and contributing to the
docs.

## Installation

Fork and clone this repository first, then run the following:

```sh 
pnpm install
```

This will install all the necessary dependencies.

## Running Locally

Once you've forked and cloned the repository and installed all the dependencies,
run the following:

```sh
pnpm run dev
```

This will run the documentation locally on `localhost:3000`.

## Contributing

To add a new page of content, create a `.md` or `.mdx` file inside the `pages/`
directory. To add that page to the sidebar or menu, update the `_meta.json` file
in the subfolder where you created your new page.

Nextra uses `.md` and `.mdx` files, the later of which allow you to use React
components with and inside of your content. Add any components you build to the
`components/` directory at the root of this repository.
