import React from "react";
import ProductDetail from "./ProductDetail.component";
import NavBar from "./NavBar.component";

const appStyle = {
  display: "flex"
};

export default function App() {
  return (
    <div className="App" style={{ appStyle }}>
      <NavBar />
      <ProductDetail />
    </div>
  );
}
