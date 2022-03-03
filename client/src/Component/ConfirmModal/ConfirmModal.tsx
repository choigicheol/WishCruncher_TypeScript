import react, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import axios from "axios";

import {
  ModalBackground,
  ModalContainer,
  TitleWrapper,
  Title,
  BtnContainer,
  BlackBtn,
  WhiteBtn,
} from "./confirmModal.style";

interface IProps {
  setIsDeleteModal: (boolean: boolean) => void;
  getComment: (Id: number) => void;
  postId: number;
  deleteTarget: string;
  delTargetId: number;
}
function ConfirmModal({
  setIsDeleteModal,
  deleteTarget,
  delTargetId,
  getComment,
  postId,
}: IProps) {
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );
  const [isSuccess, setIsSuccess] = useState(false);

  // 삭제 완료
  const submitDelete = async () => {
    axios.delete(
      `${process.env.REACT_APP_API_URL}/${deleteTarget}/${delTargetId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <TitleWrapper>
          <Title>정말 삭제 하시겠습니까?</Title>
        </TitleWrapper>
        <BtnContainer>
          <BlackBtn onClick={() => submitDelete()}>확인</BlackBtn>
          <WhiteBtn onClick={() => setIsDeleteModal(false)}>취소</WhiteBtn>
        </BtnContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default ConfirmModal;
