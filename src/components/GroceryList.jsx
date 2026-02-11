import React from "react";
import "./GroceryList.css";

const GroceryList = () => {
  return (
    <div className="grocery-list">
      <div className="panel">
        <h3>Grocery List</h3>
        <p className="muted">
          This view is a blueprint. Below are the sections and placeholders
          where logic will be added.
        </p>

        {/* ---------- TO PURCHASE LIST (derived state) ---------- */}
        <section style={{ marginTop: 18 }}>
          <h4>To Purchase</h4>
          <p className="muted">
            Items where <code>isPurchased === false</code>. (Derived with
            filter)
          </p>

          {/* Example item card (UI only) */}
          <div className="items" style={{ marginTop: 8 }}>
            <div className="card item">
              <div>
                <div className="name">Tomatoes</div>
                <div className="meta">Vegetables • 2 kg</div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div className="price">$4.20</div>
                {/* Mark purchased button (no logic here) */}
                <button className="btn btn--ghost">Mark Purchased</button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PURCHASED SECTION (derived state) ---------- */}
        <section style={{ marginTop: 18 }}>
          <h4>Purchased</h4>
          <p className="muted">
            Items where <code>isPurchased === true</code>. (Derived with filter)
          </p>

          {/* Example purchased item (UI only) */}
          <div className="items" style={{ marginTop: 8 }}>
            <div className="card item is-purchased" style={{ opacity: 0.6 }}>
              <div>
                <div className="name">Bread</div>
                <div className="meta">Bakery • 1 pc</div>
              </div>
              <div className="price">$2.00</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GroceryList;
