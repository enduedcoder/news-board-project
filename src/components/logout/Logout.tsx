import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../hooks/useLoginContext';
import Button from '../ui/button/Button';

export default function Logout() {
  const navigate = useNavigate();
  const { email, setEmail } = useLoginContext();

  const handleLogOut = () => {
    setEmail('');
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <>
      {email && <Button onButtonClick={handleLogOut}>Logout</Button>}
    </>
  );
}
