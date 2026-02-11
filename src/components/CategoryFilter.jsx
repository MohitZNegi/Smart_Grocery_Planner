import React from "react";
import "./CategoryFilter.css";

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <div className="panel panel--compact">
        <h3>Category Filter</h3>
        <p>Placeholder for category buttons (Vegetables, Dairy, Snacks...)</p>
        {/* ---------- FILTER BAR (UI only) ---------- */}
        <div className="filter-bar" style={{ marginTop: 12 }}>
          {/* Buttons: All, Vegetables, Dairy, Snacks, Household */}
          <div className="chips">
            <button className="chip">All</button>
            <button className="chip">Vegetables</button>
            <button className="chip">Dairy</button>
            <button className="chip">Snacks</button>
            <button className="chip">Household</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
