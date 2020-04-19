import React from "react";
import PropTypes from "prop-types";
import { buttonProps } from "./button-properties.json";
import "Components/styles.css";

export default function Button(props) {
  const { action, status, onClick, type } = props;

  const btnObj = buttonProps.find(i => i.type === action);

  const divStyle = btnObj.imgUrl
    ? {
        background: "url(" + btnObj.imgUrl + ") no-repeat 10% 50%"
      }
    : {};

  return (
    <button
      id={btnObj.id}
      style={divStyle}
      className={`action-btn ${status}`}
      type={type}
      onClick={onClick}
    >
      {btnObj.text && <span id="button-text">{btnObj.text} </span>}
      <span id="button-right-arrow"> &rarr;</span>
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.string.isRequired,
  status: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};
Button.defaultProps = {
  status: "",
  type: "button",
  onClick: () => {}
};
