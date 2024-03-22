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
          <Link to="/account" className="link-">
            Account Info
          </Link>
          <Link to="/" className="link-">
            Withdraw
          </Link>
          <Link to="/" className="link-">
            Balance
          </Link>
          <Link to="/" className="link-">
            Deposit
          </Link>
          <Link to="/" className="link-">
            Transfer
          </Link>
        </div>

        <div className="buttons-container">
          <button className="try">Login</button>
          <button className="learn">Sign Up</button>
        </div>
      </div>

      <div className='body-container'>
        <div className="main-account-container">
          <div className="profile-info">
            <div>
              <img src={icon} alt="" className="icon" />
            </div>

            <div className="name">
              <p id="first-name">First Name : </p>
              <p>Last Name : </p>
            </div>
          </div>

          <div className="info">
            <p>Birth Date : </p>
            <p>Net Month salary : </p>
            <p>Account Number : </p>
          </div>
        </div>

        <div className="other-container">
          <form className="form" id='form'>
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
