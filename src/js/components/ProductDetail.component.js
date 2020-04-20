import React from "react";
import { connect } from "react-redux";
import MainImage from "./MainImage.component";
import ProductSummary from "./ProductSummary.component";
import SizeQtyForm from "./SizeQtyForm.component";
import "./styles.css";
import {
  getAvailableVariations,
  mapStateToProps
} from "Helpers/helperFunctions";
import { getProductInfo } from "Actions/productInfoActions.js";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const productId = "FV3284";
    const { dispatch, productInfo } = this.props;
    if (productId === productInfo.id) return;

    dispatch(getProductInfo(productId));
  }

  render() {
    const { productInfo, isFetching } = this.props;

    if (isFetching) {
      return (
        <div>
          <h1>Loading ...</h1>
        </div>
      );
    }

    return (
      <div className="product-detail">
        <div className="pd-col-1">
          <MainImage />
        </div>
        <div className="pd-col-2">
          <ProductSummary />
          <SizeQtyForm />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductDetail);
