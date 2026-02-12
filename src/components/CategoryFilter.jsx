import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearPurchased } from "../redux/grocerySlice";
import "./CategoryFilter.css";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.grocery);

  const handleStatusChange = (e) => {
    dispatch(setFilter({ status: e.target.value }));
  };

  const handleCategoryChange = (e) => {
    dispatch(setFilter({ category: e.target.value }));
  };

  const handleClearPurchased = () => {
    if (window.confirm("Clear all purchased items?")) {
      dispatch(clearPurchased());
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-dropdowns">
        {/* Status Dropdown */}
        <div className="filter-group">
          <label htmlFor="statusFilter">Status:</label>
          <select
            id="statusFilter"
            value={filters.status}
            onChange={handleStatusChange}
            className="filter-dropdown"
          >
            <option value="ALL">All Items</option>
            <option value="UNPURCHASED">Unpurchased</option>
            <option value="PURCHASED">Purchased</option>
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="filter-group">
          <label htmlFor="categoryFilter">Category:</label>
          <select
            id="categoryFilter"
            value={filters.category}
            onChange={handleCategoryChange}
            className="filter-dropdown"
          >
            <option value="ALL">All Categories</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
          </select>
        </div>
      </div>

      <button
        className="clear-btn"
        onClick={handleClearPurchased}
        title="Remove all purchased items"
      >
        Clear Purchased
      </button>
    </div>
  );
};

export default CategoryFilter;
