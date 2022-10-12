import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import LoginContext from './context/LoginContext';
import Login from './components/login/Login';
import BoardList from './components/board-list/BoardList';

function App() {
  const [email, setEmail] = useState('');

  return (
    <LoginContext.Provider value={{ email, setEmail }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/boards" element={<BoardList />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
