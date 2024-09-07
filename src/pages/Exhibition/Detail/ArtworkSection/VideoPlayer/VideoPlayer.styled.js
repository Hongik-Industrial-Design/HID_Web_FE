import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const VideoContainer = styled.div`
  width: 100%;

  display: flex;
  /* justify-content: center;
  align-items: center; */

  position: relative;

  margin-bottom: 64px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border: 1px solid ${colors.HID_Grayscale[200]};
  border-radius: 2px;
`;

export const BlurScreen = styled.div`
  ${({ $isPlaying }) =>
    $isPlaying
      ? "opacity: 0; z-index: -1;"
      : "opacity: 1; z-index: 3;"}; // Play 와 Full Screen Button 보다 뒤에, 비디오 소스보다는 앞에
  transition: opacity 0.25s ease;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(217, 217, 217, 0.4);
`;

export const PlayButton = styled.button`
  ${({ $isPlaying }) =>
    $isPlaying
      ? "opacity : 0; z-index: -1; cursor: default;"
      : "opacity:1; z-index:5"};
  transition: opacity 0.25s ease;

  width: 88px;
  height: 72px;

  padding: 8px 16px;
  border-radius: 4px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${colors.HID_Grayscale[900]};

  .play {
    width: 56px;
    height: 56px;
  }
`;

export const FullScreenButton = styled.button`
  width: 42px;
  height: 42px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);

  border-radius: 3px;

  background-color: ${colors.HID_Grayscale[900]};

  .full-screen {
    width: 32px;
    height: 32px;
  }
`;
