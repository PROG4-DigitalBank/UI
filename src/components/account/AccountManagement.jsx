import React, { useState, useEffect } from 'react';
import './styles/account.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    salary: '',
    accountNumber: '',
  });

  // Function to fetch existing accounts from backend
  const fetchExistingAccounts = async () => {
    try {
      const response = await axios.get('/accounts/all'); // Assuming your backend endpoint is /accounts/all
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  useEffect(() => {
    fetchExistingAccounts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send formData to backend for creating a new account
      await axios.post('/accounts/create', formData); 
      console.log('New account created successfully!');
      // Refetch the accounts after creating a new one
      fetchExistingAccounts();
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        salary: '',
        accountNumber: '',
      });
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* Your navigation bar JSX */}
      <div className="account-management">
        <h1 className="account-title">Account Management</h1>
        {/* Existing Accounts */}
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

        {/* Add New Account Form */}
        <div>
          <h2>Add New Account</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" />
            <input type="number" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" />
            <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" />
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountManagement;
