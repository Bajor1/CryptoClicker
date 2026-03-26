import './App.css'
import './Monitor.css'
import bg from './misc/bkg_stol.png';
import "./window.css";
import React, { useState, useRef } from 'react';
import { X } from "lucide-react";

function Window({ title, onClose, children, onFocus, zIndex }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 300, height: 200 });

  const [isMaximized, setIsMaximized] = useState(false);
  const [prevState, setPrevState] = useState(null);

  const dragging = useRef(false);
  const resizing = useRef(false);

  const offset = useRef({ x: 0, y: 0 });
  const windowRef = useRef(null);

  // ---------------- DRAG ----------------
  const handleMouseDown = (e) => {
    if (isMaximized) return;

    dragging.current = true;
    onFocus();

    const rect = windowRef.current.getBoundingClientRect();

    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const screen = document.querySelector(".screen");
    const screenRect = screen.getBoundingClientRect();
    const winRect = windowRef.current.getBoundingClientRect();

    let newX = e.clientX - screenRect.left - offset.current.x;
    let newY = e.clientY - screenRect.top - offset.current.y;

    newX = Math.max(0, Math.min(newX, screenRect.width - winRect.width));
    newY = Math.max(0, Math.min(newY, screenRect.height - winRect.height));

    setPos({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // ---------------- RESIZE ----------------
  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    resizing.current = true;

    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeUp);
  };

  const handleResizeMove = (e) => {
    if (!resizing.current || isMaximized) return;

    const screen = document.querySelector(".screen");
    const screenRect = screen.getBoundingClientRect();

    let newWidth = e.clientX - windowRef.current.getBoundingClientRect().left;
    let newHeight = e.clientY - windowRef.current.getBoundingClientRect().top;

    newWidth = Math.max(200, Math.min(newWidth, screenRect.width));
    newHeight = Math.max(100, Math.min(newHeight, screenRect.height));

    setSize({ width: newWidth, height: newHeight });
  };

  const handleResizeUp = () => {
    resizing.current = false;
    document.removeEventListener("mousemove", handleResizeMove);
    document.removeEventListener("mouseup", handleResizeUp);
  };

  // ---------------- MAXIMIZE ----------------
  const toggleMaximize = () => {
    const screen = document.querySelector(".screen");

    if (!isMaximized) {
      setPrevState({
        x: pos.x,
        y: pos.y,
        width: size.width,
        height: size.height,
      });

      setPos({ x: 0, y: 0 });
      setSize({
        width: screen.clientWidth,
        height: screen.clientHeight,
      });
    } else {
      setPos({ x: prevState.x, y: prevState.y });
      setSize({
        width: prevState.width,
        height: prevState.height,
      });
    }

    setIsMaximized(!isMaximized);
  };

  return (
    <div
      ref={windowRef}
      className="window"
      style={{
        top: pos.y,
        left: pos.x,
        zIndex,
        position: 'absolute',
        width: size.width,
        height: size.height
      }}
      onMouseDown={onFocus}
    >
      <div
        className="window-header"
        onMouseDown={handleMouseDown}
        onDoubleClick={toggleMaximize}
      >
        <span>{title}</span>

        <div className="window-buttons">
          <button onClick={toggleMaximize} className='window-button'>
            {isMaximized ? "🗗" : "☐"}
          </button>

          <button onClick={onClose} className='window-button'>
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="window-content">
        {children}
      </div>

      <div
        className="resize-handle"
        onMouseDown={handleResizeMouseDown}
      />
    </div>
  );
}


function Monitor() {
  const [openWindows, setOpenWindows] = useState([]);
  const [zCounter, setZCounter] = useState(10);

  const openApp = (appName) => {
    
    if (openWindows.some(w => w.name === appName)) {
      bringToFront(openWindows.find(w => w.name === appName).id);
      return;
    }

    setZCounter((z) => z + 1);
    setOpenWindows((prev) => [
      ...prev,
      { id: Date.now(), name: appName, z: zCounter + 1 },
    ]);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const bringToFront = (id) => {
    setZCounter((z) => z + 1);
    setOpenWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, z: zCounter + 1 } : w
      )
    );
  };

  return (
    <div className="bkg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="monitor">
        <img src="/monior.png" className="monitor-img" alt="monitor" />

        <div className="screen">
          <div className="icon icon1">
            <button onClick={() => openApp("Miner.exe")}>
              <img src="/folderXP_icon.png" alt="miner" />
              <h5>Miner.exe</h5>
            </button>
          </div>

          <div className="icon icon2">
            <button onClick={() => openApp("Internet")}>
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

          {openWindows.map((win) => (
            <Window
              key={win.id}
              title={win.name}
              zIndex={win.z}
              onFocus={() => bringToFront(win.id)}
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