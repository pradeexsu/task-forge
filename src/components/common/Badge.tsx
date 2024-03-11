import { BadgeVariant, ClassNameType } from '../../typeings';

interface BadgeProps {
  label?: string;
  varient: BadgeVariant;
  className?: ClassNameType;
}

function Badge({ label, varient, className = '' }: BadgeProps) {
  className += ` badge badge-sm ` + varient;
  return <div className={className}>{label}</div>;
}

export default Badge;
