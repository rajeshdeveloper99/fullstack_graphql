import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './schema/schema.js';
import resolvers from './resolvers/resolvers.js';
import connectDB from './db/config.js';

const app = express();

connectDB()

// const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start(); // Ensure server is started before applying middleware

  // Apply middleware to Express
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}${server.graphqlPath}`);
  });


// Connect to MongoDB and start the server
connectDB()
  // .then(() => startServer())
  // .catch((error) => console.error(error));
