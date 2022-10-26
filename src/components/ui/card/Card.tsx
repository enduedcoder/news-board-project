import React, { ReactNode } from 'react';
import Button from '../button/Button';
import './Card.scss';

interface CardPropsType {
  children: ReactNode;
  onButtonClick?: React.FormEventHandler<HTMLButtonElement>;
}

export default function Card({
  children,
  onButtonClick,
}: CardPropsType) {
  return (
    <div className="card-item">
      <h1>{children}</h1>
      <Button onButtonClick={onButtonClick}>View News</Button>
    </div>
  );
}
