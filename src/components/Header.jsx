import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">SG</div>
          <h1 className="site-title">Smart Grocery Planner</h1>
        </div>

        <div className="cart">
          <span className="icon">🛒</span>
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
