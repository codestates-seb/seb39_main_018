import React from 'react';
import { useParams } from 'react-router-dom';
import { Detail_Container, Detail_Section } from './DetailStyle.jsx';
import ItemCategory from './ItemCategory';
import DetailImg from './DetailImg';
import DetailItemInfo from './DetailItemInfo';
import ImgList from './ImgList';
import { Description, ItemSubInfo } from './ItemDescription';
import ItemSeller from './ItemSeller';
import SellerReview from './SellerReviw';
import { calculateDate } from '../../util/calculateDate';
import { getDetail } from '../../util/requestItem';

const DetailMain = () => {

  const { id } = useParams();
  const { title, body, price, end_date, seat_number, createdDate, region, photo } = getDetail(id);
  const detailPageDate = calculateDate(createdDate);
  return (
    <Detail_Container>
      <Detail_Section>
        <ItemCategory />
        <DetailImg photo={photo} />
        <DetailItemInfo
          title={title}
          price={price}
          createdDate={detailPageDate}
          endDate={end_date}
          seat={seat_number}
          region={region}
        />
        <ImgList photo={photo} />
        <Description description={body} />
        <ItemSeller />
        <ItemSubInfo region={region} />
        <SellerReview />
      </Detail_Section>
    </Detail_Container>
  );
};

export default DetailMain;
