import "./shop.css";
import "./Components.css";
import bg from "./misc/sklep_bkg.png";
import { useState, useEffect, useRef } from "react";

import shopkeeperIdle from "./misc/bart.png";
import shopkeeperTalkClosed from "./misc/bart_palec.png";
import shopkeeperTalkOpen from "./misc/bart_palec_buzia.png";
import shopkeeperBuy from "./misc/bart_pistolety.png";

export default function Shop(props) {
  const [shopkeeperState, setShopkeeperState] = useState("idle");
  const [shopkeeperText, setShopkeeperText] = useState("");

  const talkIntervalRef = useRef(null);

  // ---------------- SHOP DATA (FROM APP) ----------------
  const GPU = props.GPU || [];
  const PSU = props.powerSupply || [];
  const MB = props.motherboard || [];
  const COOL = props.cooling || [];

  const gpuList = props.shopStock?.gpu || [];
  const psuList = props.shopStock?.psu || [];
  const mbList = props.shopStock?.mb || [];
  const coolingList = props.shopStock?.cooling || [];

  // ---------------- BUY REACTION ----------------
  function shopkeeperBuyReaction(text) {
    setShopkeeperText(text);
    setShopkeeperState("buy");

    setTimeout(() => {
      setShopkeeperState("idle");
      setTimeout(() => setShopkeeperText(""), 800);
    }, 500);
  }

  function buyComponent(type, componentID) {

    let item;

    if (type === "GPU") {
      item = GPU[componentID];
    }

    else if (type === "powerSupply") {
      item = PSU[componentID];
    }

    else if (type === "motherboard") {
      item = MB[componentID];
    }

    else if (type === "cooling") {
      item = COOL[componentID];
    }

    if (!item) return;

    // BRAK KASY
    if (props.money < item.cost) {
      shopkeeperSpeak("Nie stać cię na to!");
      return;
    }

    // ODEJMUJEMY PIENIĄDZE
    props.setMoney(prev => prev - item.cost);
    shopkeeperBuyReaction("Dzięki za zakup!");

  if (type === "GPU") {
    props.setStashedGPUs(prev => [...prev, componentID]);

    props.setShopStock(prev => ({
      ...prev,
      gpu: (prev?.gpu || []).filter(id => id !== componentID),
    }));
  }

  else if (type === "powerSupply") {
    props.setStashedPowerSupplies(prev => [...prev, componentID]);

    props.setShopStock(prev => ({
      ...prev,
      psu: (prev?.psu || []).filter(id => id !== componentID),
    }));
  }

  else if (type === "motherboard") {
    props.setStashedMotherboards(prev => [...prev, componentID]);

    props.setShopStock(prev => ({
      ...prev,
      mb: (prev?.mb || []).filter(id => id !== componentID),
    }));
  }

  else if (type === "cooling") {
    props.setStashedCoolings(prev => [...prev, componentID]);

    props.setShopStock(prev => ({
      ...prev,
      cooling: (prev?.cooling || []).filter(id => id !== componentID),
    }));
  }

  else {
    console.warn("Unknown type in buyComponent:", type);
  }
}

  // ---------------- SHOPKEEPER TALK ----------------
  function shopkeeperSpeak(text) {
    setShopkeeperText(text);

    if (talkIntervalRef.current) clearInterval(talkIntervalRef.current);

    let count = 0;

    talkIntervalRef.current = setInterval(() => {
      setShopkeeperState(prev =>
        prev === "talkClosed" ? "talkOpen" : "talkClosed"
      );

      count++;

      if (count > 8) {
        clearInterval(talkIntervalRef.current);
        talkIntervalRef.current = null;
        setShopkeeperState("idle");
        setTimeout(() => setShopkeeperText(""), 1000);
      }
    }, 120);
  }

  return (
    <div className="shop" style={{ backgroundImage: `url(${bg})` }}>
      <div className="shelves">

        {/* GPU */}
        <div className="GPUShelf">
          {gpuList.map((gpuID, i) => {
            const item = GPU[gpuID];
            if (!item) return null;

            return (
              <div
                key={i}
                className="shopItem"
                onMouseEnter={() =>
                  shopkeeperSpeak(`GPU: ${item.name} | ${item.cost}$`)
                }
                onClick={() => buyComponent("GPU", gpuID, i)}
              >
                <div className="shopTextFormating">
                  <h3>{item.brand}</h3>
                  <p>{item.name}</p>
                </div>
                <p className="shopItemCost">${item.cost}</p>
              </div>
            );
          })}
        </div>

        {/* PSU */}
        <div className="powerSupplyShelf">
          {psuList.map((id, i) => {
            const item = PSU[id];
            if (!item) return null;

            return (
              <div
                key={i}
                className="shopItem"
                onMouseEnter={() =>
                  shopkeeperSpeak(`PSU: ${item.name} | ${item.cost}$`)
                }
                onClick={() => buyComponent("powerSupply", id, i)}
              >
                <div className="shopTextFormating">
                  <h3>{item.brand}</h3>
                  <p>{item.name}</p>
                </div>
                <p className="shopItemCost">${item.cost}</p>
              </div>
            );
          })}
        </div>

        {/* Motherboard */}
        <div className="motherboardShelf">
          {mbList.map((id, i) => {
            const item = MB[id];
            if (!item) return null;

            return (
              <div
                key={i}
                className="shopItem"
                onMouseEnter={() =>
                  shopkeeperSpeak(`MOBO: ${item.name} (${item.slots} slots)`)
                }
                onClick={() => buyComponent("motherboard", id, i)}
              >
                <div className="shopTextFormating">
                  <h3>{item.brand}</h3>
                  <p>{item.name}</p>
                </div>
                <p className="shopItemCost">${item.cost}</p>
              </div>
            );
          })}
        </div>

        {/* Cooling */}
        <div className="coolingShelf">
          {coolingList.map((id, i) => {
            const item = COOL[id];
            if (!item) return null;

            return (
              <div
                key={i}
                className="shopItem"
                onMouseEnter={() =>
                  shopkeeperSpeak(`COOLER: ${item.name} | ${item.cooling}`)
                }
                onClick={() => buyComponent("cooling", id, i)}
              >
                <div className="shopTextFormating">
                  <h3>{item.brand}</h3>
                  <p>{item.name}</p>
                </div>
                <p className="shopItemCost">${item.cost}</p>
              </div>
            );
          })}
        </div>

        {/* SHOPKEEPER */}
        <div className="shopkeeperContainer">
          <img
            src={
              shopkeeperState === "idle"
                ? shopkeeperIdle
                : shopkeeperState === "talkOpen"
                ? shopkeeperTalkOpen
                : shopkeeperState === "talkClosed"
                ? shopkeeperTalkClosed
                : shopkeeperBuy
            }
            className="shopkeeper"
            alt="shopkeeper"
          />

          {shopkeeperText && (
            <div className="speechBubble">
              {shopkeeperText}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}