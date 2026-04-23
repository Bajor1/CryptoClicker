import "./shop.css";
import bg from "./misc/sklep_bkg.png";

function pickRandom(items, count = 3) {
  return [...items]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export default function Shop({
  GPU = [],
  motherboard = [],
  powerSupply = [],
  cooling = [],
  onSelectItem, // <- przyszły dialog z NPC
}) {
  const shopData = {
    GPU: pickRandom(GPU, 3),
    motherboard: pickRandom(motherboard, 2),
    powerSupply: pickRandom(powerSupply, 3),
    cooling: pickRandom(cooling, 1),
  };

  return (
    <div
      className="shop"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="shop-overlay">

        <div className="shop-left">
          {Object.entries(shopData).map(([key, items]) => (
            <Shelf
              key={key}
              title={key}
              items={items}
              onSelectItem={onSelectItem}
            />
          ))}
        </div>

        <div className="shop-right">
          <div className="npc">
            🧑 "Hey! Need something? Talk to me to buy."
          </div>
        </div>

      </div>
    </div>
  );
}

function Shelf({ title, items, onSelectItem }) {
  return (
    <div className="shelf">
      <div className="shelf-title">{title}</div>

      <div className="shelf-row">
        {items.map((item) => (
          <Item key={item.id} item={item} onSelectItem={onSelectItem} />
        ))}
      </div>
    </div>
  );
}

function Item({ item, onSelectItem }) {
  return (
    <div className="item-card" onClick={() => onSelectItem?.(item)}>
      {/* GRAFIKA zamiast tekstu */}
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="item-price">{item.cost}$</div>
    </div>
  );
}