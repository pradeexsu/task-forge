import { ReactNode } from 'react';
import { BadgeVariant } from '../../typeings';

interface TooltipProps {
  text?: string;
  children?: ReactNode;
  varient?: BadgeVariant;
}
const Tooltip = ({ text, children, varient = 'default' }: TooltipProps) => {
  return (
    <div className={`tooltip tooltip-right tooltip-${varient}`} data-tip={text}>
      {children}
    </div>
  );
};

export default Tooltip;
