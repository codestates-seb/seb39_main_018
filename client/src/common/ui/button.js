import React from 'react';
import Btn from '../../style/ButtonStyle';
import { HiOutlineTicket } from 'react-icons/hi';

const BtnComponent = () => {
  return (
    <>
      <Buttons />
    </>
  );
};

const Buttons = () => {
  return (
    <>
      <Btn.MainContaier>
        <Btn.AllSets>
          <Btn.Sell>
            <div className="icon">
              <HiOutlineTicket />
            </div>
            <div className="text">판매하기</div>
          </Btn.Sell>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Posting>등록하기</Btn.Posting>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Auth>인증하기</Btn.Auth>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.DropOut>탈퇴신청</Btn.DropOut>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Ok>확인</Btn.Ok>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Cancel>취소</Btn.Cancel>
        </Btn.AllSets>

        <Btn.XXBtn>눌렀을때</Btn.XXBtn>
        <Btn.XXBtn2>누르기전</Btn.XXBtn2>
      </Btn.MainContaier>
      <Btn.MainContaier>
        <Btn.AllSets>
          <Btn.Edit>게시글수정</Btn.Edit>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Delete>게시글삭제 </Btn.Delete>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Different>다른상품보기 </Btn.Different>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Like>찜하기</Btn.Like>
        </Btn.AllSets>
        <Btn.AllSets>
          <Btn.Message>메세지보내기</Btn.Message>
        </Btn.AllSets>
      </Btn.MainContaier>
    </>
  );
};

export default BtnComponent;
