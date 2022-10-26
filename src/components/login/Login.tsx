import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../hooks/useLoginContext';
import Button from '../ui/button/Button';
import InputField from '../ui/input-field/InputField';
import './Login.scss';

export default function Login() {
  const { setEmail } = useLoginContext();
  const inputRef = useRef<HTMLInputElement>(null!);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputRef?.current?.value.length > 0) {
      setEmail(inputRef?.current?.value);
      localStorage.setItem('email', inputRef?.current?.value);
      navigate('/board');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleLogin} data-testid="form-test-id">
        <div className="inputBox">
          <InputField
            id="email"
            inputName="email"
            inputLabel="Enter Email"
            inputPlaceholder="Enter Email"
            ref={inputRef}
            onInputChange={(e) => {
              inputRef.current.value = (
                e.target as HTMLInputElement
              ).value;
            }}
          />
        </div>
        <div className="inputBox">
          <Button
            disabled={inputRef?.current?.value.length === 0}
            data-testid="login-button-test-id"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
