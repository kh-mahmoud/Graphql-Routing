import { gql } from "apollo-server";

// Define GraphQL schema using the gql template literal
export const typeDefs = gql`
  # Define the 'Product' type
  type Product {
    id: ID,
    name: String,
    description: String,
    quantity: Int,
    price: Float,
    image: String,
    onSale: Boolean,
  }

  # Define the input type for adding a product
  input addProduct {
    name: String,
    description: String,
    quantity: Int,
    price: Float,
    image: String,
    onSale: Boolean,
  }

  # Define the 'Mutation' type
  type Mutation {
    # Resolver for the 'addproduct' mutation
    addproduct(input: addProduct): Product
  }

  # Define the 'Query' type
  type Query {
    # Resolver for the 'products' query
    products: [Product],
    # Resolver for the 'product' query
    product(id: ID): Product
  }
`;
