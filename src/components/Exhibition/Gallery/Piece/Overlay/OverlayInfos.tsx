import * as S from './OverlayInfos.styled';

const OverlayInfos = ({ pieceInfos, isPieceHovered }) => {
  return (
    <S.OverlayContainer $isPieceHovered={isPieceHovered}>
      <div className="credit">
        <div className="title">{pieceInfos.title}</div>
        <div className="author">{pieceInfos.author}</div>
      </div>
    </S.OverlayContainer>
  );
};

export default OverlayInfos;
