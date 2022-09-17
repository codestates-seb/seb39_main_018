import React from 'react';
import { FaApple, FaRegCommentAlt } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiMenu, HiOutlineTicket } from 'react-icons/hi';
import {
  HeaderStyle,
  HeaderLeft,
  SORT,
  HeaderLeftLow,
  SellOwnRealTicket,
  HeaderMid,
  HeaderSearch,
  HeaderRight,
  HeaderRightLow,
  Sell,
  SellButton,
} from '../style/CommonStyle/HeaderStyle';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return <Headers />;
};
const Headers = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <HeaderLeft>
        <SORT>
          SORT
          <FaApple onClick={() => navigate('/footer')} />
        </SORT>

        <HeaderLeftLow>
          <HiMenu />
          <SellOwnRealTicket>Sell Own Real Ticket 🎫 </SellOwnRealTicket>
        </HeaderLeftLow>
      </HeaderLeft>

      <HeaderMid>
        <HeaderSearch>
          <input type="text" placeholder="원하는 티켓을 검색해보세요." />
          <BiSearchAlt2 />
        </HeaderSearch>
      </HeaderMid>

      <HeaderRight>
        <BsPerson onClick={() => navigate('/mypage')} />
        <FaRegCommentAlt />
        <IoSettingsOutline />
      </HeaderRight>

      <HeaderRightLow>
        <SellButton>
          <Sell>
            판매하기 <HiOutlineTicket />
          </Sell>
        </SellButton>
      </HeaderRightLow>
    </HeaderStyle>
  );
};
export default Header;
