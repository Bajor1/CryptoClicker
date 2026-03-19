import React, { useState } from "react";
import { X } from "lucide-react";
import "./window.css";

// 🔹 OSOBNY KOMPONENT OKNA
function Window({ title, onClose, children }) {
  return (
    <div className="window">
      <div className="window-header">
        <span>{title}</span>
        <button onClick={onClose}>
          <X size={16} />
        </button>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
}

function Monitor() {
  const [openWindows, setOpenWindows] = useState([]);

  const openApp = (appName) => {
    setOpenWindows((prev) => [
      ...prev,
      { id: Date.now(), name: appName },
    ]);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="bkg">
      <div className="monitor">
        <img src="/monior.png" className="monitor-img" alt="monitor" />

        <div className="screen">
          {/* IKONY */}
          <div className="icon icon1">
            <button onClick={() => openApp("Miner.exe")}>
              <img src="/folderXP_icon.png" alt="miner" />
              <h5>Miner.exe</h5>
            </button>
          </div>

          <div className="icon icon2">
            <button onClick={() => openApp("Internet") }>
              <img src="/internetExplorer_icon.png" alt="internet" />
              <h5>Internet</h5>
            </button>
          </div>

          <div className="icon icon3">
            <button onClick={() => openApp("MarketWatch.exe")}>
              <img src="/folderXP_icon.png" alt="marketWatch" />
              <h5>MarketWatch.exe</h5>
            </button>
          </div>

          <div className="icon icon4">
            <button onClick={() => openApp("My Computer")}>
              <img src="/myComputer_icon.png" alt="MyComputer" />
              <h5>My Computer</h5>
            </button>
          </div>

          <div className="icon icon5">
            <button onClick={() => openApp("Avergainer.exe")}>
              <img src="/folderXP_icon.png" alt="Avergainer" />
              <h5>Avergainer.exe</h5>
            </button>
          </div>

          {/* OKNA */}
          {openWindows.map((win) => (
            <Window
              key={win.id}
              title={win.name}
              onClose={() => closeWindow(win.id)}
            >
              <p>Content of {win.name}</p>
            </Window>
          ))}

          <div className="scanlines"></div>
        </div>
      </div>
    </div>
  );
}

export default Monitor;

