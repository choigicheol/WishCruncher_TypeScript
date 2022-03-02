import React from "react";
import { ItemBoxContainer } from "./ItemBox.style";
import { ItemInfo } from "../../Interface/interface";
import { priceAddComma } from "../../Function/Function";
interface IProps {
  item: ItemInfo;
}

function ItemBox({ item }: IProps) {
  return (
    <ItemBoxContainer>
      <div className="photo_Box">
        <img src={item.imagePath} alt="item_Image" />
      </div>
      <div className="item_Contents">
        <div className="item_Category_Box">
          <span className="item_Category">제품</span>
          <span className="item_Category_content">{item.name}</span>
        </div>
        <div className="item_Category_Box">
          <span className="item_Category">가격</span>
          <span className="item_Category_content">
            {priceAddComma(item.price)} 원
          </span>
        </div>
        <div className="item_Category_Box">
          <span className="item_Category">위시레벨</span>
          <span className="item_Category_content">{item.level}</span>
        </div>
      </div>
      <div className="edit_Button_Box">
        <img
          src="./edit_icon.svg"
          alt="edit_Icon"
          className="edit_Button"
          id="main_edit_12"
        />
        <img
          src="./delete_icon.svg"
          alt="delete_Icon"
          className="delete_Button"
          id="main_delete_12"
        />
      </div>
    </ItemBoxContainer>
  );
}

export default ItemBox;
