import styled from "styled-components";

export const ItemBoxContainer = styled.div`
  max-width: 960px;
  width: 100%;
  height: 170px;
  border: 2px solid #2d2d2d;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;

  .photo_Box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    img {
      width: 130px;
      height: 130px;
      border-radius: 8px;
    }
    @media screen and (max-width: 590px) {
      width: 80px;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
      }
    }
    @media screen and (max-width: 470px) {
      width: 50px;
      height: 50px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 8px;
      }
    }
  }

  .item_Contents {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-weight: 300;
    margin-left: 20px;
    .item_Category_Box {
      width: 100%;
      display: flex;
      .item_Category {
        font-weight: 500;
        width: 80px;
        text-align: end;
        margin-right: 30px;
      }
    }
    @media screen and (max-width: 590px) {
      font-size: 0.9rem;
      margin-left: 15px;
      .item_Category_Box {
        width: 100%;
        display: flex;
        .item_Category {
          font-weight: 500;
          width: 60px;
          text-align: end;
          margin-right: 20px;
        }
      }
    }
    @media screen and (max-width: 470px) {
      font-size: 0.6rem;
      margin-left: 10px;
      .item_Category_Box {
        width: 100%;
        display: flex;
        .item_Category {
          font-weight: 500;
          width: 50px;
          text-align: end;
          margin-right: 10px;
        }
      }
    }
  }

  .edit_Button_Box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 5px 0 0;
    width: 60px;
    height: 100%;
    opacity: 0.15;
    &:hover {
      opacity: 1;
    }
    img {
      width: 16px;
      cursor: pointer;
    }
    @media screen and (max-width: 590px) {
      margin-left: 15px;
      width: 50px;
      img {
        width: 13px;
      }
    }
    @media screen and (max-width: 470px) {
      margin-left: 10px;
      width: 40px;
      img {
        width: 10px;
      }
    }
  }
`;
