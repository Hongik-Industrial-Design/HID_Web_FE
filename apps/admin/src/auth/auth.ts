import { HWISO_API } from '@lib/axios';

export const adminLogin = async (username: string, password: string) => {
  try {
    // (임시) 로그인 시마다 기존의 토큰 삭제
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
    }

    const response = await HWISO_API.post('/auth/login', {
      username,
      password,
    });

    console.log('Login Response: ', response);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Admin Login Failed: ', error);
  }
};
