import React from "react";
import PropTypes from "prop-types";
import "Components/styles.css";

export default function LikeButton(props) {
  const { showBorder } = props;

  const divStyle = showBorder
    ? {
        border: "1px solid black"
      }
    : {};

  return (
    <div style={divStyle} className="like-button">
      <img
        className="like-img"
        src="https://img.icons8.com/small/24/000000/like.png"
      />
    </div>
  );
}
LikeButton.propTypes = {
  showBorder: PropTypes.bool
};
LikeButton.defaultProps = {
  showBorder: true
};
