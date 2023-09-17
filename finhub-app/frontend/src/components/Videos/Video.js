import React from 'react';
import { createContext, useEffect, useState } from 'react';
import '../../components/Videos/Videos.css';
import { Link } from 'react-router-dom';

function Video() {
    const videoLinks = ["https://www.youtube.com/embed/CbhjhWleKGE?si=0diKgwtyac2qHJ2Q", "https://www.youtube.com/embed/IrA2xv4vEPM?si=eVHWlE586qERHyWJ", "https://www.youtube.com/embed/HWPJUZItq5Q?si=RSLa3hxCtlsisMKU", "https://www.youtube.com/embed/Z3I8TPYn4Z0?si=xI-Un_lHHt-ssS74", "https://www.youtube.com/embed/P1D9zvd04eM?si=Il6L0Ci83OLmKym1", "https://www.youtube.com/embed/3ctoSEQsY54?si=iFvQL_I3Xeofnb20"]
    const videoNames = ["Budgeting and Financial Planning","Savings and Emergency Funds", "Debt Management", "Retirement Planning", "Taxes", "Insurance"]
  return (
    <div className="allVideos">
      {videoLinks.map((item) => (
        <div className="videoContiner ratio ratio-4x3">
          <iframe src={item} title={videoNames[videoLinks.indexOf(item)]} allowFullScreen></iframe>
        </div>
      ))}
    </div>
  );
}

export default Video;
