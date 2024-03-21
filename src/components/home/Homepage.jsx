import React from 'react'
import './styles/home.css'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <div className="nav">
        <div className="nav-links">
          <Link to="/">
            <h1 className="logo">Digital Bank</h1>
          </Link>
          <Link to="/" className='link-'>Account Info</Link>
          <Link to="/"className='link-'>Withdraw</Link>
          <Link to="/"className='link-'>Balance</Link>
          <Link to="/"className='link-'>Deposit</Link>
          <Link to="/"className='link-'>Transfer</Link>
        </div>

        <div className="buttons-container">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Homepage
