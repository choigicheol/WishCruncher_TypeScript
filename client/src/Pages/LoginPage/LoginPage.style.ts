import styled from "styled-components";
import { SubmitDisabled, Margin0 } from "../../Interface/interface";

export const LoginBox = styled.div`
  max-width: 475px;
  width: 100%;
  height: 583px;
  background: #ffffff;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 60px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  .subtitle {
    width: 100%;
  }
  @media screen and (max-width: 590px) {
    padding: 20px;
    margin: 30px 0 30px 0;
    height: 493px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  width: 100%;
  margin: 20px 0 40px 0;
  @media screen and (max-width: 590px) {
    font-size: 24px;
    margin: 20px 0 20px 0;
  }
`;

export const LoginSignupInput = styled.input<Margin0>`
  width: 100%;
  height: 47px;
  background: #fbfbfb;
  border: 2px solid #dedede;
  box-sizing: border-box;
  border-radius: 4px;
  margin: ${(props) => (props.margin0 ? "0" : "6px 0 43px 0")};
  font-weight: 300;
  padding: 0 10px 0 10px;
  color: #2d2d2d;
  @media screen and (max-width: 590px) {
    height: 37px;
    font-size: 13px;
  }
`;

export const Button = styled.button<SubmitDisabled>`
  width: 100%;
  height: 47px;
  line-height: 47px;
  border: ${(props) => (props.role === "kakao" ? "1px solid #e0dde1" : "none")};
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: ${(props) => (props.role === "kakao" ? "48px" : "21px")};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  color: ${(props) => (props.role === "kakao" ? "none" : "#ffffff")};
  background: ${(props) =>
    props.role === "kakao"
      ? "#ffffff"
      : props.isSubmitDisabled
      ? "#a1a1a1"
      : "#2d2d2d"};
  font-size: 16px;
  cursor: pointer;
  &:active {
    background: #4d4d4d;
  }
  @media screen and (max-width: 590px) {
    height: 37px;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const KakaoBtnContent = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 5px;
  }
  @media screen and (max-width: 590px) {
    height: 34px;
    font-size: 14px;
  }
`;

export const WarningMessage = styled.div`
  color: rgb(255, 55, 55);
  width: 100%;
  height: 68px;
  display: flex;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 590px) {
    height: 48px;
    font-size: 14px;
    margin-bottom: 15px;
  }
`;
