import { render, screen } from '@testing-library/react';
import Card from './Card';

const defaultTestProps = {
  children: 'Card content',
};

describe('Card', () => {
  it('should render content', () => {
    render(<Card {...defaultTestProps} />);

    const cardContent = screen.getByText('Card content');
    expect(cardContent).toBeTruthy();
  });
});
