import React from 'react';

export type LoginContextType = {
  email: string;
  setEmail: (email: string) => void;
};

export const LoginContext = React.createContext<LoginContextType>({
  email: 'test@gmail.com',
  setEmail: () => {},
});

export default LoginContext;
