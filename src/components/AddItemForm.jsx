import React, { useState, useEffect } from "react";
import "./AddItemForm.css";

const AddItemForm = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Vegetables");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    // simple id generation for the form preview (can be replaced with uuid)
    setId(String(Date.now()));
  }, []);

  const resetForm = () => {
    setId(String(Date.now()));
    setName("");
    setCategory("Vegetables");
    setPrice(0);
    setQuantity(1);
    setIsPurchased(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id,
      name,
      category,
      price: Number(price),
      quantity: Number(quantity),
      isPurchased,
    };

    // Blueprint only: show the item in console. Later this will dispatch to global store.
    console.log("AddItemForm - newItem:", newItem);

    resetForm();
  };

  return (
    <div className="add-item">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Add Item</h2>
        <p className="muted">
          Create a grocery item (blueprint form — not wired to store).
        </p>

        <div className="form-row" style={{ marginTop: 8 }}>
          <label style={{ flex: 2 }}>
            Name
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Tomatoes"
            />
          </label>

          <label style={{ flex: 1 }}>
            Category
            <select
              className="input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Vegetables</option>
              <option>Dairy</option>
              <option>Snacks</option>
              <option>Household</option>
            </select>
          </label>
        </div>

        <div className="form-row" style={{ marginTop: 8 }}>
          <label style={{ flex: 1 }}>
            Price
            <input
              className="input"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <label style={{ flex: 1 }}>
            Quantity
            <input
              className="input"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </div>

        <div
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              checked={isPurchased}
              onChange={(e) => setIsPurchased(e.target.checked)}
            />
            Mark as purchased
          </label>

          <div style={{ marginLeft: "auto" }}>
            <button type="submit" className="btn">
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
