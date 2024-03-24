import React from 'react'
import './styles/account.css'
import { Link } from 'react-router-dom'
import icon from './image/icon.jpg'

const AccountInfo = () => {
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

      <div className="body-container">
        <div className="main-account-container">
          <div className="profile-info">
            <div>
              <img src={icon} alt="" className="icon" />
            </div>

            <div className="name">
              <p id="first-name">First Name : </p>
              <p>Last Name : </p>
            </div>

            <div className='button-container-dash'>
              <Link to="/account-state">
                <button className="new-acc">View Account Statement</button>
              </Link>
              <Link to='/dashboard'>
                <button className='new-acc dashboard-button'> Dashboard</button>
              </Link>
            </div>
          </div>

          <div className="info">
            <p>Birth Date </p>
            <p>Net Month salary </p>
            <p>Account Number </p>
          </div>
        </div>

        <div className="other-container">
          <form className="form" id="form">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                required
                className="input-text"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                required
                className="input-text"
              />
            </label>

            <label>
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                required
                className="input-text"
              />
            </label>
            <label>
              Salary:
              <input
                type="number"
                name="salary"
                required
                className="input-text"
                id="salary"
              />
            </label>
            <button type="submit" className="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AccountInfo
