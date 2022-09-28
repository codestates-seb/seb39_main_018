import React from 'react';
import EndBanner from './EndBanner';
import MainBanner from './MainBanner';
import ItemsView from './ItemsView';
import SubBanner from './SubBanner';
import { LandingContainer } from './LandingStyle.jsx';
import { latestItem } from '../../util/detailLogic';

const LandingMain = () => {
  const latestDatas = latestItem();
  return (
    <LandingContainer>
      <MainBanner />
      <ItemsView latestDatas={latestDatas} />
      <SubBanner />
      <EndBanner />
    </LandingContainer>
  );
};

export default LandingMain;
