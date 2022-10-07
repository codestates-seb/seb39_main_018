import React from 'react';
import {
  Detail_ItemInfo,
  InfoTop,
  InfoBottom,
  Tags,
  Seat,
  StartDate,
  EndDate,
  Btn,
} from './DetailStyle.jsx';

import { TagUI } from '../Common/Tag/Tag';
import { BasicBtn } from '../Common/Button/Button.js';
import { useNavigate } from 'react-router-dom';

const DetailItemInfo = ({ title, price, createdDate, endDate, seat, region, photo }) => {
  const navigate = useNavigate();
  return (
    <Detail_ItemInfo>
      <InfoTop>
        <p className="info_title">{title}</p>
        <div className="item_price">
          <h1 className="price">{price}</h1>
          <p className="won">원</p>
        </div>
      </InfoTop>
      <InfoBottom>
        <StartDate>
          <p className="info_title">등록</p>

          <p className="infor_data">{createdDate}</p>
        </StartDate>
        <EndDate>
          <p className="info_title">기간</p>

          <p className="infor_data">{endDate}</p>
        </EndDate>
        <Seat>
          <p className="info_title">좌석</p>

          <p className="infor_data">{seat}</p>
        </Seat>
        <Seat>
          <p className="info_title">지역</p>
          <p className="infor_data">{region}</p>
        </Seat>
        <Tags></Tags>
        <Btn>
          <div className="top_btn">
            <BasicBtn background="#385275">게시물 리스트</BasicBtn>
          </div>
          <div className="top_btn">
            <BasicBtn background="#385275" onClick={() => navigate('/chat')}>
              메세지 보내기
            </BasicBtn>
          </div>
          <div className="bottom_btn">
            <BasicBtn background="#fcbdbd">찜하기</BasicBtn>
          </div>
        </Btn>
      </InfoBottom>
    </Detail_ItemInfo>
  );
};

export default DetailItemInfo;
