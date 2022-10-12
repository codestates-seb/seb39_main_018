import styled from 'styled-components';

//-- 판매자 거래후기

const AllSetting = styled.div`
  margin-bottom: 100px;
  min-width: 350px;
`;
const Detail_Review = styled(AllSetting)`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .border_line {
    margin-top: 20px;
    height: 120px;
  }
`;
const ReviewSetting = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  padding: 10px 0;
  p {
    margin-right: 10px;
  }
`;
const ReviewTitle = styled(ReviewSetting)`
  width: 100%;
  font-size: 20px;
`;
const ReviewInfo = styled.div`
  width: 330px;
`;
const ReviewProfile = styled(ReviewSetting)`
  .img {
    width: 50px;
    height: 50px;
    background: var(--lightgray);
    border-radius: 50%;
  }
`;
const ReviewRating = styled(ReviewSetting)``;
const ReviewBody = styled(ReviewSetting)`
  font-size: var(--f-small);
`;

export { ReviewTitle, ReviewProfile, ReviewRating, ReviewBody, Detail_Review, ReviewInfo };
