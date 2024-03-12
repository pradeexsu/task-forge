import React, { CSSProperties, ReactNode } from 'react';
import { ClassNameType } from '../../typings';

interface FlexBoxProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  grow?: number;
  children?: ReactNode;
  style?: CSSProperties;
  className?: ClassNameType;
}

const FlexBox: React.FC<FlexBoxProps> = ({
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  wrap = 'nowrap',
  gap = 0,
  grow = 0,
  children,
  style,
  className,
  ...restProps
}) => {
  const flexStyles: CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    gap: `${gap}px`,
    flexGrow: grow,
    ...style,
  };

  return (
    <div style={flexStyles} {...restProps} className={className}>
      {children}
    </div>
  );
};

export default FlexBox;
