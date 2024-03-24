import React, { useState, useEffect } from 'react';
import './styles/account.css';

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
  const fetchExistingAccounts = () => {
    // TODO: Fetch existing accounts from backend
    // Example: axios.get('/api/accounts').then(response => setAccounts(response.data));
    // Replace this mock data with actual API call
    const mockAccounts = [
      { id: 1, firstName: 'John', lastName: 'Doe', dateOfBirth: '1990-05-15', salary: 5000, accountNumber: 'AC12345678' },
      { id: 2, firstName: 'Alice', lastName: 'Smith', dateOfBirth: '1985-12-20', salary: 6000, accountNumber: 'AC98765432' },
    ];
    setAccounts(mockAccounts);
  };

  useEffect(() => {
    fetchExistingAccounts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send formData to backend for processing (create or update account)
    console.log('Form data:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      salary: '',
      accountNumber: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="account-management">
      <h1>Account Management</h1>
      <div className="account-form">
        <h2>Add New Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
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
            />
          </label>
          <label>
            Account Number:
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Add Account</button>
        </form>
      </div>
      <div className="account-list">
        <h2>Existing Accounts</h2>
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
    </div>
  );
};

export default AccountManagement;
