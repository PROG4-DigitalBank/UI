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
      <nav className="navbar">
        <div className="left-links">
          <Link to="/business">Business</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/features">Features</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="right-links">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </nav>

      <div className='main'>
        <h1 className='title'>Bank Account Management</h1>
        <p className='information-text'>Please complete the information below</p>
        <form onSubmit={handleSubmit} className='form'>
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
              className='input-text'
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
              className='input-text'
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
              className='input-text'
              id='salary'
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
              className='input-text'
              id='acc-number'
            />
          </label>
          <button type="submit" className='submit'>Submit</button>
        </form>
        {/* TODO: Display existing accounts and allow modification */}
      </div>
    </>
  )
}

export default Signup
