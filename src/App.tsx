import { useState } from 'react';
import './App.css';
import LoginContext from './context/LoginContext';
import Login from './components/login/Login';

function App() {
  const [email, setEmail] = useState('');

  return (
    <LoginContext.Provider value={{ email, setEmail }}>
      <p>In app: {email}</p>
      <Login />
    </LoginContext.Provider>
  );
}

export default App;
