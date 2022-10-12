import React, { useEffect } from 'react';
import Lands from './ViewStyle';
import { RightIcon } from '../../Common/Icons/Icons.js';
import { BasicBtn } from '../../Common/Button/Button.js';
import { useNavigate } from 'react-router-dom';

const ItemsView = ({ latestDatas }) => {
  console.log(latestDatas);
  const navigate = useNavigate();

  return (
    <Lands.ItemsView_Container>
      <div className="Previe_title">최근상품</div>
      <Lands.PreviewList>
        {latestDatas.map((items) => {
          return (
            <Lands.ItemPreview key={items.id}>
              <Lands.PreviewImg>
                <img src={items.photo} />
              </Lands.PreviewImg>
              <Lands.PreviewInfo>
                <p className="title">{items.title}</p>
                <Lands.PreviewPrice>
                  <p className="price">{items.price}</p>
                  <p className="won">원</p>
                </Lands.PreviewPrice>
              </Lands.PreviewInfo>
            </Lands.ItemPreview>
          );
        })}
      </Lands.PreviewList>
      <Lands.AllviewBtn onClick={() => navigate('/main')}>
        <BasicBtn color="white" background="#363636">
          전체보기
          <RightIcon />
        </BasicBtn>
      </Lands.AllviewBtn>
    </Lands.ItemsView_Container>
  );
};

export default ItemsView;
