import React, { useState } from 'react';
import Draws from '../Withdraw/WithdrawStyle';
import Sells from './SellStyle';

import { deleteItem, getItems } from '../../../util/requestItem';
import { BasicBtn } from '../../Common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { checkItems } from '../../../redux/itemslice';
import { useNavigate } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
// 판매상품이 있을 때
function MySell() {
  const navigate = useNavigate();
  const [count, setcount] = useState([]);
  const itemList = getItems('/')[0].slice(12, 15);
  const sellItems = [...itemList];
  const [isCheck, setIsCheck] = useState();
  const editItem = (value) => {
    setIsCheck(value[2]);
    dispatch(checkItems(value));
  };

  const { deleteData } = deleteItem();
  const deleteitems = () => {
    alert('삭제되었습니다.');
    sellItems.pop(2);
    location.reload();
  };
  const dispatch = useDispatch();
  const check = useSelector((state) => state.items.itemsId);
  console.log(check);
  checkItems;
  return (
    <>
      
      <Draws.CustomerContent>
        <Draws.CustomerWithdraw>
          <Draws.ContentTitle>
            <Draws.Title style={{ paddingBottom: '8px' }}>판매 상품</Draws.Title>
          </Draws.ContentTitle>
          <Sells.Content>
            {sellItems.map((items, i) => {
              return (
                <Sells.ItemList key={items.id}>
                  <input
                    name="items"
                    value={i}
                    onChange={(e) => editItem([e.target.checked, items.id, i])}
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
              <Sells.AcitonBtn onClick={() => navigate(`/mypage/sell/edit/${check}`)}>
                <BasicBtn background="black">상품 수정</BasicBtn>
              </Sells.AcitonBtn>
              <Sells.AcitonBtn onClick={() => deleteData(check)}>
                <BasicBtn background="black">상품 삭제</BasicBtn>
              </Sells.AcitonBtn>
            </Sells.BtnSection>
            {/* <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" /> */}
          </Sells.Content>
        </Draws.CustomerWithdraw>
      </Draws.CustomerContent>
    </>
  );
}

export default MySell;
