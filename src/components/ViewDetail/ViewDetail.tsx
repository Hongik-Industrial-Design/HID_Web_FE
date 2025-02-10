import { JSX } from 'react/jsx-runtime';

import * as S from './ViewDetail.styled';

type ViewDetailProps = {
  route: string;
};

const ViewDetail = ({ route }: ViewDetailProps): JSX.Element => {
  return <S.ViewDetailLink to={route}>View Detail</S.ViewDetailLink>;
};

export default ViewDetail;
