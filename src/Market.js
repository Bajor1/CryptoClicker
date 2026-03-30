import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./market.css";

function MarketWatch({ coins, onSell }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const nextPrice = Math.max(1, (prev[prev.length-1]?.price || 100) + (Math.random()*20 - 10));
        return [...prev.slice(-19), { time: prev.length + 1, price: nextPrice }];
      });
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="market-app">
      <h2>MarketWatch</h2>
      <p>Coins available to sell: {coins}</p>

      <LineChart width={500} height={150} data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" hide />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
      </LineChart>

      <button className="sell-btn" onClick={onSell}>Sell Coins</button>
    </div>
  );
}

export default MarketWatch;