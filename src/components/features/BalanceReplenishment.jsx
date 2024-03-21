
import React, { useState } from 'react'

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
    <div>
      <h1>Balance Replenishment</h1>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="reason">Reason:</label>
        <input
          type="text"
          id="reason"
          placeholder="Enter reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="effectDate">Effective Date:</label>
        <input
          type="date"
          id="effectDate"
          value={effectDate}
          onChange={(e) => setEffectDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="registrationDate">Registration Date:</label>
        <input
          type="date"
          id="registrationDate"
          value={registrationDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
          required
        />
      </div>
      <button onClick={performReplenishment}>Replenish</button>
    </div>
  )
}

export default BalanceReplenishment;
