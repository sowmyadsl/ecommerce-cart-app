import React from "react";
import { connect } from "react-redux";

import Button from "UI/Button.component";
import ProductCard from "Components/ProductCard.component";
import { mapStateToProps, getItemCount } from "Helpers/helperFunctions.js";
import { delItemsFromCart, updItemsInCart } from "Actions/cartActions";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.cardDeleteClick = this.cardDeleteClick.bind(this);
    this.selectedQtyChange = this.selectedQtyChange.bind(this);
  }

  cardDeleteClick(item) {
    const { dispatch } = this.props;
    dispatch(delItemsFromCart(item.sku));
  }

  selectedQtyChange(item, e) {
    const { dispatch } = this.props;
    const selectedQty = parseInt(e.target.value);
    dispatch(updItemsInCart(item.sku, selectedQty));
  }

  render() {
    const { availableItems } = this.props;
    const cartItemCount = getItemCount(availableItems);
    const totalCartPrice = cartItemCount * 120;
    const plural = cartItemCount > 1 ? "s" : "";

    const emptyCart = (
      <div id="no-producs-msg" className="cart-page">
        <h1 className="cart-header">YOUR BAG IS EMPTY</h1>
        <p>
          Once you add something to your bag, it will appear here. Ready to get
          started?
        </p>
        <div className="cart-get-started">
          <Button action="getStarted" />
        </div>
      </div>
    );
    if (!cartItemCount) return emptyCart;

    const productCardList = availableItems.map(item =>
      item.quantity ? (
        <ProductCard
          key={item.sku}
          item={item}
          cardDeleteClick={() => this.cardDeleteClick(item)}
          itemQtyChange={e => this.selectedQtyChange(item, e)}
        />
      ) : null
    );

    return (
      <div className="cart-page">
        <h1 className="cart-header"> YOUR BAG</h1>
        <div className="cart-total">
          <span className="caps">{"Total: ("}</span>
          <span>{`${cartItemCount} item${plural})`}</span>
          <span className="emph">{` $${totalCartPrice}`}</span>
        </div>
        <div className="cart-container">
          <div className="cart-col1">
            {productCardList}
            <div className="cart-action-container">
              <Button action="checkout" />
              <div className="cart-action-filler">
                <p> OR </p>
              </div>
              <Button action="paypal" status="disabled" />
            </div>
          </div>
          <div className="cart-col2">
            <div className="side-action-container">
              <Button action="checkout" />
              <div className="cart-action-filler">
                <p> OR </p>
              </div>
              <Button action="paypal" status="disabled" />
            </div>
            <div className="order-summary-panel">
              <h3> order summary </h3>
              <div className="order-summary-section">
                <table>
                  <tbody>
                    <tr>
                      <td>{`${cartItemCount} Item${plural}`}</td>
                      <td>{` $${totalCartPrice}`}</td>
                    </tr>
                    <tr>
                      <td>Delivery</td>
                      <td>free</td>
                    </tr>
                    <tr>
                      <td>Sales Tax</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>{` $${totalCartPrice}`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="promo order-summary-panel">
              <p>ENTER YOUR PROMO CODE</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartPage);
