

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './Home.css';

// // function Home() {
// //   const [expenses, setExpenses] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:3000/expenses')
// //       .then(res => setExpenses(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

// //   const individualSpends = expenses.reduce((acc, curr) => {
// //     acc[curr.payer] = (acc[curr.payer] || 0) + parseFloat(curr.amount);
// //     return acc;
// //   }, {});

// //   return (
// //     <div className="container">
// //       <h1>Expense Tracker</h1>
// //       <div className="expense-list">
// //         {expenses.map(expense => (
// //           <div className="expense-item" key={expense.id}>
// //             <p>{expense.description}</p>
// //             <p>${parseFloat(expense.amount).toFixed(2)}</p>
// //             <p>Payer: {expense.payer}</p>
// //             <p>Date: {expense.date}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="total-summary">
// //         <h2>Total Spent: ${totalSpent.toFixed(2)}</h2>
// //         <h3>Individual Spends:</h3>
// //         <ul>
// //           {Object.entries(individualSpends).map(([person, amount]) => (
// //             <li key={person}>
// //               {person}: ${amount.toFixed(2)}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useHistory } from 'react-router-dom';
// // import './Home.css';

// // function Home() {
// //   const [expenses, setExpenses] = useState([]);
// //   const history = useHistory(); // Use useHistory for navigation

// //   useEffect(() => {
// //     axios.get('http://localhost:3000/expenses')
// //       .then(res => setExpenses(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

// //   const individualSpends = expenses.reduce((acc, curr) => {
// //     acc[curr.payer] = (acc[curr.payer] || 0) + parseFloat(curr.amount);
// //     return acc;
// //   }, {});

// //   const handleAddExpense = () => {
// //     history.push('/add'); // Navigate to the Add Expense page
// //   };

// //   return (
// //     <div className="container">
// //       <h1>Expense Tracker</h1>
// //       <div className="expense-list">
// //         {expenses.map(expense => (
// //           <div className="expense-item" key={expense.id}>
// //             <p>{expense.description}</p>
// //             <p>${parseFloat(expense.amount).toFixed(2)}</p>
// //             <p>Payer: {expense.payer}</p>
// //             <p>Date: {expense.date}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="total-summary">
// //         <h2>Total Spent: ${totalSpent.toFixed(2)}</h2>
// //         <h3>Individual Spends:</h3>
// //         <ul>
// //           {Object.entries(individualSpends).map(([person, amount]) => (
// //             <li key={person}>
// //               {person}: ${amount.toFixed(2)}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <button onClick={handleAddExpense} className="add-expense-button">Add Expense</button>
// //     </div>
// //   );
// // }

// // export default Home;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useHistory } from 'react-router-dom';
// // import './Home.css';

// // function Home() {
// //   const [expenses, setExpenses] = useState([]);
// //   const history = useHistory(); // Use useHistory for navigation

// //   useEffect(() => {
// //     axios.get('http://localhost:3000/expenses')
// //       .then(res => setExpenses(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

// //   const individualSpends = expenses.reduce((acc, curr) => {
// //     acc[curr.payer] = (acc[curr.payer] || 0) + parseFloat(curr.amount);
// //     return acc;
// //   }, {});

// //   const handleAddExpense = () => {
// //     history.push('/add'); // Navigate to the Add Expense page
// //   };

// //   return (
// //     <div className="container">
// //       <h1>Expense Tracker</h1>
// //       <div className="expense-list">
// //         {expenses.map(expense => (
// //           <div className="expense-item" key={expense.id}>
// //             <p>{expense.description}</p>
// //             <p>${parseFloat(expense.amount).toFixed(2)}</p>
// //             <p>Payer: {expense.payer}</p>
// //             <p>Date: {expense.date}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="total-summary">
// //         <h2>Total Spent: ${totalSpent.toFixed(2)}</h2>
// //         <h3>Individual Spends:</h3>
// //         <ul>
// //           {Object.entries(individualSpends).map(([person, amount]) => (
// //             <li key={person}>
// //               {person}: ${amount.toFixed(2)}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <button onClick={handleAddExpense} className="add-expense-button">Add Expense</button>
// //     </div>
// //   );
// // }

// // export default Home;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './Home.css';

// // function Home() {
// //   const [expenses, setExpenses] = useState([]);
// //   const navigate = useNavigate(); // Use useNavigate for navigation

// //   useEffect(() => {
// //     axios.get('http://localhost:3000/expenses')
// //       .then(res => setExpenses(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

// //   const individualSpends = expenses.reduce((acc, curr) => {
// //     acc[curr.payer] = (acc[curr.payer] || 0) + parseFloat(curr.amount);
// //     return acc;
// //   }, {});

// //   const handleAddExpense = () => {
// //     console.log('Add Expense button clicked');
// //     navigate('/add'); // Navigate to the Add Expense page
// //   };

// //   return (
// //     <div className="container">
// //       <h1>Expense Tracker</h1>
// //       <div className="expense-list">
// //         {expenses.map(expense => (
// //           <div className="expense-item" key={expense.id}>
// //             <p>{expense.description}</p>
// //             <p>${parseFloat(expense.amount).toFixed(2)}</p>
// //             <p>Payer: {expense.payer}</p>
// //             <p>Date: {expense.date}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="total-summary">
// //         <h2>Total Spent: ${totalSpent.toFixed(2)}</h2>
// //         <h3>Individual Spends:</h3>
// //         <ul>
// //           {Object.entries(individualSpends).map(([person, amount]) => (
// //             <li key={person}>
// //               {person}: ${amount.toFixed(2)}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <button type="button" onClick={handleAddExpense} className="add-expense-button">Add Expense</button>
// //     </div>
// //   );
// // }

// // export default Home;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   const [expenses, setExpenses] = useState([]);
//   const history = useHistory(); // Use useHistory for navigation

//   useEffect(() => {
//     axios.get('http://localhost:3000/expenses')
//       .then(res => setExpenses(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

//   const individualSpends = expenses.reduce((acc, curr) => {
//     acc[curr.payer] = (acc[curr.payer] || 0) + parseFloat(curr.amount);
//     return acc;
//   }, {});

//   const handleAddExpense = () => {
//     console.log('Add Expense button clicked');
//     history.push('/add'); // Navigate to the Add Expense page
//   };

//   return (
//     <div className="container">
//       <h1>Expense Tracker</h1>
//       <div className="expense-list">
//         {expenses.map(expense => (
//           <div className="expense-item" key={expense.id}>
//             <p>{expense.description}</p>
//             <p>${parseFloat(expense.amount).toFixed(2)}</p>
//             <p>Payer: {expense.payer}</p>
//             <p>Date: {expense.date}</p>
//           </div>
//         ))}
//       </div>
//       <div className="total-summary">
//         <h2>Total Spent: ${totalSpent.toFixed(2)}</h2>
//         <h3>Individual Spends:</h3>
//         <ul>
//           {Object.entries(individualSpends).map(([person, amount]) => (
//             <li key={person}>
//               {person}: ${amount.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button type="button" onClick={handleAddExpense} className="add-expense-button">Add Expense</button>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
  const [expenses, setExpenses] = useState([]);
  const history = useHistory(); // Use useHistory for navigation

  useEffect(() => {
    axios.get('http://localhost:3000/expenses')
      .then(res => setExpenses(res.data))
      .catch(err => console.log(err));
  }, []);

  const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const individualSpends = expenses.reduce((acc, curr) => {
    acc[curr.payer] = (acc[curr.payer] || 0) + parseFloat(curr.amount);
    return acc;
  }, {});

  const handleAddExpense = () => {
    history.push('/add'); // Navigate to the Add Expense page
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="expense-list">
        {expenses.map(expense => (
          <div className="expense-item" key={expense.id}>
            <p>{expense.description}</p>
            <p>${parseFloat(expense.amount).toFixed(2)}</p>
            <p>Payer: {expense.payer}</p>
            <p>Date: {expense.date}</p>
          </div>
        ))}
      </div>
      <div className="total-summary">
        <h2>Total Spent: ${totalSpent.toFixed(2)}</h2>
        <h3>Individual Spends:</h3>
        <ul>
          {Object.entries(individualSpends).map(([person, amount]) => (
            <li key={person}>
              {person}: ${amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={handleAddExpense} className="add-expense-button">Add Expense</button>
    </div>
  );
}

export default Home;
