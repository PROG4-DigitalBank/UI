import React, { useState, useEffect } from 'react'
import './styles/account.css'
import { Link } from 'react-router-dom'

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    salary: '',
    accountNumber: '',
  })

  // Function to fetch existing accounts from backend
  const fetchExistingAccounts = () => {
    // TODO: Fetch existing accounts from backend
    // Example: axios.get('/api/accounts').then(response => setAccounts(response.data));
    // Replace this mock data with actual API call
    const mockAccounts = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-05-15',
        salary: 5000,
        accountNumber: 'AC12345678',
      },
      {
        id: 2,
        firstName: 'Alice',
        lastName: 'Smith',
        dateOfBirth: '1985-12-20',
        salary: 6000,
        accountNumber: 'AC98765432',
      },
    ]
    setAccounts(mockAccounts)
  }

  useEffect(() => {
    fetchExistingAccounts()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: Send formData to backend for processing (create or update account)
    console.log('Form data:', formData)
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      salary: '',
      accountNumber: '',
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
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
          <Link to="/accounts">
          <button className="try">Existing Account</button></Link>
          <Link to="/signup">
            <button className="learn">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="account-management">
        <h1 className="account-title">Account Management</h1>
        <div className="account-list">
          <h2>Existing Accounts</h2>
          <br />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Salary</th>
                <th>Account Number</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.id}</td>
                  <td>{account.firstName}</td>
                  <td>{account.lastName}</td>
                  <td>{account.dateOfBirth}</td>
                  <td>{account.salary}</td>
                  <td>{account.accountNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
            <Link to='/signup'><button className='new-account'>Add New Account</button></Link>
        </div>
      </div>
    </>
  )
}

export default AccountManagement
