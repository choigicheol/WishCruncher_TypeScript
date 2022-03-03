import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginBox,
  Title,
  LoginSignupInput,
  Button,
  WarningMessage,
  KakaoBtnContent,
} from "./LoginPage.style";
import { useDispatch } from "react-redux";
import { setLogin } from "../../Features/loginSlice";
import { Axioser } from "../../Axioser/Axioser";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [isLoginFail, setIsLoginFail] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
    setIsLoginFail(false);
  };

  const loginHandler = () => {
    Axioser.post("user/login", { email, password }).then((res) => {
      if (!res.data.id) {
        setIsLoginFail(true);
      } else {
        dispatch(setLogin(res.data));
        navigate("/main");
      }
    });
  };

  useEffect(() => {
    if (email && password) {
      setIsSubmitDisabled(false);
    }
  }, [email, password]);

  return (
    <LoginBox>
      <Title>로그인</Title>
      <div className="subtitle">이메일</div>
      <LoginSignupInput
        onChange={(e) => {
          inputHandler(e);
        }}
        margin0={false}
        type="email"
        name="email"
        value={email}
        required
      />
      <div className="subtitle">비밀번호</div>
      <LoginSignupInput
        onChange={(e) => {
          inputHandler(e);
        }}
        margin0={true}
        type="password"
        name="password"
        value={password}
        required
      />
      {isLoginFail ? (
        <WarningMessage>로그인 정보를 확인해주세요</WarningMessage>
      ) : (
        <WarningMessage />
      )}
      <Button
        isSubmitDisabled={isSubmitDisabled}
        disabled={isSubmitDisabled}
        role=""
        onClick={() => {
          loginHandler();
        }}
      >
        로그인
      </Button>
      <Button role="kakao">
        <KakaoBtnContent>
          <img src="./kakaoLogo.svg" />
          <span>카카오 로그인</span>
        </KakaoBtnContent>
      </Button>
      <Link to="/signup">아직 이메일이 없으신가요? 회원가입 하러가기</Link>
    </LoginBox>
  );
}

export default LoginPage;
