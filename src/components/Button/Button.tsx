import { FC } from 'react';

import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
