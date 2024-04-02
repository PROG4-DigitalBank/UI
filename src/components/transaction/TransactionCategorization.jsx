import React, { useState } from 'react'
import './style/transaction.css'
import { Link } from 'react-router-dom'

const TransactionCategorization = () => {
  // State to manage transaction details
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'VIR_2024_03_10_02', category: '', comment: '' },
    // Add more transactions as needed
  ])

  // Function to handle category selection
  const handleCategorySelect = (id, category) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === id) {
        return { ...transaction, category }
      }
      return transaction
    })
    setTransactions(updatedTransactions)
  }

  // Function to handle comment input
  const handleCommentInput = (id, comment) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === id) {
        return { ...transaction, comment }
      }
      return transaction
    })
    setTransactions(updatedTransactions)
  }

  // Function to submit categorized transactions to the backend - TO DO
  const handleSubmit = () => {
    // Logic to send categorized transactions to the backend
  }

  return (
    <>
      <div className="nav">
        <div className="nav-links">
          <Link to="/">
            <h1 className="logo">Digital Bank</h1>
          </Link>
          <Link to="/" className="link-">
            Home
          </Link>
          <Link to="/account" className="link-">
            Account Info
          </Link>
          <Link to="/wmoney" className="link-">
            Withdraw
          </Link>
          <Link to="/balance" className="link-">
            Balance
          </Link>

          <Link to="/balance-rep" className="link-">
            Deposit
          </Link>

          <Link to="/transfer" className="link-">
            Transfer
          </Link>
        </div>

        <div className="buttons-container">
          <Link to="/accounts">
            <button className="try">Existing Account</button>
          </Link>
          <Link to="/signup">
            <button className="learn">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="transaction-categorization">
        <h2>Transaction Categorization</h2>
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <span>{transaction.description}</span>
              <br />
              <br />
              <select
                value={transaction.category}
                onChange={(e) =>
                  handleCategorySelect(transaction.id, e.target.value)
                }
              >
                <option value="">Select Category</option>
                {/* Populate categories dynamically from backend - TO DO */}
                <option value="Leisure">Leisure</option>
                <option value="Groceries">Groceries</option>
                {/* Add more categories as needed */}
                <option value="Other">Other</option>
              </select>
              <input
                className="input-transaction"
                type="text"
                value={transaction.comment}
                placeholder="Comment (required if category is 'Other')"
                onChange={(e) =>
                  handleCommentInput(transaction.id, e.target.value)
                }
                disabled={transaction.category !== 'Other'} // Disable input if category is not 'Other'
              />
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} className="transaction-submit">
          Submit
        </button>
      </div>
    </>
  )
}

export default TransactionCategorization
