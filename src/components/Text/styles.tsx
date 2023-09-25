import { styled } from 'styled-components';
import { Colors, FontSizes, FontWeights } from 'theme/types';

export const StyledText = styled('p').withConfig({
  shouldForwardProp: (prop: string) =>
    !['weight', 'withUnderline'].includes(prop),
})<{
  size: keyof FontSizes;
  color: keyof Colors;
  weight: keyof FontWeights;
  withUnderline?: boolean;
}>`
  font-size: ${({ theme, size }) => theme.fontSizes[size]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ weight }) => weight};
  ${({ withUnderline }) => withUnderline && 'text-decoration: underline;'};
`;

// export const StyledText = styled.p<{
//   size: keyof FontSizes;
//   color: keyof Colors;
//   weight: keyof FontWeights;
//   withUnderline?: boolean;
// }>`
//   font-size: ${({ theme, size }) => theme.fontSizes[size]};
//   color: ${({ theme, color }) => theme.colors[color]};
//   font-weight: ${({ weight }) => weight};
//   ${({ withUnderline }) => withUnderline && 'text-decoration: underline;'};
// `;

export const StyledSpan = styled.span`
  font-size: small;
`;
