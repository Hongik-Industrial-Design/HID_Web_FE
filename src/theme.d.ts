import 'styled-components';
import { ColorPaletteList } from '@styles/theme/colors';
import { TypographyList } from '@styles/theme/typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorPaletteList;
    fontStyles: TypographyList;
  }
}
