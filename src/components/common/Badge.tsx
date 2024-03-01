import { BadgeVariant } from '../../typeings';
import Text from './Text';

interface BadgeProps {
  lable: string;
  varient: BadgeVariant;
}

function Badge({ lable, varient }: BadgeProps) {
  const badgeClasses: Record<BadgeVariant, string> = {
    ['info']: 'bg-blue-100 text-blue-600',
    ['danger']: 'bg-red-100 text-red-600',
    ['warning']: 'bg-yellow-100 text-yellow-600',
    ['success']: 'bg-green-100 text-green-600',
  };

  return (
    <Text className={'px-3 rounded-full ' + badgeClasses[varient]}>
      {lable}
    </Text>
  );
}

export default Badge;
