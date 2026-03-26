import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Components from './Components';
import Monitor from './Monitor';
import Shop from './Shop';
import Header from './Header';

function App() {
  const [currentUI, setCurrentUI] = useState("Monitor");
  

  
  return (
    <div className="App">
      <Header setUI = {setCurrentUI}></Header>
      {currentUI == "Monitor" ? <Monitor></Monitor> : 
      currentUI == "Components" ? <Components></Components> : 
    /*currentUI == "shop"*/ <shop></shop> 
      }
    </div>
  );
}

export default App;
