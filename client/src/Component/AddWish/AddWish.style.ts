import styled from "styled-components";
import { IsActivate } from "../../Interface/interface";

interface MarginTB20 {
  name: string;
}

export const AddItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;
  margin-bottom: 25px;
  box-sizing: border-box;
  flex-direction: column;
  #add_item_button_box {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const AddItemButton = styled.div<IsActivate>`
  vertical-align: middle;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  border: none;
  color: #ffffff;
  background: ${(props) => (props.isAddButton ? "#FF7B7B" : "#2d2d2d")};
  margin: 10px 0;

  cursor: pointer;
  #plus_icon {
    width: 30px;
    height: 30px;
    margin-bottom: 1px;
    transform: ${(props) => (props.isAddButton ? "rotate(45deg)" : "none")};
    transition: all 0.125s ease-in 0s;
  }
`;

export const AddItemContents = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  font-weight: 300;
  box-sizing: border-box;

  @media screen and (max-width: 590px) {
    flex-direction: column;
    font-size: 0.9rem;
    margin-left: 15px;
  }
  @media screen and (max-width: 470px) {
    font-size: 0.6rem;
    margin-left: 10px;
  }
`;

export const AddItemPhotoBox = styled.div`
  width: 200px;
  height: 130px;
  position: relative;
  display: flex;

  #upload_image_box {
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #dedede;
    box-sizing: border-box;
    border-radius: 7px;
    position: absolute;
    background: #ededed;

    #thumb_image {
      width: 130px;
      height: 130px;
      border-radius: 8px;
    }
  }
  input {
    width: 130px;
    height: 130px;
    position: absolute;
    box-sizing: border-box;
    opacity: 0;
    z-index: 1;
    margin: 0;
    cursor: pointer;
    &:file-selector-button {
      display: none;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 590px) {
    width: 100%;
    margin-bottom: 25px;
    justify-content: center;
  }
`;

export const AddItemOptionBox = styled.div`
  width: 100%;
  position: relative;
`;

// .marginTB20 {
//     margin: 20px 0;
//   }
export const AddItemInputLow = styled.div<MarginTB20>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.name === "price" ? "20px 0" : "0")};
  span {
    font-weight: 300;
    @media screen and (max-width: 590px) {
      width: 80px;
      margin: 0 20px 0 0;
    }
  }
`;

export const AddItemOptionInput = styled.input`
  margin: 0;
  width: 100%;
  height: 30px;
  border: 2px solid #dedede;
  border-radius: 5px;
  box-sizing: border-box;
  background: #ededed;
  &:focus {
    background: #ffffff;
  }
`;

export const WishLevelLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  span {
    margin-left: 9px;
  }
`;

export const ItemUploadButtonBox = styled.div`
  border-top: 1px dashed #c4c4c4;
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 80px;
    height: 30px;
    background: #2d2d2d;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 300;
    margin: 10px 0 10px 0;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
