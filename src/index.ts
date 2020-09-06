import 'reflect-metadata'
import './module'
import { Container } from 'typedi'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

const PORT = 3000

async function bootstrap() {
  // Building schema here
  const schema = await buildSchema({
    resolvers: [__dirname + '/infrastructure/resolvers/*.resolver.{ts,js}'],
    container: Container,
    emitSchemaFile: false, // If you need the generated GraphQL schema, change this parameter
  })

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    playground: true,
  })

  // Start the server
  const { url } = await server.listen(PORT)
  console.log(`🚀 Server ready at ${url}`)
}

bootstrap()
