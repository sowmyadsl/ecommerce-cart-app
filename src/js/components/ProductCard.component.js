import React from "react";
import LikeButton from "UI/LikeButton.component";
import DeleteButton from "UI/DeleteButton.component";

export const onSelectChange = (props, e) => {
  const { itemQtyChange, item } = props;
  itemQtyChange(e);
};

export default function ProductCard(props) {
  const { item, cardDeleteClick, itemQtyChange } = props;
  const itemPrice = item.quantity * 120.0;
  const totalQuantity = item.availability + item.quantity - 5;

  let qtyList = [];
  for (let i = 1; i <= 10; i++) {
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
    <div className="product-card">
      <div className="product-card-image">
        <img
          className="pcImage"
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/f8ec768e44d0489b8aa8ab0c010f59af_9366/Ultraboost_20_Shoes_Black_FU8498_01_standard.jpg"
          alt="shoe-image"
        />
      </div>
      <div className="product-card-dtls">
        <div className="product-descr">
          <div className="prd-desc-text">
            <span>SUPERSTAR SHOES</span> <br />
            <span>SIGNAL CORAL / CORE BLACK / CLOUD WHITE</span>
            <p>
              <span>{`SIZE: ${item.size}`}</span> <br />
              {totalQuantity < 5 && <span className="emph">LOW IN STOCK</span>}
            </p>
            <div className="prd-qty-dd">
              <select
                id="qty-dd"
                name="qty"
                size="1"
                value={item.quantity}
                onChange={e => onSelectChange(props, e)}
              >
                {qtyOption}
              </select>
            </div>
          </div>
          <div className="prd-price">
            <span>{`$${itemPrice}`}</span>
          </div>
          <div className="prd-action-container">
            <DeleteButton
              showBorder={false}
              id={item.sku}
              onClick={cardDeleteClick}
            />
            <LikeButton showBorder={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
