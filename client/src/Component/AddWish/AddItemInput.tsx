import React from "react";
import {
  AddItemOptionInput,
  AddItemInputLow,
  WishLevelLabel,
} from "./AddWish.style";

interface Props {
  title: string;
  name: string;
  value: string;
  itemInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

function AddItemInput({
  title,
  name,
  value,
  maxLength,
  itemInputHandler,
}: Props) {
  const arrWishLevel: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const nameIsLevel = name === "level";
  return (
    <AddItemInputLow name={name}>
      <span>{title}</span>
      <AddItemOptionInput
        name={name}
        value={value}
        onChange={(e) => {
          itemInputHandler(e);
        }}
        maxLength={maxLength}
        type={nameIsLevel ? "range" : ""}
        max={nameIsLevel ? "9" : ""}
        list={nameIsLevel ? "tickMarks" : ""}
      />
      {nameIsLevel ? (
        <>
          <datalist id="tickMarks">
            {arrWishLevel.map((wishLevel) => {
              return <option value={wishLevel} key={wishLevel}></option>;
            })}
          </datalist>
          <WishLevelLabel>
            {arrWishLevel.map((wishLevel) => {
              return <span key={wishLevel}>{wishLevel}</span>;
            })}
          </WishLevelLabel>
        </>
      ) : (
        <></>
      )}
    </AddItemInputLow>
  );
}

export default AddItemInput;
