import { ChangeEvent } from 'react';
import { ClassNameType } from '../../typings';

interface InputFieldsProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  name?: string;
  className?: ClassNameType;
  error?: boolean;
}

function InputFields({
  placeholder = 'Type here...',
  value,
  onChange,
  name,
  error = false,
  className = '',
}: InputFieldsProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={
        className +
        ` input focus:outline-none w-full bg-white text-black rounded-sm input-sm ${
          error ? ' input-error shake' : 'input-secondary'
        }`
      }
    />
  );
}

export default InputFields;
