import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import './global-css-variables/variables.scss';
import LoginContext from './context/LoginContext';
import Login from './components/login/Login';
import BoardList from './components/board-list/BoardList';
import NewsList from './components/news-list/NewsList';
import Header from './components/ui/header/Header';
import UserProfile from './components/ui/user-profile/UserProfile';
import Logout from './components/logout/Logout';

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage?.getItem('email');
    setEmail(storedEmail ? storedEmail : '');
  }, []);

  return (
    <>
      <LoginContext.Provider value={{ email, setEmail }}>
        <Router>
          <Header />

          {!!email && (
            <div className="user-profile-container">
              <UserProfile />

              <Logout />
            </div>
          )}

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/board" element={<BoardList />} />
            <Route
              path="board/:boardId/news"
              element={<NewsList />}
            />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  );
}

export default App;
