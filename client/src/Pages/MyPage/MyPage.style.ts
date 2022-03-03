import styled from "styled-components";

export const MypageContainer = styled.div`
  display: flex;
  max-width: 960px;
  width: 100%;
  padding: 40px 10px 40px 10px;
  flex-direction: column;
  align-items: center;
`;

export const UserProfileArea = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
`;

export const UserProfileImg = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  width: 100%;
  max-height: 150px;
  height: 100%;
  margin-right: 20px;
  @media screen and (max-width: 590px) {
    max-width: 110px;
    width: 100%;
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 470px) {
    max-width: 60px;
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  #user_info {
    width: 100%;
  }

  #user_progress {
    display: flex;
    width: 100%;
    height: 18px;
    @media screen and (max-width: 590px) {
      height: rem(14px);
    }

    @media screen and (max-width: 470px) {
      height: rem(10px);
    }
  }
`;

export const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  .category_menu {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 100;
    cursor: pointer;
    @media screen and (max-width: 590px) {
      font-size: rem(16px);
    }

    @media screen and (max-width: 470px) {
      font-size: rem(14px);
    }
  }
`;
export const MypageItems = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
`;

// #user_Name {
//   font-size: rem(30px);
//   width: 100%;
//   font-weight: 300;
//   margin-right: 10px;
//   @media screen and (max-width: 590px) {
//     font-size: rem(22px);
//   }

//   @media screen and (max-width: 470px) {
//     font-size: rem(14px);
//   }
// }

// #user_Email {
//   width: 100%;
//   font-weight: 100;
//   @media screen and (max-width: 590px) {
//     font-size: rem(12px);
//   }

//   @media screen and (max-width: 470px) {
//     font-size: rem(10px);
//   }
// }

// .wishCount {
//   color: #ab86df;
//   margin-left: 10px;
// }

// .wishBarValue {
//   flex: 1;
// }

// .hide_items {
//   display: none;
// }

// .menu_underline {
//   border-bottom: 5px solid #ab86df;
//   border-radius: 5px;

//   @media screen and (max-width: 590px) {
//     border-bottom: 4px solid #ab86df;
//     border-radius: 4px;
//   }

//   @media screen and (max-width: 470px) {
//     border-bottom: 3px solid #ab86df;
//     border-radius: 3px;
//   }
// }

// .finish_delete_box {
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 10px 0 0;
//   height: 100%;
//   align-items: flex-start;
//   img {
//     width: 22px;
//     opacity: 0.6;
//     cursor: pointer;
//     &:hover {
//       opacity: 1;
//     }
//     &:active {
//       opacity: 0.5;
//     }
//   }
//   .finish_button {
//     margin-right: 8px;
//   }

//   @media screen and (max-width: 590px) {
//     width: 50px;
//     img {
//       width: 18px;
//     }
//     .finish_button {
//       margin-right: 6px;
//     }
//   }

//   @media screen and (max-width: 470px) {
//     width: 40px;
//     img {
//       width: 14px;
//     }
//     .finish_button {
//       margin-right: 4px;
//     }
//   }
// }

// .finish_box {
//   display: flex;
//   padding: 10px 10px 0 0;
//   width: 40px;
//   height: 100%;
//   align-items: flex-start;
//   justify-content: end;
//   img {
//     width: 22px;
//     opacity: 0.6;
//     cursor: pointer;
//     &:hover {
//       opacity: 1;
//     }
//     &:active {
//       opacity: 0.5;
//     }
//   }

//   @media screen and (max-width: 590px) {
//     width: 30px;
//     img {
//       width: 18px;
//     }
//   }

//   @media screen and (max-width: 470px) {
//     width: 20px;
//     img {
//       width: 14px;
//     }
//   }
// }

// .delete_box {
//   display: flex;
//   padding: 10px 10px 0 0;
//   width: 40px;
//   height: 100%;
//   align-items: flex-start;
//   justify-content: end;
//   img {
//     width: 20px;
//     opacity: 0.6;
//     cursor: pointer;
//     &:hover {
//       opacity: 1;
//     }
//     &:active {
//       opacity: 0.5;
//     }
//   }

//   @media screen and (max-width: 590px) {
//     width: 30px;
//     img {
//       width: 16px;
//     }
//   }

//   @media screen and (max-width: 470px) {
//     width: 20px;
//     img {
//       width: 12px;
//     }
//   }
// }
