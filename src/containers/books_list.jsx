import React, { Component } from "react";
import { connect } from "react-redux";
// THIS COMPONENT RENDERS THE BOOKLIST
class BooksList extends Component {
  // HELPER FoiUNCTION FOR BOOKLIST
  renderList() {
    return this.props.books.map(book => {
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

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BooksList);
