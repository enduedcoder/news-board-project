import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  classes?: string;
  children: ReactNode;
  disabled?: boolean;
  onButtonClick?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = ({
  classes,
  children,
  disabled = false,
  onButtonClick,
}: ButtonProps): JSX.Element => {
  const classesString = classes ? classes : '';

  return (
    <button
      className={`btn ${classesString}`}
      data-testid="button-test-id"
      disabled={disabled}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
