import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useScrollDisable } from '@hooks/useScrollDisable';

import { SuccessCheckIcon } from '@icons/Check';

import * as S from './SuccessPage.styled';

const SuccessPage = () => {
  useScrollDisable();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${location.pathname.split('/')[1]}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location]);

  return (
    <S.SuccessPageContainer>
      <SuccessCheckIcon />
      Register Success!
    </S.SuccessPageContainer>
  );
};

export default SuccessPage;
