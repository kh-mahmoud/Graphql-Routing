export const resolvers = {
    Query: {
      // Resolver for the 'products' query
      products: (parent, args, { products }) => {
        return products;
      },
      // Resolver for the 'product' query
      product: (parent, args, { products }) => {
        return products.find((item) => item.id === args.id);
      },
    },
    Mutation: {
      // Resolver for the 'addproduct' mutation
      addproduct: (parent, args) => {
        // Extract the new product data from the mutation input
        const newProduct = args.input;
  
        // Add any additional logic here (e.g., database insertion)
  
        // Return the new product
        return newProduct;
      },
    },
  };
  