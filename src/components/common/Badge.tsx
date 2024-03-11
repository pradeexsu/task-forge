import { BadgeVariant, ClassNameType } from '../../typeings';

interface BadgeProps {
  label?: string;
  varient: BadgeVariant;
  className?: ClassNameType;
}

function Badge({ label, varient, className = '' }: BadgeProps) {
  return (
    <div className={`badge badge-sm ${className} ${varient}`}>{label}</div>
  );
}

export default Badge;
