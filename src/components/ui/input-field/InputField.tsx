import React from 'react';
import './InputField.scss';

interface InputFieldProps {
  id: string;
  inputLabel?: string;
  inputName: string;
  inputPlaceholder: string;
  ref?: React.Ref<HTMLInputElement>;
  inputValue?: string;
  onInputChange?: React.FormEventHandler<HTMLInputElement>;
}

const InputField = React.forwardRef<
  HTMLInputElement,
  InputFieldProps
>(
  (
    {
      id,
      inputLabel = 'Enter Field Data',
      inputName,
      inputPlaceholder,
      inputValue = '',
      onInputChange,
    },
    ref
  ) => (
    <>
      <label htmlFor="email">
        <b>{inputLabel}</b>
      </label>
      <input
        data-testid="input-test-id"
        defaultValue={inputValue}
        id={id}
        name={inputName}
        onChange={onInputChange}
        placeholder={inputPlaceholder}
        ref={ref}
        type="text"
      />
    </>
  )
);

export default InputField;
