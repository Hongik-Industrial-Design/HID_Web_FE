/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import {
  BlurScreen,
  FullScreenButton,
  PlayButton,
  Video,
  VideoContainer,
} from "./VideoPlayer.styled";

import playButton from "@assets/Videos/play_fill-white.svg";
import fullScreenButton from "@assets/Videos/full-screen_white.svg";

const VideoPlayer = ({ videoData, currentPage }) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = `/Graduation-Exhibition/${currentPage}/${videoData[0]?.url}`;
      videoRef.current.load(); // Reload the new video
      setIsPlaying(false); // Reset Playing state
    }
  }, [currentPage, videoData]);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullScreen) {
        console.log(videoRef.current.requestFullScreen);
        videoRef.current.requestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <>
      {videoData?.map((video) => (
        <VideoContainer key={video.id}>
          <Video ref={videoRef} onClick={handleVideoClick}>
            <source
              src={`/Graduation-Exhibition/${currentPage}/${video?.url}`}
              type="video/mp4"
            />
          </Video>

          <BlurScreen $isPlaying={isPlaying} />

          <PlayButton onClick={handlePlay} $isPlaying={isPlaying}>
            <img src={playButton} alt="Play-Button" className="play" />
          </PlayButton>

          <FullScreenButton onClick={handleFullScreen}>
            <img
              src={fullScreenButton}
              alt="Full-Screen-Button"
              className="full-screen"
            />
          </FullScreenButton>
        </VideoContainer>
      ))}
    </>
  );
};

export default VideoPlayer;
