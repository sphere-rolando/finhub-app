import React from 'react';
import '../Tips/Tips.css';
import tipsImage from '../../assets/tipsImage.svg';
import { useEffect, useState } from 'react';
import aiIcon from '../../assets/ai-icon.svg';

const Tips = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    data: '',
  });

  const handleClick = async () => {
    fetch('/api/tips/')
      .then((res) => res.json())
      .then((data) => {
        setData({
          data: data,
        });
        setLoading(false);
      });
  };

  return (
    <section className="tipsPage">
      <div className="container_tips">
        <div>
          <h1 className="imageText">
            Looking for <br></br>a financial <br></br> tip?
          </h1>
          <img src={tipsImage} alt="ai image" className="tipImage" />
        </div>

        <div className="textBox">
          <p className="chatGptText">{JSON.stringify(data.data.text)}</p>
          <p className="chatGptcite">Using ChatGPT</p>
        </div>
        <button className="generateButton" onClick={handleClick}>
          Generete
          <img src={aiIcon} alt="contact-me-icon" className="aiImg" />
        </button>
      </div>
    </section>
  );
};

export default Tips;
