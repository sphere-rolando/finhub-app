import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import ContatctUs from '../components/ContactUs/ContactUs.js';
import Invetment from '../components/Invetsment/Invetment.js';
import Tips from '../components/Tips/Tips.js';
import News from '../components/News/News.js';
import Home from '../components/Home/Home.js';
import Videos from '../components/Videos/Videos.js';
import Books from '../components/Books/Books.js';

const FinHubContainer = () => {
  return (
    <>
      <Navbar />
      <Home />
      <News />
      <Invetment />
      <Videos />
      <Books />
      <Tips />
      <ContatctUs />
    </>
  );
};

export default FinHubContainer;
