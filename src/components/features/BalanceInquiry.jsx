import React, { useState, useEffect } from 'react'
import './styles/balance.css'
import { Link } from 'react-router-dom'
//F3: Consulatation de solde

const BalanceInquiry = () => {
  // State variables to hold balances
  const [principalBalance, setPrincipalBalance] = useState(0)
  const [loanBalance, setLoanBalance] = useState(0)
  const [loanInterest, setLoanInterest] = useState(0)

  // Function to fetch balances from backend
  const fetchBalances = async () => {
    // TO DO: Fetch balances from backend using API call
    // Example:
    // const response = await fetch('backend_url/balances');
    // const data = await response.json();
    // Update state with fetched data
    // setPrincipalBalance(data.principal);
    // setLoanBalance(data.loan);
    // setLoanInterest(data.interest);
  }

  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    // TO DO: Format date as needed
    // Example:
    // return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    // Fetch balances when component mounts
    fetchBalances()
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="left-links">
          <Link to="/business" className="link">
            Business
          </Link>
          <Link to="/pricing" className="link">
            Pricing
          </Link>
          <Link to="/features" className="link">
            Features
          </Link>
          <Link to="/blog" className="link">
            Blog
          </Link>
        </div>
        <div className="right-links">
          <button className="up-button">Login</button>
          <button className="up-button" id="signup-button">
            Signup
          </button>
        </div>
      </nav>
      <div className="balance-inquiry-container">
        <h2>Balance Inquiry</h2>
        {/* Display principal balance */}
        <p className="balance-item">Principal Balance: ${principalBalance}</p>
        {/* Display loan balance */}
        <p className="balance-item">Loan Balance: ${loanBalance}</p>
        {/* Display loan interest */}
        <p className="balance-item">Loan Interest: ${loanInterest}</p>
        {/* Date selector component */}
        <label className="date-label">Select Date:</label>
        {/* TO DO: Implement date selector component */}
        {/* <input type="date" onChange={(e) => handleDateChange(e.target.value)} /> */}
      </div>
    </>
  )
}

export default BalanceInquiry
