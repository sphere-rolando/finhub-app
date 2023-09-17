import React from 'react';
import '../src/Landing.css';
import logo from '../src/assets/logo.png';
import leftImage from '../src/assets/Green-in-Jumper11.png';
import leftImage2 from '../src/assets/Green-in-Jumper12.png';
import leftImage3 from '../src/assets/Green-in-Jumper3.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `Home`;
    navigate(path);
  };

  return (
    <div className="landingContainer">
      <img src={logo} alt="logo" className="logoLand" />
      <button className="conatactUs" onClick={routeChange}>
        Contact us
      </button>

      <div className="textContainer">
        <span className="landingTitle-brand"> FinHub </span>
        <span className="landingTitle-title">
          {' '}
          Your Gateway to <br />
          Financial Empowerment
        </span>
        <span className="desc">
          {' '}
          <br />
          FinHub is your trusted partner for mastering personal finance. Explore
          our suite of tools and resources to take charge of your financial
          future
        </span>
      </div>

      <span className="descLanding"></span>
      <div className="imgContainer">
        <img src={leftImage} alt=" dolllar-sign-image" className="leftImage" />
        <img
          src={leftImage2}
          alt=" dolllar-sign-image"
          className="leftImage2"
        />
        <img
          src={leftImage3}
          alt=" dolllar-sign-image"
          className="leftImage3"
        />
      </div>
      <button className="landingButton" onClick={routeChange}>
        Get started
      </button>
    </div>
  );
};

export default LandingPage;
