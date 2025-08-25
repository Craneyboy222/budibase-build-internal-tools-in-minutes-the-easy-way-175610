import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  IconComponent: IconType;
  ariaLabel: string;
}

const Icon: React.FC<IconProps> = ({ IconComponent, ariaLabel }) => {
  return <IconComponent aria-label={ariaLabel} />;
};

export default Icon;