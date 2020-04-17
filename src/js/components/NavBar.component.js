import React from "react";
import "./styles.css";
import logo from "../../public/images/adidas-logo.png";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-img">
        <img id="nav-logo" src={logo} alt="logo" />
      </div>
      <div className="nav-bar-links">
        <div className="nav-line-1"></div>
        <div className="nav-line-2">
          <ul className="class-1">
            <li>
              <span>Men</span>
            </li>
            <li>
              <span>Women</span>
            </li>
            <li>
              <span>Kids</span>
            </li>
            <li>
              <span>Sports</span>
            </li>
            <li>
              <span>Brands</span>
            </li>
            <li>
              <span>Holiday</span>
            </li>
          </ul>
          <div className="search">
            <input placeholder="&#x1F50D;Search" disabled></input>
          </div>
          <div className="nav-bag">
            <img
              className="bag-img inverted"
              src="https://img.icons8.com/ios/50/000000/shopping-bag.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
