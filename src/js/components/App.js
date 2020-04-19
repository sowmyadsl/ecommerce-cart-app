import React from "react";
import ProductDetail from "./ProductDetail.component";
import NavBar from "./NavBar.component";
import CartPage from "./CartPage.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const appStyle = {
  display: "flex"
};

export default function App() {
  return (
    <Router>
      <div className="App" style={{ appStyle }}>
        <NavBar />
        <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
