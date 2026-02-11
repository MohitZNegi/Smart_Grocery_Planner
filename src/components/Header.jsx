import React from "react";

const Header = () => {
  return (
    <header
      style={{ background: "var(--primary)", color: "#fff", padding: 16 }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 20 }}>Smart Grocery Planner</h1>
        <div>Cart: 0</div>
      </div>
    </header>
  );
};

export default Header;
