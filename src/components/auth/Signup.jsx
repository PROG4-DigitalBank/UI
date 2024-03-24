import React, { useState, useEffect } from 'react'
import './styles/index.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  // State for managing form inputs and existing accounts
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    salary: '',
    accountNumber: '',
  })

  const [existingAccounts, setExistingAccounts] = useState([])

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: Send formData to backend for processing (create or update account)
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      salary: '',
      accountNumber: '',
    })
  }

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  // Function to fetch existing accounts from backend
  const fetchExistingAccounts = () => {
    // TODO: Fetch existing accounts from backend and update state
  }

  // useEffect to fetch existing accounts on component mount
  useEffect(() => {
    fetchExistingAccounts()
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
          <Link to="/accounts"></Link>
          <button className="try">Existing Account</button>
          <Link to="/signup">
            <button className="learn">Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="main">
        <h1 className="title">Bank Account Management</h1>
        <p className="information-text">
          Please enter your details to continue subscription
        </p>
        <form onSubmit={handleSubmit} className="form">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-text"
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-text"
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="input-text"
            />
          </label>
          <label>
            Salary:
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="input-text"
              id="salary"
            />
          </label>
          <label>
            Acc Number :
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
              className="input-text"
              id="acc-number"
            />
          </label>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        {/* TODO: Display existing accounts and allow modification */}
      </div>
    </>
  )
}

export default Signup
