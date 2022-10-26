import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

const BUTTON_TEST_ID_SELECTOR = 'button-test-id';

const defaultTestProps = {
  children: 'button',
  classes: 'test-class',
  disabled: false,
};

describe('Button', () => {
  it('should render content', () => {
    render(<Button {...defaultTestProps} />);

    const buttonContent = screen.getByText('button');
    expect(buttonContent).toBeTruthy();
  });

  it('should render button onto the screen', () => {
    render(<Button {...defaultTestProps} />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID_SELECTOR);

    expect(buttonElement).toBeInTheDocument();
  });

  it('should NOT have button disabled when initialized', () => {
    render(<Button {...defaultTestProps} />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID_SELECTOR);

    expect(buttonElement).toBeEnabled();
  });

  it('should have button disabled when disabled prop is passed', () => {
    render(<Button {...defaultTestProps} disabled={true} />);
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID_SELECTOR);

    expect(buttonElement).toBeDisabled();
  });

  it('should call callback', () => {
    const onButtonClickCallbackMock = jest.fn();
    render(
      <Button
        {...defaultTestProps}
        onButtonClick={onButtonClickCallbackMock}
      />
    );
    const buttonElement = screen.getByTestId(BUTTON_TEST_ID_SELECTOR);

    fireEvent.click(buttonElement);

    expect(onButtonClickCallbackMock).toHaveBeenCalled();
  });
});
