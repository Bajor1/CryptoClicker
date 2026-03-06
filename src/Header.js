import logo from './logo.svg';
import './App.css';
import './Header.css';
import { useState, useEffect } from 'react';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", getWidth);

    return() => window.removeEventListener("resize", getWidth)
  }, []);

  return (
    <div className="Header">
      <div className="headerBG">
        {Array.from({ length: Math.floor(width/60)+3 }).map((_, i) => (
          <div key={i} className="bigTile"  style={{ animationDelay: `${Math.random(Math.random)*10}s` }}></div>
        ))}
      </div>
      <div className="headerBG2">
        {Array.from({ length: Math.floor(width/60)+3 }).map((_, i) => (
          <div key={i} className="bigTile"  style={{ animationDelay: `${Math.random(Math.random)*10}s` }}></div>
        ))}
      </div>
      <div className='headerBG'>
        <div className="smallTile"></div>
      </div>
      <h1>Crypto Clicker</h1>
    </div>
  );
}

export default Header;
