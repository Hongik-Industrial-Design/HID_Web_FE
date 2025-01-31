import 'styled-components';
import { ColorPalette } from '@styles/theme/colors';
import { Typography } from '@styles/theme/typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorPalette;
    fontStyles: Typography;
  }
}
