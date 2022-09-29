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
import { LikeBtn, MessageBtn, ReadBtn } from '../Common/Button/Buttons';
import { TagUI } from '../Common/Tag/Tag';

const DetailItemInfo = ({ title, price, createdDate, endDate, seat, region }) => {
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
          <p className="info_title">등록 :</p>
          <p className="infor_data">7시간전</p>
        </StartDate>
        <EndDate>
          <p className="info_title">기간 :</p>
          <p className="infor_data">{endDate}</p>
        </EndDate>
        <Seat>
          <p className="info_title">좌석 : </p>
          <p className="infor_data">{seat}</p>
        </Seat>
        <Seat>
          <p className="info_title">거래지역 : </p>
          <p className="infor_data">{region}</p>
        </Seat>
        <Tags>
          <TagUI />
        </Tags>
        <Btn>
          <div className="top_btn">
            <LikeBtn />
          </div>
          <div className="top_btn">
            <ReadBtn />
          </div>
          <div className="bottom_btn">
            <MessageBtn />
          </div>
        </Btn>
      </InfoBottom>
    </Detail_ItemInfo>
  );
};

export default DetailItemInfo;
