import React from "react";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import GroceryList from "./GroceryList";
import BudgetSummary from "./BudgetSummary";
import Insights from "./Insights";
import AddGroceryForm from "./AddGroceryForm";
import Footer from "./Footer";

const Index = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <div className="container">
          {/* Left Column: Form & Filters */}
          <div className="left-column">
            <section className="form-section">
              <AddGroceryForm />
            </section>

            <section className="insights-section">
              <BudgetSummary />
              <Insights />
            </section>
          </div>

          {/* Right Column: Grocery List */}
          <div className="right-column">
            <section className="list-section">
              <CategoryFilter />
              <GroceryList />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
