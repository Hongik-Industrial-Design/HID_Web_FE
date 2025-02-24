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
`;
