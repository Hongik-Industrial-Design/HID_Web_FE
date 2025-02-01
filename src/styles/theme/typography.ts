import { css, CSSProp } from 'styled-components';

export type Typography = {
  [key: string]: CSSProp;
};

const CommonFontstyles = css`
  font-style: normal;
  letter-spacing: 0;
`;

const KoreanFont = css`
  ${CommonFontstyles}
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
`;

export const fontStyles: Typography = {
  Header1: css`
    ${CommonFontstyles}
    font-size: clamp(3.2rem, 2.5vw, 4.8rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
  Header2: css`
    ${CommonFontstyles}
    font-size: clamp(2.4rem, 1.6vw, 3.2rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.0028em;
  `,
  Header1_KO: css`
    ${KoreanFont}
    font-size: clamp(3.2rem, 2.5vw, 4.8rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
  Header2_KO: css`
    ${KoreanFont}
    font-size: clamp(2.4rem, 1.6vw, 3.2rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.0028em;
  `,
  Header3: css`
    ${CommonFontstyles}
    font-size: clamp(2.4rem, 1.6vw, 3.2rem);
    font-weight: 600;
    line-height: 1;
  `,
  Header4: css`
    ${CommonFontstyles}
    font-size: clamp(2.4rem, 1.6vw, 3.2rem);
    font-weight: 600;
    line-height: 1.125;
  `,
  Title1: css`
    ${CommonFontstyles}
    font-size: clamp(2.8rem, 2vw, 4rem);
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.0028em;
  `,
  Title2: css`
    ${CommonFontstyles}
    font-size: clamp(2.4rem, 1.6vw, 3.2rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.0028em;
  `,
  Title3: css`
    ${CommonFontstyles}
    font-size: clamp(2.4rem, 1.6vw, 3.2rem);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.0028em;
  `,
  Title4: css`
    ${CommonFontstyles}
    font-size: clamp(1.4rem, 1.2vw, 2.2rem);
    font-weight: 600;
    line-height: 1.36;
  `,
  Title5: css`
    ${CommonFontstyles}
    font-size: clamp(1.4rem, 1vw, 1.8rem);
    line-height: 1.4;
  `,
  Title6: css`
    ${CommonFontstyles}
    font-size: clamp(1.2rem, 0.8vw, 1.6rem);
    line-height: 1;
  `,
  SubTitle1: css`
    ${CommonFontstyles}
    font-size: clamp(1.6rem, 1.2vw, 2.4rem);
    font-weight: 400;
    line-height: 1.3;
  `,
  SubTitle2: css`
    ${CommonFontstyles}
    font-size: clamp(1.4rem, 1.2vw, 2.2rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.0028em;
  `,
  Headline1: css`
    ${CommonFontstyles}
    font-size: clamp(1.2rem, 1.2vw, 2rem);
    font-weight: 400;
    line-height: 1.2;
  `,
  Headline2: css`
    ${CommonFontstyles}
    font-size: clamp(1rem, 0.8vw, 1.4rem);
    font-weight: 400;
    line-height: 1.6;
  `,
  Body1: css`
    ${CommonFontstyles}
    font-size: clamp(1.6rem, 1.2vw, 2.4rem);
    font-weight: 400;
    line-height: 1.3;
  `,
  Body2: css`
    ${CommonFontstyles}
    font-size: clamp(1.2rem, 1vw, 1.8rem);
    font-weight: 400;
    line-height: 1.4;
  `,
  Body2_KO: css`
    ${KoreanFont}
    font-size: clamp(1.2rem, 1vw, 1.8rem);
    font-weight: 400;
    line-height: 1.4;
  `,
  Body3: css`
    ${CommonFontstyles}
    font-size: clamp(1.2rem, 0.8vw, 1.6rem);
    font-weight: 400;
    line-height: 1.5;
  `,
  Body3_KO: css`
    ${KoreanFont}
    font-size: clamp(1.2rem, 0.8vw, 1.6rem);
    font-weight: 400;
    line-height: 1.5;
  `,
  Body4: css`
    ${CommonFontstyles}
    font-size: clamp(1rem, 0.8vw, 1.4rem);
    font-weight: 400;
    line-height: 1.6;
  `,
  Caption1: css`
    ${CommonFontstyles}
    font-size: clamp(1rem, 0.8vw, 1.4rem);
    font-weight: 500;
    line-height: 1.3;
  `,
  Caption2: css`
    ${CommonFontstyles}
    font-size: clamp(1rem, 0.8vw, 1.4rem);
    font-weight: 400;
    line-height: 1.2;
  `,
  Caption3: css`
    ${CommonFontstyles}
    font-size: clamp(1rem, 0.8vw, 1.4rem);
    font-weight: 300;
    line-height: 1.2;
  `,
  Hint: css`
    ${CommonFontstyles}
    font-size: clamp(1rem, 0.8vw, 1.4rem);
    font-weight: 400;
    line-height: 1.6;
  `,
};
