import { ChangeEvent } from 'react';

interface SelectProps {
  opstions?: {
    label: string;
    value: string;
  }[];
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ opstions, value, onChange, name }: SelectProps) {
  return (
    <select
      className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      onChange={onChange}
      value={value}
      name={name}
    >
      {opstions?.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;
