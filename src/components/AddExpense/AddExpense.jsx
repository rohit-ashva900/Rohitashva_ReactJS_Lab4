

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './AddExpense.css';

function AddExpense() {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    payer: '',
    date: ''
  });
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate form fields
    if (!formData.description) {
      setMessage('Description is required.');
      return;
    }
    if (!formData.amount) {
      setMessage('Amount is required.');
      return;
    }
    if (!formData.payer) {
      setMessage('Payer is required.');
      return;
    }
    if (!formData.date) {
      setMessage('Date is required.');
      return;
    }

    axios.post('http://localhost:3000/expenses', formData)
      .then(res => {
        setMessage('Expense added successfully');
        setTimeout(() => {
          setMessage('');
          history.push('/');
        }, 2000); // Redirect after 2 seconds
      })
      .catch(err => {
        console.log(err);
        setMessage('Error adding expense. Please try again.');
      });
  };

  return (
    <div className="form-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        {message && <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</div>}
        <div className="form-group">
          <label>Description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Payer</label>
          <input type="text" name="payer" value={formData.payer} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Expense" />
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
