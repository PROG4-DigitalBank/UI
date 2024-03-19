import React, { useState } from 'react';
import axios from 'axios'; 

const WithdrawMoney = () => {
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Sending request to the backend to check if the withdrawal is authorized
      const response = await axios.post('url from backend', {
        account,
        amount,
        date,
        time
      });

      // Retrieving success or error message from the backend
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error during request:', error);
      // Error handling
      setMessage('An error occurred while processing your request.');
    }
  };

  const handleActivateOverdraft = async () => {
    // Handle activation of overdraft feature
    try {
      // Send request to backend to activate overdraft feature for the account
      const response = await axios.post('url for overdraft activation', { account });
      // Handle success or error response from the backend
    } catch (error) {
      console.error('Error during overdraft activation:', error);
      // Error handling
    }
  };

  const calculateCreditAuthorized = (monthlySalary) => {
    // Calculate credit authorized as one-third of monthly salary
    return monthlySalary / 3;
  };

  return (
    <div>
      <h2>Withdraw Money</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Account:
          <input type="text" value={account} onChange={(e) => setAccount(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="submit">Withdraw</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleActivateOverdraft}>Activate Overdraft</button>
    </div>
  );
};

export default WithdrawMoney;
