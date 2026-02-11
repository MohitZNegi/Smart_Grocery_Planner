import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "ALL",
  budget: 200,
};

const grocerySlice = createSlice({
  name: "grocery",
  initialState,
  reducers: {
    // Add a new item to the list
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        name: action.payload.name,
        category: action.payload.category,
        price: action.payload.price,
        quantity: action.payload.quantity || 1,
        isPurchased: false,
      };
      state.items.push(newItem);
    },

    // Remove an item by id
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Update an item
    updateItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        Object.assign(item, action.payload.updates);
      }
    },

    // Toggle purchase status
    togglePurchased: (state, action) => {
    },

    // Update quantity
    updateQuantity: (state, action) => {
      }
    },

    // Set filter
    setFilter: (state, action) => {
    },

    // Set budget
    setBudget: (state, action) => {
    },

    // Clear all items
    clearItems: (state) => {
    },

    // Clear purchased items
    clearPurchased: (state) => {
    },
  },
);

export const {
  addItem,
  removeItem,
  updateItem,
  togglePurchased,
  updateQuantity,
  setFilter,
  setBudget,
  clearItems,
  clearPurchased,
} = grocerySlice.actions;

export default grocerySlice.reducer;
