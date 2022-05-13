import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, HeaderBox, Logo, MenuNav, LoginState } from "./Header.style";
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../Features/loginSlice";

function Header() {
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const dispatch = useDispatch();
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const test = () => {
    dispatch(setLogout());
  };

  return (
    <HeaderContainer>
      <HeaderBox>
        <Logo>
          <Link to="/main">
            <img src="./logo.png" />
          </Link>
        </Logo>
        <MenuNav>
          <Link to="/main">MainPage</Link>
          <Link to="/user">MyPage</Link>
        </MenuNav>
        <LoginState>{isLogin ? <span onClick={() => test()}>Logout</span> : <Link to="/login">Login</Link>}</LoginState>
      </HeaderBox>
    </HeaderContainer>
  );
}

export default Header;
