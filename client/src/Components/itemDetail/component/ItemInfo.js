import React from 'react';
import { Info, InfoTop, InfoBottom, StartDate, EndDate, Seat, Btn } from '../ItemDetailStyle';
import { Tags } from '../ItemDetailStyle';
import TagUI from '../../../common/ui/Tag';
import { LikeBtn, ReadBtn, MessageBtn } from '../../../common/ui/Button';

const ItemInfo = () => {
  return (
    <Info>
      <InfoTop>
        <h1>부산 가는 KTX 표 팝니다.</h1>
        <p>150,000 원</p>
      </InfoTop>
      <InfoBottom>
        <StartDate>
          <p className="info_title">등록 :</p>
          <p className="infor_data">7시간전</p>
        </StartDate>
        <EndDate>
          <p className="info_title">기간 :</p>
          <p className="infor_data">2022/10/22</p>
        </EndDate>
        <Seat>
          <p className="info_title">좌석 : </p>
          <p className="infor_data">J열 32번 , F열 12번</p>
        </Seat>
        <Seat>
          <p className="info_title">거래지역 : </p>
          <p className="infor_data">J열 32번 , F열 12번</p>
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
    </Info>
  );
};

export default ItemInfo;
