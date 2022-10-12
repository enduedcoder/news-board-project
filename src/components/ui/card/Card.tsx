import React from 'react';
import Button from '../button/Button';
import './Card.css';

export default function Card() {
  return (
    <div className="card-item">
      <h1>Board name</h1>
      <Button>View News</Button>
    </div>
  );
}
