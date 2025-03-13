import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { SuccessCheckIcon } from '@icons/Check';

import * as S from './SuccessPage.styled';

type SuccessPageProps = {
  parentRoute: string;
};

const SuccessPage = ({ parentRoute }: SuccessPageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${parentRoute}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, parentRoute]);

  return (
    <S.SuccessPageContainer>
      <SuccessCheckIcon />
      {parentRoute === 'graduation' ? 'Graduation' : 'Success'} Artwork Register
      Success!
    </S.SuccessPageContainer>
  );
};

export default SuccessPage;
