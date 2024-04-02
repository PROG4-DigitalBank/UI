import React, { useState } from 'react';
import './style/transaction.css';
import { Link } from 'react-router-dom';

const TransactionCategorization = () => {
  // State to manage transaction details
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = () => {
    const newTransaction = { id: transactions.length + 1, description: '', category: '', comment: '' };
    setTransactions([...transactions, newTransaction]);
  };

  // Function to handle category selection
  const handleCategorySelect = (id, category) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id ? { ...transaction, category } : transaction
    );
    setTransactions(updatedTransactions);
  };

  // Function to handle comment input
  const handleCommentInput = (id, comment) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id ? { ...transaction, comment } : transaction
    );
    setTransactions(updatedTransactions);
  };

  // Function to submit categorized transactions to the backend - TO DO
  const handleSubmit = () => {
    // Logic to send categorized transactions to the backend
  };

  return (
    <>
      <div className="nav">
        {/* Navigation links */}
      </div>
      <div className="transaction-categorization">
        <h2>Transaction Categorization</h2>
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <input
                type="text"
                value={transaction.id}
                placeholder="Transaction ID"
                onChange={(e) => handleIdInput(transaction.id, e.target.value)}
              />
              <input
                type="text"
                value={transaction.description}
                placeholder="Description"
                onChange={(e) => handleDescriptionInput(transaction.id, e.target.value)}
              />
              <select
                value={transaction.category}
                onChange={(e) => handleCategorySelect(transaction.id, e.target.value)}
              >
                {/* Options for categories */}
              </select>
              <input
                type="text"
                value={transaction.comment}
                placeholder="Comment (required if category is 'Other')"
                onChange={(e) => handleCommentInput(transaction.id, e.target.value)}
                disabled={transaction.category !== 'Other'}
              />
            </div>
          ))}
        </div>
        <button onClick={addTransaction} className="add-transaction">
          Add Transaction
        </button>
        <button onClick={handleSubmit} className="transaction-submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default TransactionCategorization;
