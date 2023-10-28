const { ApolloServer } = require('@apollo/server');
const gql = require('graphql-tag');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { readFileSync } = require('fs');
const path = require('path'); // Dosya yollarını işlemek için path modülünü içe aktarıyoruz

// GraphQL şema dosyasının tam yolunu belirle
const schemaPath = path.join(__dirname, 'graphql/types/schema.graphql');
const typeDefs = readFileSync(schemaPath, 'utf8');

// Resolver dosyasının tam yolunu belirle
const resolversPath = path.join(__dirname, 'graphql/resolvers/index');
const resolvers = require(resolversPath);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
