import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Logo, MenuNav, LoginState } from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/main">
          <img src="./logo.png" />
        </Link>
      </Logo>
      <MenuNav>
        <Link to="/main">MainPage</Link>
        <Link to="/user">MyPage</Link>
      </MenuNav>
      <LoginState>
        <Link to="/login">Login</Link>
      </LoginState>
    </HeaderContainer>
  );
}

export default Header;
