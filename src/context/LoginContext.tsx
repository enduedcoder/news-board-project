import React from 'react';

export type LoginContextType = {
  email: string;
  setEmail: (email: string) => void;
};

export const LoginContext = React.createContext<LoginContextType>({
  email: 'admin@gmail.com',
  setEmail: () => {},
});

export default LoginContext;
