import { styled } from 'styled-components';
import { Colors, FontSizes, FontWeights } from 'theme/types';

interface TextProps {
  content: string;
  size: string; // Adjust the type to match your theme's font sizes
  color: string; // Adjust the type to match your theme's color types
  weight?: string; // Adjust the type for weight as needed
  withUnderline?: boolean;
}

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
