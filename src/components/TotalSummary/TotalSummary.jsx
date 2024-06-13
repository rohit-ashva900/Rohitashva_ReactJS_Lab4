
import React from 'react';
import './TotalSummary.css';

const TotalSummary = ({ expenses }) => {
  const totalSpent = expenses.reduce((total, expense) => {
    return total + parseFloat(expense.amount);
  }, 0);

  const individualSpends = expenses.reduce((acc, expense) => {
    acc[expense.payer] = (acc[expense.payer] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  return (
    <div className="total-summary">
      <h2>Total Spent: ${totalSpent.toFixed(2)}</h2>
      <h3>Individual Spends:</h3>
      <ul>
        {Object.entries(individualSpends).map(([payer, amount]) => (
          <li key={payer}>{payer}: ${amount.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TotalSummary;
