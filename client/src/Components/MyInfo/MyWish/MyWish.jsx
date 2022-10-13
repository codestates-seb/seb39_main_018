import React from 'react';
import Sides from '../SideBar/SideBarStyle';
import { useNavigate } from 'react-router-dom';
import Draws from '../Withdraw/WithdrawStyle';
import Wishs from './MyWishStyle';
import { BiX } from 'react-icons/bi';

// 찜한 상품이 있을 때
function MyWish() {
  return (
    <Draws.CustomerContent>
      <Draws.CustomerWithdraw>
        <Draws.ContentTitle>
          <Draws.Title style={{ paddingBottom: '8px' }}>찜 리스트</Draws.Title>
        </Draws.ContentTitle>
        <Wishs.Content>
          <Wishs.Item>
            <Wishs.ItemImg>
              <Wishs.XButton>
                <BiX />
              </Wishs.XButton>
              <Wishs.RealItem>
                <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
              </Wishs.RealItem>
            </Wishs.ItemImg>
            <Sides.Line style={{ borderTop: '1px solid #f1f1f1' }} />
            <Wishs.ItemNamePrice>
              <Wishs.ItemName>아이유 콘서트 티켓 팝니다</Wishs.ItemName>
              <br></br>
              <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
            </Wishs.ItemNamePrice>
          </Wishs.Item>

          <Wishs.Item>
            <Wishs.ItemImg>
              <Wishs.XButton>
                <BiX />
              </Wishs.XButton>
              <Wishs.RealItem>
                <img src="http://hyunsik.me/wordpress/wp-content/uploads/2014/10/11.png" />
              </Wishs.RealItem>
            </Wishs.ItemImg>
            <Sides.Line style={{ borderTop: '1px solid #f1f1f1' }} />
            <Wishs.ItemNamePrice>
              <Wishs.ItemName>소격동 콘서트 티켓 팝니다</Wishs.ItemName>
              <br></br>
              <Wishs.ItemPrice>12,345원</Wishs.ItemPrice>
            </Wishs.ItemNamePrice>
          </Wishs.Item>
        </Wishs.Content>
      </Draws.CustomerWithdraw>
    </Draws.CustomerContent>
  );
}

export default MyWish;
