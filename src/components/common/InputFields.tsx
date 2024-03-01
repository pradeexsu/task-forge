import { ChangeEvent } from 'react';

interface InputFieldsProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  name?: string;
  error?: boolean;
}

function InputFields({
  placeholder,
  value,
  onChange,
  name,
  error,
}: InputFieldsProps) {
  return (
    <input
      type="text"
      value={value}
      name={name}
      onChange={onChange}
      className={`${
        error && 'ring-red-500 ring-2 '
      } flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
      placeholder={placeholder}
    />
  );
}

export default InputFields;
