import { styled } from 'styled-components';

export const StyledImage = styled.img<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 8px;
`;
