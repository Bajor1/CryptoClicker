import { useEffect, useState, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import "./market.css";

function MarketWatch({ coins, onSell, data }) {
  const chartRef = useRef();
  const chartInstance = useRef(null);
  const seriesRef = useRef(null);

  const [popup, setPopup] = useState(null);

  const currentPrice = data[data.length - 1]?.close || 0;


  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: 400,
      height: 180,
      layout: {
        background: { color: "#0f172a" },
        textColor: "#cbd5e1",
      },
      grid: {
        vertLines: { color: "#1e293b" },
        horzLines: { color: "#1e293b" },
      },
      rightPriceScale: {
        borderColor: "#334155",
      },
      timeScale: {
        borderColor: "#334155",
        rightOffset: 5,
        barSpacing: 12,
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderVisible: false,
      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    });

    chartInstance.current = chart;
    seriesRef.current = candleSeries;

    return () => chart.remove();
  }, []);

  
  useEffect(() => {
    if (seriesRef.current && data.length > 0) {
      seriesRef.current.setData(data);
    }
  }, [data]);

  const handleSell = () => {
    const value = coins * currentPrice;

    setPopup({
      value,
    });

    onSell(currentPrice);
  }
  

  return (
    <div className="market-app">
      <h2>MarketWatch</h2>

      <p>Coins available to sell: {coins}</p>

      <div ref={chartRef} style={ { border: "2px solid #4caf50", borderRadius: "4px", boxSizing: "border-box"}}/>

      <h3 style={{ color: "#4caf50" }}>
        Coin value: ${currentPrice.toFixed(2)}
      </h3>

      <button className="sell-btn" onClick={() => {
        const value = coins * currentPrice;

        setPopup({
        value,
        });

        onSell(currentPrice);
      }}>Sell coins</button>
      {popup && (
        <div className="crt-overlay">
          <div className="crt-window">

            <div className="crt-header">
              <span>MARKET.SYS</span>
              <button onClick={() => setPopup(null)}>✕</button>
            </div>

            <div className="crt-body">
              <p className="crt-line">> EXECUTING TRANSACTION...</p>
              <p className="crt-line success">> SUCCESS</p>

              <div className="crt-amount">
                +${popup.value.toFixed(2)}
              </div>

              <p className="crt-line">> COINS SOLD</p>
            </div>

            <div className="crt-footer">
              <button onClick={() => setPopup(null)}>
                OK
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
    
  );
}

export default MarketWatch;