import React, { useEffect, useState } from "react";
import { RootState } from "../../app/store";
import ItemBox from "../../Component/ItemBox/ItemBox";
import SideBar from "../../Component/SideBar/SideBar";
import {
  MainPageContainer,
  WishListContainer,
  ShareKakaoBox,
} from "./MainPage.style";
import { useSelector, useDispatch } from "react-redux";
import AddWish from "../../Component/AddWish/AddWish";
import axios, { AxiosRequestConfig } from "axios";
import { ItemInfo } from "../../Interface/interface";

function MainPage() {
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );
  const userId = useSelector((state: RootState) => state.login.id);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const dispatch = useDispatch();
  const [itemList, setItemList] = useState<ItemInfo[]>([]);

  interface ItemGetResponse {
    data: { data?: ItemInfo[]; message?: string };
    status: any;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
  }

  const AddNewItemBoxHandler = (newItem: ItemInfo) => {
    setItemList([newItem, ...itemList]);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/item`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res: ItemGetResponse) => {
        console.log(res);
        if (res.data.data) {
          setItemList(res.data.data.reverse());
        }
      });
  }, []);

  return (
    <MainPageContainer>
      <SideBar />
      <WishListContainer>
        {/* 계산 결과 */}
        <ShareKakaoBox>
          <span id="share_kakao">
            <img
              src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
              alt="카카오링크 보내기 버튼"
            />
            공유하기
          </span>
        </ShareKakaoBox>
        {/* 위시 등록 창  */}
        <AddWish AddNewItemBoxHandler={AddNewItemBoxHandler} />
        {/* 위시 카드 리스트  */}
        <div id="user_item_area">
          {itemList[0] !== undefined ? (
            itemList.map((item) => {
              return <ItemBox key={item.id} item={item} />;
            })
          ) : (
            <></>
          )}
        </div>
      </WishListContainer>
    </MainPageContainer>
  );
}

export default MainPage;
