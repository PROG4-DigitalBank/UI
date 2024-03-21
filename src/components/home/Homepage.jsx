import React from 'react'
import './styles/home.css'
import { Link } from 'react-router-dom'
import side from './images/side-image.jpg'

function Homepage() {
  return (
    <>
      <div className="nav">
        <div className="nav-links">
          <Link to="/">
            <h1 className="logo">Digital Bank</h1>
          </Link>
          <Link to="/" className="link-">
            Account Info
          </Link>
          <Link to="/" className="link-">
            Withdraw
          </Link>
          <Link to="/" className="link-">
            Balance
          </Link>
          <Link to="/" className="link-">
            Deposit
          </Link>
          <Link to="/" className="link-">
            Transfer
          </Link>
        </div>

        <div className="buttons-container">
          <button className='try' >Login</button>
          <button className='learn' >Sign Up</button>
        </div>
      </div>

      <main>
        <div>
          <div className='side-text'>
            <h1>One <i>app</i>, all things money</h1>
            <p>
              From easily money management to travel perks and investments. Open
              your account in a flash
            </p>
          </div>
          <div className='main-buttons'>
            <button className='try' id='try'>Try Now</button>
            <button className='learn' id='learn'>Learn More</button>
          </div>
        </div>

        <div>
            <img src={side} alt="" className='side-image' />
        </div>
      </main>
    </>
  )
}

export default Homepage
