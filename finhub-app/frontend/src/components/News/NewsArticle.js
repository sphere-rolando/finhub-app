import React from 'react';
import { createContext, useEffect, useState } from 'react';
import '../../components/News/News.css';
import { Link } from 'react-router-dom';

function NewsArticle() {
  const [data, setData] = useState([
    {
      headline: '',
      summary: '',
      url: '',
      sentiment: '',
    },
  ]);

  useEffect(() => {
    fetch('api/news/6')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="allNews">
      {data.map((item) => (
        <div className="newContiner">
          <h1 className="newsHeadline">{item.headline}</h1>
          <p className="newsSummary">{item.summary}</p>
          <a className="newsUrl" href={item.url}>
            {' '}
            Read more {item.sentiment}{' '}
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsArticle;
