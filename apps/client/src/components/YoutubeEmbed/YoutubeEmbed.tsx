import { JSX } from 'react/jsx-runtime';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

import { getYotubeVideoId } from '@utils/getYoutubeVideoId';

import * as S from './YoutubeEmbed.styled';

type YoutubeEmbedProps = {
  youtubeUrl: string;
};

const YoutubeEmbed = ({ youtubeUrl }: YoutubeEmbedProps): JSX.Element => {
  const origin = window.location.origin;

  const onPlayerReady: YouTubeProps['onReady'] = (e: YouTubeEvent) => {
    e.target.pauseVideo();
  };

  const options: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      color: 'white',
      controls: 1,
      rel: 0,
      origin: origin,
    },
  };

  const videoId = getYotubeVideoId(youtubeUrl);

  return (
    <S.YoutubeVideoContainer>
      <YouTube videoId={videoId} opts={options} onReady={onPlayerReady} />
    </S.YoutubeVideoContainer>
  );
};

export default YoutubeEmbed;
