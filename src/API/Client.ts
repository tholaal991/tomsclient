import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    split,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";
  import { getMainDefinition } from "@apollo/client/utilities";
  
  function createApolloClient(uri: string | undefined) {
    const httpLink = createHttpLink({
      uri,
      credentials: "same-origin",
    });
  
    const token = localStorage.getItem("toms_token");

  
    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem("toms_token");
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });
  
   
  
    return new ApolloClient({
      cache: new InMemoryCache(),
    });
  }
  
  export const apolloClient = createApolloClient(process.env.REACT_APP_API_URL);