import React, { useState, useEffect } from 'react';
import './styles/index.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls

const Signup = () => {
  // State for managing form inputs and existing accounts
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    salary: '',
    accountNumber: '',
  });

  const [existingAccounts, setExistingAccounts] = useState([]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send formData to backend for processing (create or update account)
    axios.post('/accounts/create', formData)
      .then(response => {
        console.log('Account created:', response.data);
        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          salary: '',
          accountNumber: '',
        });
      })
      .catch(error => {
        console.error('Error creating account:', error);
      });
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to fetch existing accounts from backend
  const fetchExistingAccounts = () => {
    axios.get('/accounts/all')
      .then(response => {
        setExistingAccounts(response.data);
      })
      .catch(error => {
        console.error('Error fetching existing accounts:', error);
      });
  };

  // useEffect to fetch existing accounts on component mount
  useEffect(() => {
    fetchExistingAccounts();
  }, []);

  return (
    <>
      <div className="nav">
        {/* Navigation links */}
      </div>

      <div className="main">
        <h1 className="title">Bank Account Management</h1>
        <p className="information-text">
          Please enter your details to continue subscription
        </p>
        <form onSubmit={handleSubmit} className="form">
          {/* Form inputs */}
          {/* First Name */}
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
          {/* Last Name */}
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
          {/* Date of Birth */}
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
          {/* Salary */}
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
          {/* Account Number */}
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
          {/* Submit Button */}
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        {/* TODO: Display existing accounts */}
        <div className="existing-accounts">
          <h2>Existing Accounts</h2>
          <ul>
            {existingAccounts.map(account => (
              <li key={account.id}>
                {account.firstName} {account.lastName} - {account.accountNumber}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Signup;
