import React from 'react';
import { FaApple, FaRegCommentAlt } from 'react-icons/fa';

import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiMenu, HiOutlineTicket } from 'react-icons/hi';
import HeaderStyle from '../style/CommonStyle/HeaderStyle';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return <Headers />;
};

const Headers = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <HeaderLeft>
        <h3 className="SORT">
          SORT
          <FaApple onClick={() => navigate('/footer')} />
        </h3>

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
        <BsPerson />
        <FaRegCommentAlt />
        <IoSettingsOutline />
      </HeaderRight>

      <HeaderRightLow>
        <SellButton>
          <h3 className="sell">
            판매하기 <HiOutlineTicket />
          </h3>
        </SellButton>
      </HeaderRightLow>
    </HeaderStyle>
  );
};

export default Header;
