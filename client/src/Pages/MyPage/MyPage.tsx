import React, { useState, useEffect } from "react";
import ItemBox from "../../Component/ItemBox/ItemBox";
import { ItemInfo, ItemGetResponse } from "../../Interface/interface";
import {
  MypageContainer,
  UserProfileArea,
  UserProfileImg,
  UserInfoBox,
  CategoryBox,
  MypageItems,
} from "./MyPage.style";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Axioser, setAuthorization } from "../../Axioser/Axioser";

function MyPage() {
  const accessToken = useSelector((state: RootState) => state.login.accessToken);
  // 마이페이지 itemList
  const [itemList, setItemList] = useState<ItemInfo[]>([]);

  // 마이페이지 item 완료, 삭제, 버리기, 돌리기 버튼 클릭시 해당 item id를 인자로 받아 필터 해주는 handler
  const clickItemIdHandler = (itemId: string) => {
    setItemList(
      itemList.filter((item) => {
        return item.id !== Number(itemId);
      })
    );
  };

  // 마이페이지 item 완료, 삭제, 버리기, 돌리기 버튼 클릭시 item status 변경
  const changeCategoryHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const btn: HTMLElement = e.currentTarget;
    if (accessToken) {
      setAuthorization(accessToken);
    }
    if (btn.id === "unfinished_wish") {
      Axioser.get("/item").then((res: ItemGetResponse) => {
        if (res.data.data) {
          const unfinishedItem = res.data.data.filter((item) => {
            return item.status === 0;
          });
          setItemList(unfinishedItem.reverse());
        }
      });
    } else if (btn.id === "finish_wish") {
      Axioser.get("/item").then((res: ItemGetResponse) => {
        if (res.data.data) {
          const unfinishedItem = res.data.data.filter((item) => {
            return item.status === 2;
          });
          setItemList(unfinishedItem.reverse());
        }
      });
    } else {
      Axioser.get("/item").then((res: ItemGetResponse) => {
        if (res.data.data) {
          const unfinishedItem = res.data.data.filter((item) => {
            return item.status === 3;
          });
          setItemList(unfinishedItem.reverse());
        }
      });
    }
  };

  // 마이페이지 마운트 시 아직 이루지못한 itemList 불러오기
  useEffect(() => {
    if (accessToken) {
      setAuthorization(accessToken);
    }
    Axioser.get("/item").then((res: ItemGetResponse) => {
      if (res.data.data) {
        const unfinishedItem = res.data.data.filter((item) => {
          return item.status === 0;
        });
        setItemList(unfinishedItem.reverse());
      }
    });
  }, []);

  const wishCategoryData = [
    { id: "unfinished_wish", name: "남은 위시" },
    { id: "finish_wish", name: "이뤄낸 위시" },
    { id: "delete_wish", name: "버린 위시" },
  ];

  return (
    <MypageContainer>
      <UserProfileArea>
        <UserProfileImg></UserProfileImg>
        <UserInfoBox>
          <div id="user_info_top">
            <div id="user_info"></div>
          </div>
          <div id="user_progress"></div>
        </UserInfoBox>
      </UserProfileArea>
      <CategoryBox>
        {wishCategoryData.map((category) => {
          return (
            <span
              onClick={(e) => {
                changeCategoryHandler(e);
              }}
              className="category_menu"
              id={category.id}
            >
              {category.name}
            </span>
          );
        })}
        {/* <span
          onClick={(e) => {
            changeCategoryHandler(e);
          }}
          className="category_menu"
          id="unfinished_wish"
        >
          남은 위시
        </span>
        <span
          onClick={(e) => {
            changeCategoryHandler(e);
          }}
          className="category_menu"
          id="finish_wish"
        >
          이뤄낸 위시
        </span>
        <span
          onClick={(e) => {
            changeCategoryHandler(e);
          }}
          className="category_menu"
          id="delete_wish"
        >
          버린 위시
        </span> */}
      </CategoryBox>
      <MypageItems className="mypage_items" id="unfinished_items">
        {/* ---------------- item List status 초기값은 item 버튼 변경을 위해 1로 변경 ----------------  */}
        {itemList[0] !== undefined ? (
          itemList.map((item) => {
            if (!item.status) {
              item.status = 1;
            }
            return <ItemBox clickItemIdHandler={clickItemIdHandler} key={item.id} item={item} />;
          })
        ) : (
          <></>
        )}
      </MypageItems>
    </MypageContainer>
  );
}

export default MyPage;
