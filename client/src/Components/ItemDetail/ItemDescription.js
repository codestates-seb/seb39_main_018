import React from 'react';
import { Detail_Description, SubInfo, SellArea, Views } from './DetailStyle.jsx';

const Description = ({ description, region }) => {
  return (
    <Detail_Description>
      <div className="item_title">상품설명</div>
      <div className="body">{description}</div>
      <SubInfo>
        <SellArea>
          <p className="subinfo_title">거래지역</p>
          <p className="subinfo_body">{region}</p>
        </SellArea>
        <Views>
          <p className="subinfo_title">조회수</p>
          <p className="subinfo_title">21</p>
        </Views>
      </SubInfo>
    </Detail_Description>
  );
};

export default Description;
