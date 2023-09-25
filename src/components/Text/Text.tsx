import { FC } from 'react';
import { StyledText } from './styles';
import { TextProps } from './types';

export const Text: FC<TextProps> = ({
  content,
  size,
  color,
  weight = 'normal',
  withUnderline = false,
}) => {
  return (
    <StyledText
      size={size}
      color={color}
      weight={weight}
      withUnderline={withUnderline}
    >
      {content}
    </StyledText>
  );
};
