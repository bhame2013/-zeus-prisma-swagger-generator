# Prisma NestJS Swagger Class Generator

[`zeus-prisma-swagger-generator`](https://www.npmjs.com/package/zeus-prisma-swagger-generator)

## Motivation

This generator simplifies the integration between Prisma, NestJS, and Swagger by generating classes with Swagger decorators that can be used directly in NestJS Data Transfer Objects (DTOs).

While Prisma provides robust typings through the generated client, there are situations, particularly when working with APIs documented using Swagger and NestJS, where you need classes instead of interfaces. The `zeus-prisma-swagger-generator` automatically generates these classes, each decorated with the appropriate Swagger decorators, ensuring that your Prisma models are always aligned with the DTOs used in requests and API documentation.

This generator eliminates external dependencies and creates standalone TypeScript files that can be used directly in your NestJS application. The generated classes are compatible with Prisma client types but are built independently for easier maintenance and usage.

## Features

- **Class Generation**: Generates classes instead of interfaces, making it easier to use with NestJS APIs.
- **Swagger Decorators**: Generated classes are automatically decorated with `@ApiProperty()`, simplifying Swagger documentation generation.
- **Zero Dependencies**: The generated classes do not rely on any external packages and are fully independent of the Prisma client.
- **Automatic Prisma Alignment**: Generated classes are type-compatible with the Prisma schema types.

## Usage

### Installation

To use this generator, install the package:

```bash
npm install --save-dev zeus-prisma-swagger-generator

```typescript
schema.prisma

generator typeSwagger {
  provider = "zeus-prisma-swagger-generator"
  output   = "./types-swagger.ts"
}
```

```bash
npx prisma generate
