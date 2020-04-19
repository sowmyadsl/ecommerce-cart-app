import React from "react";
import PropTypes from "prop-types";
import "Components/styles.css";

export default function DeleteButton(props) {
  const { showBorder, onClick } = props;

  const divStyle = showBorder
    ? {
        border: "1px solid black"
      }
    : {};

  return (
    <button style={divStyle} className="del-button" onClick={onClick}>
      <img
        className="del-img"
        src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png"
      />
    </button>
  );
}
DeleteButton.propTypes = {
  showBorder: PropTypes.bool
};
DeleteButton.defaultProps = {
  showBorder: true
};
