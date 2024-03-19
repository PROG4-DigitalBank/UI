
import React, { useState } from 'react'
import axios from 'axios'
import './styles/withdraw.css'
import image from './images/Study.jpg'
import { Link } from 'react-router-dom'

const WithdrawMoney = () => {
  const [account, setAccount] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault(
    try {
      // Sending request to the backend to check if the withdrawal is authorized
      const response = await axios.post('url from backend', {
        account,
        amount,
        date,

        time,
      })

      // Retrieving success or error message from the backend
      setMessage(response.data.message)
    } catch (error) {
      console.error('Error during request:', error)
      // Error handling
      setMessage('An error occurred while processing your request.')
    }
  }
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


      const response = await axios.post('url for overdraft activation', {
        account,
      })
      // Handle success or error response from the backend
    } catch (error) {
      console.error('Error during overdraft activation:', error)
      // Error handling
    }
  }

  const calculateCreditAuthorized = (monthlySalary) => {
    // Calculate credit authorized as one-third of monthly salary
    return monthlySalary / 3
  }

  return (
    <>
      <nav className="navbar">
        <div className="left-links">
          <Link to="/business text-pop-up-top" className="link">
            Business
          </Link>
          <Link to="/pricing" className="link">
            Pricing
          </Link>
          <Link to="/features" className="link">
            Features
          </Link>
          <Link to="/blog" className="link">
            Blog
          </Link>
        </div>
        <div className="right-links">
          <button className="up-button">Login</button>
          <button className="up-button" id="signup-button">
            Signup
          </button>
        </div>
      </nav>

      <div className="main-container">
        <div className="title-withdraw">
          <h2>Withdraw Money</h2>
          <form onSubmit={handleSubmit} className="container">
            <label>
              Account:
              <input
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="input-text"
              />
            </label>
            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-text"
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input-text"
                id="date"
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="input-text"
                id="time"
              />
            </label>
            <button type="submit" className="withdraw-button" id='red-button'>
              Withdraw
            </button>
          </form>
          {message && <p>{message}</p>}
          <button onClick={handleActivateOverdraft} className="withdraw-button">
            Activate Overdraft
          </button>
        </div>

        <div>
          <img src={image} alt="" className="image" />
        </div>
      </div>
    </>
  )
}

export default WithdrawMoney

     