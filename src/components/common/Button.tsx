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
}: ButtonProps) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`btn ${varient} 
      ${size} 
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
