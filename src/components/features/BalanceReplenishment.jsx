import React, { useState } from 'react'
import './styles/balance.css'
import { Link } from 'react-router-dom'

// F4: Approvisionnement de solde
function BalanceReplenishment() {
  const [amount, setAmount] = useState('')
  const [reason, setReason] = useState('')
  const [effectDate, setEffectDate] = useState('')
  const [registrationDate, setRegistrationDate] = useState('')

  const performReplenishment = () => {
    // Mocking backend call
    const replenishmentData = {
      amount: amount,
      reason: reason,
      effectDate: effectDate,
      registrationDate: registrationDate,
    }

    // TODO: Send replenishmentData to backend for processing
    console.log('Replenishment data:', replenishmentData)
    // Alert for demo purposes
    alert('Replenishment successful!')

    // TODO: Handle response from backend
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
          <Link to="/accounts"></Link>
          <button className="try">Existing Account</button>
          <Link to="/signup">
            <button className="learn">Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="replenishment-container">
        <h1>Balance Replenishment</h1>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="replenishment-input"
          />
        </div>
        <div>
          <label htmlFor="reason">Reason: </label>
          <input
            type="text"
            id="reason"
            placeholder="Enter reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            className="replenishment-input"
          />
        </div>
        <div>
          <label htmlFor="effectDate">Effective Date: </label>
          <input
            type="date"
            id="effectDate"
            value={effectDate}
            onChange={(e) => setEffectDate(e.target.value)}
            required
            className="replenishment-input"
          />
        </div>
        <div>
          <label htmlFor="registrationDate">Registration Date: </label>
          <input
            type="date"
            id="registrationDate"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
            required
            className="replenishment-input"
          />
        </div>
        <button onClick={performReplenishment} className="replenishment-button">
          Approvisionnement
        </button>
      </div>
    </>
  )
}

export default BalanceReplenishment
