import React from 'react';
import { useLoginContext } from '../../hooks/LoginContextHook';
import Button from '../ui/button/Button';
import InputField from '../ui/input-field/InputField';

export default function Login() {
  const { email, setEmail } = useLoginContext();

  const handleLogin = (e: any) => {
    e.preventDefault();

    localStorage.setItem('userEmail', email);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <InputField />
        <Button>Login</Button>
      </form>
    </div>
  );
}
