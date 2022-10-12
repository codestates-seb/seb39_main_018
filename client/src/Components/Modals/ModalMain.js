import React from 'react';
import { BasicBtn } from '../Common/Button/Button';
import {
  ModalContainer,
  Modalwindow,
  ModalTitle,
  ModalDescription,
  ModalBtn,
  BtnSection,
} from './Modalstyle';

const ModalMain = () => {
  return (
    <ModalContainer>
      <Modalwindow>
        <ModalTitle>
          <h3>정말로 탈퇴를 진행 하시겠습니까?</h3>
        </ModalTitle>
        <ModalDescription>
          <p>회원님의 정보가 모두 삭제됩니다.</p>
        </ModalDescription>
        <BtnSection>
          <ModalBtn>
            <BasicBtn
              hoverbackground="#0d0dbf"
              hovercolor=""
              background="#262a47"
              border="2px solid"
            >
              확인
            </BasicBtn>
          </ModalBtn>
          <ModalBtn>
            <BasicBtn
              background="white"
              hoverbackground="#dedede"
              color
              hovercolor=""
              border=" 2px solid #dedede"
            >
              취소
            </BasicBtn>
          </ModalBtn>
        </BtnSection>
      </Modalwindow>
    </ModalContainer>
  );
};

export default ModalMain;
