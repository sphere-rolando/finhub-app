import React from 'react';
import { createContext, useEffect, useState } from 'react';
import '../../components/Videos/Videos.css';
import { Link } from 'react-router-dom';

function Video() {
  const videoLinks = [
    'https://www.youtube.com/embed/CbhjhWleKGE?si=0diKgwtyac2qHJ2Q',
    'https://www.youtube.com/embed/IrA2xv4vEPM?si=eVHWlE586qERHyWJ',
    'https://www.youtube.com/embed/HWPJUZItq5Q?si=RSLa3hxCtlsisMKU',
  ];
  const videoNames = [
    'Budgeting and Financial Planning',
    'Savings and Emergency Funds',
    'Debt Management',
  ];
  return (
    <div className="allVideos">
      {videoLinks.map((item) => (
        <div className="videoContiner ">
          <iframe
            className="videHolder"
            src={item}
            title={videoNames[videoLinks.indexOf(item)]}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Video;
