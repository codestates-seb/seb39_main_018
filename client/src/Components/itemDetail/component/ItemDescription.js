import React from 'react';
import { Description } from "../ItemDetailStyle";

const ItemDescription = () => {
    return (
      <Description>
        <div className="item_title">상품설명</div>
        <div className="body">
          25일 출발인데 사정이 생겨 가지 못하게 되었네요 ..ㅠ 충분히 저렴하게 올려서 에눌 문의는
          차단합니다. 반품 X 교환 X 신중하게 구매하실분만 톡 ㄱㄱ
        </div>
        <Post.SubInfo>
          <Post.SellArea>
            <p className="subinfo_title">거래지역</p>
            <p className="subinfo_body">서울시 강남구 신사동</p>
          </Post.SellArea>
          <Post.Views>
            <p className="subinfo_title">조회수</p>
            <p className="subinfo_title">21</p>
          </Post.Views>
        </Post.SubInfo>
      </Description>
    );
  };

  export default ItemDescription;