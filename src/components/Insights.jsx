import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./Insights.css";

const Insights = () => {
  const { items } = useSelector((state) => state.grocery);

  const insights = useMemo(() => {
    if (items.length === 0) {
      return {
        mostExpensiveCategory: "—",
        mostExpensiveCost: 0,
        highestQuantityCategory: "—",
        highestQuantity: 0,
        averagePrice: 0,
      };
    }

    // Group items by category using reduce
    const categoryStats = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = { totalCost: 0, totalQuantity: 0, count: 0 };
      }
      acc[item.category].totalCost += item.price * item.quantity;
      acc[item.category].totalQuantity += item.quantity;
      acc[item.category].count += 1;
      return acc;
    }, {});

    // Find most expensive category
    const mostExpensiveCategory = Object.entries(categoryStats).reduce(
      (max, [category, stats]) => {
        return stats.totalCost > max.cost
          ? { name: category, cost: stats.totalCost }
          : max;
      },
      { name: "—", cost: 0 },
    );

    // Find highest quantity category
    const highestQuantityCategory = Object.entries(categoryStats).reduce(
      (max, [category, stats]) => {
        return stats.totalQuantity > max.quantity
          ? { name: category, quantity: stats.totalQuantity }
          : max;
      },
      { name: "—", quantity: 0 },
    );

    // Calculate average item price
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const averagePrice = totalPrice / items.length;

    return {
      mostExpensiveCategory: mostExpensiveCategory.name,
      mostExpensiveCost: mostExpensiveCategory.cost,
      highestQuantityCategory: highestQuantityCategory.name,
      highestQuantity: highestQuantityCategory.quantity,
      averagePrice,
    };
  }, [items]);

  return (
    <div className="insights">
      <div className="insights-panel">
        <h3>Spending Insights</h3>

        <div className="insights-grid">
          <div className="insight-item">
            <p className="insight-label">Most Expensive Category</p>
            <strong className="insight-value">
              {insights.mostExpensiveCategory} ($
              {insights.mostExpensiveCost.toFixed(2)})
            </strong>
          </div>

          <div className="insight-item">
            <p className="insight-label">Highest Quantity Category</p>
            <strong className="insight-value">
              {insights.highestQuantityCategory} ({insights.highestQuantity}{" "}
              items)
            </strong>
          </div>

          <div className="insight-item">
            <p className="insight-label">Average Item Price</p>
            <strong className="insight-value">
              ${insights.averagePrice.toFixed(2)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
