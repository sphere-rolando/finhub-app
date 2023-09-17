import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import ContatctUs from '../components/ContactUs/ContactUs.js';
import Invetment from '../components/Invetsment/Invetment.js';
import Tips from '../components/Tips/Tips.js';
import News from '../components/News/News.js';

const FinHubContainer = () => {
  return (
    <>
      <Navbar />
      <News />
      <Invetment />
      <Tips />

      <ContatctUs />
    </>
  );
};

export default FinHubContainer;
