import React, { Component } from "react";
import BooksLists from "./components/books_list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksLists />
      </div>
    );
  }
}

export default App;
