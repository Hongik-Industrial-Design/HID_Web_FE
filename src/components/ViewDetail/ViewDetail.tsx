import * as S from './ViewDetail.styled';

type ViewDetailProps = {
  detailLink: string;
};

const ViewDetail = ({ detailLink }: ViewDetailProps) => {
  return <S.ViewDetailLink to={detailLink}>View Detail</S.ViewDetailLink>;
};

export default ViewDetail;
