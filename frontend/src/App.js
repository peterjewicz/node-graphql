import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function sendRequest() {
  client
    .query({
      query: gql`
        {
          hello
        }
        `
    }).then(result => console.log(result.data));
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={sendRequest}>Send Request</button>
        </header>
      </div>
    );
  }
}

export default App;
