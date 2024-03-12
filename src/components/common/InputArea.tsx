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
      className="textarea  textarea-secondary w-full bg-white text-black h-10 max-h-32"
    />
  );
}

export default InputArea;
