import './App.css'
import './components/auth/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/auth/Signup'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
