import styled from "styled-components";

export const HoverHeaderContainer = styled.div`
  
`

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; // max-width 관련해 추후 일관된 수정이 필요함
  padding: 12px 158px;

  background-color: ${({ $isHovered }) =>
    $isHovered ? "#FFFFFF" : "#ebebeb4d"};
  // gap: 120px; (디자인과 다르게 justify-content로 구현하는게 맞는 것 같음 (cause, 부모 컴포넌트 초과))
  transition: background-color 0.3s ease;
`;

export const MainLogo = styled.img`
  width: 90px;
  height: 17.4px;
`;
