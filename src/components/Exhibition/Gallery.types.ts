export interface GalleryInfos {
  id: number;
  category: string;
  thumbnail: string;
  credit: {
    title: string;
    author: string;
  };
}

export interface PieceProps {
  pieceName: string;
  pieceInfos: { title: string; author: string };
  goToDetailPage: () => void;
}

export interface OverlayInfosProps {
  pieceInfos: { title: string; author: string };
  isPieceHovered: boolean;
}

export interface IndicatorProps {
  handleScroll: () => void;
  width: string;
}
