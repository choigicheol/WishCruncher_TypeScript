import React from "react";
import { RootState } from "../../app/store";
import {
  ItemBoxContainer,
  PhotoBox,
  ItemContentsBox,
  ItemCategoryBox,
  ItemBoxButton,
} from "./ItemBox.style";
import { ItemInfo } from "../../Interface/interface";
import { priceAddComma } from "../../Function/Function";
import { useSelector } from "react-redux";
import { Axioser, setAuthorization } from "../../Axioser/Axioser";

interface IProps {
  item: ItemInfo;
  clickItemIdHandler?: (itemId: string) => void;
}

function ItemBox({ item, clickItemIdHandler }: IProps) {
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );

  const categoryBox = [
    { title: "제품", value: item.name },
    { title: "가격", value: item.price },
    { title: "위시레벨", value: item.level },
  ];

  const buttonInfo = {
    0: {
      btnSrc1: "./edit_icon.svg",
      btnSrc2: "./delete_icon.svg",
    },
    1: {
      btnSrc1: "./finishButton.png",
      btnSrc2: "./deleteWishButton.png",
    },
    2: {
      btnSrc1: "./deleteWishButton.png",
    },
    3: {
      btnSrc1: "rewindButton.png",
    },
    alt: "ItemBoxButton",
  };

  // 남은위시, 이뤄낸위시, 버린위시 버튼에 따라 item status 변경 해주기 위한 axios PATCH,DELETE 전달
  const ItemBoxButtonHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const btn: HTMLElement = e.currentTarget;
    const btnId = btn.id.split("$");
    if (accessToken) {
      setAuthorization(accessToken);
    }

    if (btnId[0] === "0") {
      if (btnId[2] === "btn1") {
        // TODO: 수정
      } else {
        Axioser.delete(`/item/${btnId[1]}`).then((res) => {
          if (clickItemIdHandler) {
            clickItemIdHandler(btnId[1]);
          }
        });
      }
    } else if (btnId[0] === "1") {
      if (btnId[2] === "btn1") {
        Axioser.patch("/item", { id: btnId[1], update: 2 }).then((res) => {
          if (clickItemIdHandler) {
            clickItemIdHandler(btnId[1]);
          }
        });
      } else {
        Axioser.patch("/item", { id: btnId[1], update: 3 }).then((res) => {
          if (clickItemIdHandler) {
            clickItemIdHandler(btnId[1]);
          }
        });
      }
    } else if (btnId[0] === "2") {
      Axioser.delete(`/item/${btnId[1]}`).then((res) => {
        if (clickItemIdHandler) {
          clickItemIdHandler(btnId[1]);
        }
      });
    } else if (btnId[0] === "3") {
      Axioser.patch("/item", { id: btnId[1], update: 0 }).then((res) => {
        if (clickItemIdHandler) {
          clickItemIdHandler(btnId[1]);
        }
      });
    }
  };

  return (
    <ItemBoxContainer>
      <PhotoBox>
        <img src={item.imagePath} alt="item_image" />
      </PhotoBox>
      <ItemContentsBox>
        {categoryBox.map((category, idx) => {
          return (
            <ItemCategoryBox key={`category${idx}`}>
              <span className="item_category">{category.title}</span>
              <span>
                {category.title === "가격" && typeof category.value === "string"
                  ? `${priceAddComma(category.value)} 원`
                  : category.value}
              </span>
            </ItemCategoryBox>
          );
        })}
      </ItemContentsBox>
      {/* ---------------- 남은위시, 이뤄낸위시, 버린위시에 따른 버튼 변경  ----------------  */}
      <ItemBoxButton>
        <img
          id={`${item.status}$${item.id}$btn1`}
          src={buttonInfo[item.status].btnSrc1}
          alt={buttonInfo.alt}
          onClick={(e) => ItemBoxButtonHandler(e)}
        />
        {item.status === 0 || item.status === 1 ? (
          <img
            id={`${item.status}$${item.id}$btn2`}
            src={buttonInfo[item.status].btnSrc2}
            alt={buttonInfo.alt}
            onClick={(e) => ItemBoxButtonHandler(e)}
          />
        ) : (
          <></>
        )}
      </ItemBoxButton>
    </ItemBoxContainer>
  );
}

export default ItemBox;
