import styled from "styled-components";

export const IndicatorContainer = styled.div`
  width: 100%;
  height: 8px;

  position: relative;
  top: 32px;
  left: 0;
`;

export const IndicatorBar = styled.div`
  width: 0;
  height: 100%;
  border-radius: 10px;
  flex-shrink: 0;

  background: #09287a;
  box-shadow: 8px 4px 8px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;
