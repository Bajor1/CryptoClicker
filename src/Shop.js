import "./shop.css";
import bg from "./misc/sklep_bkg.png";
import regal from "./misc/regal.png";

export default function Shop() {
  return (
    <div
      className="shop"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img src={regal} alt="shelf" className="shelf" />
    </div>
  );
}