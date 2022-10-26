import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render content', () => {
    render(<Header />);
    const headerContent = screen.getByText('NewsLetter Board');

    expect(headerContent).toBeTruthy();
  });
});
