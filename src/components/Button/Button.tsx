import { FC } from 'react';

import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
