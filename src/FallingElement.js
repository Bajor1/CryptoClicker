import logo from './logo.svg';
import './App.css';
import './Components.css';
import { useState, useRef, useEffect } from "react";

function FallingElement() {
  const [translate, setTranslate] = useState({ x: -15, y: -20, r: 0});
  const caseRef = useRef(null);

  //wartosci kierunkowe:
  const [Velocity, setVelocity] = useState([0, 0, 0]);
  const [fallingEnabled, setFallingEnabled] = useState(false);
  const [fallCount, setFallCount] = useState(0);
  useEffect(() => {
    if (!fallingEnabled) return;
    const interval = setInterval(() => {
    FunnyFalling()
    
    setFallCount(prev => {
      if (prev >= 50) {
        clearInterval(interval);
        setFallingEnabled(false);
        return 0;
      }
      return prev + 1;
    });
    }, 15)
    return () => clearInterval(interval)
  }, [fallingEnabled])

  function FunnyFalling()
  {

    setVelocity(prev => {

  const newVelocity = [
    prev[0] + (prev[0] / 100),
    Math.floor(prev[1] - (1 + Math.abs(prev[1]) / 200)),
    prev[2] - (0.001 + Math.abs(prev[2]) / 1000)
  ];

  console.log(newVelocity);

  setTranslate(pos => ({
    x: pos.x + newVelocity[0],
    y: pos.y - newVelocity[1],
    r: pos.r - newVelocity[2]
  }));

  return newVelocity;
});
    //dodaj jakas losowa zmienna kierunku lewo prawo spadania
    //dodaj losowa zmienna obrodu
    //zmienna kierunku góra doł
    // wszystkie zmienna maja miec przyspieczenie, moga to byc useState
    
  }
  function inciateFall(elementID)
  {
    setVelocity([
    (Math.random() - 0.5) * 10, // losowy X [-5,5]
    20,                          // początkowy podskok Y
    (Math.random() - 0.5) * 2   // losowa rotacja
  ]);
  setFallingEnabled(true);
  }

  //teraz dodaj useEffect aby wywolac funkcje spadnai iles razy


  return (
        <div onClick={() => inciateFall(0)} className="FallingElement" 
        ref={caseRef}
        style={{ transform: `translateX(${translate.x}px) translateY(${translate.y}px) rotate(${translate.r}deg)` }}
        ></div>
  );
}

export default FallingElement;
