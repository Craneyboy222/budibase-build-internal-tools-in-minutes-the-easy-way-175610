import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
  const sizeClass = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  }[size];

  return (
    <img
      className={`inline-block rounded-full ${sizeClass}`}
      src={src}
      alt={alt}
      aria-label={alt}
    />
  );
};

export default Avatar;
