import './UserProfile.scss';
import Image from '../../../assets/images.png';
import { useLoginContext } from '../../../hooks/useLoginContext';

export default function UserProfile() {
  const { email } = useLoginContext();

  return (
    <>
      {email && (
        <div
          className="user-profile"
          data-testid="user-profile-test-id"
        >
          <img alt="user-profile" src={Image} className="avatar" />
          <p>Hello, {email}</p>
        </div>
      )}
    </>
  );
}
