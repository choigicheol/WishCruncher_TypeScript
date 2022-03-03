import { useEffect, useState } from "react";
import { RootState } from "../../app/store";
import ItemBox from "../../Component/ItemBox/ItemBox";
import SideBar from "../../Component/SideBar/SideBar";
import {
  MainPageContainer,
  WishListContainer,
  ShareKakaoBox,
  ResultInfo,
  ResultContent,
} from "./MainPage.style";
import { useSelector, useDispatch } from "react-redux";
import AddWish from "../../Component/AddWish/AddWish";

import { ItemInfo, ItemGetResponse } from "../../Interface/interface";
import { Axioser, setAuthorization } from "../../Axioser/Axioser";
import { setUserInfo } from "../../Features/userInfoSlice";

interface Result {
  value: number;
  text1: string;
  text2: string;
}

function MainPage() {
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );
  const userId = useSelector((state: RootState) => state.login.id);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const userNickname = useSelector(
    (state: RootState) => state.userInfo.nickname
  );
  const userEmail = useSelector((state: RootState) => state.userInfo.email);
  const dispatch = useDispatch();
  const [itemList, setItemList] = useState<ItemInfo[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [resultTime, setResultTime] = useState<Result[] | null>(null);
  const [finishMoney, setFinishMoney] = useState<string>("");
  const [finishDate, setFinishDate] = useState<string>("");

  // 메인페이지 wish Item 수정, 삭제 클릭 시 해당 item id를 인자로 받아 필터하기위한 handler
  const clickItemIdHandler = (itemId: string) => {
    setItemList(
      itemList.filter((item) => {
        return item.id !== Number(itemId);
      })
    );
  };

  // wish Item 추가 시 itemList 업데이트
  const AddNewItemBoxHandler = (newItem: ItemInfo) => {
    setItemList([newItem, ...itemList]);
  };

  // 사이드바 결과보기 클릭시 월 여유금액을 인자로 받아 결과 창에 전달하귀 위한 handler
  const resultHandler = (sumMoney: string) => {
    setFinishMoney(sumMoney);
    const resultMoney = parseInt(sumMoney.split(",").join(""));
    let itemSumMoney = 0;
    itemList.map((item) => {
      itemSumMoney += parseInt(item.price.split(",").join(""));
    });
    const resultMonth: number = Number((itemSumMoney / resultMoney).toFixed(1));
    const resultYear: number = Number((resultMonth / 12).toFixed(1));
    let resultDay: number = Number((resultYear * 365).toFixed(0));
    if (resultYear === 0) {
      resultDay = Number((resultMonth * 31).toFixed(0));
    }
    const resultHour = Number((resultDay * 24).toFixed(0));
    const resultMillisecond = resultHour * 3600 * 1000;
    const nowDate = new Date().getTime();
    const finishDay = new Date(nowDate + resultMillisecond);
    const finishYear = finishDay.getFullYear();
    const finishMonth = finishDay.getMonth() + 1;
    const finishDate = finishDay.getDate();
    setFinishDate(`${finishYear}년 ${finishMonth}월 ${finishDate}일`);
    setResultTime([
      {
        value: resultMoney,
        text1: "목표 위시리스트를 이루기위해 매월",
        text2: "원씩 때려넣어야",
      },
      {
        value: resultYear,
        text1: "",
        text2: "년이 걸립니다.",
      },
      {
        value: resultMonth,
        text1: "개월수 로는",
        text2: "개월",
      },
      {
        value: resultDay,
        text1: "일수로는",
        text2: "일",
      },
      {
        value: resultHour,
        text1: "시간으로는 ",
        text2: "시간 입니다",
      },
    ]);
    setShowResult(true);
  };

  // 유저 로그인 시 회원 정보 email, nickname, loginType
  // 유저 itemList get
  useEffect(() => {
    if (accessToken) {
      setAuthorization(accessToken);
    }
    Axioser.get("/user/info").then((res: ItemGetResponse) => {
      if (res.data.data) {
        dispatch(setUserInfo(res.data.data));
      }
    });

    Axioser.get("/item").then((res: ItemGetResponse) => {
      if (res.data.data) {
        const unfinishedItem = res.data.data.filter((item) => {
          return item.status === 0;
        });
        setItemList(unfinishedItem.reverse());
      }
    });
  }, [userId]);

  return (
    <MainPageContainer>
      <SideBar resultHandler={resultHandler} />
      <WishListContainer>
        {/* ---------------- 결과 창 ----------------  */}
        {showResult ? (
          <>
            <div id="result_title">{userNickname} 님,</div>
            <ResultInfo>
              <div>{`💸 목표 금액 : ${finishMoney} 원`}</div>
              <div>{`⏰ 예상 완료일 : ${finishDate}`}</div>
            </ResultInfo>
            <ResultContent>
              {resultTime !== null ? (
                resultTime.map((result) => {
                  return (
                    <div
                      key={result.text1 + result.text2}
                      id="result_container"
                    >
                      {result.text1 ? (
                        <span id="result_text1">{result.text1}</span>
                      ) : (
                        <></>
                      )}
                      <span id="result_value">{result.value}</span>
                      {result.text2 ? (
                        <span id="result_text2">{result.text2}</span>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </ResultContent>
            <ShareKakaoBox>
              <button id="share_kakao">
                <img
                  src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                  alt="카카오링크 보내기 버튼"
                />
                공유하기
              </button>
              <button onClick={() => setShowResult(false)} id="result_close">
                닫기
              </button>
            </ShareKakaoBox>
          </>
        ) : (
          <></>
        )}
        {/* ---------------- 위시 등록 창 ----------------  */}
        <AddWish AddNewItemBoxHandler={AddNewItemBoxHandler} />
        {/* ---------------- 위시 아이템 리스트 ----------------  */}
        <div id="user_item_area">
          {itemList[0] !== undefined ? (
            itemList.map((item) => {
              return (
                <ItemBox
                  clickItemIdHandler={clickItemIdHandler}
                  key={item.id}
                  item={item}
                />
              );
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
