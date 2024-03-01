import { CSSProperties, ReactNode } from 'react';
import { ClassNameType } from '../../typeings';

interface CardProps {
  style?: CSSProperties;
  children: ReactNode;
  className?: ClassNameType;
}

function Card({ children, style, className }: CardProps) {
  return (
    <div
      className={className + ' relative bg-white shadow-lg dark:bg-gray-700'}
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;
