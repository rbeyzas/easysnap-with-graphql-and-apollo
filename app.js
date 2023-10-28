// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// // The GraphQL schema
// const typeDefs = `#graphql
//   type Query {
//     hello: String
//   }
// `;

// // A map of functions which return data for the schema.
// const resolvers = '';

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const { url } = await startStandaloneServer(server);
// console.log(`🚀 Server ready at ${url}`);

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { path } = require('path');

const resolvers = require('./graphql/resolvers/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4001 }, () => {
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
});
