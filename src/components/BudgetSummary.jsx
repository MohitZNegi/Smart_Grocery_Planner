import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./BudgetSummary.css";

const BudgetSummary = () => {
  const { items, budget } = useSelector((state) => state.grocery);

  const calculations = useMemo(() => {
    const totalPlanned = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const totalPurchased = items
      .filter((item) => item.isPurchased)
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
    const remainingBudget = budget - totalPurchased;
    const percentUsed = budget > 0 ? (totalPurchased / budget) * 100 : 0;

    return {
      totalPlanned: totalPlanned.toFixed(2),
      totalPurchased: totalPurchased.toFixed(2),
      remainingBudget: remainingBudget.toFixed(2),
      percentUsed: percentUsed.toFixed(1),
      isOverBudget: totalPurchased > budget,
    };
  }, [items, budget]);

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>

      <div className="summary-grid">
        <div className="summary-card">
          <h3>Budget Allocated</h3>
          <p className="amount">${budget.toFixed(2)}</p>
        </div>

        <div className="summary-card">
          <h3>Total Planned</h3>
          <p className="amount">${calculations.totalPlanned}</p>
        </div>

        <div className="summary-card">
          <h3>Already Purchased</h3>
          <p className={`amount ${calculations.isOverBudget ? "over" : ""}`}>
            ${calculations.totalPurchased}
          </p>
        </div>

        <div
          className={`summary-card ${calculations.isOverBudget ? "danger" : ""}`}
        >
          <h3>Remaining Budget</h3>
          <p className="amount">${calculations.remainingBudget}</p>
        </div>
      </div>

      <div className="budget-progress">
        <div className="progress-label">
          <span>Budget Usage: {calculations.percentUsed}%</span>
        </div>
        <div
          className="progress-bar"
          style={{
            width: `${Math.min(parseFloat(calculations.percentUsed), 100)}%`,
            backgroundColor: calculations.isOverBudget
              ? "#e74c3c"
              : "var(--primary)",
          }}
        ></div>
      </div>

      {calculations.isOverBudget && (
        <div className="alert alert-danger">
          ⚠️ You have exceeded your budget by $
          {Math.abs(parseFloat(calculations.remainingBudget)).toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default BudgetSummary;
