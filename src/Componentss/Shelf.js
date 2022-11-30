import Book from "./Book";

function Shelf(props) {
  let { title, books, value } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === value)
            .map((book) => (
              <Book
                book={book}
                changeShelf={props.changeShelf}
                key={book.id}
                currentShelf={value}
              />
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
