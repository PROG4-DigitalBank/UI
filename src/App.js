import './App.css'
import './components/auth/Signup'
import './components/auth/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/home/Homepage'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import BalanceInquiry from './components/features/BalanceInquiry'
import WithdrawMoney from './components/features/WithdrawMoney'
import BalanceReplenishment from './components/features/BalanceReplenishment'
import AccountInfo from './components/account/AccountInfo'
import Transfer from './components/features/Transfer'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wmoney" element={<WithdrawMoney />} />
          <Route path="/balance" element={<BalanceInquiry />} />
          <Route path="/balance-rep" element={<BalanceReplenishment />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/account" element={<AccountInfo />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
