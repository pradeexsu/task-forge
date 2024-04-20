import { ReactNode } from 'react';
import { ButtonVarient, ClassNameType } from '../../typings';
import FlexBox from './FlexBox';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: ClassNameType;
  varient?: ButtonVarient;
  size?: 'btn-xs' | 'btn-sm' | 'btn-lg';
  tabIndex?: number;
  rounded?: boolean;
  outline?: boolean;
  disabled?: boolean;
  ref?:any;
}

function Button({
  label,
  onClick,
  children,
  className,
  size = 'btn-sm',
  tabIndex,
  varient = 'btn-info',
  rounded = false,
  outline = false,
  disabled = false,
}: ButtonProps) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`btn ${varient} 
      ${size} 
      ${disabled ? 'btn-disabled ' : 'cursor-pointer'}
      ${outline &&'btn-outline'}
      
      ${rounded && ' rounded-s-badge rounded-e-badge '}
      ${className} rounded-lg `}
      tabIndex={tabIndex}
    >
      <FlexBox>
        {label}
        {children}
      </FlexBox>
    </div>
  );
}

export default Button;
