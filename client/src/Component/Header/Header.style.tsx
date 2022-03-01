import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBox = styled.header`
  padding: 0 10px;
  max-width: 1260px;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  width: 100px;
`;

export const MenuNav = styled.nav`
  display: flex;
  font-size: 1.3rem;
  justify-content: space-between;
  width: 240px;
`;

export const LoginState = styled.span`
  width: 50px;
  font-size: 1.1rem;
  span {
    cursor: pointer;
  }
`;
