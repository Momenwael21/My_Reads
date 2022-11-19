import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import { search } from "./BooksAPI";
import Book from "./Book";

function Search(props) {
  let [resultBooks, setResultBooks] = useState([]);
  let [query, setQuery] = useState("");

  let getQuery = (newQuery) => {
    newQuery = newQuery.trim().replace(/^s+/, "");

    setQuery(newQuery);
  };

  let showResults = () => {
    if (resultBooks.length != 0) {
      return resultBooks.map((resultBook) => {
        let currentShelf = "none";
        props.books.forEach((book) => {
          if (resultBook.id === book.id) {
            currentShelf = book.shelf;
            return currentShelf;
          }
        });

        console.log(currentShelf);
        return (
          <Book
            book={resultBook}
            changeShelf={props.changeShelf}
            key={resultBook.id}
            currentShelf={currentShelf}
          />
        );
      });
    } else if (resultBooks.length === 0) {
      return (
        <li className="no-results">
          <h1>"No Results Found"</h1>
          <h2>Try another book</h2>
        </li>
      );
    }
  };

  useEffect(() => {
    if (query != "") {
      search(query, 4).then((books) => {
        if (books.error) {
          setResultBooks([]);
        } else {
          setResultBooks(books);
        }
      });
    } else {
      setResultBooks([]);
    }
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onInput={(e) => getQuery(e.currentTarget.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{showResults()}</ol>
      </div>
    </div>
  );
}

export default Search;
