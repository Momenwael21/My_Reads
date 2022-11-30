import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { update, getAll } from "./Componentss/BooksAPI";
import MainPage from "./Componentss/MainPage";
import Search from "./Componentss/Search";
import { useEffect, useState } from "react";

function App() {
  let [books, setBooks] = useState([]);
  useEffect(() => {
    getAll().then((allBooks) => setBooks(allBooks));
  }, []);

  let changeShelf = (book, shelf) => {
    update(book, shelf);
    getAll().then((allBooks) => setBooks(allBooks));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage books={books} changeShelf={changeShelf} />}
          />
          <Route
            path="/search"
            element={<Search books={books} changeShelf={changeShelf} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
