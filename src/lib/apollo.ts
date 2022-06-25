import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oygo6m186m01xn9b6y27vu/master',
//   cache: new InMemoryCache()
// })

const defaultOptions: DefaultOptions = {

  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});