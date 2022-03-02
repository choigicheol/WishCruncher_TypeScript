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
  #user_item_area {
    display: flex;
    flex-direction: column;
  }
`;

export const ShareKakaoBox = styled.div`
  display: flex;
  justify-content: center;
  &:active {
    opacity: 0.5;
  }
  #share_kakao {
    height: 30px;
    /* display: none; */
    align-items: center;
    text-align: center;
    img {
      height: 25px;
      margin-right: 5px;
    }
    font-weight: 300;
    font-size: 12px;
    cursor: pointer;
    margin: 10px 0 15px 0;
  }
`;
