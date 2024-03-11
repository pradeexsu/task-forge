import { CSSProperties, ReactNode } from 'react';
import { ClassNameType } from '../../typeings';

type FontWeight = `text-${
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'}`;

type TextSize = `text-${'sm' | 'md' | 'base' | 'lg' | `${'' | 2 | 3 | 4}xl`}`;

interface TextProps {
  color?: string;
  size?: TextSize;
  children: ReactNode;
  style?: CSSProperties;
  fontWeight?: FontWeight;
  className?: ClassNameType;
}

function Text({
  style,
  children,
  className,
  size = 'text-base',
  fontWeight = 'text-normal',
}: TextProps) {
  return (
    <span
      className={`${size} ${fontWeight} ${className}`}
      style={{
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default Text;
