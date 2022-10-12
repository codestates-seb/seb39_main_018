import styled from 'styled-components';

//-- 판매자 정보 컴포넌트
const AllSetting = styled.div`
  margin-bottom: 100px;
  min-width: 350px;
`;
const Detail_Seller = styled(AllSetting)`
  width: 350px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  flex-wrap: wrap;
`;

const SellerSetting = styled.div`
  width: 70%;
  display: flex;
`;

const SellerTitle = styled(SellerSetting)`
  font-size: var(--f-medium);
  margin-bottom: 30px;
`;
const SellerInfo = styled(SellerSetting)`
  margin: 20px 0;
  flex-direction: column;
  .img {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .seller_name {
    width: 130px;
    font-size: 18px;
  }

  .rating_info {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  p {
  }
  .area_auth {
    display: flex;
  }
`;
const SellInfoBox = styled.div`
  width: 100%;
`;

const SellerBtn = styled(SellerSetting)`
  height: 50px;
  justify-content: space-between;
`;

///--------------------------------------

export { Detail_Seller, SellerTitle, SellerInfo, SellInfoBox, SellerBtn };
