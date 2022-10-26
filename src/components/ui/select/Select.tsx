import React from 'react';
import './Select.scss';

interface SelectOptionType {
  label: string;
  value: string;
}

interface SelectProps {
  values: SelectOptionType[];
  selectedValue?: string;
  onSelectChange?: React.FormEventHandler<HTMLSelectElement>;
}

export default function Select({
  values,
  onSelectChange,
  selectedValue,
}: SelectProps) {
  return (
    <select
      data-testid="select-test-id"
      defaultValue={selectedValue}
      onChange={onSelectChange}
    >
      {values.map((value, index) => (
        <option key={index} value={value.value}>
          {value.label}
        </option>
      ))}
    </select>
  );
}
