import { fireEvent, render, screen } from '@testing-library/react';
import Logout from './Logout';

const BUTTON_TEST_ID_SELECTOR = 'button-test-id';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Logout', () => {
  it('should render content', () => {
    render(<Logout />);
    const logOutText = screen.getByText('Logout');

    expect(logOutText).toBeInTheDocument();
  });

  it('should LOGOUT on button click', () => {
    render(<Logout />);
    const loginButton = screen.getByTestId(BUTTON_TEST_ID_SELECTOR);

    fireEvent.click(loginButton);

    expect(mockedUsedNavigate).toBeCalledWith('/');
  });
});
