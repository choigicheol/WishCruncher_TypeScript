import styled from "styled-components";
import { Color, SubmitDisabled } from "../../Interface/interface";

export const SignupContainer = styled.div`
  max-width: 475px;
  width: 100%;
  height: 709px;
  background: #ffffff;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  margin: 60px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  @media screen and (max-width: 590px) {
    padding: 20px;
    margin: 30px 0 30px 0;
  }
  .subtitle {
    width: 100%;
  }
  #signup_title {
    font-size: 32px;
    width: 100%;
    margin: 20px 0 40px 0;
    @media screen and (max-width: 590px) {
      font-size: 24px;
      margin: 20px 0 20px 0;
    }
  }
`;

export const SigupEmailInputArea = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6px;
  #check_email_button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 47px;
    background: #2d2d2d;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: 300;
    margin-left: 7px;
    box-sizing: border-box;
    cursor: pointer;
    &:active {
      background: #4d4d4d;
    }
    @media screen and (max-width: 590px) {
      height: 37px;
      width: 80px;
      font-size: 12px;
      font-weight: 100;
    }
  }
`;

export const CheckWarningMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 100;
  margin: 10px 0 30px 0;
  padding-left: 7px;
`;

export const CheckMessage = styled.span<Color>`
  color: ${(props) => props.color};
`;

export const SubmitButton = styled.button<SubmitDisabled>`
  width: 100%;
  height: 47px;
  background: ${(props) => (props.isSubmitDisabled ? "#a1a1a1" : "#2d2d2d")};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 4px;
  color: #ffffff;
  margin-bottom: 21px;
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
