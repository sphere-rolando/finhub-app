import React from 'react';
import '../Books/Books.css';
import Book from '../../components/Books/Book.js';

const Books = () => {
  return (
    <section className="books">
      <h1 className="BooksSectionTitle">
        Educational Books 📚
      </h1>
      <Book />
    </section>
  );
};

export default Books;
