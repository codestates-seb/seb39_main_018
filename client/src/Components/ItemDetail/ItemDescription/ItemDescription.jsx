import React from 'react';
import { Detail_Description, SubInfo, SellArea, Views } from './style';

const Description = ({ description }) => {
  return (
    <Detail_Description>
      <div className="item_description">
        <p className="item_title">상품설명</p>
        <p className="item_body">{description}</p>
      </div>
    </Detail_Description>
  );
};

const ItemSubInfo = ({ region }) => {
  return (
    <SubInfo>
      <SellArea>
        <p className="subinfo_title">거래지역</p>
        <p className="subinfo_body">{region}</p>
      </SellArea>
      <p className="border_line" />
      <Views>
        <p className="subinfo_title">조회수</p>
        <p className="subinfo_body">21</p>
      </Views>
    </SubInfo>
  );
};

export { Description, ItemSubInfo };
