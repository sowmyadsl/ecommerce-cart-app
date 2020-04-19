import React from "react";

export default function ProductSummary() {
  return (
    <div className="product-info">
      <span>&#9733; &#9733; &#9733; &#9733; &#9733; </span>
      <span className="product-reviews">Read all 719 reviews</span>
      <h4>WOMEN'S RUNNING</h4>
      <h1>ULTRABOOST 20 SHOES</h1>
      <p>$144 </p>
      <p> or 3 interest-free payments of $48.00 with Affirm.</p>
      <p>
        {" "}
        This product is excluded from all promotional discounts and offers{" "}
      </p>
    </div>
  );
}
