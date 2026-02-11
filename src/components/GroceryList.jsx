import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import GroceryItem from "./GroceryItem";
import "./GroceryList.css";

const GroceryList = () => {
  const { items, filters } = useSelector((state) => state.grocery);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Filter by status
      const statusMatch =
        filters.status === "ALL" ||
        (filters.status === "PURCHASED" && item.isPurchased) ||
        (filters.status === "UNPURCHASED" && !item.isPurchased);

      // Filter by category
      const categoryMatch =
        filters.category === "ALL" || item.category === filters.category;

      // Both conditions must be true
      return statusMatch && categoryMatch;
    });
  }, [items, filters]);

  if (items.length === 0) {
    return (
      <div className="grocery-list empty">
        <p>No items in your grocery list. Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="grocery-list">
      <h2>
        Your Grocery Items ({filteredItems.length} of {items.length})
      </h2>
      <div className="items-container">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <GroceryItem key={item.id} item={item} />)
        ) : (
          <p className="no-items-message">
            No items match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default GroceryList;
