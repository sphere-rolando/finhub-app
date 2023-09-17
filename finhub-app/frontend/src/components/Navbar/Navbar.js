import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import moneyBag from '../../assets/money-bag.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="navLinks">
        <Link
          className="navLinkItem"
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="news"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          News
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="invetmentPage"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Investment Simulation
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="videos"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Videos
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="books"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Books
        </Link>
        <Link
          className="navLinkItem"
          activeClass="active"
          to="tipsPage"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          Tips
        </Link>
      </div>
      <button
        className="contactNavButton"
        onClick={() => {
          var moveTo = document.getElementsByClassName('contactPage');
          moveTo[0].scrollIntoView({ behavior: 'smooth', duration: '500' });
        }}
      >
        <img src={moneyBag} alt="contact-me-icon" className="navContactMeImg" />
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
