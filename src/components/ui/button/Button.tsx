import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
}

const Button = (props: ButtonProps): JSX.Element => {
  return <button className="btn">{props.children}</button>;
};

export default Button;
