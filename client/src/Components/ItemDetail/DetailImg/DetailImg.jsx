import React from 'react';
import { Detail_Img } from './ImgStyle';

const DetailImg = ({ photo }) => {
  return (
    <Detail_Img>
      <img src={photo} />
    </Detail_Img>
  );
};

export default DetailImg;
