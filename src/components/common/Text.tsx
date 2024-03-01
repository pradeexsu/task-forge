import { CSSProperties, HTMLProps, ReactNode } from 'react';

// type Varient = 'heading' | 'body' | 'heading2' | 'heading3' | 'bold';
type FontWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

type TextSize =
  | 'sm'
  | 'md'
  | 'base'
  | 'lg'
  | `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | ''}xl`;

interface TextProps {
  children: ReactNode;
  style?: CSSProperties;
  fontWeight?: FontWeight;
  className?: HTMLProps<HTMLElement>['className'];
  color?: string;
  size?: TextSize;
}

function Text({
  children,
  size = 'base',
  style,
  fontWeight = 'normal',
  className,
}: TextProps) {
  return (
    <span
      className={`text-${size} font-${fontWeight} ` + className}
      style={{
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default Text;
