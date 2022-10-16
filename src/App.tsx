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
import NewsList from './components/news-list/NewsList';

function App() {
  const [email, setEmail] = useState('');

  return (
    <LoginContext.Provider value={{ email, setEmail }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="board/:boardId/news" element={<NewsList />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
