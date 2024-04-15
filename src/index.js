import React from 'react';
import ReactDOM from 'react-dom/client';

//importing the data books from the books.js
import { books } from './books';
import Book from './Book';
import './index.css';

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
