import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// apollo provider gets data from apollo client and injects it to application / react component

// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// apollo client setup - registering query endpoint to this application
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>
            Ninja's Reading List <span>🚀</span>
          </h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}
