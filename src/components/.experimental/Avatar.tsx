import { ClassNameType } from '../../typeings';

interface AvatarProps {
  url: string;
  alt?: string;
  className?: ClassNameType;
  style?: React.CSSProperties;
}

function Avatar({ url, alt, className, style }: AvatarProps) {
  return (
    <span className="relative block">
      <img
        alt={alt || 'avatar'}
        src={url}
        onError={(e) => {
          e.currentTarget.src =
            'https://avatars.githubusercontent.com/u/49487927';
        }}
        style={style}
        className={'mx-auto object-cover rounded-full h-10 w-10 ' + className}
      />
    </span>
  );
}

export default Avatar;
