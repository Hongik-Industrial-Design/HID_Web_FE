import PropTypes from 'prop-types';
import * as S from './NewsEventCard.styled';

const NewsEventCard = ({ route, imageURL, deadline, title, category }) => {
  return (
    <S.NewsEventCardContainer href={route}>
      <S.CardThumbnail src={imageURL} alt={title} />
      <S.CardInfos>
        <span className="date">{deadline}</span>
        <span className="title">{title}</span>
        <span className="category">{category}</span>
      </S.CardInfos>
    </S.NewsEventCardContainer>
  );
};

NewsEventCard.propTypes = {
  route: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default NewsEventCard;
