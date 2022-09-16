import React from 'react';
import {
  MainContaier,
  SellButton,
  SellText,
  SellIcon,
  BasicBtn,
  XXBtn,
  XXBtn2,
  PostPageBtn,
} from '../../style/ButtonStyle';
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
      <MainContaier>
        <SellButton>
          <SellIcon>
            <HiOutlineTicket className="icon" />
          </SellIcon>
          <SellText>판매하기</SellText>
        </SellButton>
        <BasicBtn>등록하기</BasicBtn>
        <BasicBtn>인증하기</BasicBtn>
        <BasicBtn>탈퇴신청</BasicBtn>
        <BasicBtn>확인</BasicBtn>
        <BasicBtn>취소</BasicBtn>
        <XXBtn>눌렀을때</XXBtn>
        <XXBtn2>누르기전</XXBtn2>
      </MainContaier>
      <MainContaier>
        <PostPageBtn>게시글수정</PostPageBtn>
        <PostPageBtn>게시글삭제</PostPageBtn>
        <PostPageBtn>게시글페이지</PostPageBtn>
        <PostPageBtn>다른상품보기</PostPageBtn>
        <PostPageBtn>찜하기</PostPageBtn>
        <PostPageBtn>메세지보내기</PostPageBtn>
      </MainContaier>
    </>
  );
};

export default BtnComponent;
