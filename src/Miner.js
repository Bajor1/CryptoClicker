import { useState, useEffect } from "react";
import "./miner.css";


function MinerApp({ onCrash }) {
  const [coins, setCoins] = useState(0);
  const [showAd, setShowAd] = useState(false);

  const mine = () => {
    setCoins(prev => prev + 1);
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setShowAd(true);
    }, 8000); 

    return () => clearInterval(interval);
    }, []);

    const handleFakeClose = () => {
        onCrash(); 
    };

    const handleRealClose = () => {
        setShowAd(false);
    };


  return (
    <div className="miner-app">
      <h2>Crypto Miner v1.0</h2>

      <marquee>🔥 BEST MINER 1998 🔥 FREE DOWNLOAD 🔥 NO VIRUS 🔥</marquee>

        <div className="miner-center">
            <p>Coins mined:</p>
            <h1>⛃{coins}⛃</h1>

            <button onClick={() => setCoins(coins + 1)} className="mine-btn">
             MINE
            </button>
        </div>

      <div className="banner">
         YOU ARE VISITOR #1337420 
      </div>
        {showAd && (
            <div className="virus-ad">
                <div className="virus-box">
                
                <div className="virus-header">
                    <span>Advertisement</span>
                    <button className="close-btn" onClick={handleRealClose}>✖</button>
                </div>

                <div className="virus-content">
                    <h3>⚠️ YOU WON!!! ⚠️</h3>
                    <p>Download FREE RAM now!!!</p>

                    <div className="buttons">
                    <button onClick={handleFakeClose}>Download</button>
                    </div>
                </div>

                </div>
            </div>
        )}
    </div>
  );
}

export default MinerApp;