import React, { ReactNode } from 'react';
import Button from '../button/Button';
import './Card.css';

interface CardPropsType {
  children: ReactNode;
}

export default function Card({ children }: CardPropsType) {
  return (
    <div className="card-item">
      <h1>{children}</h1>
      <Button>View News</Button>
    </div>
  );
}
