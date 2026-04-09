import { useEffect, useState, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import "./market.css";

function MarketWatch({ coins, onSell }) {
  const [data, setData] = useState([]);

  const chartRef = useRef();
  const chartInstance = useRef(null);
  const seriesRef = useRef(null);
  const timeRef = useRef(1);

  const currentPrice = data[data.length - 1]?.close || 0;

  useEffect(() => {
  const interval = setInterval(() => {
    setData(prev => {
      const lastClose = prev[prev.length - 1]?.close || 5;

      const open = lastClose;
      let close = open + (Math.random() - 0.5) * 0.8;
      close = Math.max(2, Math.min(10, close));
      const high = Math.max(open, close) + Math.random() * 0.5;
      const low = Math.min(open, close) - Math.random() * 0.5;

      const next = {
        time: timeRef.current,
        open,
        high,
        low,
        close
      };

      timeRef.current += 1;

      return [...prev.slice(-99), next];
    });
  }, 3000);

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: 400,
      height: 150,
      layout: {
        background: { color: "#1e1e1e" },
        textColor: "#DDD",
      },
      grid: {
        vertLines: { color: "#333" },
        horzLines: { color: "#333" },
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#4caf50",
      downColor: "#f44336",
      borderVisible: false,
      wickUpColor: "#4caf50",
      wickDownColor: "#f44336",
    });

    chartInstance.current = chart;
    seriesRef.current = candleSeries;

    return () => chart.remove();
  }, []);

  useEffect(() => {
    if (seriesRef.current) {
      seriesRef.current.setData(
        data.map(d => ({
          time: d.time,
          open: d.open,
          high: d.high,
          low: d.low,
          close: d.close,
        }))
      );
    }
  }, [data]);

  return (
    <div className="market-app">
      <h2>MarketWatch</h2>

      <p>Coins available to sell: {coins}</p>

      <div ref={chartRef} style={ { border: "2px solid #4caf50", // kolor i grubość borderu
    borderRadius: "4px",          // opcjonalnie zaokrąglone rogi
    boxSizing: "border-box"}}/>

      <h3 style={{ color: "#4caf50" }}>
        Coin value: ${currentPrice.toFixed(2)}
      </h3>

      <button className="sell-btn" onClick={() => onSell(currentPrice)}>Sell Coins</button>
    </div>
  );
}

export default MarketWatch;