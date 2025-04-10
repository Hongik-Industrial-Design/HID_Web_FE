import styled, { css } from 'styled-components';

export const ExhibitionDetailWrapper = styled.div<{
  $isPendingOrError: boolean;
}>`
  width: 100%;
  height: fit-content;

  ${({ $isPendingOrError }) =>
    $isPendingOrError &&
    css`
      height: calc(100vh - 118px);

      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const ExhibitionDetailContainer = styled.section`
  width: 100%;
  height: fit-content;
`;
