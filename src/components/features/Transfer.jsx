import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/transfer.css'
// F5 : Virement

const Transfer = () => {
  // State pour stocker les détails du virement
  const [transferDetails, setTransferDetails] = useState({
    recipient: '',
    amount: '',
    date: '',
    scheduledDate: '',
    label: '',
  })

  // Fonction pour gérer la soumission du formulaire de virement
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Envoyer les détails du virement au backend pour traitement
    // Assurez-vous d'envoyer les données telles que 'recipient', 'amount', 'date', 'scheduledDate', 'label'
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

      <div className="transfer-container">
        <h2>Make a Transfer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Recipient:</label>
            <input
              className="transfer-input"
              type="text"
              value={transferDetails.recipient}
              onChange={(e) =>
                setTransferDetails({
                  ...transferDetails,
                  recipient: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              value={transferDetails.amount}
              onChange={(e) =>
                setTransferDetails({
                  ...transferDetails,
                  amount: e.target.value,
                })
              }
              required
              className="transfer-input"
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={transferDetails.date}
              onChange={(e) =>
                setTransferDetails({ ...transferDetails, date: e.target.value })
              }
              required
              className="transfer-input"
            />
          </div>
          <div className="form-group">
            <label>Scheduled Date:</label>
            <input
              type="datetime-local"
              value={transferDetails.scheduledDate}
              onChange={(e) =>
                setTransferDetails({
                  ...transferDetails,
                  scheduledDate: e.target.value,
                })
              }
              required
              className="transfer-input"
            />
          </div>
          <div className="form-group">
            <label>Label:</label>
            <input
              type="text"
              value={transferDetails.label}
              onChange={(e) =>
                setTransferDetails({
                  ...transferDetails,
                  label: e.target.value,
                })
              }
              className="transfer-input"
            />
          </div>
          <button type="submit" className="transfer-button">
            Transfer
          </button>
        </form>
      </div>
    </>
  )
}

export default Transfer
