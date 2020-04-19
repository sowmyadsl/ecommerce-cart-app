import React from "react";
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

class SizeQuantitySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: "",
      selectedSize: "",
      availableQty: 0,
      selectedQty: 0
    };
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onQtyChange = this.onQtyChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSizeChange(e) {
    const selectedSize = e.target.value;
    const { availableItems } = this.props;

    const selectedVariation = availableItems.find(
      variation => variation.size === selectedSize
    );

    this.setState({
      selectedSize,
      availableQty: selectedVariation.availability,
      sku: selectedVariation.sku,
      selectedQty: 1
    });
  }
  onQtyChange(e) {
    this.setState({
      selectedQty: parseInt(e.target.value)
    });
  }

  onSubmitClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { sku, selectedQty } = this.state;

    if (!sku && !selectedQty) return;

    dispatch(addItemsToCart(sku, selectedQty));

    this.setState({
      sku: "",
      selectedSize: "",
      availableQty: 0,
      selectedQty: 0
    });
  }

  render() {
    const { availableItems } = this.props;
    const { availableQty, selectedQty } = this.state;

    const variationList =
      availableItems && availableItems.length
        ? getAvailableVariations(availableItems)
        : [];

    const sizeOption = variationList.map(variation => {
      return (
        <option value={variation.size} key={`id-${variation.size}`}>
          {variation.size}
        </option>
      );
    });

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

    return (
      <form className="size-qty-form" action="">
        <select
          id="size-dd"
          name="size"
          size="1"
          defaultValue=""
          onChange={this.onSizeChange}
          required
        >
          <option value="" key="id-0" disabled>
            Select Size
          </option>
          {variationList.length && sizeOption}
        </select>
        <select
          id="qty-dd"
          name="qty"
          size="1"
          defaultValue={selectedQty}
          onChange={this.onQtyChange}
          required
        >
          {qtyOption}
        </select>
        <div className="add-to-bag">
          <Button
            action="addToBag"
            onClick={this.onSubmitClick}
            type="submit"
          />
        </div>
        <LikeButton />
      </form>
    );
  }
}
export default connect(mapStateToProps)(SizeQuantitySelection);
