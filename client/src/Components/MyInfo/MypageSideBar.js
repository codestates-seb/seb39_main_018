import React from 'react';
import Sides from './MypageSideBarStyle';
import { useNavigate } from 'react-router-dom';

const MypageSideBar = () => {
  const navigate = useNavigate();

  return (
    <Sides.SideBar>
      <Sides.MypageTitle onClick={() => navigate('/mypage')}>MY PAGE</Sides.MypageTitle>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>거래정보</Sides.MiniTitle>
        <Sides.LiLinks>
          <Sides.LiLink onClick={() => navigate('/my/buy')}>구매 상품</Sides.LiLink>
          <Sides.LiLink onClick={() => navigate('/my/sell')}>판매 상품</Sides.LiLink>
          <Sides.LiLink onClick={() => navigate('/my/wish')}>찜 리스트</Sides.LiLink>
        </Sides.LiLinks>
      </Sides.ShoppingInfo>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>내 정보</Sides.MiniTitle>
        <Sides.LiLinks>
          <Sides.LiLink onClick={() => navigate('/my/profile')}>내 프로필</Sides.LiLink>
          <Sides.LiLink onClick={() => navigate('/my/review')}>상점 후기</Sides.LiLink>
          <Sides.LiLink onClick={() => navigate('/my/map')}>지역 인증</Sides.LiLink>
          <Sides.LiLink onClick={() => navigate('/withdraw')}>회원 탈퇴</Sides.LiLink>
        </Sides.LiLinks>
      </Sides.ShoppingInfo>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>고객센터</Sides.MiniTitle>
        <Sides.LiLinks>
          <Sides.LiLink href="https://bizmessage.kakao.com/chat/open">상담하기</Sides.LiLink>
          <br />
          <br />
          <Sides.JustSpan>상담시간 월~금 9:00 ~ 18:00</Sides.JustSpan>
          <br />
          <Sides.JustSpan>점심시간 12:00 ~ 13:00</Sides.JustSpan>
        </Sides.LiLinks>
      </Sides.ShoppingInfo>
    </Sides.SideBar>
  );
};

export default MypageSideBar;
