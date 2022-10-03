import React from 'react';
import MypageSideBar from './MypageSideBar';
import Draws from '../Withdraw/WithdrawPageStyle';
import Sells from './MypageSellStyle';

// 판매상품이 있을 때
function MypageSellMain() {
  return (
    <Draws.Container>
      <MypageSideBar />
      <Draws.CustomerContent>
        <Draws.CustomerWithdraw>
          <Draws.ContentTitle>
            <Draws.Title style={{ paddingBottom: '8px' }}>판매 상품</Draws.Title>
          </Draws.ContentTitle>

          <Sells.Content>
            <Sells.ItemList>
              <Sells.Item>
                <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                <Sells.ItemDetail>
                  <Sells.ItemName>아이유 콘서트 티켓 팝니다</Sells.ItemName>
                  <Sells.ItemSeller>페샷추존맛</Sells.ItemSeller>
                  <Sells.ItemPrice>12,345원</Sells.ItemPrice>
                </Sells.ItemDetail>
              </Sells.Item>
            </Sells.ItemList>

            <Sells.ItemList>
              <Sells.Item>
                <img src="http://hyunsik.me/wordpress/wp-content/uploads/2014/10/11.png" />

                <Sells.ItemDetail>
                  <Sells.ItemName>아이유 콘서트 티켓 팝니다</Sells.ItemName>
                  <Sells.ItemSeller>페샷추존맛</Sells.ItemSeller>
                  <Sells.ItemPrice>12,345원</Sells.ItemPrice>
                </Sells.ItemDetail>
              </Sells.Item>
            </Sells.ItemList>

            <Sells.ItemList>
              <Sells.Item>
                <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                <Sells.ItemDetail>
                  <Sells.ItemName>아이유 콘서트 티sdfdsagsagasfdasfas켓 팝니다</Sells.ItemName>
                  <Sells.ItemSeller>페샷추존맛</Sells.ItemSeller>
                  <Sells.ItemPrice>12,345원</Sells.ItemPrice>
                </Sells.ItemDetail>
              </Sells.Item>
            </Sells.ItemList>

            <Sells.ItemList>
              <Sells.Item>
                <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                <Sells.ItemDetail>
                  <Sells.ItemName>아이유 콘서ddfasfdsafasdfasfafas트 티켓 팝니다</Sells.ItemName>
                  <Sells.ItemSeller>페샷추존맛</Sells.ItemSeller>
                  <Sells.ItemPrice>12,345원</Sells.ItemPrice>
                </Sells.ItemDetail>
              </Sells.Item>
            </Sells.ItemList>
          </Sells.Content>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </Draws.Container>
  );
}

export default MypageSellMain;
