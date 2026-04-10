import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Components from './Components';
import Monitor from './Monitor';
import Shop from './Shop';
import Header from './Header';

function App() {
  const [currentUI, setCurrentUI] = useState("Monitor");
  
  const GPU = [
    {
      id: 0,
      brand: "Compressio",
      name: "GePower GT 1030",
      powerCost: 50,
      computingPower: 10,
      generatedHeat: 30,
      optimalHeat: 50,
      cost: 100
    },
    {
      id: 1,
      brand: "Compressio",
      name: "GePower GTY 1050",
      powerCost: 60,
      computingPower: 15,
      generatedHeat: 40,
      optimalHeat: 60,
      cost: 150
    },
    {
      id: 2,
      brand: "Compressio",
      name: "GePower GTY 1650",
      powerCost: 90,
      computingPower: 20,
      generatedHeat: 80,
      optimalHeat: 95,
      cost: 250
    },
    {
      id: 3,
      brand: "MegaByte",
      name: "GePower GTY 1650",
      powerCost: 90,
      computingPower: 23,
      generatedHeat: 90,
      optimalHeat: 95,
      cost: 260
    },
    {
      id: 4,
      brand: "Acwer",
      name: "GePower GTY 1660",
      powerCost: 110,
      computingPower: 25,
      generatedHeat: 100,
      optimalHeat: 105,
      cost: 300
    },
    {
      id: 5,
      brand: "Compressio",
      name: "GePower GTY 1660",
      powerCost: 150,
      computingPower: 30,
      generatedHeat: 110,
      optimalHeat: 105,
      cost: 300
    },
    {
      id: 6,
      brand: "AXD",
      name: "GePower GTY 1660",
      powerCost: 100,
      computingPower: 25,
      generatedHeat: 100,
      optimalHeat: 105,
      cost: 330
    },
    {
      id: 7,
      brand: "Compressio",
      name: "GePower RTY 2050",
      powerCost: 200,
      computingPower: 40,
      generatedHeat: 150,
      optimalHeat: 155,
      cost: 630
    },
    {
      id: 8,
      brand: "HellForged",
      name: "GeVilPower RTY 2050",
      powerCost: 210,
      computingPower: 50,
      generatedHeat: 200,
      optimalHeat: 165,
      cost: 650
    },
    {
      id: 9,
      brand: "MegaByte",
      name: "GePower RTY 2080",
      powerCost: 240,
      computingPower: 50,
      generatedHeat: 140,
      optimalHeat: 125,
      cost: 800
    },
    {
      id: 10,
      brand: "Compressio",
      name: "GePower RTY 2080",
      powerCost: 270,
      computingPower: 47,
      generatedHeat: 110,
      optimalHeat: 125,
      cost: 790
    },
    {
      id: 11,
      brand: "Compressio",
      name: "GePower RTY 3050",
      powerCost: 300,
      computingPower: 55,
      generatedHeat: 130,
      optimalHeat: 145,
      cost: 1000
    },
    {
      id: 12,
      brand: "Acwer",
      name: "GePower RTY 3050",
      powerCost: 400,
      computingPower: 60,
      generatedHeat: 120,
      optimalHeat: 145,
      cost: 1050
    },
    {
      id: 13,
      brand: "Compressio",
      name: "GePower RTY 3090",
      powerCost: 500,
      computingPower: 100,
      generatedHeat: 200,
      optimalHeat: 210,
      cost: 2500
    },
    {
      id: 14,
      brand: "HellForged",
      name: "GePower RTY 3090",
      powerCost: 530,
      computingPower: 120,
      generatedHeat: 300,
      optimalHeat: 310,
      cost: 2500
    },
    {
      id: 15,
      brand: "HellForged",
      name: "GePower RTY 3090 TURBO",
      powerCost: 430,
      computingPower: 120,
      generatedHeat: 600,
      optimalHeat: 1000,
      cost: 2550
    },
    {
      id: 16,
      brand: "nicorn",
      name: "GePower RTY 3090 U",
      powerCost: 580,
      computingPower: 120,
      generatedHeat: 180,
      optimalHeat: 100,
      cost: 2450
    },
    {
      id: 17,
      brand: "Compressio",
      name: "GePower MGX 5000",
      powerCost: 730,
      computingPower: 200,
      generatedHeat: 280,
      optimalHeat: 300,
      cost: 4050
    },
    {
      id: 18,
      brand: "HellForged",
      name: "GeVilPower MGX 5000",
      powerCost: 700,
      computingPower: 250,
      generatedHeat: 800,
      optimalHeat: 1000,
      cost: 4000
    },
    {
      id: 19,
      brand: "MegaByte",
      name: "GePower MGX 5000",
      powerCost: 800,
      computingPower: 190,
      generatedHeat: 200,
      optimalHeat: 220,
      cost: 3500
    },
    {
      id: 20,
      brand: "[Unsigned]",
      name: "bigBoy 500",
      powerCost: 450,
      computingPower: 150,
      generatedHeat: 400,
      optimalHeat: 420,
      cost: 3200
    },
    {
      id: 21,
      brand: "[Unsigned]",
      name: "smallBoy 500",
      powerCost: 300,
      computingPower: 140,
      generatedHeat: 400,
      optimalHeat: 100,
      cost: 2900
    }
  ];


  const motherboard = [
    {
      id:0,
      brand: "Nicorn",
      name: "U400",
      slots: 2,
      chipset: "AXD",
      cost: 800
    },
    {
      id:1,
      brand: "MegaByte",
      name: "Sparrow K600 X4D gameON",
      slots: 2,
      chipset: "Incel",
      cost: 850
    },
    {
      id:2,
      brand: "MegaByte",
      name: "Parrot P300 Y4 RR",
      slots: 3,
      chipset: "Incel",
      cost: 1300
    },
    {
      id:3,
      brand: "AsBoulder",
      name: "b500n PRO",
      slots: 3,
      chipset: "AXD",
      cost: 1400
    },
    {
      id:4,
      brand: "NSI",
      name: "H120 Gaming+",
      slots: 4,
      chipset: "AXD",
      cost: 2000
    },
    {
      id:5,
      brand: "NSI",
      name: "H220 Gaming-",
      slots: 5,
      chipset: "Intel",
      cost: 2400
    },
    {
      id:6,
      brand: "好主板",
      name: "中国共产党 商用电脑",
      slots: 5,
      chipset: "[Integrated] 邪恶处理器",
      cost: 1500
    },
    {
      id:7,
      brand: "Nicorn",
      name: "U600 PRO",
      slots: 6,
      chipset: "Intel",
      cost: 4000
    },
  ];

  const powerSupply = [
    {
      id:0,
      brand:"BurglarPower",
      name:"V1 Super Platinum DELUXE gaming X3000",
      powerOutput:"300W",
      generatedHeat: 70,
      optimalHeat: 50,
      cost: 200
    },
    {
      id:1,
      brand:"BurglarPower",
      name:"V2 Ultra energy W800 PERFORMENCE",
      powerOutput:"450W",
      generatedHeat: 80,
      optimalHeat: 60,
      cost: 350
    },
    {
      id:2,
      brand:"BurglarPower",
      name:"V3 Turbo Max ECO Power Boost",
      powerOutput:"500W",
      generatedHeat: 90,
      optimalHeat: 75,
      cost: 430
    },

    {
      id:3,
      brand:"Buccaneer",
      name:"PX200",
      powerOutput:"350W",
      generatedHeat: 40,
      optimalHeat: 50,
      cost: 300
    },
    {
      id:4,
      brand:"Buccaneer",
      name:"PX300eco",
      powerOutput:"650W",
      generatedHeat: 80,
      optimalHeat: 90,
      cost: 600
    },
    {
      id:5,
      brand:"Buccaneer",
      name:"TR500",
      powerOutput:"1000W",
      generatedHeat: 100,
      optimalHeat: 105,
      cost: 800
    },
    {
      id:6,
      brand:"LoudiumPC",
      name:"Primo 500",
      powerOutput:"500W",
      generatedHeat: 50,
      optimalHeat: 80,
      cost: 450
    },
    {
      id:7,
      brand:"LoudiumPC",
      name:"Turbo 600 SUPER",
      powerOutput:"750W",
      generatedHeat: 70,
      optimalHeat: 100,
      cost: 800
    },
    {
      id:8,
      brand:"HellForged",
      name:"Evil Wizards Mana Forge 3000",
      powerOutput:"1500W",
      generatedHeat: 300,
      optimalHeat: 100,
      cost: 700
    },
    {
      id:9,
      brand:"[Unsigned]",
      name:'\"I found this in my garage\"',
      powerOutput:"700W",
      generatedHeat: 200,
      optimalHeat: 50,
      cost: 500
    },
    {
      id:10,
      brand:"MegaByte",
      name:"750W G500F40 Gigantic Power",
      powerOutput:"749W",
      generatedHeat: 130,
      optimalHeat: 200,
      cost: 800
    },
    {
      id:11,
      brand:"MegaByte",
      name:"1200W V700X23F Turbo",
      powerOutput:"749W",
      generatedHeat: 200,
      optimalHeat: 300,
      cost: 1300
    }
  ];

  const cooling = [
    {
      id:0,
      brand: "LoudiumPC",
      name: "CoolPack v1",
      cooling: 20,
      powerCost: 5,
      cost: 20
    }
  ]

    const [bitCoin, setBitCoin] = useState(0);
    const [money, setMoney] = useState(0);
    const [BitCoinIncome, setBitCoinIncome] = useState(0);

    const [selectedMotherboardID, setSelectedMotherboardID] = useState(-1);
    const [selectedPowerSupplyID, setSelectedPowerSupplyID] = useState(-1);
    const [selectedCoolingID, setSelectedCoolingID] = useState(0);
    const [selectedGPUsID, setSelectedGPUsID] = useState([0]);
    const [minRandomGenValue, setMinRandomGenValue] = useState(0.6);
    const [maxRandomGenValue, setMaxRandomGenValue] = useState(1);

    const [stashedGPUs, setStashedGPUs] = useState([2, 1, 1]);
    const [stashedPowerSupplies, setStashedPowerSupplies] = useState([0,1,2,3,4,5,6,7,8,9,10,11]);
    const [stashedCoolings, setStashedCoolings] = useState([0]);
    const [stashedMotherboards, setStashedMotherboards] = useState([1,2,3,4,5,6,7]);



    function changeComponent(type, insertedComponentID, stashedComponentID, slot)
    {
      switch(type)
      {
        case "motherboard":
        {
          if (selectedMotherboardID == -1)
          {
            setSelectedMotherboardID(insertedComponentID);
            break;
          }
          setStashedMotherboards(prev => 
            prev.filter(id => id !== insertedComponentID)
          );
          setStashedMotherboards(prev => 
            [...prev, selectedMotherboardID]
          );
          setSelectedMotherboardID(insertedComponentID);
          break;
        }
        case "GPU":
        {

          break;
        }
        case "powerSupply":
        {
          if (selectedPowerSupplyID == -1)
          {
            setSelectedPowerSupplyID(insertedComponentID);
            break;
          }
          setStashedPowerSupplies(prev => 
            prev.filter(id => id !== insertedComponentID)
          );
          setStashedPowerSupplies(prev => 
            [...prev, selectedPowerSupplyID]
          );
          setSelectedPowerSupplyID(insertedComponentID);
          break;
        }
        case "cooling":
        {

          break;
        }
        default:
        {

          break;
        }
      }
    }

    function calculateIncome()
    {
      let currentTickIncome = 0;
      for (let i = 0; i<=motherboard[selectedMotherboardID].slots-1; i++) //wykonuje sie tyle razy ile jest slotow na GPU na plycie glownej
      {
        //liczenie roznicy 
      }


      for (let i = 0; i<=motherboard[selectedMotherboardID].slots-1; i++) //wykonuje sie tyle razy ile jest slotow na GPU na plycie glownej
      {
        //liczenie przychodu
        if (selectedGPUsID[i] != -1)
        {
          //currentTickIncome += GPU[selectedGPUsID[i]].computingPower * (Math.floor((Math.random()* (max-min) + min)*100)/100) /10000000
        }
        else
        {
          //brak GPU na slocie
        }
      }
    }
  return (
    <div className="App">
      <Header setUI = {setCurrentUI}></Header>
      {currentUI == "Monitor" ? <Monitor></Monitor> : 
      currentUI == "Components" ? <Components 
        //wszystkie posiadanie komponenty
        stashedCoolings={stashedCoolings} 
        stashedPowerSupplies={stashedPowerSupplies} 
        stashedGPUs={stashedGPUs}
        stashedMotherboards={stashedMotherboards}

        //obecnie wlozone komponenty
        selectedCoolingID={selectedCoolingID}
        selectedPowerSupplyID={selectedPowerSupplyID}
        selectedGPUsID={selectedGPUsID}
        selectedMotherboardID={selectedMotherboardID}
        
        //stale wartosci
        cooling={cooling}
        powerSupply={powerSupply}
        GPU={GPU}
        motherboard={motherboard}

        //funkcje
        calculateIncome={calculateIncome}
        changeComponent={changeComponent}
        
        ></Components> : 
    /*currentUI == "Shop" (else statement)*/ <Shop></Shop> }
    </div>
  );
}

export default App;
