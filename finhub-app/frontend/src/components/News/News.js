import React from 'react';
import NewsArticle from '../../components/News/NewsArticle.js';
import '../../components/News/News.css';

const News = () => {
  return (
    <section className="news">
      <h1 className="NewsSectionTitle">
        Top News in <br /> the Finance Industry 🚀
      </h1>
      <NewsArticle />
    </section>
  );
};

export default News;
