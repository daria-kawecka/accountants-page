import { FC } from 'react';
import { AvatarProps } from './types';
import { StyledImage } from './styles';

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
