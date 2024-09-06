import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  border-radius: 100px;

  background: rgba(210, 210, 215, 0.64);

  cursor: pointer;

  .left-arrow {
    width: 24px;
    height: 24px;
  }

  .text {
    font-style: normal;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;

    color: #0000008f;
  }
`;
