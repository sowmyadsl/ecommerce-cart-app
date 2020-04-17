import React from "react";
import "./styles.css";

export default function SizeQuantitySelection() {
  return (
    <form className="size-qty-form" action="" required>
      <select id="size-dd" name="size" size="1">
        <option value="" selected disabled>
          Select Size
        </option>
        <option value="5.5">5.5</option>
        <option value="6">6</option>
        <option value="6.5">6.5</option>
        <option value="7">7.5</option>
      </select>
      <select id="qty-dd" name="qty" size="1" required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button id="add-to-bag" type="button">
        <span id="button-text">Add to bag </span>
        <span id="button-right-arrow"> &rarr;</span>
      </button>
      <div className="like-button">
        <img
          className="like-img"
          src="https://img.icons8.com/small/24/000000/like.png"
        />
      </div>
    </form>
  );
}
