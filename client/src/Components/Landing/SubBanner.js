import React from 'react';
import { SubBanner_Container, SubComponent } from './LandingStyle.jsx';
import { subBannerImgs } from '../Imgs/randingImgs/imgExport.js';

const SubBanner = () => {
  return (
    <SubBanner_Container>
      <SubComponent>
        <img src={subBannerImgs} />
      </SubComponent>
    </SubBanner_Container>
  );
};

export default SubBanner;
