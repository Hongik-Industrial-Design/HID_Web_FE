import { JSX } from 'react/jsx-runtime';

import * as S from './ViewDetail.styled';

type ViewDetailProps = {
  detailLink: string;
};

const ViewDetail = ({ detailLink }: ViewDetailProps): JSX.Element => {
  return <S.ViewDetailLink to={detailLink}>View Detail</S.ViewDetailLink>;
};

export default ViewDetail;
