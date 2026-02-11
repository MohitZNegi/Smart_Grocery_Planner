import React from "react";
import "./BudgetSummary.css";

const BudgetSummary = () => {
  return (
    <div className="budget-summary">
      <div className="panel" style={{ marginTop: 16 }}>
        <h3>Budget Summary</h3>
        <p className="muted">
          Blueprint placeholders — calculations should be derived from items
          array (use array.reduce)
        </p>

        <div style={{ marginTop: 12 }}>
          <div>
            Total planned cost: <strong>$--.--</strong>{" "}
            {/* compute with reduce: sum(price * quantity) */}
          </div>
          <div>
            Total purchased cost: <strong>$--.--</strong>{" "}
            {/* compute with reduce over isPurchased */}
          </div>
          <div>
            Remaining budget: <strong>$--.--</strong>{" "}
            {/* plannedBudget - purchased */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;
