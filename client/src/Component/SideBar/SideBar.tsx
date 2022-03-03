import React, { useState } from "react";
import { priceAddComma } from "../../Function/Function";
import {
  SideBarContainer,
  MoneyInput,
  MoneyButtonBox,
  MoneyButton,
  OperationWishLevelBox,
  WishLevelBox,
  WishLevelOperationButton,
  SidebarSubmitButton,
} from "./SideBar.style";

interface IProps {
  resultHandler: (sumMoney: string) => void;
}

function SideBar({ resultHandler }: IProps) {
  const [sumMoney, setSumMoney] = useState<string>("0");
  const [wishLevel, setWishLevel] = useState<number>(0);

  const wishLevelHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btn: HTMLButtonElement = e.currentTarget;
    if (btn.name === "wish_level_minus" && wishLevel > 0) {
      setWishLevel(wishLevel - 1);
    } else if (btn.name === "wish_level_plus" && wishLevel < 10) {
      setWishLevel(wishLevel + 1);
    }
  };

  const sumMoneyHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btn: HTMLButtonElement = e.currentTarget;
    const removeComma = parseInt(sumMoney.split(",").join(""));
    if (btn.name === "won1000000") {
      setSumMoney(priceAddComma(String(removeComma + 1000000)));
    } else if (btn.name === "won100000") {
      setSumMoney(priceAddComma(String(removeComma + 100000)));
    } else if (btn.name === "won50000") {
      setSumMoney(priceAddComma(String(removeComma + 50000)));
    } else if (btn.name === "won10000") {
      setSumMoney(priceAddComma(String(removeComma + 10000)));
    }
  };

  return (
    <SideBarContainer>
      <div className="sidebar_title">월 여유금액</div>
      <MoneyInput
        value={sumMoney}
        onChange={(e) => {
          setSumMoney(e.target.value);
        }}
        maxLength={24}
      />
      {/* ---------------- 금액 버튼 ----------------  */}
      <MoneyButtonBox>
        <div className="button_row">
          <MoneyButton
            onClick={(e) => {
              sumMoneyHandler(e);
            }}
            name="won1000000"
          >
            + 1,000,000
          </MoneyButton>
          <MoneyButton
            onClick={(e) => {
              sumMoneyHandler(e);
            }}
            name="won100000"
            className=" left_money_button"
          >
            + 100,000
          </MoneyButton>
        </div>
        <div className="button_row">
          <MoneyButton
            onClick={(e) => {
              sumMoneyHandler(e);
            }}
            name="won50000"
          >
            + 50,000
          </MoneyButton>
          <MoneyButton
            onClick={(e) => {
              sumMoneyHandler(e);
            }}
            name="won10000"
            className=" left_money_button"
          >
            + 10,000
          </MoneyButton>
        </div>
        <div id="clear_button" onClick={() => setSumMoney("0")}>
          Clear
        </div>
      </MoneyButtonBox>
      <OperationWishLevelBox>
        {/* ---------------- 위시레벨 조정 ----------------  */}
        <div className="sidebar_title">최소 위시 레벨</div>
        <WishLevelBox>
          <WishLevelOperationButton
            onClick={(e) => {
              wishLevelHandler(e);
            }}
            name="wish_level_minus"
          >
            -
          </WishLevelOperationButton>
          <span id="wish_level">{wishLevel}</span>
          <WishLevelOperationButton
            onClick={(e) => {
              wishLevelHandler(e);
            }}
            name="wish_level_plus"
          >
            +
          </WishLevelOperationButton>
        </WishLevelBox>
      </OperationWishLevelBox>
      {/* ---------------- 결과 보기 ----------------  */}
      <SidebarSubmitButton
        onClick={() => {
          resultHandler(sumMoney);
        }}
      >
        결과보기
      </SidebarSubmitButton>
    </SideBarContainer>
  );
}

export default SideBar;
