# ts-graphql-starter

_This repository is an opinionated starter project to build a robust and scalable backend service in **TypeScript**, with a code-first approach, exposing a GraphQL endpoint, and using a postgres database as an example_

## Core dependencies

- 🚀[Apollo Server](https://www.apollographql.com/docs/apollo-server/)
  → Spec-compliant GraphQL server that's compatible with any GraphQL client
- 🏄‍♂️[TypeGraphQL](https://typegraphql.com/docs/introduction.html)
  → Create GraphQL schema and resolvers using classes and decorators
- 🔰[TypeDI](https://docs.typestack.community/typedi/v/develop/01-getting-started)
  → Simple yet powerful dependency injection tool
- 💎[Prisma](https://www.prisma.io/docs/)
  → Database toolkit replacing traditional ORMs and makes database access easy with an auto-generated query builder
- 🚦[Jest](https://jestjs.io/docs/en/getting-started)
  → Testing Framework with a focus on simplicity
- 💅[ESLint](https://eslint.org) + [Prettier](https://prettier.io)
  → Linting tool with an opinionated code formatter

## Quickstart

First you need [Node](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install) and [Docker](https://www.docker.com/products/docker-desktop) installed on your machine to run this project.

Then run the following commands :

1. `yarn install` → Install the dependencies
2. `yarn prisma:generate` → Generate the prisma client
3. `yarn start` -> Start the server and external dependencies

   🖥 Open a new terminal prompt

4. `yarn prisma:migration:up` -> Create initial tables
5. `yarn prisma:seed` -> Populate the database
6. The server is ready at http://localhost:3000/

## Project architecture

<img src="https://khalilstemmler.com/img/blog/clean-architecture/group.svg" alt="drawing" width="300"/>

The starter project comes with an architecture proposal inspired from the [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).
I recommend to read this [article](https://khalilstemmler.com/articles/enterprise-typescript-nodejs/clean-nodejs-architecture/) to better understand how it works. Feel free to use it or adapt it to your needs.

```
.
├── prisma
│   ├── migrations
│   │   ├── 20200904123736-user
│   │   │   ├── README.md
│   │   │   ├── schema.prisma
│   │   │   └── steps.json
│   │   └── migrate.lock
│   ├── schema.prisma
│   └── seed.ts
├── src
│   ├── components
│   │   └── user
│   │       ├── __tests__
│   │       │   └── user.service.spec.ts
│   │       ├── adapters
│   │       │   └── user.repository.ts
│   │       ├── user.entity.ts
│   │       ├── user.service.ts
│   │       └── user.source.ts
│   ├── infrastructure
│   │   ├── database
│   │   │   └── prisma.client.ts
│   │   └── resolvers
│   │       └── user.resolver.ts
│   ├── index.ts
│   └── module.ts
├── docker-compose.deps.yml
├── package.json
└── tsconfig.json
```

## Commands

- `yarn start`
  → Start the server with auto-restart on changes and the external dependencies
- `yarn start:server`
  → Start the server with auto-restart on changes
- `yarn start:deps`
  → Start the external dependencies with Docker
- `yarn lint`
  → Check linting and code formatting
- `yarn test`
  → Launch all tests with Jest
- `yarn build`
  → Build the project into plain javascript in the `dist` folder
- `yarn prisma:generate`
  → Generate the prisma client based on the [schema](./prisma/schema.prisma)
- `yarn prisma:migration:new`
  → Save a new migration to `prisma/migrations`
- `yarn prisma:migration:up`
  → Executes the migration against the database
- `yarn prisma:seed`
  → Populate the database using a [seed](./prisma/seed.ts)

## Notes

This project use [Prisma Migrate](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate) to create and update tables. Unfortunately this migration tool is still in an experimental state, if it's unsuitable for your project, you can replace this tool with [db-migrate](https://github.com/db-migrate/node-db-migrate#readme) and use [Prisma Introspection](https://www.prisma.io/docs/reference/tools-and-interfaces/introspection)
