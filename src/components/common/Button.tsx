import { ReactNode } from 'react';
import { ClassNameType } from '../../typeings';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: ClassNameType;
  varient?: 'primary' | 'secondary' | 'danger';
}
function Button({
  label,
  onClick,
  children,
  className,
  varient = 'primary',
}: ButtonProps) {
  if (varient === 'primary') {
    className += ' bg-indigo-600 hover:bg-indigo-700 ';
  } else if (varient === 'secondary') {
    className += ' bg-gray-600 hover:bg-gray-700';
  } else if (varient === 'danger') {
    className += ' bg-red-600 hover:bg-red-700 ';
  }
  return (
    <button
      onClick={onClick}
      className={
        className +
        ' py-2 px-4  focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2'
      }
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
