import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  SignupContainer,
  SigupEmailInputArea,
  CheckWarningMessage,
  CheckMessage,
  SubmitButton,
} from "./SignUpPage.style";
import { LoginSignupInput } from "../LoginPage/LoginPage.style";
import { BoolOrNull } from "../../type/type";
import { InspectInput } from "../../Function/Function";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<BoolOrNull>(null);
  const [isValidPassword, setIsValidPassword] = useState<BoolOrNull>(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  const navigate = useNavigate();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setIsValidEmail(null);
    } else if (e.target.name === "nickname") {
      setNickname(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
    setIsSubmitDisabled(true);
  };

  // Email 중복확인
  const checkEmailHandler = async () => {
    if (email && InspectInput(email, "email")) {
      axios
        .post(
          `http://localhost:5000/user/login`,
          { email, password: "1" },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data === "no data") {
            setIsValidEmail(true);
          } else {
            setIsValidEmail(false);
          }
        });
    }
  };

  // 회원가입 submit 버튼 Click => 로그인화면으로 이동
  const submitHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/signup`,
        { email, nickname, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        navigate("/login");
      });
  };

  // 비밀번호, 비밀번호확인 일치여부 확인
  useEffect(() => {
    if (InspectInput(password, "password") && password === confirmPassword) {
      return setIsValidPassword(true);
    } else if (!password && !confirmPassword) {
      return setIsValidPassword(null);
    }
    return setIsValidPassword(false);
  }, [password, confirmPassword]);

  // 회원가입 submit 버튼 활성화(disabled)
  useEffect(() => {
    if (
      email &&
      nickname &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      isValidEmail
    ) {
      setIsSubmitDisabled(false);
    }
  }, [email, nickname, password, confirmPassword, isValidEmail]);

  return (
    <SignupContainer>
      <div id="signup_title">회원가입 🎉</div>
      {/* ---------------- 이메일 입력 ----------------  */}
      <div className="subtitle">이메일</div>
      <SigupEmailInputArea>
        <LoginSignupInput
          onChange={(e) => {
            inputHandler(e);
          }}
          value={email}
          margin0={true}
          type="email"
          name="email"
          required
        />
        <div id="check_email_button" onClick={() => checkEmailHandler()}>
          중복검사
        </div>
      </SigupEmailInputArea>
      <CheckWarningMessage>
        {isValidEmail === null ? (
          <></>
        ) : isValidEmail ? (
          <CheckMessage color="green">사용 가능한 이메일입니다.</CheckMessage>
        ) : (
          <CheckMessage color="red">중복되는 이메일이 존재합니다.</CheckMessage>
        )}
        {/* <CheckMessage color="red">유효하지 않은 이메일입니다.</CheckMessage> */}
      </CheckWarningMessage>
      {/* ---------------- 닉네임 입력 ----------------  */}
      <div className="subtitle">닉네임</div>
      <LoginSignupInput
        onChange={(e) => {
          inputHandler(e);
        }}
        value={nickname}
        margin0={false}
        name="nickname"
        required
      />
      {/* ---------------- 비밀번호 입력 ---------------- */}
      <div className="subtitle">비밀번호</div>
      <LoginSignupInput
        onChange={(e) => {
          inputHandler(e);
        }}
        value={password}
        margin0={false}
        type="password"
        name="password"
        placeholder="8~16자, 영문 대소문자, 특수문자를 포함해주세요."
        required
      />
      {/* ---------------- 비밀번호 확인 입력  ---------------- */}
      <div className="subtitle">비밀번호 확인</div>
      <LoginSignupInput
        onChange={(e) => {
          inputHandler(e);
        }}
        value={confirmPassword}
        margin0={true}
        type="password"
        name="confirmPassword"
        required
      />
      <CheckWarningMessage>
        {isValidPassword === null ? (
          <></>
        ) : isValidPassword ? (
          <CheckMessage color="green">비밀번호가 일치합니다.</CheckMessage>
        ) : (
          <CheckMessage color="red">비밀번호를 확인해주세요.</CheckMessage>
        )}
      </CheckWarningMessage>
      <SubmitButton
        name="signupSubmitButton"
        isSubmitDisabled={isSubmitDisabled}
        disabled={isSubmitDisabled}
        onClick={() => submitHandler()}
      >
        확인
      </SubmitButton>

      <Link to="/login">뒤로가기</Link>
    </SignupContainer>
  );
}

export default SignUpPage;
