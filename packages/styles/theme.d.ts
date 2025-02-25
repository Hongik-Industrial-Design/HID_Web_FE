import 'styled-components';
import { ColorPalette } from './theme/colors';
import { Typography } from './theme/typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorPalette;
    fontStyles: Typography;
  }
}
