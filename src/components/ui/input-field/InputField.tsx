import React from 'react';
import { useLoginContext } from '../../../hooks/LoginContextHook';

export default function InputField() {
  const { email, setEmail } = useLoginContext();

  return (
    <>
      <p>{email}</p>
      <label htmlFor="email">
        <b>Enter Email</b>
      </label>
      <input
        name="email"
        placeholder="Enter email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}
