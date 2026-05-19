import "./shop.css";
import './Components.css';
import bg from "./misc/sklep_bkg.png";
import regal from "./misc/regal.png";
import { useState, useEffect } from "react";

import shopkeeperIdle from "./misc/bart_palec.png";
import shopkeeperTalk from "./misc/bart_palec_buzia.png";

export default function Shop(props) {

  const [randomizedGPUs, setRandomizedGPUs] = useState([0,0,0,0,0,0]);
  const [randomizedPowerSupplies, setRandomizedPowerSupplies] = useState([0, 0, 0, 0]);
  const [randomizedMotherboards, setRandomizedMotherboards] = useState([0, 0]);
  const [randomizedCoolings, setRandomizedCoolings] = useState([0, 0]);


  const [shopkeeperTalking, setShopkeeperTalking] = useState(false);
  const [shopkeeperText, setShopkeeperText] = useState("");
  
  function randomizeShop()
  {
    setRandomizedGPUs([]);
    for (let i=0; i<6; i++)
    {
      setRandomizedGPUs(prev => prev.concat(Math.floor(Math.random()*(props.GPU.length))));
    }
    setRandomizedPowerSupplies([]);
    for (let i=0; i<4; i++)
    {
      setRandomizedPowerSupplies(prev => prev.concat(Math.floor(Math.random()*(props.powerSupply.length))));
    }
    setRandomizedMotherboards([]);
    for (let i=0; i<2; i++)
    {
      setRandomizedMotherboards(prev => prev.concat(Math.floor(Math.random()*(props.motherboard.length))));
    }
    setRandomizedCoolings([]);
    for (let i=0; i<2; i++)
    {
      setRandomizedCoolings(prev => prev.concat(Math.floor(Math.random()*(props.cooling.length))));
    }
  }

  function buyComponent(type, componentID, cost)
{
  switch(type)
  {
    case "GPU":
    {
      props.setStashedGPUs(prev =>
        [...prev, componentID]
      );
      setRandomizedGPUs(prev =>
        prev.filter(id => id !== componentID)
      );
      break;
    }
    case "powerSupply":
    {
      props.setStashedPowerSupplies(prev =>
        [...prev, componentID]
      );
      setRandomizedPowerSupplies(prev =>
        prev.filter(id => id !== componentID)
      );
      break;
    }
    case "motherboard":
    {
      props.setStashedMotherboards(prev =>
        [...prev, componentID]
      );
      setRandomizedMotherboards(prev =>
        prev.filter(id => id !== componentID)
      );
      break;
    }
    case "cooling":
    {
      props.setStashedCoolings(prev =>
        [...prev, componentID]
      );
      setRandomizedCoolings(prev =>
        prev.filter(id => id !== componentID)
      );
      break;
    }
    default:
      break;
  }
}

  useEffect(() => {
  
    randomizeShop();
  
    const interval = setInterval(() => {
      randomizeShop();
    }, 300000);
  
    return () => clearInterval(interval);
  
  }, []);


  function shopkeeperSpeak(text)
  {
    setShopkeeperText(text);

    let talking = true;
    let count = 0;

    const interval = setInterval(() => {
      setShopkeeperTalking(prev => !prev);

      count++;

      if (count > 8)
      {
        clearInterval(interval);

        setShopkeeperTalking(false);

        setTimeout(() => {
          setShopkeeperText("");
        }, 1500);
      }
    }, 120);
  }


  return (
    <div
      className="shop"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="shelves">

        <div className="GPUShelf">
  {randomizedGPUs.map((gpuID, index) => (
    <div
      key={index}
      className="shopItem"

      onMouseEnter={() =>
      shopkeeperSpeak(
        `Nowiutki ${props.GPU[gpuID].name}! Tylko ${props.GPU[gpuID].cost}$!`
      )
    }

      onClick={() =>
        buyComponent(
          "GPU",
          gpuID,
          props.GPU[gpuID].cost
        )
      }
    >
      <div className="shopTextFormating">
        <h3 className="shopItemBrand">
          {props.GPU[gpuID].brand}
        </h3>

        <p className="shopItemName">
          {props.GPU[gpuID].name}
        </p>
      </div>

      <p className="shopItemCost">
        ${props.GPU[gpuID].cost}
      </p>

      <div className="visual" style={{ marginTop: "-100%"}}>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
      </div>
    </div>
  ))}
</div>
<div className="powerSupplyShelf">
  {randomizedPowerSupplies.map((psuID, index) => (
    <div
      key={index}
      className="shopItem"

      onMouseEnter={() =>
        shopkeeperSpeak(
          `Nowiutki ${props.powerSupply[psuID].name}! Tylko ${props.powerSupply[psuID].cost}$!`
        )
      }

      onClick={() =>
        buyComponent(
          "powerSupply",
          psuID,
          props.powerSupply[psuID].cost
        )
      }
    >
      <div className="shopTextFormating">

        <h3 className="shopItemBrand">
          {props.powerSupply[psuID].brand}
        </h3>

        <p className="shopItemName">
          {props.powerSupply[psuID].name}
        </p>

      </div>

      <p className="shopItemCost">
        ${props.powerSupply[psuID].cost}
      </p>

      <div className="visual" style={{ marginTop: "-100%"}}>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
      </div>

    </div>
  ))}
</div>
<div className="motherboardShelf">
  {randomizedMotherboards.map((mbID, index) => (
    <div
      key={index}
      className="shopItem"

      onMouseEnter={() =>
        shopkeeperSpeak(
          `Nowiutki ${props.motherboard[mbID].name}! Tylko ${props.motherboard[mbID].cost}$!`
        )
      }

      onClick={() =>
        buyComponent(
          "motherboard",
          mbID,
          props.motherboard[mbID].cost
        )
      }
    >
      <div className="shopTextFormating">

        <h3 className="shopItemBrand">
          {props.motherboard[mbID].brand}
        </h3>

        <p className="shopItemName">
          {props.motherboard[mbID].name}
        </p>

      </div>

      <p className="shopItemCost">
        ${props.motherboard[mbID].cost}
      </p>

      <div className="visual" style={{ marginTop: "-100%"}}>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
      </div>

    </div>
  ))}
</div>
<div className="coolingShelf">
  {randomizedCoolings.map((coolingID, index) => (
    <div
      key={index}
      className="shopItem"
      onClick={() =>
        buyComponent(
          "cooling",
          coolingID,
          props.cooling[coolingID].cost
        )
      }
    >
      <div className="shopTextFormating">

        <h3 className="shopItemBrand">
          {props.cooling[coolingID].brand}
        </h3>

        <p className="shopItemName">
          {props.cooling[coolingID].name}
        </p>

      </div>

      <p className="shopItemCost">
        ${props.cooling[coolingID].cost}
      </p>

      <div className="visual" style={{ marginTop: "-100%"}}>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
        <div className="effectApplier"></div>
      </div>

    </div>
  ))}
</div>

<div className="shopkeeperContainer">

  <img
    src={
      shopkeeperTalking
      ? shopkeeperTalk
      : shopkeeperIdle
    }
    className="shopkeeper"
    alt="shopkeeper"
  />

  {shopkeeperText !== "" && (
    <div className="speechBubble">
      {shopkeeperText}
    </div>
  )}

</div>

      </div>
    </div>
  );
}