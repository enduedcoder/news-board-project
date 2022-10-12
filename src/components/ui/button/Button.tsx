import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  handleClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  handleClick,
}: ButtonProps): JSX.Element => {
  return (
    <button className="btn" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
