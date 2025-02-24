import styled, { css } from 'styled-components';

export const NextPreviousCommunityContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`;

const nextPreviousButtonContainerStyles = css`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
`;

export const PreviousButtonContainer = styled.div`
  ${nextPreviousButtonContainerStyles}
`;

export const NextButtonContainer = styled.div`
  ${nextPreviousButtonContainerStyles}
`;

const nextPreviousButtonStyles = css`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  ${({ theme }) => theme.fontStyles.Body2};
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;

export const PreviousButton = styled.button`
  ${nextPreviousButtonStyles}
`;

export const NextButton = styled.button`
  ${nextPreviousButtonStyles}
`;

const nextPreviousButtonIconStyles = css`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;

export const PreviousButtonIcon = styled.div`
  ${nextPreviousButtonIconStyles}
`;

const nextPreviousPostTitleStyles = css`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  white-space: nowrap;

  ${({ theme }) => theme.fontStyles.Title5_KO}
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};

  .post-title {
    width: fit-content;
    max-width: 15rem;
    height: fit-content;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PreviousPostTitle = styled.div`
  ${nextPreviousPostTitleStyles}
  text-align: left;
`;

export const NextPostTitle = styled.div`
  ${nextPreviousPostTitleStyles}
  text-align: right;
`;

export const ImportantIconBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
