import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';

import playButton from '@assets/icons/svgs/video-player/play_fill-white.svg';
import fullScreenButton from '@assets/icons/svgs/video-player/full-screen_white.svg';

import * as S from './VideoPlayer.styled';

interface VideoPlayerProps {
  videoData: { id: number; url: string }[];
  currentPage: number;
}

const VideoPlayer = ({
  videoData,
  currentPage,
}: VideoPlayerProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = `/Graduation-Exhibition/${currentPage}/${videoData[0]?.url}`;
      videoRef.current.load(); // Reload the new video
      setIsPlaying(false); // Reset Playing state
    }
  }, [currentPage, videoData]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullScreen = () => {
    const videoElement = videoRef.current as HTMLVideoElement & {
      webkitRequestFullscreen?: () => void;
      msRequestFullscreen?: () => void;
    };

    if (!document.fullscreenElement && videoRef.current) {
      if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <>
      {videoData?.map((video) => (
        <S.VideoContainer key={video.id}>
          <S.Video ref={videoRef} onClick={handleVideoClick}>
            <source
              src={`/Graduation-Exhibition/${currentPage}/${video?.url}`}
              type="video/mp4"
            />
          </S.Video>

          <S.BlurScreen $isPlaying={isPlaying} />

          <S.PlayButton onClick={handlePlay} $isPlaying={isPlaying}>
            <img src={playButton} alt="Play-Button" className="play" />
          </S.PlayButton>

          <S.FullScreenButton onClick={handleFullScreen}>
            <img
              src={fullScreenButton}
              alt="Full-Screen-Button"
              className="full-screen"
            />
          </S.FullScreenButton>
        </S.VideoContainer>
      ))}
    </>
  );
};

export default VideoPlayer;
