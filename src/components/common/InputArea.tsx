import { ChangeEvent } from 'react';

interface InputFieldsProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

function InputArea({
  placeholder = 'Type here...',
  value,
  onChange,
  name,
}: InputFieldsProps) {
  return (
    <textarea
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="textarea rounded-sm pl-2 w-full bg-white text-black h-6 max-h-32 leading-3	"
    />
  );
}

export default InputArea;
