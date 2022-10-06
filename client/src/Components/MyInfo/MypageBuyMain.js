import React from 'react';
import MypageSideBar from './MypageSideBar';
import Draws from '../Withdraw/WithdrawPageStyle';
import Sells from './MypageSellStyle';
import { getItems } from '../../util/requestItem';
import { useNavigate } from 'react-router-dom';

// 구매상품이 있을 때
const MypageBuyMain = () => {
  const itemList = getItems('/')[0].slice(26, 29);
  const navigate = useNavigate();
  console.log(itemList);
  return (
    <Draws.Container>
      <MypageSideBar />
      <Draws.CustomerContent>
        <Draws.CustomerWithdraw>
          <Draws.ContentTitle>
            <Draws.Title style={{ paddingBottom: '8px' }}>구매 상품</Draws.Title>
          </Draws.ContentTitle>
          <Sells.Content>
            {itemList &&
              itemList.map((items) => {
                return (
                  <Sells.ItemList >
                    <Sells.Item onClick={() => navigate(`/main/detail/${items.id}`)}>
                      <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                      <Sells.ItemDetail>
                        <Sells.ItemName>{items.title}</Sells.ItemName>
                        <Sells.ItemSeller>페샷추존맛</Sells.ItemSeller>
                        <Sells.ItemPrice>{items.price}</Sells.ItemPrice>
                      </Sells.ItemDetail>
                    </Sells.Item>
                  </Sells.ItemList>
                );
              })}
          </Sells.Content>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </Draws.Container>
  );
};

export default MypageBuyMain;
