import FloatingImages from "./FloatingImages";
import { Link } from "react-router-dom";
function Header({ hImage }) {
  return (
    <div
      className="header"
    >
      <FloatingImages />

      <div className="detail">
        <text id="name">💎ÑD COLLCTÏON</text>
        <text id="defination">💎 ND Collection Quality Never Questioned!</text>
        <Link to="/product/All">
          <button id="shopNow">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
