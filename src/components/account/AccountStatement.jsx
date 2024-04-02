import React, { useState, useEffect } from 'react';
import './styles/account.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls

const AccountStatement = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from backend
  useEffect(() => {
    axios.get('/transactions/accountNumber').then((response) => {
      setTransactions(response.data);
    }).catch((error) => {
      console.error('Error fetching transactions:', error);
    });
  }, []);

  return (
    <>
      <div className="nav">
        {/* Navigation links */}
      </div>

      <div className="account-statement">
        <h2>Account Statement</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Reference</th>
              <th>Description</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.reference}</td>
                <td>{transaction.description}</td>
                <td>{transaction.debit}</td>
                <td>{transaction.credit}</td>
                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AccountStatement;
