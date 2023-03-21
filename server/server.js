const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
// Require our typeDefs and resolvers for our Apollo server
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
// TODO: Remove routes and replace with GraphQL.
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();
// Create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Needed for the build to work.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// TODO: Remove routes and replace with GraphQL.
// app.use(routes);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
