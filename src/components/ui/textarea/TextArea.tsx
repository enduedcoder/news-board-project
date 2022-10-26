import React from 'react';
import './TextArea.scss';

interface TextAreaProps {
  id: string;
  textAreaLabel?: string;
  textAreaName: string;
  textAreaPlaceholder: string;
  ref?: React.Ref<HTMLTextAreaElement>;
  textAreaValue?: string;
  onTextAreaChange?: React.FormEventHandler<HTMLTextAreaElement>;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      textAreaLabel = 'Enter Field Data',
      textAreaName,
      textAreaPlaceholder,
      textAreaValue = '',
      onTextAreaChange,
    },
    ref
  ) => (
    <>
      <label htmlFor="email">
        <b>{textAreaLabel}</b>
      </label>
      <textarea
        data-testid="text-area-test-id"
        defaultValue={textAreaValue}
        id={id}
        name={textAreaName}
        onChange={onTextAreaChange}
        placeholder={textAreaPlaceholder}
        ref={ref}
      />
    </>
  )
);

export default TextArea;
