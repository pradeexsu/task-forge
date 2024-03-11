import { ReactNode } from 'react';

interface TooltipProps {
  text?: string;
  children?: ReactNode;
}
const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className="tooltip tooltip-left" data-tip={text}>
      {children}
    </div>
  );
};

export default Tooltip;
