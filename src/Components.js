import logo from './logo.svg';
import './App.css';
import './Components.css';
import { useState, useRef, useEffect } from "react";

function Components() {
  const [translate, setTranslate] = useState({ x: -15, y: -20 });
  const caseRef = useRef(null);
  function FunnyFalling()
  {
    setTranslate(prev => ({ x: prev.x - 15, y: prev.y - 15 }));
    //dodaj jakas losowa zmienna kierunku lewo prawo spadania
    //dodaj losowa zmienna obrodu
    //zmienna kierunku góra doł
    // wszystkie zmienna maja miec przyspieczenie, moga to byc useState
    
  }

  //teraz dodaj useEffect aby wywolac funkcje spadnai iles razy


  return (
    <div className="Components">
      <div className="case">
        <div onClick={FunnyFalling} className="caseCover" 
        ref={caseRef}
        style={{ transform: `translateX(${translate.x}px) translateY(${translate.y}px)` }}
        ></div>
      </div>
    </div>
  );
}

export default Components;
