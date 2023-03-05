import styled from "styled-components";

export const BasicLayoutWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color("background")};
`;
