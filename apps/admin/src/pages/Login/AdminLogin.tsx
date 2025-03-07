import { JSX } from 'react/jsx-runtime';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { HIDLogoLogin } from '@icons/HIDLogo';

import { adminLogin } from '@auth/auth';

import * as S from './AdminLogin.styled';

type AdminLoginFormData = {
  id: string;
  password: string;
};

const AdminLogin = (): JSX.Element => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginFormData>();

  const handleLogin = async (data: AdminLoginFormData): Promise<void> => {
    const loginResponseBody = await adminLogin(data.id, data.password);

    console.log('Access Token: ', loginResponseBody?.token);

    if (loginResponseBody?.token) {
      localStorage.setItem('accessToken', loginResponseBody.token);

      // 추후에 메인 대시보드 페이지로 Routing 되도록 수정
      navigate('/graduation');
    } else {
      alert('관리자 로그인에 실패했습니다.');
    }
  };

  return (
    <S.AdminLoginWrapper>
      <S.AdminLoginContainer>
        <HIDLogoLogin />
        <S.AdminLoginForm onSubmit={handleSubmit(handleLogin)}>
          <S.LoginFormTitle>Admin Login</S.LoginFormTitle>
          <S.LoginInputContainer>
            <S.LoginInput
              type="text"
              placeholder="Enter ID"
              {...register('id', { required: 'ID를 입력하세요' })}
            />
            {errors.id && <span>{errors.id.message}</span>}

            <S.PasswordInput
              type="password"
              placeholder="Enter Password"
              {...register('password', { required: '비밀번호를 입력하세요' })}
              autoComplete="current-password"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </S.LoginInputContainer>
          <S.LoginButton type="submit">Login</S.LoginButton>
        </S.AdminLoginForm>
      </S.AdminLoginContainer>
    </S.AdminLoginWrapper>
  );
};

export default AdminLogin;
