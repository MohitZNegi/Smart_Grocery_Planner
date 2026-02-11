import React from "react";
import "./GroceryList.css";

const GroceryList = () => {
  return (
    <div className="grocery-list">
      <div className="panel">
        <h3>Grocery List</h3>
        <p className="muted">
          Placeholder list of items. Each item: name, category, price, bought
          toggle.
        </p>

        {/* sample items as cards (use .card for items) */}
        <div className="items" style={{ marginTop: 12 }}>
          <div className="card item">
            <div>
              <div className="name">Tomatoes</div>
              <div className="meta">Vegetables • 2 kg</div>
            </div>
            <div className="price">$4.20</div>
          </div>

          <div className="card item">
            <div>
              <div className="name">Milk</div>
              <div className="meta">Dairy • 1 L</div>
            </div>
            <div className="price">$1.80</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
