import React, { useState, useEffect } from 'react'
import './styles/balance.css'
import { Link } from 'react-router-dom'
//F3: Consulatation de solde

const BalanceInquiry = () => {
  // State pour stocker les soldes
  const [balances, setBalances] = useState({
    principal: 0,
    loans: 0,
    loanInterests: 0,
  })

  // State pour stocker la date sélectionnée
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Fonction pour charger les soldes depuis le backend (à implémenter)
  const fetchBalances = () => {
    // TODO: Faire une requête au backend pour récupérer les soldes pour la date sélectionnée
    // Assurez-vous que le backend renvoie un objet avec les clés 'principal', 'loans' et 'loanInterests'
    // Exemple de format de réponse : { principal: 1000, loans: 500, loanInterests: 50 }
  }

  // Effet pour charger les soldes lors du chargement initial et lors du changement de date
  useEffect(() => {
    fetchBalances()
  }, [selectedDate]) // Cette dépendance garantit que le chargement est déclenché lors du changement de date

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
      <div className="balance-container">
        <h2>Balance</h2>
        <div className="balance-details">
          <div className="balance-item">
            <span className="balance-label">Principal: </span>
            <span className="balance-value">{balances.principal} MGA</span>
          </div>
          <div className="balance-item">
            <span className="balance-label">Loans: </span>
            <span className="balance-value">{balances.loans} MGA</span>
          </div>
          <div className="balance-item">
            <span className="balance-label">Loan Interests: </span>
            <span className="balance-value">{balances.loanInterests} MGA</span>
          </div>
        </div>
        <div className="date-selector">
          <label>Select Date: </label>
          <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]} // Format de date attendu par l'input type date
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="date-input"
          />
        </div>
      </div>
    </>
  )
}

export default BalanceInquiry
