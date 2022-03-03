import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  max-width: 1260px;
  width: 100%;
  padding: 40px 10px 40px 10px;
  justify-content: center;
  @media screen and (max-width: 884px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

export const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
  box-sizing: border-box;
  #result_title {
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  #user_item_area {
    display: flex;
    flex-direction: column;
  }
  #result_container {
    margin: 7px 0;
    font-size: 16px;
  }
`;

export const ShareKakaoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #result_close {
    border: none;
    font-weight: 300;
    font-size: 14px;
    margin: 10px 0;
    cursor: pointer;
  }
  &:active {
    opacity: 0.5;
  }
  #share_kakao {
    height: 30px;
    display: flex;
    align-items: center;
    border: none;
    img {
      height: 25px;
      margin-right: 5px;
    }
    font-weight: 300;
    font-size: 12px;
    cursor: pointer;
    margin: 15px 0;
  }
`;

export const ResultInfo = styled.div`
  margin: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #2d2d2d;
  font-weight: 300;
`;
export const ResultContent = styled.div`
  margin: 0 15px;
  /* padding-bottom: 15px; */
  font-weight: 100;
  #result_text1 {
    margin-right: 10px;
  }
  #result_text2 {
    margin-left: 10px;
  }
  #result_value {
    color: #ab86df;
    font-weight: 300;
  }
`;
