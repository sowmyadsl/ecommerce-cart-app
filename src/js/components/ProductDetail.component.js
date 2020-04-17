import React from "react";
import MainImage from "./MainImage.component";
import ProductInfo from "./ProductInfo.component";
import SizeQuantitySelection from "./SizeQuantitySelection.component";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-detail">
        <div className="pd-col-1">
          <MainImage />
        </div>
        <div className="pd-col-2">
          <ProductInfo />
          <SizeQuantitySelection />
        </div>
      </div>
    );
  }
}

export default App;
