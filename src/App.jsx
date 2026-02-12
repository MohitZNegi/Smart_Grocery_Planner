import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Index from "./components/Index";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
