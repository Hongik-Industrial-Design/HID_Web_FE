/* eslint-disable react/prop-types */
import { OverlayContainer } from "./OverlayInfos.styled";

const OverlayInfos = ({ pieceInfos, isHovered }) => {
  return (
    <OverlayContainer $isHovered={isHovered}>
      <div className="credit">
        <div className="title">{pieceInfos.title}</div>
        <div className="author">{pieceInfos.author}</div>
      </div>
    </OverlayContainer>
  );
};

export default OverlayInfos;
