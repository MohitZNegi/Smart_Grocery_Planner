import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filters: {
    status: "ALL",
    category: "ALL",
  },
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
        const item = state.items.find((item) => item.id === action.payload);
        if (item) {
          item.isPurchased = !item.isPurchased;
        }
    },

    // Update quantity
    updateQuantity: (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity;
      }
    },

        // Set filter (status and/or category)
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    // Set budget
    setBudget: (state, action) => {
      state.budget = action.payload;
    },

    // Clear all items
    clearItems: (state) => {
      state.items = [];
    },

    // Clear purchased items
    clearPurchased: (state) => {
      state.items = state.items.filter((item) => !item.isPurchased);
    },
  },
});

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
