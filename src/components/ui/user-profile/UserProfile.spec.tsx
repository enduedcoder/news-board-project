import { render, screen } from '@testing-library/react';
import LoginContext from '../../../context/LoginContext';
import UserProfile from './UserProfile';

const USER_PROFILE_TEST_ID_SELECTOR = 'user-profile-test-id';

describe('UserProfile', () => {
  it('should render content', () => {
    render(<UserProfile />);
    const userProfileComponent = screen.getByTestId(
      USER_PROFILE_TEST_ID_SELECTOR
    );

    expect(userProfileComponent).toBeInTheDocument();
  });

  it('should render text content', () => {
    render(
      <LoginContext.Provider
        value={{ email: 'test-email', setEmail: () => {} }}
      >
        <UserProfile />
      </LoginContext.Provider>
    );
    const emailContent = screen.getByText('Hello, test-email');

    expect(emailContent).toBeTruthy();
  });
});
