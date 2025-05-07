import styled from 'styled-components';

export const YoutubeVideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-top: 14.8rem;

  & > div {
    width: 100%;
    height: 100%; /* react-youtube에서 자동 생성되는 div에 높이 설정 */
  }

  iframe {
    border-radius: 2px;
  }

  @media (max-width: 1920px) {
    margin-top: clamp(8rem, 8vw, 14.8rem);
  }

  @media (max-width: 1200px) {
    margin-top: clamp(6rem, 8vw, 12rem);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: clamp(3.6rem, 4vw, 6.4rem);
  }
`;
