import * as S from './OverlayInfos.styled';

const OverlayInfos = ({ pieceInfos, isHovered }) => {
  return (
    <S.OverlayContainer $isHovered={isHovered}>
      <div className="credit">
        <div className="title">{pieceInfos.title}</div>
        <div className="author">{pieceInfos.author}</div>
      </div>
    </S.OverlayContainer>
  );
};

export default OverlayInfos;
