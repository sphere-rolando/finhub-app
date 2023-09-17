import React from 'react';
import '../Books/Books.css';
import Book from '../../components/Books/Book.js';
import Videos from '../Videos/Videos';

const Books = () => {
  return (
    <section className="books">
      <span className="BooksSectionTitle">Educational Books</span>
      <Book />
    </section>
  );
};

export default Books;
