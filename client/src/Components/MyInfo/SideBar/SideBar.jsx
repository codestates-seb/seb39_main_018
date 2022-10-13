import React from 'react';
import Sides from './SideBarStyle';
import { useNavigate } from 'react-router-dom';
import { menuChoiceData, menuChoice } from '../../../redux/MYPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const SideBar = () => {
  const navigate = useNavigate();
  const arr = [
    '구매 상품',
    '판매 상품',
    '찜 리스트',
    '내 프로필',
    '거래 후기',
    '지역 인증',
    '회원 탈퇴',
  ];
  menuChoiceData;
  const trademenus = useSelector((state) => state.mypage.trade);
  const myInfomenus = useSelector((state) => state.mypage.myInfo);
  const dispatch = useDispatch();

  console.log(trademenus);
  return (
    <Sides.SideBar>
      <Sides.MypageTitle onClick={() => dispatch(menuChoice(0))}>MY PAGE</Sides.MypageTitle>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>거래정보</Sides.MiniTitle>
        <Sides.LiLinks>
          {trademenus &&
            trademenus.map((menu, i) => {
              return (
                <Sides.LiLink key={menu.id} onClick={() => dispatch(menuChoice(menu.id))}>
                  {menu.name}
                </Sides.LiLink>
              );
            })}
        </Sides.LiLinks>
      </Sides.ShoppingInfo>
      <Sides.Line />
      <Sides.ShoppingInfo>
        <Sides.MiniTitle>내 정보</Sides.MiniTitle>
        <Sides.LiLinks>
          {myInfomenus &&
            myInfomenus.map((menu) => {
              return (
                <Sides.LiLink key={menu.id} onClick={() => dispatch(menuChoice(menu.id))}>
                  {menu.name}
                </Sides.LiLink>
              );
            })}
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

export default SideBar;
