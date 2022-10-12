import React from 'react';
import { TagUI } from '../../Common/Tag/Tag';
import { BasicBtn } from '../../Common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeFeature } from '../../../redux/itemslice.ts';
import { HeartIcon, NonHeartIcon } from '../../Common/Icons/Icons.js';
import {
  Detail_ItemInfo,
  InfoTop,
  InfoBottom,
  StartDate,
  EndDate,
  Seat,
  Tags,
  Btn,
} from './InfoStyle';

const DetailItemInfo = ({ title, price, createdDate, endDate, seat, region, photo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const like = useSelector((state) => state.items.isLike);

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
            <BasicBtn background="#385275" onClick={() => navigate('/main')}>
              게시물 리스트
            </BasicBtn>
          </div>
          <div className="top_btn">
            <BasicBtn background="#385275" onClick={() => navigate('/chat')}>
              메세지 보내기
            </BasicBtn>
          </div>
          <div className="bottom_btn">
            <BasicBtn background="#fcbdbd" onClick={() => dispatch(likeFeature(!like[0]))}>
              <p className="like_icon">
                {like[0] ? (
                  <HeartIcon className="heart_icon" color="#d94c5a" />
                ) : (
                  <NonHeartIcon className="heart_icon" color="#d94c5a" />
                )}
              </p>
              <p className="like_text">찜하기</p>
            </BasicBtn>
          </div>
        </Btn>
      </InfoBottom>
    </Detail_ItemInfo>
  );
};

export default DetailItemInfo;
