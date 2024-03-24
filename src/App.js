import './App.css'
import './components/auth/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/home/Homepage'
import Signup from './components/auth/Signup'
import BalanceInquiry from './components/features/BalanceInquiry'
import WithdrawMoney from './components/features/WithdrawMoney'
import BalanceReplenishment from './components/features/BalanceReplenishment'
import AccountInfo from './components/account/AccountInfo'
import Transfer from './components/features/Transfer'
import AccountManagement from './components/account/AccountManagement'
import AccountStatement from './components/account/AccountStatement'
import TransactionCategorization from './components/transaction/TransactionCategorization'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/wmoney" element={<WithdrawMoney />} />
          <Route path="/balance" element={<BalanceInquiry />} />
          <Route path="/balance-rep" element={<BalanceReplenishment />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/account" element={<AccountInfo />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/accounts" element={<AccountManagement />} />
          <Route path="/account-state" element={<AccountStatement />} />
          <Route path="/transaction" element={<TransactionCategorization />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
