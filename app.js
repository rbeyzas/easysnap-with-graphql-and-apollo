const { ApolloServer } = require('@apollo/server');
require('dotenv').config();
const mongoose = require('mongoose');
const gql = require('graphql-tag');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { readFileSync } = require('fs');
const path = require('path');

const schemaPath = path.join(__dirname, './schema/schema.gql');
const typeDefs = readFileSync(schemaPath, 'utf8');

const resolversPath = path.join(__dirname, './graphql/resolvers/index');
const resolvers = require(resolversPath);

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.log(e));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
