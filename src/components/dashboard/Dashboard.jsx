import React, { useState, useEffect } from 'react'
import axios from 'axios' // Assuming you're using Axios for HTTP requests
import { Pie, Bar } from 'react-chartjs-2' // Assuming you're using Chart.js for charting
import './style/dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  //   // State for storing data fetched from backend
  //   const [categoryData, setCategoryData] = useState({})
  //   const [expenseIncomeData, setExpenseIncomeData] = useState({})

  //   // Function to fetch data from backend - TO DO
  //   useEffect(() => {
  //     fetchData()
  //   }, [])

  //   const fetchData = async () => {
  //     try {
  //       // Fetch category data - TO DO
  //       // const categoryResponse = await axios.get('/api/categories');
  //       // setCategoryData(categoryResponse.data);
  //       // Fetch expense and income data - TO DO
  //       // const expenseIncomeResponse = await axios.get('/api/expense-income');
  //       // setExpenseIncomeData(expenseIncomeResponse.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   // Default options for the charts
  //   const chartOptions = {
  //     // Add options as needed
  //   }

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

      
      <div className="dashboard">
        <h2>Dashboard</h2>
        <div className="chart">
          <p>Sum of Amounts by Category : </p>
          {/* <Pie data={categoryData} options={chartOptions} /> */}
        </div>
        <div className="chart">
          <p>Sum of Expenses and Incomes : </p>
          {/* <Bar data={expenseIncomeData} options={chartOptions} /> */}
        </div>
      </div>
    </>
  )
}

export default Dashboard
