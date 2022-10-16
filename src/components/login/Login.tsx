import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../hooks/LoginContextHook';
import Button from '../ui/button/Button';
import InputField from '../ui/input-field/InputField';
import './Login.css';

export default function Login() {
  const { email, setEmail } = useLoginContext();
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();

    localStorage.setItem('userEmail', email);
    navigate('/board');
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <InputField />
        <Button>Login</Button>
      </form>
    </div>
  );
}
