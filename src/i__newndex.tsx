// src/index.tsx

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from "./Redux/store";
import App from "./__new__App";
import en_US from "antd/lib/locale/en_US";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd-mobile";
import { apolloClient as client } from "./API/Client";

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
// });

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
