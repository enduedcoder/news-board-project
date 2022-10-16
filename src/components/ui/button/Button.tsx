import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  onButtonClick?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  onButtonClick,
}: ButtonProps): JSX.Element => {
  return (
    <button className="btn" onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
