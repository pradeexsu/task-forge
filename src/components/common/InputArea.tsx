import { ChangeEvent } from 'react';

interface InputFieldsProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

function InputArea({ placeholder, value, onChange, name }: InputFieldsProps) {
  return (
    <textarea
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300  appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      rows={3}
    />
  );
}

export default InputArea;
