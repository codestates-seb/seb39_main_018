import React, { useState } from 'react';
import MypageSideBar from './MypageSideBar';
import Draws from '../Withdraw/WithdrawPageStyle';
import Sells from './MypageSellStyle';
import { getItems } from '../../util/requestItem';
import { BasicBtn } from '../Common/Button/Button';
// 판매상품이 있을 때
function MypageSellMain() {
  const itemList = getItems('/')[0].slice(12, 15);
  const sellItems = [...itemList];
  const [isCheck, setIsCheck] = useState();
  const editItem = (value) => {
    setIsCheck(value[0]);
    console.log(value);
  };

  return (
    <Draws.Container>
      <MypageSideBar />
      <Draws.CustomerContent>
        <Draws.CustomerWithdraw>
          <Draws.ContentTitle>
            <Draws.Title style={{ paddingBottom: '8px' }}>판매 상품</Draws.Title>
          </Draws.ContentTitle>
          <Sells.Content>
            {sellItems.map((items, i) => {
              return (
                <Sells.ItemList>
                  <input
                    name="items"
                    value={i}
                    onClick={() => editItem([i, items.id])}
                    type="checkbox"
                    id="checkbox"
                    checked={isCheck === i}
                  />
                  <Sells.Item>
                    <img src="http://hyunsik.me/wordpress/wp-content/uploads/2014/10/11.png" />
                    <Sells.ItemDetail>
                      <Sells.ItemName>{items.title}</Sells.ItemName>
                      <Sells.ItemSeller>페샷추존맛</Sells.ItemSeller>
                      <Sells.ItemPrice>{items.price}</Sells.ItemPrice>
                    </Sells.ItemDetail>
                  </Sells.Item>
                </Sells.ItemList>
              );
            })}
            <Sells.BtnSection>
              <Sells.AcitonBtn>
                <BasicBtn background="black">상품 수정</BasicBtn>
              </Sells.AcitonBtn>
              <Sells.AcitonBtn>
                <BasicBtn background="black">상품 삭제</BasicBtn>
              </Sells.AcitonBtn>
            </Sells.BtnSection>
            {/* <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" /> */}
          </Sells.Content>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </Draws.Container>
  );
}

export default MypageSellMain;
