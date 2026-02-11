import React from "react";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import GroceryList from "./GroceryList";
import BudgetSummary from "./BudgetSummary";
import Insights from "./Insights";
import AddGroceryForm from "./AddGroceryForm";

const Index = () => {
  return (
    <div>
      <Header />
      <main className="container" style={{ padding: 20 }}>
        <section>
          <AddGroceryForm />
        </section>

        <section style={{ marginTop: 20 }}>
          <CategoryFilter />
        </section>

        <section style={{ marginTop: 20 }}>
          <GroceryList />
        </section>

        <aside style={{ marginTop: 30 }}>
          <BudgetSummary />
          <Insights />
        </aside>
      </main>
    </div>
  );
};

export default Index;
