import { render, screen } from '@testing-library/react';
import BoardList from './BoardList';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('BoardList', () => {
  it('should render content', () => {
    render(<BoardList />);
    const textContent = screen.getByText('Loading Data');

    expect(textContent).toBeInTheDocument();
  });
});
