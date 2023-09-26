import { Colors, FontSizes, FontWeights } from 'theme/types';

export type TextProps = {
  content: string;
  size: keyof FontSizes;
  color: keyof Colors;
  weight?: keyof FontWeights;
  withUnderline?: boolean;
};
