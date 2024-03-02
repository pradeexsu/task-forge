import { ReactNode } from 'react';
import { ButtonVarient, ClassNameType } from '../../typeings';
import FlexBox from './FlexBox';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: ClassNameType;
  varient?: ButtonVarient;
  size?: 'xs' | 'sm' | '' | 'lg';
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
  size = 'sm',
  tabIndex,
  outline = false,
  varient = '',
  glassy = false,
  block = false,
}: ButtonProps) {
  if ('' !== size) {
    className = ` ${className} btn-${size}`;
  }
  if ('' !== varient) {
    className = ` ${className} btn-${varient} `;
  }
  return (
    <div
      role="button"
      onClick={onClick}
      className={`btn
      ${glassy && ' glass '}
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
