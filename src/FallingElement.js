import logo from './logo.svg';
import './App.css';
import './Components.css';
import { useState, useRef, useEffect } from "react";

function FallingElement(props) {
  const [translate, setTranslate] = useState({ x: -15, y: -20, r: 0});
  const caseRef = useRef(null);

  //wartosci kierunkowe:
  const [Velocity, setVelocity] = useState([0, 0, 0]);
  const [fallingEnabled, setFallingEnabled] = useState(false);
  const [unscrewEnabled, setUnscrewEnabled] = useState(false);
  const [unscrewHappened, setUnscrewHappened] = useState(false);
  const [fallCount, setFallCount] = useState(0);
  useEffect(() => {
    if (!fallingEnabled) return;
    const interval = setInterval(() => {
    FunnyFalling()
    
    setFallCount(prev => {
      if (prev >= 150) {
        clearInterval(interval);
        setFallingEnabled(false);
        return 0;
      }
      return prev + 1;
    });
    }, 15)
    return () => {
      clearInterval(interval);

    }
  }, [fallingEnabled])

  // tylko do SCREW ==============================================================
  useEffect(() => {
    if (!unscrewEnabled) return;
    const interval = setInterval(() => {
    
      // obrot
      setVelocity(prev => {
      const newVelocity = [
        prev[0],
        prev[1],
        prev[2] - (0.1 + Math.abs(prev[2]) / 100)
      ];
    
      console.log(newVelocity);
    
      setTranslate(pos => ({
        x: pos.x + newVelocity[0],
        y: pos.y - newVelocity[1],
        r: pos.r - newVelocity[2]
      }));
    
      return newVelocity;
    });
    
    setFallCount(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        setUnscrewEnabled(false);
        return 0;
      }
      return prev + 1;
    });
    }, 15)
    return () => {
  clearInterval(interval);
  setUnscrewHappened(true);
};
  }, [unscrewEnabled])
 // ==============================================================================
  function FunnyFalling()
  {
    setVelocity(prev => {
      const newVelocity = [
        prev[0] + (prev[0] / 100),
        Math.floor(prev[1] - (1 + Math.abs(prev[1]) / 200)),
        prev[2] + (0.01 + Math.abs(prev[2]) / 100)
      ];
    
      console.log(newVelocity);
    
      setTranslate(pos => ({
        x: pos.x + newVelocity[0],
        y: pos.y - newVelocity[1],
        r: pos.r - newVelocity[2]
      }));
    
      return newVelocity;
    });
  }

  function IniciateScrewRotation()
  {
    if (unscrewHappened == true)
    {
      inciateFall();
    }
    else
    {
      setUnscrewEnabled(true);
    }
  }

      //pamietaj

      //dodaj jakas losowa zmienna kierunku lewo prawo spadania
      //dodaj losowa zmienna obrodu
      //zmienna kierunku góra doł
      // wszystkie zmienna maja miec przyspieczenie, moga to byc useState
    
//===================================================================
//      dodaj przed wykonaniem funyfalling dla screw
//===================================================================

//setVelocity(prev => {
//
//        const newVelocity = [
//          prev[0],
//          prev[1],
//          prev[2] + 0.1
//        ];
//      
//        console.log(newVelocity);
//      
//        setTranslate(pos => ({
//          x: pos.x,
//          y: pos.y,
//          r: pos.r + newVelocity[2]
//        }));
//      
//        return newVelocity;
//      });
  function inciateFall()
  {
    setVelocity([
    (Math.random() - 0.5) * 10, // losowy X [-5,5]
    20,                          // początkowy podskok Y
    (Math.random() - 0.5) * 2   // losowa rotacja
  ]);
  setFallingEnabled(true);
  props.props[1]();
  }

  //teraz dodaj useEffect aby wywolac funkcje spadnai iles razy


  return (
        <div onClick={props.props[0] == "screw" ? IniciateScrewRotation : inciateFall } className={props.props[0]}
        ref={caseRef}
        style={{ transform: `translateX(${translate.x}px) translateY(${translate.y}px) rotate(${translate.r}deg)` }}
        ></div>
  );
}

export default FallingElement;
