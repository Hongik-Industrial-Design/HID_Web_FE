import styled from 'styled-components';

export const AdminLoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminLoginContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 12rem;
`;

export const AdminLoginForm = styled.form`
  width: 30rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const LoginFormTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Header2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
  margin-bottom: 2.8rem;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: fit-content;
  padding: 1.4rem 1.8rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[400]};
  background: transparent;

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
    transition: color 0.2s ease-out;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
    }
  }

  transition: border-color 0.2s ease-out;
`;

export const PasswordInput = styled(LoginInput)`
  ${({ theme }) => theme.fontStyles.Body1}

  &::placeholder {
    ${({ theme }) => theme.fontStyles.Body2}
  }
`;

export const LoginButton = styled.button`
  align-self: flex-end;

  width: fit-content;
  height: fit-content;
  padding: 0.8rem 2.4rem;

  border-radius: 1000px;

  ${({ theme }) => theme.fontStyles.Body4}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
  background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;
