import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import { mapStateToProps, getItemCount } from "Helpers/helperFunctions";

const menuOptions = ["men", "women", "kids", "sports", "brands", "holiday"];

function NavBar(props) {
  console.log("insidenavbar", props);
  const { availableItems } = props;
  const cartItemCount = getItemCount(availableItems);

  console.log(cartItemCount);

  const menuOptionsList = menuOptions.map(option => {
    return (
      <li key={`${option}-id`}>
        <span>{option}</span>
      </li>
    );
  });

  return (
    <div className="nav-bar">
      <Link to="/" className="nav-bar-img">
        <img
          id="nav-logo"
          className="inverted"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1920px-Adidas_Logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="nav-bar-links">
        <div className="nav-line-1"></div>
        <div className="nav-line-2">
          <ul className="class-1">{menuOptions.length && menuOptionsList}</ul>
          <div className="search">
            <input placeholder="&#x1F50D;Search" disabled></input>
          </div>
          <div className="nav-bag">
            <Link to="/cart" className="bag-btn">
              <img
                className="bag-img inverted"
                src="https://img.icons8.com/ios/50/000000/shopping-bag.png"
              />
            </Link>
            {cartItemCount > 0 && (
              <div className="cart-item-count">{cartItemCount}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(NavBar);
