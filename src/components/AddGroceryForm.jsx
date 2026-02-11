import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/GrocerySlice";
import "./AddGroceryForm.css";

const AddGroceryForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    category: "Vegetables",
    price: "",
    quantity: 1,
  });

  const categories = ["Vegetables", "Fruits", "Dairy", "Meat", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "quantity" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.price) {
      dispatch(addItem(formData));
      setFormData({
        name: "",
        category: "Vegetables",
        price: "",
        quantity: 1,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grocery-form">
      <h2>Add New Item</h2>

      <div className="form-group">
        <label htmlFor="name">Item Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter item name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            step="1"
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Add Item
      </button>
    </form>
  );
};

export default AddGroceryForm;
