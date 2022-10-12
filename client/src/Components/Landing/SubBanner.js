import React from 'react';
import { SubBanner_Container, SubComponent,SubComponent2 } from './LandingStyle.jsx';
import { subBannerImgs,mapPin,reviews } from '../Imgs/randingImgs/imgExport.js';

const SubBanner = () => {
  return (
    <SubBanner_Container>
      <SubComponent>
        <img src={subBannerImgs} />
        <img className="pin" src={mapPin} />
      </SubComponent>
      <SubComponent2>
        <img src={reviews} />
      </SubComponent2>
    </SubBanner_Container>
  );
};

export default SubBanner;
