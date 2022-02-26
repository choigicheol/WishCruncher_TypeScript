import React from "react";
import { Link } from "react-router-dom";
import {
  LoginBox,
  Title,
  LoginInput,
  Button,
  WarningMessage,
  KakaoBtnContent,
} from "./LoginPage.style";

function LoginPage() {
  return (
    <>
      <LoginBox>
        <form>
          <Title>로그인</Title>
          <label>이메일</label>
          <LoginInput type="email" name="email_input" required />
          <label>비밀번호</label>
          <LoginInput type="password" name="password_input" required />
          <WarningMessage>로그인 정보를 확인해주세요</WarningMessage>
          <Button role="">로그인</Button>
        </form>
        <Button role="kakao">
          <KakaoBtnContent>
            <img src="./kakaoLogo.svg" />
            <span>카카오 로그인</span>
          </KakaoBtnContent>
        </Button>
        <div>
          <Link to="/signup">아직 이메일이 없으신가요? 회원가입 하러가기</Link>
        </div>
      </LoginBox>
    </>
  );
}

export default LoginPage;
