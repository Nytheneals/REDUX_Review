import React, { Component } from "react";

// THIS COMPONENT RENDERS THE BOOKLIST
class BooksList extends Component {
  state = {
    books: [{ title: "javascript" }, { title: "Script" }]
  };

  // HELPER FUNCTION FOR BOOKLIST
  renderList() {
    return this.state.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

export default BooksList;
