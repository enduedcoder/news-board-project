import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

const FORM_TEST_ID_SELECTOR = 'form-test-id';
const BUTTON_TEST_ID_SELECTOR = 'button-test-id';
const INPUT_TEST_ID_SELECTOR = 'input-test-id';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Login', () => {
  it('should render content', () => {
    render(<Login />);
    const formContent = screen.getByTestId(FORM_TEST_ID_SELECTOR);

    expect(formContent).toBeInTheDocument();
  });

  it('should LOGIN on button click', () => {
    render(<Login />);
    const loginButton = screen.getByTestId(BUTTON_TEST_ID_SELECTOR);
    const input = screen.getByTestId(INPUT_TEST_ID_SELECTOR);

    fireEvent.change(input, { target: { value: 'user@gmail.com' } });
    fireEvent.click(loginButton);

    expect(mockedUsedNavigate).toBeCalledWith('/board');
  });
});
