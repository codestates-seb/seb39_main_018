import React, { useState } from 'react';
import Btn from '../../style/ButtonStyle';
import { HiOutlineTicket } from 'react-icons/hi';

const BtnComponent = () => {
  return (
    <Btn.MainContaier>
      <Btn.Test>
        <TestBtn />
      </Btn.Test>
      <Btn.Post>
        <Btn.FrameTest>
          <SellBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <ReadBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <EditBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <DeleteBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <MessageBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <BasicBtn  />
        </Btn.FrameTest>
      </Btn.Post>
      <Btn.Basic>
        <Btn.FrameTest>
          <CancelBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <OkBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <CreateBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <AuthBtn />
        </Btn.FrameTest>
        <Btn.FrameTest>
          <DropOutBtn />
        </Btn.FrameTest>
      </Btn.Basic>
    </Btn.MainContaier>
  );
};
export default BtnComponent;

const SellBtn = () => {
  return (
    <Btn.AllSets>
      <Btn.Sell>
        <div className="icon">
          <HiOutlineTicket />
        </div>
        <div className="text">판매하기</div>
      </Btn.Sell>
    </Btn.AllSets>
  );
};

const CancelBtn = () => {
  return <Btn.Cancel>취소</Btn.Cancel>;
};
const CreateBtn = () => {
  return <Btn.Posting>등록하기</Btn.Posting>;
};

const AuthBtn = () => {
  return <Btn.Auth>인증하기</Btn.Auth>;
};
const DropOutBtn = () => {
  return <Btn.DropOut>탈퇴신청</Btn.DropOut>;
};
const OkBtn = () => {
  return <Btn.Ok>확인</Btn.Ok>;
};
const TestBtn = () => {
  return (
    <>
      <Btn.XXBtn>눌렀을때</Btn.XXBtn>
      <Btn.XXBtn2>누르기전</Btn.XXBtn2>
    </>
  );
};
const EditBtn = () => {
  return <Btn.Edit>게시글수정</Btn.Edit>;
};

const DeleteBtn = () => {
  return <Btn.Delete>게시글삭제 </Btn.Delete>;
};
const ReadBtn = () => {
  return <Btn.Different>다른상품보기 </Btn.Different>;
};
const LikeBtn = () => {
  return <Btn.Like>찜하기</Btn.Like>;
};
const MessageBtn = () => {
  return <Btn.Message>메세지보내기</Btn.Message>;
};

const BasicBtn = ({ name,background,color }) => {
  return <Btn.Button1 background={background} color={color} >{name}</Btn.Button1>;
};

export {
  SellBtn,
  ReadBtn,
  EditBtn,
  DeleteBtn,
  MessageBtn,
  LikeBtn,
  CancelBtn,
  OkBtn,
  CreateBtn,
  AuthBtn,
  DropOutBtn,
  BasicBtn,
};
