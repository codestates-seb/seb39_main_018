import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Draws from '../Withdraw/WithdrawStyle';
import Sells from './SellStyle';
import { deleteItem, getItems } from '../../../util/requestItem';
import { useNavigate } from 'react-router-dom';
import { BasicBtn } from '../../Common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { checkItems } from '../../../redux/itemslice';

// 구매상품이 있을 때
const MyBuy = () => {
  let itemList = getItems('/')[0].slice(26, 29);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let buyitems = [...itemList];
  const check = useSelector((state) => state.items.isCheck);
  const itemid = useSelector((state) => state.items.itemsId);
  const { postData } = deleteItem();
  console.log(itemid);
  let num;

  return (
    <Draws.CustomerContent>
      <Draws.CustomerWithdraw>
        <Draws.ContentTitle>
          <Draws.Title style={{ paddingBottom: '8px' }}>구매 상품</Draws.Title>
        </Draws.ContentTitle>
        <Sells.Content>
          {buyitems.map((items, i) => {
            return (
              <Sells.ItemList key={items.id}>
                <input
                  type="checkbox"
                  id="checkbox"
                  onClick={(e) => dispatch(checkItems([e.target.checked, i]))}
                />
                <Sells.Item onClick={() => navigate(`/main/detail/${items.id}`)}>
                  <img src="https://ccimg.hellomarket.com/images/2017/item/s9/12/06/23/2514_2778861_1.jpg?size=s6" />
                  <Sells.ItemDetail>
                    <Sells.ItemName>
                      <p>{items.title}</p>
                    </Sells.ItemName>
                    <Sells.ItemSeller>페샷추존맛</Sells.ItemSeller>
                    <Sells.ItemPrice>{items.price}</Sells.ItemPrice>
                  </Sells.ItemDetail>
                </Sells.Item>
              </Sells.ItemList>
            );
          })}
          <Sells.AcitonBtn
            onClick={() => buyitems.pop(1)}
            display={!itemid.length ? 'none' : 'block'}
          >
            <BasicBtn background="black">구매목록 삭제</BasicBtn>
          </Sells.AcitonBtn>
        </Sells.Content>
      </Draws.CustomerWithdraw>
    </Draws.CustomerContent>
  );
};

export default MyBuy;
