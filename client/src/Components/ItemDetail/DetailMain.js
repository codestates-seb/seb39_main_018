import React from 'react';
import { useParams } from 'react-router-dom';
import { saves, dateCompute } from '../../util/RequestLogic.ts';
import { Detail_Container, Detail_Section } from './DetailStyle.jsx';
import ItemCategory from './ItemCategory';
import DetailImg from './DetailImg';
import DetailItemInfo from './DetailItemInfo';
import ImgList from './ImgList';
import { Description, ItemSubInfo } from './ItemDescription';
import ItemSeller from './ItemSeller';
import SellerReview from './SellerReviw';

const DetailMain = () => {
  const { id } = useParams();
  const { title, text, price, end_date, seat_number, createdDate, region } = saves(id);
  const detailPageDate = dateCompute(createdDate);
  return (
    <Detail_Container>
      <Detail_Section>
        <ItemCategory />
        <DetailImg />
        <DetailItemInfo
          title={title}
          price={price}
          createdDate={detailPageDate}
          endDate={end_date}
          seat={seat_number}
          region={region}
        />
        <ImgList />
        <Description description={text}  />
        <ItemSeller />
        <ItemSubInfo region={region} />
        <SellerReview />
      </Detail_Section>
    </Detail_Container>
  );
};

export default DetailMain;
