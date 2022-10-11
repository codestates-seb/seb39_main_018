import React, { useEffect } from 'react';
import {
  ItemsView_Container,
  ItemPreview,
  PreviewImg,
  PreviewInfo,
  PreviewPrice,
  PreviewList,
  AllviewBtn,
} from './LandingStyle.jsx';
import { RightIcon } from '../Common/Icons/Icons.js';
import { BasicBtn } from '../Common/Button/Button.js';
import { useNavigate } from 'react-router-dom';

const ItemsView = ({ latestDatas }) => {
  const navigate = useNavigate();
  const pageMove = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };

  return (
    <ItemsView_Container>
      <div className="Previe_title">최근상품</div>
      <PreviewList>
        {latestDatas.map((items) => {
          return (
            <ItemPreview key={items.id}>
              <PreviewImg>
                <img src={items.photo} />
              </PreviewImg>
              <PreviewInfo>
                <p className="title">{items.title}</p>
                <PreviewPrice>
                  <p className="price">{items.price}</p>
                  <p className="won">원</p>
                </PreviewPrice>
              </PreviewInfo>
            </ItemPreview>
          );
        })}
      </PreviewList>
      <AllviewBtn onClick={() => pageMove('/main')}>
        <BasicBtn color="white" background="#363636">
          전체보기
          <RightIcon />
        </BasicBtn>
      </AllviewBtn>
    </ItemsView_Container>
  );
};

export default ItemsView;
