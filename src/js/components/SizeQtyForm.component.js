import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItemsToCart } from "Actions/cartActions.js";
import {
  mapStateToProps,
  getAvailableVariations
} from "Helpers/helperFunctions";

import Button from "UI/Button.component";
import LikeButton from "UI/LikeButton.component";
import "./styles.css";

function SizeQtyForm(props) {
  const [selectedQty, setQty] = useState(0);
  const [sku, setSKU] = useState("");

  const { availableItems, dispatch } = props;

  const itemList =
    availableItems && availableItems.length
      ? getAvailableVariations(availableItems)
      : [];
  const sizeOption = itemList.map(item => {
    return (
      <option value={item.sku} key={`id-${item.size}`}>
        {item.size}
      </option>
    );
  });
  const availableQty = sku
    ? availableItems[availableItems.findIndex(item => item.sku === sku)]
        .availability
    : 0;
  let qtyList = [];
  for (let i = 1; i <= availableQty; i++) {
    qtyList = [...qtyList, i];
  }
  const qtyOption = qtyList.map(qty => {
    return (
      <option value={qty} key={`id-${qty}`}>
        {qty}
      </option>
    );
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!sku && !selectedQty) return;
    dispatch(addItemsToCart(sku, selectedQty));
    setQty(0);
    setSKU("");
  };

  return (
    <form className="size-qty-form" onSubmit={handleSubmit}>
      <select
        id="size-dd"
        name="size"
        size="1"
        value={sku}
        onChange={e => {
          setSKU(e.target.value);
          setQty(1);
        }}
        required
      >
        <option value="" key="id-0" disabled>
          Select Size
        </option>
        {itemList.length && sizeOption}
      </select>
      <select
        id="qty-dd"
        name="qty"
        size="1"
        value={selectedQty}
        onChange={e => setQty(parseInt(e.target.value))}
        required
      >
        {qtyOption}
      </select>
      <div className="add-to-bag">
        <Button action="addToBag" type="submit" />
      </div>
      <LikeButton />
    </form>
  );
}
export default connect(mapStateToProps)(SizeQtyForm);
