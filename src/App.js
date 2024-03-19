import './App.css'
import './components/auth/Signup'
import './components/auth/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import WithdrawMoney from './components/features/WithdrawMoney'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wmoney" element={<WithdrawMoney />} 
        </Routes>
      </div>
    </Router>
  )
}

export default App
