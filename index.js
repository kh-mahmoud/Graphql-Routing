import cors from "cors";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";
import express from "express";
import { categories, products } from "./data.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";
import { inputRule, rule, shield, deny, allow, not } from "graphql-shield";




// const corsConfig = {
//     origin: true,
//     credentials: true,
// };

// Define GraphQL rules using graphql-shield
const isFound = rule()(async (parent, args) => {
  if (20 > 10) {
    return true;
  }
  return false;
});

const isChecked = rule()(async (parent, args) => {
  if (5 > 10) {
    return true;
  }
  return new Error("this is error");
});

// Create the executable schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Define middleware using graphql-shield
const middleware = shield({
  Query: {
    products: isFound,
  },
  Mutation: {
    addproduct: isChecked,
  },
});

// Apply middleware to the schema
const schemaWithMiddleware = applyMiddleware(schema, middleware);

// Create Apollo Server
const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req }) => {
    return {
      categories,
      products,
    };
  },
});



// const app = express();
// app.use(cors(corsConfig));
// app.options('*', cors(corsConfig));
// app.use(express.json());
// app.use("/api", PostsRouter);

// Define the port for the server
const port = process.env.PORT || 3000;

// Start the Apollo Server
server.listen().then(({ url }) => {
  console.log(`Server works on ` + url);
});
