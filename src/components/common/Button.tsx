import { ReactNode } from 'react';
import { ButtonVarient, ClassNameType } from '../../typeings';
import FlexBox from './FlexBox';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: ClassNameType;
  varient?: ButtonVarient;
  size?: 'bt-xs' | 'btn-sm' | '' | 'btn-lg';
  glassy?: boolean;
  outline?: boolean;
  block?: boolean;
  tabIndex?: number;
}

function Button({
  label,
  onClick,
  children,
  className,
  size = 'btn-sm',
  tabIndex,
  outline = false,
  varient = 'btn-info',
  block = false,
}: ButtonProps) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`btn ${varient} 
      ${size} 
      ${outline && ' btn-outline '} 
      ${block && ' btn-block '} 
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
