import styled from "styled-components";

export const SideBarContainer = styled.div`
  min-width: 320px;
  max-width: 380px;
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border-radius: 15px;
  margin-right: 27px;
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 884px) {
    margin: 20px 0 20px 0;
  }
  @media screen and (max-width: 470px) {
    width: 100%;
    height: 450px;
  }
  .sidebar_title {
    width: 100%;
    height: 30px;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.46px;
    @media screen and (max-width: 470px) {
      font-size: 20px;
      height: 20px;
      line-height: 20px;
    }
  }
`;

export const MoneyInput = styled.input`
  width: 100%;
  height: 37px;
  border-radius: 5px;
  margin: 9px 0 18px 0;
  border: 2px solid #dedede;
  box-sizing: border-box;
`;

export const MoneyButtonBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  .button_row {
    display: flex;
    width: 100%;
    .left_money_button {
      margin-left: 10px;
    }
  }
  #clear_button {
    width: 100%;
    height: 31px;
    line-height: 31px;
    text-align: center;
    margin-top: 5px;
    background: #2d2d2d;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    color: #ffffff;
    font-weight: 100;
    font-size: 1rem;
    cursor: pointer;
    &:active {
      background: #4d4d4d;
    }
  }
`;

export const MoneyButton = styled.button`
  width: 100%;
  height: 31px;
  background: #2d2d2d;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 100;
  font-size: 0.6rem;
  margin-top: 5px;
  cursor: pointer;
  &:active {
    background: #4d4d4d;
  }
`;

export const OperationWishLevelBox = styled.div`
  height: 72px;
  border-top: 1px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;
  padding: 19px 0 19px 0;
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WishLevelBox = styled.div`
  display: flex;
  width: 100%;
  height: 29px;
  line-height: 29px;
  justify-content: flex-end;
  #wish_level {
    width: 30px;
    height: 29px;
    font-size: 20px;
    margin: 0 20px 0 20px;
    text-align: center;
    @media screen and (max-width: 470px) {
      width: 27px;
      height: 26px;
      font-size: 18px;
    }
  }
`;

export const WishLevelOperationButton = styled.button`
  width: 28px;
  height: 29px;
  line-height: 29px;
  background: #2d2d2d;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-weight: 300;
  font-size: 18px;
  cursor: pointer;
  &:active {
    background: #4d4d4d;
  }
  @media screen and (max-width: 470px) {
    width: 25px;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
  }
`;

export const SidebarSubmitButton = styled.button`
  width: 100%;
  height: 38px;
  background: #2d2d2d;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-weight: 300;
  letter-spacing: 2px;
  cursor: pointer;
  &:active {
    background: #4d4d4d;
  }
`;
