import "./MainPage.css";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

function MainPage(props) {
  let { books } = props;
  return (
    <>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <Shelf
        title="Currently Reading"
        books={books}
        key="currentlyReading"
        value="currentlyReading"
        changeShelf={props.changeShelf}
      />

      <Shelf
        title="Want To Read"
        books={books}
        key="wantToRead"
        value="wantToRead"
        changeShelf={props.changeShelf}
      />

      <Shelf
        title="Read"
        books={books}
        key="read"
        value="read"
        changeShelf={props.changeShelf}
      />

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </>
  );
}

export default MainPage;
