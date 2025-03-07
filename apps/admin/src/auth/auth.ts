import { HWISO_API } from '@lib/axios';

export const adminLogin = async (username: string, password: string) => {
  try {
    const response = await HWISO_API.post('/auth/login', {
      username,
      password,
    });

    console.log('Login Response: ', response);

    if (response.status === 200) {
      return { status: response.status, data: response.data };
    }
  } catch (error) {
    console.error('Admin Login Failed: ', error);
  }
};
