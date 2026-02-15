# Smart_Grocery_Planner

Smart Grocery Planner is a React + Redux Toolkit application that helps users manage grocery items and track spending within a defined budget.

It demonstrates structured state management, clean component architecture, multiple filtering logic, and real-time budget calculations.

# Features

- Add grocery items (name, category, price, quantity)
- Mark items as purchased
- Update item quantity
- Remove individual items
- Clear purchased items
- Filter by:
 --Status (All, Purchased, Unpurchased)
 --Category (Vegetables, Fruits, Dairy, etc.)
- Track total planned cost
- Track total purchased cost
- Monitor remaining budget
- Display budget usage percentage
- Responsive layout

# Tech Stack
- React
- Redux Toolkit
- React-Redux
- JavaScript (ES6+)
- CSS

# State Structure
`{
  grocery: {
    items: [],
    filter: {
      status: "ALL",      // ALL | PURCHASED | UNPURCHASED
      category: "ALL"     // ALL | Vegetables | Fruits | Dairy | etc.
    },
    budget: 200
  }
}`

# Item Structure
`{
  id: number,
  name: string,
  category: string,
  price: number,
  quantity: number,
  isPurchased: boolean
}`

# Redux Concepts Used
- Centralized Store
- All shared state lives inside grocerySlice
- Single source of truth
- Predictable state updates
- Actions & Reducers
  
# The slice includes:
- addItem
- removeItem
- updateItem
- togglePurchased
- updateQuantity
- setFilter
- setBudget
- clearItems
- clearPurchased
- Reducers update state immutably using Redux Toolkit’s Immer integration

# Architecture
- Redux store configured in store.js
- State logic managed in grocerySlice.js

# Main components:
- GroceryForm
- GroceryList
- GroceryItem
- CategoryFilter
- BudgetSummary

- Components use useDispatch to trigger actions
- Components use useSelector to read global state
- Unidirectional data flow from store → UI

# Best Practices Applied
- Redux Toolkit instead of manual Redux setup
- Centralized state management
- Clear and descriptive action naming
- Minimal prop drilling
- Derived state instead of duplicated state
- Predictable data flow
- Reusable UI components
- Component-specific styling
- Responsive design principles

# What This Project Demonstrates
- Strong Redux state shape design
- Handling multiple filter states (status + category)
- Complex state updates with clean reducers
- Derived calculations from global state
- Clear component hierarchy
- Scalable and maintainable architecture
