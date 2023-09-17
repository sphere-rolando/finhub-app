import React from 'react';
import { createContext, useEffect, useState } from 'react';
import '../../components/Books/Books.css';
import thinkngrow from '../../assets/thinkngrow.jpg';
import themillionaire from '../../assets/themillionaire.jpg';
import richdad from '../../assets/richdad.jpg';
import richestman from '../../assets/richestman.jpg';
import iti from '../../assets/theintelligentinvest.jpg';
import iwtiy from '../../assets/iwillteachyou.jpg';
import { Link } from 'react-router-dom';

function Book() {
    const bookLinks = ["https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612681131/ref=sr_1_1?crid=15VWUCE3F4M94&keywords=rich+dad+poor+dad&qid=1694873822&sprefix=rich+dad%2Caps%2C107&sr=8-1", "https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331/ref=sr_1_1?crid=QQYG2ICBGXA3&keywords=think+and+grow+rich+book&qid=1694873845&sprefix=think+and%2Caps%2C109&sr=8-1", "https://www.amazon.com/Richest-Man-Babylon-Original-Classics/dp/B0C1J5ML66/ref=sr_1_1?crid=3GOVPEOETZRX0&keywords=the+richest+man+in+babylon&qid=1694873859&sprefix=The+riches%2Caps%2C105&sr=8-1", "https://www.amazon.com/Millionaire-Next-Door-Surprising-Americas/dp/1630762504/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1694873907&sr=8-1", "https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661/ref=sr_1_1?crid=1RD1FCMFBQ0FZ&keywords=the+intelligent+investor&qid=1694874032&sprefix=the+intell%2Caps%2C102&sr=8-1", "https://www.amazon.com/Will-Teach-You-Rich-Second/dp/1523505745/ref=sr_1_1?crid=39F3BXD8Y20ON&keywords=i+will+teach+you+to+be+rich&qid=1694874051&sprefix=I+wil%2Caps%2C98&sr=8-1"]
    const bookNames = ["Rich Dad, Poor Dad","Think and Grow Rich", "The Richest Man in Babylon", "The Millionaire Next Door", "The Intelligent Investor", "I Will Teach You To Be Rich"]
    const images = [richdad, thinkngrow, richestman, themillionaire, iti, iwtiy]
  return (
    <div className="allBooks">
      {bookLinks.map((item) => (
        <div className="bookContiner ratio ratio-4x3">
          <a href={item}><img src={images[bookLinks.indexOf(item)]} alt={bookNames[bookLinks.indexOf(item)]}></img></a>
        </div>
      ))}
    </div>
  );
}

export default Book;
