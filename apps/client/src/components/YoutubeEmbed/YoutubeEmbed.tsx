import { JSX } from 'react/jsx-runtime';
import YouTube, { YouTubeProps } from 'react-youtube';

import { getYotubeVideoId } from '@utils/getYoutubeVideoId';

import * as S from './YoutubeEmbed.styled';

type YoutubeEmbedProps = {
  youtubeUrl: string;
};

const YoutubeEmbed = ({ youtubeUrl }: YoutubeEmbedProps): JSX.Element => {
  const onPlayerReady: YouTubeProps['onReady'] = (e) => {
    e.target.pauseVideo();
  };

  const options: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      color: 'white',
      controls: 1,
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
