import React from 'react';
import '../Home/Home.css';
import homeImage from '../../assets/mainImage.svg';

const Home = () => {
  return (
    <section className="Home">
      <span className="intro">
        We believe that financial literacy <br></br>is not a privilege; it's a
        fundamental right.
      </span>
      <img src={homeImage} alt="" className="homeImage" />
    </section>
  );
};

export default Home;
