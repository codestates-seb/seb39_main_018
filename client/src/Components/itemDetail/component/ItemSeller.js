import React from 'react';
import { Seller, SellerTitle, SellerInfo, SellerInfoBox, Btn } from '../ItemDetailStyle';
import { LikeBtn } from '../../../common/ui/Button';

const ItemSeller = () => {
  return (
    <Seller>
      <SellerTitle>판매자</SellerTitle>
      <SellerInfo>
        <div className="img">
          <img src="https://i.pinimg.com/474x/07/08/ff/0708ff1a9c43249e39813d1c262adb34--amumu-league-of-legends-league-of-legends-tattoo.jpg" />
        </div>
        <SellerInfoBox>
          <p>최붕대 님</p>
          <div className="rating_info">
            <p>★★★★★</p>
            <p>상품</p>
            <p>10</p>
            <p>후기</p>
            <p>22</p>
          </div>
          <div className="area_auth">
            <p>
              <CheckIcon />
            </p>
            <p>지역인증 완료</p>
          </div>
        </SellerInfoBox>
      </SellerInfo>
      <Btn>
        <div className="bottom2">
          <LikeBtn />
        </div>
        <div className="bottom2">
          <LikeBtn />
        </div>
      </Btn>
    </Seller>
  );
};

export default ItemSeller;
