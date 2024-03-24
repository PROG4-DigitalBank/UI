import React, { useState, useEffect } from 'react'
import './styles/account.css'
import { Link } from 'react-router-dom'

const AccountStatement = () => {
  // Mock data for demonstration
  const [transactions, setTransactions] = useState([
    {
      date: '11/03/2024',
      reference: 'VIR_2024_03_11_01',
      description: 'Salaire',
      debit: '0',
      credit: '1,000,000',
      balance: '950,000',
    },
    {
      date: '10/03/2024',
      reference: 'VIR_2024_03_10_02',
      description: 'Billet SMATCHIN',
      debit: '100,000',
      credit: '0',
      balance: '-50,000',
    },
    {
      date: '10/03/2024',
      reference: 'VIR_2024_03_10_01',
      description: 'Retrait auprès de MCB',
      debit: '0',
      credit: '50,000',
      balance: '50,000',
    },
  ])

  // Fetch transactions from backend - TO DO
  useEffect(() => {
    // Your fetch code here to get transactions from backend
  }, [])

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
  )
}

export default AccountStatement
