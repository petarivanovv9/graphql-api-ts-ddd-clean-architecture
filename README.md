# An example of a GraphQL API with Apollo-Server and TypeScript by using principles like Domain-Driven Design and Clean Architecture.

Since that's an example, we should have a specific business case to build our software around it.

Let's consider we're a Cloud Service Provider like Digital Ocean, AWS, etc. We provide developers cloud infrastructure-as-a-service platforms. For instance, if someone wants a cloud server to host their application, he comes to us.

We allow only SMBs to register on our website. Each company can have multiple employees.

The main business scenario we have in our example is managing billing related stuff like adding card payment methods, updating billing addresses, invoicing, etc. That's the most crucial area of our business.

Our goal is to design and create a highly scalable and maintainable API with GraphQL around the above-mentioned business domain.

## Used Technologies and Tools:

- [GraphQL](https://graphql.org/)
- [Apollo-Server](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL Tools](https://the-guild.dev/graphql/tools)
  - [Schema Merging](https://the-guild.dev/graphql/tools/docs/schema-merging)
  - [Code Generation](https://the-guild.dev/graphql/codegen) - TypeScript types based on our GraphQL Schema

## Architectural Principles:

- Domain-Driven Design
  - => Better Subdomain Organization
- Clean-Architecture (aka Layered Architecture)

# High-Level Architecture Overview

The core principle of Clean Architecture is that dependencies can only point inwards.

![](./docs/layered-architecture-overview.png)

# Folder Structure => src/modules

Let's focus on the `/src/modules` folder since that's the most important folder in our example.

Modules <> Domains.

## Sub-Domains (ex: Account, Billing)

Each subdomain (or domain in short):

- Contain the GQL schema and resolvers for that subdomain.
  - Use schema merging to merge each subdomain GQL module.
- Contain the implementation of that particular subdomain.
- Expose a Module service (ex: AccountModule, BillingModule) that define the interface that other modules would use it to communicate with it.
  - doesn't expose implementation details;
  - uses TypeScript interfaces or DTOs for defining the return values and parameters;

=> decoupled modules.

### API

Define the interface that other modules would use it to communicate with it.

### Domain

#### Models (aka Entities & Domain Services)

Entities are at the core of a Domain Model. Entities are plan JavaScript objects that do not have dependencies on anything else. Entities represent a concept in the domain that is identified by its id.

Domain Services encapsulate domain logic. Domain Services do not have identity or state. Their responsibility is to orchestrate business logic using entities.

#### Mutations

Mutations map to GraphQL mutations. They can be implemented as separate classes or an Application Service grouping multiple mutations.

#### Queries

Queries map to GraphQL queries. They can be implemented as separate classes or an Application Service grouping multiple queries.

#### Services

Application Services, like Mutation and Queries, operate on a higher level of abstraction. They use the Repositories to load and persist "stuff", they use Domain Services and other external (or Module) services to fulfil their business use cases.

### GraphQL - schema definition and resolvers.

GraphQL Resolvers would take care of mapping GraphQL types to the Domain Entities. Generally, our entities should match the
structure of our GQL types so the Resolvers should be relatively simple and most of the time not require additional mapping layer.

### Repositories

Repositories, with the help of mappers, load "stuff" and persist changes to them. In the Domain Model Pattern, the DB access is abstracted as an infrastructure (that’s why you can find the DB access in the outermost layer).

Additionally, Repositories can be used for queries that load Entities.
