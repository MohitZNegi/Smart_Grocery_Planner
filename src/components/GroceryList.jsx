import { useSelector } from "react-redux";
import GroceryItem from "./GroceryItem";
import "./GroceryList.css";

const GroceryList = () => {
  const { items } = useSelector((state) => state.grocery);

  if (items.length === 0) {
    return (
      <div className="grocery-list empty">
        <p>No items in your grocery list. Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="grocery-list">
      <h2>Your Grocery Items ({items.length})</h2>
      <div className="items-container">
        {items.map((item) => (
          <GroceryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
