import React from 'react';
import '../Home/Home.css';
import homeImage from '../../assets/mainImage.svg';

const Home = () => {
  return (
    <section className="Home">
      <img src={homeImage} alt="" className="homeImage" />
    </section>
  );
};

export default Home;
