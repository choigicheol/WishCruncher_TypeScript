import React, { useState } from "react";
import AddItemInput from "./AddItemInput";
import {
  AddItemBox,
  AddItemButton,
  AddItemContents,
  AddItemPhotoBox,
  AddItemOptionBox,
  ItemUploadButtonBox,
} from "./AddWish.style";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ItemInfo } from "../../Interface/interface";
import { Axioser, setAuthorization } from "../../Axioser/Axioser";
import { dummyClientData } from "../../dummy/dummy";

interface UploadFile {
  name: string;
  length: number;
  size: number;
  preview: string;
  lastModified: number;
}

interface IProps {
  AddNewItemBoxHandler: (newItem: ItemInfo) => void;
}

function AddWish({ AddNewItemBoxHandler }: IProps) {
  const [isAddButton, setIsAddButton] = useState(false);
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<string>("");
  const [itemLevel, setItemLevel] = useState<string>("0");
  const [uploadFile, setUploadFile] = useState<any>({ preview: "" });
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const items = useSelector((state: RootState) => state.items.data);
  const accessToken = useSelector((state: RootState) => state.login.accessToken);
  const arrInputCategory = [
    { title: "제품", name: "name", value: itemName },
    { title: "가격", name: "price", value: itemPrice },
    { title: "위시레벨", name: "level", value: itemLevel },
  ];

  const itemInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setItemName(e.target.value);
    } else if (e.target.name === "price") {
      setItemPrice(e.target.value);
    } else if (e.target.name === "level") {
      setItemLevel(e.target.value);
    }
  };

  const submitAddItem = () => {
    const formData = new FormData();
    formData.append("image", uploadFile[0]);
    formData.append("name", itemName);
    formData.append("price", itemPrice);
    formData.append("level", String(parseInt(itemLevel) + 1));
    if (accessToken) {
      setAuthorization(accessToken);
    }
    if (isLogin) {
      Axioser.post("/item", formData).then((res) => {
        AddNewItemBoxHandler(res.data.data);
      });
    } else {
      AddNewItemBoxHandler({
        id: items.length,
        imagePath: "./noImage.png",
        name: itemName,
        price: itemPrice,
        level: Number(itemLevel),
        status: 0,
      });
    }
  };

  const uploadFileHandler = (file: any) => {
    const fReader = new FileReader();
    fReader.readAsDataURL(file[0]);

    fReader.onload = function test(e) {
      file[0].preview = e.target?.result;
      setUploadFile(file[0]);
    };
    // fReader.onloadend = function test(e) {
    //   console.log(filePath);
    // };
    // console.log(filePath);
    // if (file) {
    //   file[0].preview = URL.createObjectURL(file[0]);
    //   setUploadFile(file[0]);
    // }
    console.log(file[0]);
  };
  return (
    <AddItemBox>
      <div id="add_item_button_box">
        <AddItemButton onClick={() => setIsAddButton(!isAddButton)} isAddButton={isAddButton}>
          <img id="plus_icon" src="./plus_Icon.png" />
        </AddItemButton>
      </div>

      {/* 위시 등록 창 on/off */}
      {isAddButton ? (
        <>
          <AddItemContents>
            <AddItemPhotoBox>
              <div id="upload_image_box">
                {uploadFile.preview ? (
                  <img id="thumb_image" src={uploadFile.preview} alt="+" />
                ) : (
                  <img id="upload_plus_image" src="./photo_plus_button.svg" alt="+" />
                )}
              </div>
              <input type="file" onChange={(e) => uploadFileHandler(e.target.files)} />
            </AddItemPhotoBox>
            <AddItemOptionBox>
              {/* 제품, 가격, 위시레벨 input */}
              {arrInputCategory.map((input) => {
                return (
                  <AddItemInput
                    key={input.name}
                    title={input.title}
                    name={input.name}
                    value={input.value}
                    itemInputHandler={itemInputHandler}
                    maxLength={input.name === "price" ? 24 : Infinity}
                  />
                );
              })}
            </AddItemOptionBox>
          </AddItemContents>
          <ItemUploadButtonBox>
            <button
              onClick={() => {
                submitAddItem();
              }}
            >
              등 록
            </button>
          </ItemUploadButtonBox>
        </>
      ) : (
        <></>
      )}
    </AddItemBox>
  );
}

export default AddWish;
