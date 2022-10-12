import styled from 'styled-components';
//-- 판매 정보 컴포넌트
const AllSetting = styled.div`
  margin-bottom: 100px;
  min-width: 350px;
`;

const Detail_ItemInfo = styled(AllSetting)`
  width: 39%;
`;
const InfoTop = styled.div`
  width: 100%;
  height: 20%;

  p,
  h1 {
    padding: 0 10px;
  }
  p {
    font-size: var(--f-medium);
    padding-right: 0;
  }

  .item_price {
    margin: 10px 0;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
`;
const InfoBottom = styled(InfoTop)`
  height: 370px;
  margin-top: 25px;
`;
const InfoSetting = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 25px 0;

  .info_title {
    font-size: 18px;
    color: gray;
  }
  .infor_data {
    font-size: var(--f-small);
  }
`;

const StartDate = styled(InfoSetting)``;
const EndDate = styled(InfoSetting)``;
const Seat = styled(InfoSetting)``;
const Tags = styled(InfoSetting)`
  margin: 0 10px;
`;
const Btn = styled(InfoSetting)`
  justify-content: space-between;
  flex-wrap: wrap;
  height: 50px;
  width: ${(props) => props.width || ''};

  .top_btn {
    height: 100%;
    width: 49%;
  }
  .bottom_btn {
    margin: 10px 0;
    width: 100%;
    height: 100%;
  }
  .like_icon {
    .heart_icon {
      margin-top: 5px;
      width: 25px;
      height: 25px;
    }
  }
  .like_text {
    margin-right: 60px;
  }
`;

export { Detail_ItemInfo, InfoTop, InfoBottom, StartDate, EndDate, Seat, Tags, Btn };
