import './App.css';
import Signup from './auth/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={< Signup/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
