import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oygo6m186m01xn9b6y27vu/master',
  cache: new InMemoryCache()
})