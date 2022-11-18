import "./MainPage.css";
// import * as API from "./BooksAPI";
// import { useEffect, useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

function MainPage(props) {
  let { books } = props;
  return (
    <>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      {/* Currently Reading */}
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === "currentlyReading")
              .map((book) => (
                <Book
                  book={book}
                  changeShelf={props.changeShelf}
                  key={book.id}
                  currentShelf="currentlyReading"
                />
              ))}
          </ol>
        </div>
      </div>

      {/* Want to Read */}
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === "wantToRead")
              .map((book) => (
                <Book
                  book={book}
                  changeShelf={props.changeShelf}
                  key={book.id}
                  currentShelf="wantToRead"
                />
              ))}
          </ol>
        </div>
      </div>

      {/* Read */}
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === "read")
              .map((book) => (
                <Book
                  book={book}
                  changeShelf={props.changeShelf}
                  key={book.id}
                  currentShelf="read"
                />
              ))}
          </ol>
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </>
  );
}

export default MainPage;
