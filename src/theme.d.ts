import 'styled-components';
import { ColorPalette } from '@styles/theme/colors';
import { CSSProp } from 'styled-components';

interface FontStyles {
  Display: CSSProp;
  Header1: CSSProp;
  Header2: CSSProp;
  Title1: CSSProp;
  Title2: CSSProp;
  Title3: CSSProp;
  Headline: CSSProp;
  Body1: CSSProp;
  Body2: CSSProp;
  Body3: CSSProp;
  Caption: CSSProp;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorPalette;
    fontStyles: FontStyles;
  }
}
