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
      <div className="header-left">
        <h3 className="SORT">
          SORT
          <FaApple onClick={() => navigate('/footer')} />
        </h3>

        <div className="header-left-low">
          <HiMenu />
          <div className="sellownrealticket">Sell Own Real Ticket 🎫 </div>
        </div>
      </div>

      <div className="header-mid">
        <div className="header-search">
          <input type="text" placeholder="원하는 티켓을 검색해보세요." />
          <BiSearchAlt2 />
        </div>
      </div>

      <div className="header-right">
        <BsPerson />
        <FaRegCommentAlt />
        <IoSettingsOutline />
      </div>

      <div className="header-right-low">
        <div className="sellbutton">
          <HiOutlineTicket />
          <h3 className="sell">판매하기</h3>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
