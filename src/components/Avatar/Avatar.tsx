import { FC } from 'react';

import { StyledImage } from './styles';
import { AvatarProps } from './types';

export const Avatar: FC<AvatarProps> = ({
  imgSrc,
  imgAlt,
  width = 64,
  height = 64,
}) => {
  return (
    <StyledImage src={imgSrc} alt={imgAlt} width={width} height={height} />
  );
};
