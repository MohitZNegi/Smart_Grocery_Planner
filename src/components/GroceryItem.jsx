import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  togglePurchased,
  updateQuantity,
} from "../redux/GrocerySlice";
import "./GroceryItem.css";

const GroceryItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleTogglePurchased = () => {
    dispatch(togglePurchased(item.id));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const totalPrice = (item.price * item.quantity).toFixed(2);

  return (
    <div className={`grocery-item ${item.isPurchased ? "purchased" : ""}`}>
      <div className="item-checkbox">
        <input
          type="checkbox"
          checked={item.isPurchased}
          onChange={handleTogglePurchased}
          id={`item-${item.id}`}
        />
      </div>

      <div className="item-details">
        <h4 className="item-name">{item.name}</h4>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>

      <div className="item-quantity">
        <label htmlFor={`qty-${item.id}`}>Qty:</label>
        <select
          id={`qty-${item.id}`}
          value={item.quantity}
          onChange={handleQuantityChange}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="item-total">
        <p className="total-price">${totalPrice}</p>
      </div>

      <button className="remove-btn" onClick={handleRemove} title="Remove item">
        ✕
      </button>
    </div>
  );
};

export default GroceryItem;
