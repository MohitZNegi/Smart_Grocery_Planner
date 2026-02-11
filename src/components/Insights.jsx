import React from "react";
import "./Insights.css";

const Insights = () => {
  return (
    <div className="insights">
      <div className="panel" style={{ marginTop: 16 }}>
        <h3>Spending Insights</h3>
        <p className="muted">
          Blueprint: derived analytics computed from items list (use reduce and
          grouping)
        </p>

        <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
          <div>
            Most expensive category: <strong>—</strong>{" "}
            {/* group by category, sum, max */}
          </div>
          <div>
            Most purchased category: <strong>—</strong>{" "}
            {/* group purchased counts */}
          </div>
          <div>
            Average item price: <strong>—</strong>{" "}
            {/* totalPrice / itemCount */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
