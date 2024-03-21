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
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wmoney" element={<WithdrawMoney />} />
          <Route path="/balance" element={<BalanceInquiry />} />
          <Route path="/balancerep" element={<BalanceReplenishment />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
